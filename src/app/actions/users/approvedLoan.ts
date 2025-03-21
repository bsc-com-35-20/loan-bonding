'use server'

import { authOptions } from '@/app/actions/users/options';
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";



// Import statements...

// Import statements...

export const postApproveLoans = async (loanType: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user?.email) {
      const getuser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (getuser?.id && getuser?.regNumber) {
        // Check if the user's regNumber is available in both the fees and upkeep tables
        const existingFees = await prisma.fees.findUnique({
          where: {
            regNumber: getuser.regNumber,
          },
        });

        const existingUpkeep = await prisma.upkeep.findUnique({
          where: {
            regNumber: getuser.regNumber,
          },
        });

        if (existingFees && existingUpkeep) {
          // User exists in both fees and upkeep tables
          // Update the user's fees and upkeep fields accordingly
          await prisma.user.update({
            where: {
              id: getuser.id,
            },
            data: {
              fees: "650000", // Update with the appropriate field in your schema
              upkeep: "350000", // Update with the appropriate field in your schema
            },
          });

          return {
            success: true,
            message: `User already has existing loans of both types. Loan information updated successfully`,
          };
        } else if (existingFees && loanType === "1") {
          // User exists in fees table only and selected "Fees"
          // Update the user's fees field accordingly
          await prisma.user.update({
            where: {
              id: getuser.id,
            },
            data: {
              fees: "650000", // Update with the appropriate field in your schema
              upkeep: null, // Nullify the upkeep field
            },
          });

          return {
            success: true,
            message: `User already has an existing fees loan. Loan information updated successfully`,
          };
        } else if (existingUpkeep && loanType === "2") {
          // User exists in upkeep table only and selected "Upkeep"
          // Update the user's upkeep field accordingly
          await prisma.user.update({
            where: {
              id: getuser.id,
            },
            data: {
              upkeep: "350000", // Update with the appropriate field in your schema
              fees: null, // Nullify the fees field
            },
          });

          return {
            success: true,
            message: `User already has an existing upkeep loan. Loan information updated successfully`,
          };
        } else {
          // User does not have an existing loan of the selected type
          return {
            success: false,
            message: `Sorry, you have not been given a ${
              loanType === "1" ? "fees" : loanType === "2" ? "upkeep" : ""
            } loan.`,
          };
        }
      } else {
        return { success: false, message: "User ID or regNumber not found in session" };
      }
    } else {
      return { success: false, message: "User email not found in session" };
    }
  } catch (error) {
    console.error("Error updating loan information:", error);
    return {
      success: false,
      message: "An error occurred while updating loan information",
    };
  }
};


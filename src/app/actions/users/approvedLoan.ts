'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

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
          // User's regNumber is available in both fees and upkeep tables
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
        } else if (existingFees) {
          // User's regNumber is available in fees table only
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
            message: `User already has an existing loan of type ${loanType}. Loan information updated successfully`,
          };
        } else if (existingUpkeep) {
          // User's regNumber is available in upkeep table only
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
            message: `User already has an existing loan of type ${loanType}. Loan information updated successfully`,
          };
        }

        // User does not have an existing loan of the selected type
        return {
          success: false,
          message: `User does not have an existing loan of type ${loanType}`,
        };
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

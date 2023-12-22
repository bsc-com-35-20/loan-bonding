'use server'

import { authOptions } from '@/app/actions/users/options';
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export const postBankDetails = async (
 
  bankname: string,
  branch: string,
  accountname: string,
  accountnumber: string,


) => {
  try {
    const session = await getServerSession(authOptions);

    // Check if getuser and getuser.id are defined and non-null
    if (session?.user?.email) {
      const getuser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      // Check if getuser and getuser.id are defined and non-null
      if (getuser?.id) {
        const existingBankDeatils = await prisma.bankDetails.findUnique({
          where: {
            userId: getuser.id,
          },
        });

        if (existingBankDeatils) {
          // Update existing bank information
          await prisma.bankDetails.update({
            where: {
              id: existingBankDeatils.id,
            },
            data: {
              bankname,
              branch,
              accountname,
              accountnumber,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: "Personal information updated successfully",
          };
        } else {
          // Create new bank information
          console.log(accountnumber)
          await prisma.bankDetails.create({
            data: {
                bankname,
                branch,
                accountname,
                accountnumber,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: "Bank details information created successfully",
          };
        }
      } else {
        return { success: false, message: "User ID not found in session" };
      }
    } else {
      return { success: false, message: "User email not found in session" };
    }
  } catch (error) {
    console.error("Error updating/creating bank details information:", error);
    return {
      success: false,
      message: "An error occurred while updating/creating personal information",
    };
  }
};
'use server'

import { authOptions } from '@/app/actions/users/options';
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export const postPersonalInformation = async (
  surname: string,
  firstname: string,
  othername: string,
  dateofbirth: string,
  sex: string,
  home: string,
  phonenumber: string
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
        const existingPersonalInfo = await prisma.personalInfo.findUnique({
          where: {
            userId: getuser.id,
          },
        });

        if (existingPersonalInfo) {
          // Update existing personal information
          await prisma.personalInfo.update({
            where: {
              id: existingPersonalInfo.id,
            },
            data: {
              surname,
              firstname,
              othername,
              dateofbirth,
              sex,
              home,
              phonenumber,
            },
          });

          return {
            success: true,
            message: "Personal information updated successfully",
          };
        } else {
          // Create new personal information
          await prisma.personalInfo.create({
            data: {
              surname,
              firstname,
              othername,
              dateofbirth,
              sex,
              home,
              phonenumber,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: "Personal information created successfully",
          };
        }
      } else {
        return { success: false, message: "User ID not found in session" };
      }
    } else {
      return { success: false, message: "User email not found in session" };
    }
  } catch (error) {
    console.error("Error updating/creating personal information:", error);
    return {
      success: false,
      message: "An error occurred while updating/creating personal information",
    };
  }
};
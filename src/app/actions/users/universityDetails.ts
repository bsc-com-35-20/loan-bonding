"use server";

import { authOptions } from '@/app/actions/users/options';
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export const postUniversityDetails = async (
  programofstudy: string,
  academicyear: string,
  yearofstudy: string
) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user?.email) {
      const getuser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (getuser?.id) {
        const existingUniversityDetails =
          await prisma.universityDetails.findUnique({
            where: {
              userId: getuser.id,
            },
          });

        if (existingUniversityDetails) {
    
          await prisma.universityDetails.update({
            where: {
              id: existingUniversityDetails.id,
            },
            data: {
              programofstudy,
              academicyear,
              yearofstudy,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: "University details updated successfully",
          };
        } else {
          
          await prisma.universityDetails.create({
            data: {
              programofstudy,
              academicyear,
              yearofstudy,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: "University details created successfully",
          };
        }
      } else {
        return { success: false, message: "User ID not found in session" };
      }
    } else {
      return { success: false, message: "User email not found in session" };
    }
  } catch (error) {
    console.error(
      "Error updating/creating university details information:",
      error
    );
    return {
      success: false,
      message: "An error occurred while updating/creating university details",
    };
  }
};

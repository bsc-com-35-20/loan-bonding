
'use server'

import authOptions from '@/app/api/auth/[...nextauth]/options';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';

export const postGuardianDetails = async (
    
  name: string,
  Address: string,
  home: string,
  phonenumber: string,
  occupation: string
) => {
  try {
    // retrieve the session information
    const session = await getServerSession(authOptions);

    // check if user email is present in the session
    if (session?.user?.email) {
      // find the user in the database based on the email
      const getuser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      // check if user ID is present in the database
      if (getuser?.id) {
        // check if there are existing GuardianDetails for the user
        const existingGuardianDetails = await prisma.guardianDetails.findUnique(
          {
            where: {
              userId: getuser.id,
            },
          }
        );

        // if GuardianDetails exist, update them
        if (existingGuardianDetails) {
          await prisma.guardianDetails.update({
            where: {
              id: existingGuardianDetails.id,
            },
            data: {
              name,
              Address,
              home,
              phonenumber,
              occupation,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: 'Guardian details updated successfully',
          };
        } else {
          // if no GuardianDetails exist, create new ones
          await prisma.guardianDetails.create({
            data: {
              name,
              Address,
              home,
              phonenumber,
              occupation,
              userId: getuser.id,
            },
          });

          return {
            success: true,
            message: 'Guardian details created successfully',
          };
        }
      } else {
        return { success: false, message: 'User ID not found in session' };
      }
    } else {
      return { success: false, message: 'User email not found in session' };
    }
  } catch (error) {
    console.error('Error updating/creating Guardian details:', error);
    return {
      success: false,
      message: 'An error occurred while updating/creating Guardian details',
    };
  }
};

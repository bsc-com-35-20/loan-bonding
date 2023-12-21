'use server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';

export const getLoans = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user?.email) {
      const getuser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (getuser?.regNumber) {
        const studentFees = await prisma.fees.findUnique({
          where: {
            regNumber: getuser.regNumber,
          },
        });

        const studentUpkeep = await prisma.upkeep.findUnique({
          where: {
            regNumber: getuser.regNumber,
          },
        });

        if (studentFees && studentUpkeep) {
          // User is available in both tables
          return {
            success: true,
            amount: 1000000,
          };
        } else if (studentFees) {
          // User is available in fees table only
          return {
            success: true,
            amount: 650000,
          };
        } else if (studentUpkeep) {
          // User is available in upkeep table only
          return {
            success: true,
            amount: 350000,
          };
        } else {
          // User is not available in either fees or upkeep table
          return {
            success: false,
            message: 'User not found in fees or upkeep table',
          };
        }
      } else {
        return { success: false, message: 'Registration number not found for the user' };
      }
    } else {
      return { success: false, message: 'User email not found in session' };
    }
  } catch (error) {
    console.error('Error fetching student loans:', error);
    return {
      success: false,
      message: 'An error occurred while fetching student loans',
    };
  }
};

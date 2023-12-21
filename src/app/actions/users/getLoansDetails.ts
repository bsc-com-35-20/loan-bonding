'user server'
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
                regNumber:getuser.regNumber
            }
        })

       
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

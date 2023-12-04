'use server';

import prisma from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export const signUp = async (name: string, email: string, password: string, universityId: number, regNumber: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      if (user) {
        return 'User with that email already exists.';
      }
  
      const passwordHash = bcrypt.hashSync(password, 10);
  
      await prisma.user.create({
        data: {
          name,
          email,
          passwordHash,
          universityId,
          regNumber
        },
      });
  
      return "Successfully created new user!";
    } catch (error) {
      console.error('Error in signUp:', error);
      // You can handle the error or throw it to be caught elsewhere
      throw error;
    }
  };
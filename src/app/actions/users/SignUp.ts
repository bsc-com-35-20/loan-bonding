'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export const signUp = async (email: string, password: string,universityId: string, regNumber:string) => {
      // Check if a user with the provided registration number already exists
      const existingUserByRegNumber = await prisma.user.findUnique({
        where: {
          regNumber,
        },
      });

      if (existingUserByRegNumber) {
        return 'User with that registration number already exists.';
      }
       // Check if a student with the provided registration number exists
       const existingStudent = await prisma.student.findUnique({
        where: {
          regestrationNumber: regNumber,
        },
      });

      if (!existingStudent) {
        return 'Student not found with the provided registration number.';
      }

   
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
            name:existingStudent.firstName,
            email,
            passwordHash,
            universityId,
            regNumber
        },
    });

    return "Successfully created new user!";
};

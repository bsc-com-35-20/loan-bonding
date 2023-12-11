'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

// Import other necessary modules or functions

export const signUp = async (email: string, password: string, universityId: string, regNumber: string) => {
  try {
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
        universityId: universityId,
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
        name: existingStudent.firstName,
        email,
        passwordHash,
        universityId,
        regNumber,
      },
    });

    return 'Successfully created new user!';
  } catch (error: any) {
    console.error('Error in signUp:', error);

    if (error.code === 'Unknown') {
      return 'Error connecting to the database. Please try again later.';
    } else {
      return 'An unexpected error occurred during signup. Please try again.';
    }
  }
};

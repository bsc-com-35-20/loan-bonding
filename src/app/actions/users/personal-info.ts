
'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export const postPersonalInformation = async (
    
     surname: string, 
     firstname: string,
     othername: string, 
     dateofbirth:string,
     sex:string,
     home:string,
     phonenumber:string
    ) => {

    const session = await getServerSession(authOptions);
    console.log({session})
  // Check if getuser and getuser.id are defined and non-null
  if (session?.user?.email) {
    const getuser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    // Check if getuser and getuser.id are defined and non-null
    if (getuser?.id) {
      try {
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
      } catch (error) {
        console.error("Error creating personal information:", error);
        // Handle the error as needed
      }
    } else {
      console.error("User ID not found in session");
      // Handle the case where user ID is not available
    }
  } else {
    console.error("User email not found in session");
    // Handle the case where user email is not available
  }
            
    
};
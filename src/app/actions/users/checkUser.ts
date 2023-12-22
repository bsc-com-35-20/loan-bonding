'use server'

import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const checkAuthentication = async () => {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      // Redirect unauthorized users to the protected message page
      return false;
    }
    return true;
  };
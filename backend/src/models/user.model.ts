import prisma from '../../prisma/prismaClient';
import { User } from '@prisma/client';


export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { email },
  });
};


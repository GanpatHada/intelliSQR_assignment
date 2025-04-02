import prisma from "../../prisma/prismaClient";

export async function connectDb() {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL via Prisma');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error); // Log the error
    throw new Error('Could not connect to the database');
  }
}


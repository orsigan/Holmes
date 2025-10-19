import dotenv from 'dotenv';

dotenv.config();

export const NEO4J_URI = process.env.NEO4J_URI!;
export const NEO4J_USER = process.env.NEO4J_USER!;
export const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD!;
export const APOLLO_PORT: number = parseInt(process.env.APOLLO_PORT || '4000', 10);

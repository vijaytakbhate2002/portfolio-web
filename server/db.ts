import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import * as schema from '../shared/schema';

// Use pooled connections for better performance in serverless environments
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

export default db;
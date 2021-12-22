import { Pool } from 'pg';

const connectionString =
  'postgres://wrgilkda:pIENvmrw1evJViYYsvN6-iyPRJUj8qdb@motty.db.elephantsql.com/wrgilkda';

const db = new Pool({ connectionString });

export default db;

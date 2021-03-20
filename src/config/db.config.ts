import "reflect-metadata";
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnection,
} from "typeorm";
import * as dotenv  from 'dotenv';

dotenv.config();

export const prod = process.env.NODE_ENV === "production";
const { DB_NAME, DB_HOST, DB_PORT } = process.env;


export const config: ConnectionOptions = {
  name: DB_NAME, 
  type: "mongodb",
  host: DB_HOST, 
  port: parseInt(DB_PORT), 
  database: DB_NAME,
  synchronize: false,
  logging: true,
  useUnifiedTopology: true,

  ...(prod && {
    database: "production",
    logging: false,
  }),

  entities: ["src/models/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
};

export const connect = async () => {
  let connection: Connection;
  try {
    connection = getConnection(config.name);
  } catch (err) {
    connection = await createConnection(config);
  }
  return connection;
};

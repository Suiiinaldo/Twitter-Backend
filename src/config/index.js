import connection from "./database-config.js";
import { PORT, DB_PASS, DB_ID, SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY  } from "./server-config.js"


export { connection, PORT, DB_PASS, DB_ID, SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY };
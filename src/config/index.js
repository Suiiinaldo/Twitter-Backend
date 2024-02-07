import connection from "./database-config.js";
import { PORT, DB_PASS, DB_ID, SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY, BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY  } from "./server-config.js"


export { connection, PORT, DB_PASS, DB_ID, SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY, BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY };
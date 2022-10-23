import { createConnection } from "mysql2";
import { promisify } from "util";

const connection = createConnection({

  host: "localhost",
  user: "root",
  password: "your_new_password",
  database: "patient",
  debug: false,
  port:3306,
})


const queryAsync = promisify(connection.query).bind(connection);

export default async function runQuery(sql, params) {
  return queryAsync(sql, params);
}

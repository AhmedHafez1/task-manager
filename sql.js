const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "taskmanager",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function runQuery(query, values = []) {
  try {
    // Borrow the connection from the pool
    const client = await pool.connect();
    console.log("Client connected");

    try {
      const result = await client.query(query, values);
      console.log(result.rows);
    } finally {
      // Release the connection back to the pool
      client.release();
    }
  } catch (err) {
    console.error("Error:", err.stack);
  } finally {
    await pool.end(); 
    console.log("Poll ended");
  }
}

const query1 = `SELECT u.name, p.title as project, t.title as task, t.completed  
 FROM "Task" t
 INNER JOIN "Project" p ON t."projectId" = p.id
 INNER JOIN "User" u ON t."assigneeId" = u.id
 WHERE t."assigneeId" = $1`;

const values1 = [24];

const query2 = `Select * from "Task" limit 5 offset 12`;

runQuery(query2, []);

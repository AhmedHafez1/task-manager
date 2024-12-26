const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "taskmanager",
});

async function runQuery(query, values = []) {
  try {
    await client.connect();
    console.log("Connected to the database");
    const result = await client.query(query, values);
    console.log(result.rows);
  } catch (err) {
    console.error("Error:", err.stack);
  } finally {
    await client.end(); // Always close the connection
    console.log("Client disconnected");
  }
}

const query = `SELECT u.name, p.title as project, t.title as task, t.completed  
 FROM "Task" t
 INNER JOIN "Project" p ON t."projectId" = p.id
 INNER JOIN "User" u ON t."assigneeId" = u.id
 WHERE t."assigneeId" = $1`;

const values = [24];
runQuery(query, values);

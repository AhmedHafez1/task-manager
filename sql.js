const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'taskmanager',
});

async function runQuery(query) {
  try {
    await client.connect();
    console.log('Connected to the database');
    const result = await client.query(query);
    console.log(result.rows);
  } catch (err) {
    console.error('Error:', err.stack);
  } finally {
    await client.end(); // Always close the connection
    console.log('Client disconnected');
  }
}

const query = `SELECT * FROM "User"`;
runQuery(query);

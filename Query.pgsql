SELECT t.title, t.completed, u.name FROM "Task" t
INNER JOIN "User" u 
ON t."assigneeId" = u.id
WHERE t.completed = true
ORDER by  u.name ASC;


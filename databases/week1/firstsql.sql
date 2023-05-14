--Find out how many tasks are in the task table:
SELECT COUNT(*) AS task_count FROM task;

--Find out how many tasks in the task table do not have a valid due date:
SELECT COUNT(*) AS task_count FROM task WHERE due_date IS NULL OR due_date < NOW();

--Find all the tasks that are marked as done:
SELECT * FROM task WHERE status = 'done';

--Find all the tasks that are not marked as done:
SELECT * FROM task WHERE status != 'done';

--Get all the tasks, sorted with the most recently created first:
SELECT * FROM task ORDER BY created_at DESC;

--Get the single most recently created task:
SELECT * FROM task ORDER BY created_at DESC LIMIT 1;

--Get the title and due date of all tasks where the title or description contains "database":
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--Get the title and status (as text) of all tasks:
SELECT title, CASE status WHEN 'todo' THEN 'To Do' WHEN 'in_progress' THEN 'In Progress' WHEN 'done' THEN 'Done' END AS status_text FROM task;

--Get the name of each status, along with a count of how many tasks have that status:
SELECT status, COUNT(*) AS task_count FROM task GROUP BY status;

--Get the names of all statuses, sorted by the status with most tasks first:
SELECT status, COUNT(*) AS task_count FROM task GROUP BY status ORDER BY task_count DESC;
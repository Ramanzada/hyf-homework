-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO tasks (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Manage Tasks', 'Task for managing tasks', NOW(), NOW(), '2023-03-20', 1, 1);

-- Change the title of the "Manage Tasks" task
UPDATE tasks SET title = 'Manage My Tasks' WHERE task_id = 1;

-- Change the due date of the "Manage Tasks" task
UPDATE tasks SET due_date = '2023-03-25' WHERE task_id = 1;

-- Change the status of the "Manage Tasks" task
UPDATE tasks SET status_id = 2 WHERE task_id = 1;

-- Mark the "Manage Tasks" task as complete
UPDATE tasks SET status_id = 3 WHERE task_id = 1;

-- Delete the "Manage Tasks" task
DELETE FROM tasks WHERE task_id = 1;

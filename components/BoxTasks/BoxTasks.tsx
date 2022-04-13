import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

interface BoxTasksProps {
  tasks: any[];
  priority: number;
  color: string;
}

function BoxTasks ({tasks, priority, color}: BoxTasksProps) {

  let dateObj = new Date();
  let month = String(dateObj.getUTCMonth() + 1); //months from 1-12
  if (month.length === 1) { month = '0' + month; }
  let day = String(dateObj.getUTCDate());
  if (day.length === 1) { day = '0' + day; }
  let year = dateObj.getUTCFullYear();
  const todayDate = `${year}-${month}-${day}`

  const [priorityText, setPriorityText] = useState('');
  const [tasksFiltered, setTasksFiltered] = useState<Array<any>>();

  useEffect(() => {
    if (priority === 1) {
      setPriorityText('Faça agora')
    } else if (priority === 2) {
      setPriorityText('Faça hoje')
    } else if (priority === 3) {
      setPriorityText('Delegue')
    } else if (priority === 4) {
      setPriorityText('Exclua')
    }

    setTasksFiltered(tasks?.filter((task) => task.due).filter((task) => task.priority === (5 - priority) && (task.due.date == todayDate)));
  }, [setPriorityText, setTasksFiltered, priority, tasks, todayDate])

  return (
    <div
      className={classnames("mt-6 w-96 rounded-xl border p-6 text-lef text-gray-100", {
        "hover:text-red-500": color === "red",
        "hover:text-blue-500": color === "blue",
        "hover:text-yellow-500": color === "yellow",
        "hover:text-gray-500": color === "gray"
      })}
    >
      <h3 className="text-2xl font-bold ">{priorityText} (P{priority})</h3>
      <p className="mt-4 text-xl">
        {tasksFiltered?.map((task) => (
          <div key={task.id}>
            <p>- {task.content}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default BoxTasks;
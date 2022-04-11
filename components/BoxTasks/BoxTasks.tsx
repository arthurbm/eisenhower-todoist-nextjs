import React, { useEffect } from 'react';

// import { Container } from './styles';

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

  useEffect(() => {
    console.log(todayDate)
  }, [])

  return (
    <div
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-600"
    >
      <h3 className="text-2xl font-bold">Prioridade {priority}</h3>
      <p className="mt-4 text-xl">
        {tasks?.filter((task) => task.due).filter((task) => task.priority === (5 - priority) && (task.due.date == todayDate))?.map((task) => (
          <div key={task.id}>
            <p>- {task.content}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default BoxTasks;
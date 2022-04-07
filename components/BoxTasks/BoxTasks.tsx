import React, { useEffect } from 'react';

// import { Container } from './styles';

interface BoxTasksProps {
  tasks: any[];
  priority: number;
}

function BoxTasks ({tasks, priority}: BoxTasksProps) {

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  const newdate = `${year}-0${month}-0${day}`

  useEffect(() => {
    console.log(newdate)
  }, [])

  return (
    <div
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">Prioridade {priority}</h3>
      <p className="mt-4 text-xl">
        {tasks?.filter((task) => task.due).filter((task) => task.priority === (5 - priority) && (task.due.date == newdate))?.map((task) => (
          <div key={task.id}>
            <p>- {task.content}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default BoxTasks;
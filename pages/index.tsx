import { TodoistApi } from '@doist/todoist-api-typescript'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BoxTasks } from '../components'

interface HomeProps {
  apiUrl: string;
}

function Home ({apiUrl}: HomeProps) {

  const api = new TodoistApi(apiUrl)
  // const [projects, setProjects] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    api.getTasks()
        .then((tasks) => {
          setTasks(tasks);
        })
        .catch((error) => console.log(error))
    
    // api.getProjects()
    //   .then((projects) => {
    //     // console.log(projects);
    //     setProjects(projects);
    //   })
    //   .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-900">

        <h1 className="text-4xl text-gray-100 font-bold">Todoist Eisenhower</h1>
        <h1 className="text-2xl text-gray-100 font-bold mt-6">+ ---------- IMPORTANTE ---------- -</h1>

        <main className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <BoxTasks tasks={tasks} priority={1} color="red" />

          <BoxTasks tasks={tasks} priority={2} color="yellow"/>

          <BoxTasks tasks={tasks} priority={3} color="blue" />
          
          <BoxTasks tasks={tasks} priority={4} color="gray" />

        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.TODOIST_URL as string;

  return {
    props: {
      apiUrl,
    }
  }
}

export default Home

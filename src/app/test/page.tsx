'use client'
import styles from './Test.module.css'
import { useListProjects } from '@hooks/projects'

export default function New () {
  const projectsQuery = useListProjects({}),
    { data: projects } = projectsQuery
  console.log(projects)
  return (
    <>
      <header className={styles.Header}>
        <h1>Airtable</h1>
        {/* <button onClick={listRecords}>New</button> */}
      </header>

      {projectsQuery.isLoading && <div>loading...</div>}
      {projectsQuery.isSuccess && <div>loaded {projects?.length} projects</div>}
      {projectsQuery.isError && <div>you done messed up</div>}
    </>
  )
}

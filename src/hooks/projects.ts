//Data
import { useQuery } from '@tanstack/react-query'
import { Project } from '@./types/projects'
import axios from 'axios'

export const useListProjects = ({}) => {
  return useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: () =>
      axios.get('http://localhost:3000/projects').then(res => res.data),
    staleTime: 5000
  })
}

//Data
import { useQuery } from '@tanstack/react-query'
import { api } from '@api'

//Types
import { Project } from '@./types/projects'
import { Response, Item, fiveMin } from '@utils/queries'

//this 'projects' endpoint was for the airtable marketplace
//I still want this here in case we put this back in.

// export const useListProjects = ({}) => {
//   return useQuery<Project[], Error>({
//     queryKey: ['projects'],
//     queryFn: () =>
//       axios.get('http://localhost:3000/projects').then(res => res.data),
//     staleTime: 5000
//   })
// }

export const useListProjects = () =>
  useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () =>
      api.getProjects().then(res => {
        const { data, included } = res
        const modifiedData = data.map((item: Item) => {
          const token = included.find(
            (token: Item) => token.id === item.relationships.token.data.id
          )
          const modifiedToken = {
            id: token.id,
            ...token.attributes
          }
          const formattedData = {
            id: item.id,
            token: modifiedToken,
            ...item.attributes
          }
          delete formattedData.tokenId
          return formattedData
        })
        return modifiedData
      }),
    staleTime: fiveMin
  })

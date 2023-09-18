export interface Response<T, R = null, S = null> {
  data: T
  included?: R
  meta?: S
}

export interface Item {
  type: string
  attributes: any
  id: number
  relationships?: any
}

export interface QueryOptions {
  staleTime?: number
  enabled?: boolean
  params?: string
}

export const fiveMin = 1000 * 60 * 5

export const formatDataOnlyResponse = (response: any) => {
  const { data } = response
  const modifiedData = data.map((item: Item) => {
    return {
      id: item.id,
      ...item.attributes
    }
  })
  return {
    data: modifiedData
  }
}

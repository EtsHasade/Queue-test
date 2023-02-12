import { useMutation, useQuery, useQueryClient } from 'react-query'
import { peopleService } from '../services/peopleService'

export function usePeoplesQuery(criteria) {
  if (criteria.txt) criteria.q = criteria.txt
  return useQuery(['get-peoples', criteria], () => peopleService.query(criteria))
}

export function usePeoplesRemove() {
  const queryClient = useQueryClient()
  return useMutation((peopleEmail) => peopleService.remove(peopleEmail),{
    onSuccess: ()=> {
      queryClient.invalidateQueries(['get-peoples', {}])
    }
  })
}

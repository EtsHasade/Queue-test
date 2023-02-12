import { useQuery } from 'react-query'
import { peopleService } from '../services/peopleService'

export default function usePeoplesQuery(criteria) {
  return useQuery('get-peoples', () => peopleService.query(criteria))
}

import MemberAvatar from './MemberAvatar'
import { MdDelete as DeleteIcon } from 'react-icons/md'


export default function PeoplePreview({ people, isLoading, onRemove }) {
  const statusForDisplay = people?.status?.charAt(0).toUpperCase() + people?.status?.substring(1) || ''

  return (
    <div className="people-preview table-row table-item">
      <MemberAvatar people={people} isLoading={isLoading} />
      <div className={'email field ' + (isLoading ? 'loader' : 'value')} ><span>{people?.email}</span></div>
      <div className={'status field ' + (isLoading ? 'loader' : 'value')} ><span>{statusForDisplay}</span></div>
      <button className="btn delete" onClick={()=> onRemove(people?.email)}>
        <DeleteIcon />
        <span>Delete</span>
      </button>
    </div>
  )
}

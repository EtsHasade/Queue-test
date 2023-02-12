import { GoPlus as PlusIcon } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'

export default function PeopleListHeader({onFilter, searchTerm}) {
    return (
        <div className='people-list-header flex wrap'>
            <div className="search-members bold-2" >
                <IoIosSearch className='icon'/>
                <input type="text" placeholder={'Search members'} value={searchTerm} onChange={(ev)=> onFilter(ev.target.value)}/>
            </div>
            <button className='btn bold-2'><PlusIcon className='icon'/><span>Invite people</span></button>
        </div>
    )
}

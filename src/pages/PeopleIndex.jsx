import { useState } from 'react'
import Dashboard from '../cmps/Dashboard'
import PeopleList from '../cmps/PeopleList'
import PeopleListHeader from '../cmps/PeopleListHeader'
import {usePeoplesQuery, usePeoplesRemove} from '../hooks/usePeoples'



export default function PeopleIndex() {
    const [searchTerm, setSearchTerm] = useState('')
    const { isLoading, isError, data: peoples } = usePeoplesQuery({txt: searchTerm})



    return (
        <>
            <Dashboard peoples={peoples}/>
            <PeopleListHeader onFilter={setSearchTerm}/>
            <PeopleList peoples={peoples} isLoading={isLoading} isError={isError} />
        </>
    )
}

import Dashboard from '../cmps/Dashboard'
import PeopleList from '../cmps/PeopleList'
import PeopleListHeader from '../cmps/PeopleListHeader'
import usePeoplesQuery from '../hooks/usePeoplesQuery'



export default function PeopleIndex() {
    const { isLoading, isError, data: peoples } = usePeoplesQuery()



    return (
        <>
            <Dashboard />
            <PeopleListHeader />
            <PeopleList peoples={peoples} isLoading={isLoading} isError={isError} />
        </>
    )
}

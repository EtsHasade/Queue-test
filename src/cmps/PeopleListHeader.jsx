import React from 'react'

export default function PeopleListHeader() {
    return (
        <div className='people-list-header flex wrap'>
            <input type="text" className="search-members $border-radius-em" placeholder='Search' />
            <button>+ Invite people</button>
        </div>
    )
}

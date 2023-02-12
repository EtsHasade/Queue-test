
export default function PeoplePreview({ people, fields }) {
  return (
    <div className="people-preview table-row table-item">
      {fields?.map(({ key, width }) => {
        let value = people[key]
        if (key === 'name') value = people.firstName + ' ' + people.lastName
          return <h6 style={{ width }}>{value}</h6>
      })}
    </div>
  )
}

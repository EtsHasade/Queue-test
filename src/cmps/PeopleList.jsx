import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import PeoplePreview from "./PeoplePreview";

const fields = [
  { label: 'Name', key: 'name' , width: '40%'},
  { label: 'Email', key: 'email', width: '30%'},
  { label: 'Status', key: 'status' },
]

export default function PeopleList({ peoples, isLoading, isError }) {
  return (
    <section className="people-list">
      <header className="table-header table-item">
        {fields.map(field => <h5 style={{width: field.width}}>{field.label}</h5>)}
      </header>
      <ul className="people-list table-rows clean-list">
        {isLoading &&  <Loader />}
        {isError && <ErrorMsg />}
        {peoples?.map(people => <PeoplePreview key={people.id} fields={fields} people={people} />)}
      </ul>
    </section>
  )
}

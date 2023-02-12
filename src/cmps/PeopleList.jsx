import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import PeoplePreview from "./PeoplePreview";
import { utilService } from "../services/utilService";
import Modal from "./Modal";
import { useState } from "react";
import RemoveMsg from "./RemoveMsg";

const createSkeleton = () => ({
  email: '-'.repeat(utilService.getRandomInt(15, 25)),
  firstName: '-'.repeat(utilService.getRandomInt(5, 10)),
  lastName: '-'.repeat(utilService.getRandomInt(8, 15)),
  status: '-'.repeat(utilService.getRandomInt(8, 12))
})

const skeletons = [
  createSkeleton(),
  createSkeleton(),
  createSkeleton(),
]

export default function PeopleList({ peoples, isLoading, isError }) {
  const [msg, setMsg] = useState('Welcome')
  const displayPeoples = peoples || skeletons

  const onRemove = (peopleEmail) => {
    setMsg(() => <RemoveMsg memberEmail={peopleEmail}/>)
  }

  return (
    <section className="people-list">
      <header className="table-header table-item bold">
        <h5 className="name field" >Name</h5>
        <h5 className="email field" >Email</h5>
        <h5 className="status field" >Status</h5>
      </header>
      <ul className="table-rows clean-list">
        {isError && <ErrorMsg />}
        {displayPeoples.map((people, idx) => <PeoplePreview key={idx} isLoading={isLoading} people={people} onRemove={onRemove} />)}
      </ul>
      {msg && <Modal closeModal={()=>setMsg(null)}>
        <div className="msg">{msg}</div>
      </Modal>}
    </section>
  )
}

import { usePeoplesRemove } from "../hooks/usePeoples"

export default function RemoveMsg({memberEmail}) {
    console.log("🚀 ~ file: RemoveMsg.jsx:4 ~ RemoveMsg ~ memberEmail", memberEmail)
    const {mutate: removeMember} = usePeoplesRemove()
    return (
        <div className="remove-msg">
            <h3>Are you sure you want to delete this person</h3>
            <p>This action cannot be undone and all data associated with this person will be permanently removed.</p>
            <button className="yes huge primary" onClick={()=> removeMember(memberEmail)}>Yes</button>
            <button className="no huge">No</button>
        </div>
    )
}

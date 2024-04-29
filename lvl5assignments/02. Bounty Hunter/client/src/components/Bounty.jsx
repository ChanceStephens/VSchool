import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    
    const {_id, firstName, lastName, living, bountyAmount, type} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
            <div
                className="bounty" 
                key={_id} 
            >
                {!editToggle ? 
                    <>
                        <h1>Bounty Hunter Information Card</h1>
                        <h1>Target's Name: {lastName}, {firstName}</h1>                                             
                        <h2>Target Control Number: {_id}</h2>
                        <h2>Target Living Status? {living ? "Living" : "Deceased"}</h2>
                        <h1>Bounty Amount: ${bountyAmount}</h1>
                        <h2>Jedi/Sith? {type}</h2>
                        <button className="delete-btn" onClick={() => props.deleteBounty(_id)}>Delete</button>
                        <button className='edit-btn'  onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit            
                        </button>
                    </>
               :
               <>
                    <AddBountyForm 
                        _id={_id} 
                        firstName={firstName} 
                        lastName={lastName} 
                        living={living} 
                        bountyAmount={bountyAmount} 
                        type={type}
                        btnText="Update Bounty Information"
                        submit={props.editBounty}
                        
                        />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>    
    )
}
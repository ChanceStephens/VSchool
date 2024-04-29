import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const {firstName, lastName, living, bountyAmount, type, _id} = props
    const initialInputs = 
    {
        _id: _id || "",
        firstName: firstName || "",
        lastName: lastName || "",
        living: living || "",
        bountyAmount: bountyAmount || "",
        type: type || ""
    }

    const [inputs, setInputs] = useState(initialInputs)

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.submit(inputs, _id)
        console.log(props._id)
        console.log(inputs)//<====================
        setInputs(inputs, _id)
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     props.submit(inputs, props._id)
    //         .then(() => {
    //             setInputs(initialInputs)
    //         })
    // }
console.log(inputs)
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name"
                >
            </input>
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
                >
            </input>
            <input 
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange} 
                placeholder="Living, True or False?"
                >
            </input>
            <input 
                type="text" 
                name="bountyAmount" 
                value={inputs.bountyAmount} 
                onChange={handleChange} 
                placeholder="Bounty Amount"
                >
            </input>
            <input 
                type="text" 
                name="type" 
                value={inputs.type} 
                onChange={handleChange} 
                placeholder="Jedi or Sith?"
                >
            </input>
            <button>{props.btnText}</button>
        </form>
    )
}


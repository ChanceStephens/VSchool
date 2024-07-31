import React from 'react'

export default function Form({onSubmit}) {
    const initialData =
    {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phoneNumber: "",
      favoriteFood: "",
      aboutSelf: ""
    }

    function onlyNumbers(value) { 
        if (!value) return ""; // Handle null or undefined value

        let strictlyNumbers = value.match(/[0-9]/g).join(''); 
        return strictlyNumbers;
    }
    

    const [badgeData, setBadgeData] = React.useState(initialData)

    function handleChange(event) {
        const { name, value } = event.target
        const newValue = name === 'phoneNumber' ? onlyNumbers(value) : value
        setBadgeData(prevBadgeData => ({
          ...prevBadgeData,
          [name]: newValue
        }))
      }
      
    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(badgeData)
        setBadgeData(initialData)
  }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='textInputs'>
                    {/* firstName INPUT*/}
                    <input 
                        type='text' 
                        placeholder='First Name' 
                        value={badgeData.firstName} 
                        name='firstName' 
                        onChange={handleChange}
                        minLength="3"
                        required
                    />
                    {/* lastName INPUT*/}
                    <input 
                        type='text' 
                        placeholder='Last Name' 
                        value={badgeData.lastName} 
                        name='lastName' 
                        onChange={handleChange}
                        minLength="3"
                        required
                    />
                    {/* email INPUT*/}
                    <input 
                        type='email'
                        placeholder='Email Address' 
                        value={badgeData.email} 
                        name='email'
                        onChange={handleChange}
                        minLength="3"
                        required
                    />
                    {/* birthplace INPUT*/}
                    <input 
                        type='text' 
                        placeholder='Place of Birth' 
                        value={badgeData.birthPlace} 
                        name='birthPlace'
                        onChange={handleChange}
                        minLength="3"
                        required
                    />
                    {/* phoneNumber INPUT*/}
                    <input 
                        type='tel' 
                        placeholder='Phone Number' 
                        value={badgeData.phoneNumber} 
                        name='phoneNumber'
                        onChange={handleChange}
                        minLength="10"
                        required
                        
                    />
                    {/* favoriteFood INPUT*/}
                    <input 
                        type='text' 
                        placeholder='Favorite Food' 
                        value={badgeData.favoriteFood} 
                        name='favoriteFood'
                        onChange={handleChange}
                        minLength="3"
                        required
                    />
                </div>
                {/* aboutSelf INPUT*/}
                <textarea 
                    placeholder='Tell us about yourself!' 
                    value={badgeData.aboutSelf} 
                    name='aboutSelf'
                    onChange={handleChange}
                    minLength="3"
                    required
                />

                <button>Submit</button>
            </form>
        </div>
    )
}
import React from 'react'
import { IRegistration } from '@/interface/IRegistration'

export default function registration() {
    const [registration, setRegistration] = React.useState<IRegistration>({
        firstName: '',
        lastName: '',
        isActive: false,
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setRegistration({...registration, [e.target.name]: e.target.type=="checkbox"? e.target.checked: e.target.value })
        // if(e.target.type === 'checkbox'){
        //     setRegistration({...registration,[e.target.name]: e.target.checked})
        // }
        // else{
        // setRegistration({...registration,[e.target.name]: e.target.value})
        // }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(registration)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name='firstName' onChange={handleChange}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name='lastName' onChange={handleChange}/>
            </div>
            <div>
                <label>Active:</label>
                <input type="checkbox" name='isActive' onChange={handleChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

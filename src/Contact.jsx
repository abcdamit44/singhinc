import React, { useState } from 'react';


const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        pnumber: "",
        msg: ''
    });

    const Update = (event) => {
    const { name,value } = event.target;
        
        setData((preval) => {
            return {
            ...preval,
            [name] : value,
        }
            
        })
    };

    const SubmitForm=(event)=>{
        event.preventDefault();
        alert(`My name is ${data.name}. My phone Number is ${data.pnumber}.${data.email} is my email id. I want to say ${data.msg} `)
    }
    return (
        <>
            
            <div className='container'>

                <h1 align='center'>Contact Us</h1>
                <div className='contact_form'>

                    <form onSubmit={SubmitForm}>
                        <input type='text' name='name' value={data.name} placeholder='Enter Your Name' onChange={Update} />
                        <input type='email' name='email' value={data.email} placeholder='Enter Your Email Id' onChange={Update} />
                        <input type='text' name='pnumber' value={data.pnumber} placeholder='Enter Your Phone Number' onChange={Update} />
                        <textarea type="text" name='msg' value={data.msg} cols="10" rows="8" placeholder='Message' onChange={Update} ></textarea><br />
                        <button className='btn'> Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default Contact;
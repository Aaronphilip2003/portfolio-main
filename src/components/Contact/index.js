import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact=()=>{
    const [letterClass,setLetterClass]=useState("text-animate");
    const refForm=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_ssi2fye',
                'template_jvohbtz',
                refForm.current,
                'fLdkQ4a8MGGCGFwkO'
            )
            .then(
                ()=>{
                    alert('Message Sent Successfully !')
                    window.location.reload(false)
                },
                ()=>{
                    alert("Failed to send Message, Please try again !")
                }
            )

    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                            />
                        </li>
                        <li>
                            <input placeholder='Subject' type="text" name="subject" required/>
                        </li>
                        <li>
                            <textarea 
                            placeholder='Message (write your email in this textbox)'
                            name="message"
                            required
                            ></textarea> 
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
                </div>
                </p>
            </div>

        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;

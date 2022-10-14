import React from 'react'
import { Container } from 'react-bootstrap'
import Sun from '../../Images/sun.png'
import Ava from '../../Images/avatar.png'
import circAbt from '../../Images/about-me.png'
import './aboutus.css'

const Aboutus = () => {
  return (
    <Container>
        <div className='row justify-content-center wrap-abt gap-10'>
            <div className='col-md-4 wrap-img-abt'>
                <img src={circAbt} className="circ"></img>
                <img src={Ava}></img>
            </div>
            <div className='col-md'>
                <p className='ff-source'>&lt;h1&gt;</p>
                <h1 className='ff-poppins fs-head'>
                    <span className='disp-flex gap-10'>
                    Hello :)  
                    <img src={Sun} className='sun'></img>  
                    </span>
                    My name is <span className='ff-grace'>Naufal Rafi Harahap</span> <br></br>
                    i do some Frontend Developing <br></br>
                    and a little UI/UX Designing    
                </h1>   
                <p className='ff-source'>&lt;/h1&gt;</p>
            </div>
        </div>
    </Container>
  )
}

export default Aboutus
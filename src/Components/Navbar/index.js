import React from 'react'
import { Container } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <Container>
        <div className='testing-wrap'>
            <p className='ff-source'>&lt;nav&gt;</p>
            <h3 className='ff-poppins fw-bold fs-nav'>Home</h3>
            <h3 className='ff-poppins fw-bold fs-nav'>&amp;&amp;</h3>
            <h3 className='ff-poppins fw-bold fs-nav'>Work Experiences</h3>
            <h3 className='ff-poppins fw-bold fs-nav'>&amp;&amp;</h3>
            <h3 className='ff-poppins fw-bold fs-nav'>Portofolio </h3>
            <p className='ff-source'>&lt;/nav&gt;</p>
        </div>
    </Container>
  )
}

export default Navbar
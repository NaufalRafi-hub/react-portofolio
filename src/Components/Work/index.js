import React from 'react'
import './work.css'
import Work from "../../Images/work-exp.png"
import { Container } from 'react-bootstrap'
import Data from "./Data";

const Works = () => {
  return (
    <Container>
        <div className='wrap-work'>
            <img src={Work} className='wrkz'></img>
            {Data.map((data, index) => (
                <div className='cont-wrk'>
                    <p className='ff-source'>&lt;l1&gt;</p>
                    <div className='wrap-h'>
                        <h2 className='ff-poppins fw-bold'>{data.year}</h2>
                        <h3 className='ff-poppins fw-light'>{data.desc}</h3>
                    </div>
                    
                    <p className='ff-source'>&lt;/l1&gt;</p>
                </div>
                
            ))}
            
        </div>
    </Container>
  )
}

export default Works
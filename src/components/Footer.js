import React from 'react';
import "../index.css"
//import media
import twitter from "../media/twitter.svg"
import linkedin from "../media/linkedin.svg"


export default function Footer() {

    //copyrights date:
    // Get the current date:
    var currentDate = new Date();
    //Extract year:
    var year = currentDate.getFullYear();

    return (
        <div>

            {/* copyrights footer */}
            <footer className='d-flex justify-content-between text-center border-top border-secondary'>
                <div className='ms-2 d-flex justify-content-between'>
                    <p className='text-secondary'>Copyright © {year} Bdev. All Rights Reserved.</p>
                </div>
                <div className='mx-5 d-flex justify-content-around'>
                    <p className='text-secondary'>Developed by:</p>
                    <p className='mx-2 fw-bold text-center'>
                        <a className='text-muted text-decoration-none text-center' href='https://bechirdev.netlify.app' target="_blank" rel="noreferrer">bechirdev.netlify.app</a>
                    </p>
                    <a className='border-outline-secondary text-decoration-none text-center' href="https://twitter.com/bechir7dridi" target="_blank" rel="noreferrer">
                        <img src={twitter} width="22px" alt="twitter" className="img-fluid" />
                    </a>
                    <a className='mx-2 text-decoration-none text-center' href='https://www.linkedin.com/in/bechir-dev' target="_blank" rel="noreferrer">
                        <img src={linkedin} width="22px" alt="linkedin" className="img-fluid" />
                    </a>
                </div>
            </footer>

        </div >
    );
}


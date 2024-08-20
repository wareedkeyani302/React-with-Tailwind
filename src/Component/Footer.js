import React from 'react';
import badge from '../Asset/icons/badge.svg';
import main from '../Asset/icons/main.png';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-13 '>
        <div>
            <img src={main} alt='#' className='w-40 h-16'/>
            <p className='my-4'>Email us: support@pwskills.com</p>
            <img src={badge} alt='#' className='w-32 h-32 ' />
        </div>
        <div>
            <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
            <div>
                <p>About us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            <h2 className='font-bold text-xl mt-4'>Products</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
            <div>
                <p>PW Skill Lab</p>
                <p>Job Portal</p>
                <p>Experience Portal</p>
            </div>
        </div>
        <div>
            <h2 className='font-bold text-xl mt-4'>Links</h2>
            <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
            <div>
                <p>Discord</p>
                <p>PW Youtube</p>
                <p>Careeres</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
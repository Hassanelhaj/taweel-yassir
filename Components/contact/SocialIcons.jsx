import React from 'react'
import {BsBehance, BsFacebook, BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=100001945013178' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.linkedin.com/in/taweel-alyass-27b9a319a'
              target='_blank' className='text-3xl hover:opacity-70' >
              <FaLinkedin/>
              </a> 

     
          
             <a target='_blank' href='mailto:taweel925@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons
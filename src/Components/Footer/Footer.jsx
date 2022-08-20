import React from 'react'
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  return (
    <div className='footer'>
        <a href="https://twitter.com/MainArticles"><TwitterIcon className='footer-icon' /></a>
        <a href="https://instagram.com/maingrainarticles?igshid=YmMyMTA2M2Y="><InstagramIcon className='footer-icon' /></a>
        <a href="https://www.pinterest.com/maingraina/"><PinterestIcon className='footer-icon' /></a>
        <div className="footer-text">
       <p>powered by <a href='https://www.google.co.ke/maps/place/Biashara+Plaza,+Moi+Ave,+Nairobi/@-1.2816781,36.8190116,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x182f11efc0b203dd:0x5376f1de78cf155a!2sNairobi+C+B+D!8m2!3d-1.2836757!4d36.8185948!3m4!1s0x182f10d45f1243dd:0xeb5aa097ca1e4f34!8m2!3d-1.2816835!4d36.8212003?hl=en&authuser=0'>mgacompanynairobi</a></p> 
        <p>Copyright &copy; 2022</p>
        </div>
    </div>
  )
}

import { Divider, Link } from "@mui/material";
import React from "react";
import './Footer.css';
const Footer: React.FC = () =>{
    return(
        <>
        <div className="footer">
            <h4> MORE HUBSPOT TOOLS</h4>
            
            <div className="link">
                <ul>

                <Link style={{color:'white'}} href="#">Make My Persona</Link>
                <Link style={{color:'white',paddingLeft:'15px'}} href="#">Blog Ideas Generator</Link>
                <Link style={{color:'white',paddingLeft:'15px'}} href="#">Website Grader</Link>
                <Link style={{color:'white',paddingLeft:'15px'}} href="#">Marketing Plan Template Generator</Link>
                <Link style={{color:'white',paddingLeft:'15px'}} href="#">Business Templates</Link>
                </ul>
            </div>
            
            <hr className="solid"/>
            <Link style={{color:'white'}} href="#">Manage Cookies</Link>
        </div>
        </>
    )
}
export default Footer;
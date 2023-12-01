import React from 'react';
import './main.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IProps {

    selectedFont:any
    fontSize:any
    selectedColorcolor:any
    lastname:any
    firstname:any
    jobtitle:any 
    department:any 
    companyname:any, 
    officeno:any 
    mobileno:any 
    website:any 
    email:any
    address1:any 
    address2:any 
    address3:any 
    address4:any 
    linkedin:any 
    facebook:any 
    twitter:any
    instagram:any 
    customfield:any 
    cta:any 
    ctaurl:any
    isSwitchOn:any 
    img:any
    selectedColortext:any
    selectedColorlink:any
    selectedColorCTAtextcolor:any
    selectedColorCTAcolor:any
    
  }
const template4: React.FC<IProps> = (props)=>{
    const{
    selectedFont,
    fontSize,
    selectedColorcolor,
    lastname,
    firstname,
    jobtitle, 
    department, 
    companyname, 
    officeno, 
    mobileno, 
    website, 
    email,
    address1, 
    address2, 
    address3, 
    address4, 
    linkedin, 
    facebook, 
    twitter,
    instagram, 
    customfield, 
    cta, 
    ctaurl,
    isSwitchOn, 
    img,
    selectedColortext,
    selectedColorlink,
    selectedColorCTAtextcolor,
    selectedColorCTAcolor
} = props;
const copyDiv = () =>{
  var range = document.createRange();
  range.selectNode(document.getElementById("template4"));
  window.getSelection()?.removeAllRanges();
  window.getSelection()?.addRange(range);
  document.execCommand('copy');
  window.getSelection()?.removeAllRanges();

  toast.success('Signature copied!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 6000, 
  });
}
    return(
        <>
        <ToastContainer/>
        <div className='container'>
          <div className='header'>
            <hr style={{border:'none',padding:'.1px', background:'grey'}}/>
            <div className='header-content'>
              <p>To: Your Recipient</p>
              <p>Subject:Check out my new Email Signature</p>
            </div>
          </div>

          <div className='form' id='template4' style={{ fontFamily: selectedFont,fontSize:fontSize, display:'flex'}}>
            
            
            <div style={{display:'flex',flexDirection: 'column',}}>
              <div style={{lineHeight:'8px',paddingRight:'20px',color:selectedColortext,paddingLeft:'18px'}}>
                <h3>{firstname || 'John'} {lastname || 'Smith'}</h3>
                <p>{jobtitle || 'Marketer'}</p>
                <p>{department || 'Marketing'} | {companyname || 'HubSpot'}</p>
                <p>{customfield || 'He / Him'}</p>
              </div>
                <hr style={{border:'none',width:'85%',padding:'.1px', background:selectedColorcolor}}/>            
                <div style={{lineHeight:'0px', color:selectedColortext,paddingLeft:'20px'}}>                 
                        <p style={{textAlign:'left'}}>                   
                        <i className="fa-solid fa-phone" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                    
                        {officeno || '111 222 333'} |{mobileno || '111 222 333'}                      
                        </p>
                        <p style={{textAlign:'left'}}>                   
                        <i className="fa-solid fa-envelope" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                   
                        {email || 'john@smith.com'}                     
                        </p>
                        <p style={{textAlign:'left'}}>                    
                        <i className="fa-sharp fa-solid fa-link" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                     
                        {website|| 'www.hubspot.com'}
                        </p>
                        <p style={{textAlign:'left',paddingBottom:'20px'}}>
                        <i className="fa-solid fa-location-dot" style={{color: selectedColorcolor,paddingRight:'10px'}}></i> 
                        {address1 || 'line 1, line 2, line 3, line 4'} {address2} {address3} {address4}
                        </p>
                        
                        <p style={{ display: isSwitchOn ? 'none' : 'block' }}><a href="" style={{color:selectedColortext,textDecoration: 'none'}}>Create Your Own Free Signature</a></p>
                        <button
                            style={{ display: cta ? 'inline-block' : 'none',padding:'15px',border:'none',color: selectedColorCTAtextcolor,background: selectedColorCTAcolor}}
                            onClick={() => { window.location.href = ctaurl}}>
                            {cta}
                        </button>                   
                </div>           

            </div>
            <div style={{display:'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-evenly'}}>
                <img src={img} style={{borderRadius:'100px',marginBottom:'20px',color:'red',background:'red',width:'100px',height:'100px'}} />           
                <img src={img} style={{borderRadius:'5px',color:'red',background:'red',width:'130px',height:'30px'}}/>
                <div style={{fontSize:'larger'}}>
                    <a href={facebook}><i className="fa-brands fa-facebook" style={{color: selectedColorlink,padding:'4px'}}></i></a>
                    <a href={twitter}><i className="fa-brands fa-twitter" style={{color: selectedColorlink,padding:'4px'}}></i></a>
                    <a href={linkedin}><i className="fa-brands fa-linkedin" style={{color: selectedColorlink,padding:'4px'}}></i></a>
                    <a href={instagram}><i className="fa-brands fa-instagram" style={{color: selectedColorlink,padding:'4px'}}></i></a>
                </div>                    
            </div>
            
    
          </div>
          <div style={{paddingTop:'35px',alignItems:'center', display:"flex", justifyContent: 'center'}}>
        </div>
        </div>
        <button onClick={copyDiv} style={{padding:'5px 50px',alignItems:'center', color:'white',background:'#2e475d', border:'none',borderRadius:'8px',marginLeft:'40%',marginTop:'30px'}}>
            <h3> Create signature</h3>
        </button>

        </>

    )
    
}
export default template4;
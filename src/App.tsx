import template1 from './template1.png';
import Template1 from './Template1';
import template2 from './template2.png';
import Template2 from './Template2';
import template3 from './template3.png';
import Template3 from './Template3';
import template4 from './template4.png';
import Template4 from './Template4';
import template5 from './template5.png';
import Template5 from './Template5';
import template6 from './template6.png';
import Template6 from './Template6';
import img from './(1).png';
import { Route, Routes } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import {Box,  Fade, Slider, Switch } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import Chrome from 'react-color/lib/components/chrome/Chrome';
import React,{useState, ChangeEvent} from 'react';
import './main.css';
import Footer from './Footer';
import logo from './1280px-HubSpot_Logo.svg.png'


interface TemplateProps {
  id: number;
  template: string;
  selected: boolean;
  onSelect: (id: number) => void;
}

const TemplateSelector: React.FC<TemplateProps> = ({ id, template, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className={`template-type ${selected ? 'selected' : ''}`} onClick={handleClick}>
      
      <img src={template} alt="" className='template6'/>
      {selected && <span className="tick">&#10003;</span>}
    </div>
  );
};


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs: React.FC = () => {




  const [value, setValue] = React.useState(0);
  const [showColorPickercolor, setShowColorPickercolor] = useState(false);
  const [showColorPickertext, setShowColorPickertext] = useState(false);
  const [showColorPickerlink, setShowColorPickerlink] = useState(false);
  const [showColorPickerCTAcolor, setShowColorPickerCTAcolor] = useState(false);
  const [showColorPickerCTAtextcolor, setShowColorPickerCTAtextcolor] = useState(false);


  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const toggleColorPickercolor = () => {
    setShowColorPickercolor(!showColorPickercolor);
  };
  
  const toggleColorPickertext = () => {
    setShowColorPickertext(!showColorPickertext);
  };

  const toggleColorPickerlink = () => {
    setShowColorPickerlink(!showColorPickerlink);
  };
  const toggleColorPickerCTAcolor = () => {
    setShowColorPickerCTAcolor(!showColorPickerCTAcolor);
  };
  const toggleColorPickerCTAtextcolor = () => {
    setShowColorPickerCTAtextcolor(!showColorPickerCTAtextcolor);
  };
 
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [selectedColorcolor, setSelectedColorcolor] = useState('#2e475d'); // Initial color
  const [selectedColortext, setSelectedColortext] = useState('#2e475d'); // Initial color
  const [selectedColorlink, setSelectedColorlink] = useState('#2e475d'); // Initial color
  const [selectedColorCTAcolor, setSelectedColorCTAcolor] = useState('blue'); // Initial color
  const [selectedColorCTAtextcolor, setSelectedColorCTAtextcolor] = useState('white'); // Initial color

  
  const [fontSize, setFontSize] = useState<number>(14); // Default font size
  const marks = [
    
    {
      value: 12,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Small</span>,
    },
    {
      value: 14,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Medium</span>,
    },
    {
      value: 16,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Large</span>,
    },
    
  ];


  
  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setFontSize(value);
    }
  };

  const [firstname, setfirstname] = useState(''); 
  const [lastname, setlastname] = useState(''); 
  const [jobtitle, setjobtitle] = useState(''); 
  const [department, setdepartment] = useState(''); 
  const [companyname, setcompanyname] = useState(''); 
  const [officeno, setofficeno] = useState(''); 
  const [mobileno, setmobileno] = useState(''); 
  const [website, setwebsite] = useState(''); 
  const [email, setemail] = useState(''); 
  const [address1, setaddress1] = useState(''); 
  const [address2, setaddress2] = useState(''); 
  const [address3, setaddress3] = useState(''); 
  const [address4, setaddress4] = useState(''); 
  const [linkedin, setlinkedin] = useState(''); 
  const [facebook, setfacebook] = useState(''); 
  const [twitter, settwitter] = useState(''); 
  const [instagram, setinstagram] = useState(''); 
  const [customfield, setcustomfield] = useState(''); 
  const [cta, setcta] = useState<string>(''); 
  const [ctaurl, setctaurl] = useState('www.hubspot.com'); 
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const handleSwitchChange = () => {
    // Toggle the state when the switch changes
    setIsSwitchOn((prev) => !prev);
  };



  const [selectedFont, setSelectedFont] = useState<string>('Arial');

  const handleFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(event.target.value);
  };

// const copyDiv = () =>{
//   var range = document.createRange();
//   range.selectNode(document.getElementById("a"));
//   window.getSelection()?.removeAllRanges();
//   window.getSelection()?.addRange(range);
//   document.execCommand('copy');
//   window.getSelection()?.removeAllRanges();
// }


  const [selectedTemplate1, setSelectedTemplate1] = useState<string>('template1');

  const handleTemplateClick1 = (template: string) => {
    setSelectedTemplate1(template);
  };

const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleTemplateSelect = (id: number) => {
    setSelectedTemplate(id === selectedTemplate ? null : id);
  };
  
  return (
    
    <>

        
    <div className='page'>
    
      <div className='sidebar'>

      <Box
        sx={{
        
          width: '400px',
          background: '#2e475d',
          maxHeight: '200%',
          color: 'white'
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'rgb(62, 89, 116)'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#2e475d',
              },
              '& .Mui-selected': {
                backgroundColor: '#2e475d'
              },
            }}
          >
            <Tab icon={<BusinessCenterIcon style={{ color: 'white', padding: '25px 21.6px' }} />} {...a11yProps(0)} />
            <Tab icon={<FormatIndentIncreaseIcon style={{ color: 'white', padding: '25px 21.6px' }} />} {...a11yProps(1)} />
            <Tab icon={<BrushIcon style={{ color: 'white', padding: '25px 21.6px' }} />} {...a11yProps(2)} />
            <Tab icon={<ImageIcon style={{ color: 'white', padding: '25px 21.6px' }} />} {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Box
          sx={{
          height:'850px',
          overflow:'auto',
          }}>

          <div>
            <CustomTabPanel value={value} index={0}>
              <div className='template slide_in'>
                <h3>Select Your Template</h3>
                <div className='help '>
                  <h4>Created With HubSpot</h4>
                  <Switch {...label} defaultChecked onChange={handleSwitchChange}/>
                </div>
                <div>
                  <div onClick={() => handleTemplateClick1('template1')}>
                    <h4>Template 1</h4>
                    <TemplateSelector  id={1} template={template1} selected={selectedTemplate === 1} onSelect={handleTemplateSelect} />
                  </div>
                  <div onClick={() => handleTemplateClick1('template2')}>
                    <h4>Template 2</h4>
                    <TemplateSelector id={2} template={template2} selected={selectedTemplate === 2} onSelect={handleTemplateSelect} />

                  </div>
                  <div onClick={() => handleTemplateClick1('template3')}>
                    <h4>Template 3</h4>
                    <TemplateSelector id={3} template={template3} selected={selectedTemplate === 3} onSelect={handleTemplateSelect} />

                  </div>
                  <div onClick={() => handleTemplateClick1('template4')}>
                    <h4>Template 4</h4>
                    <TemplateSelector id={4} template={template4} selected={selectedTemplate === 4} onSelect={handleTemplateSelect} />

                  </div>
                  <div onClick={() => handleTemplateClick1('template5')}>
                    <h4>Template 5</h4>
                    <TemplateSelector id={5} template={template5} selected={selectedTemplate === 5} onSelect={handleTemplateSelect} />

                  </div>
                  <div onClick={() => handleTemplateClick1('template6')}>
                    <h4>Template 6</h4>
                    <TemplateSelector id={6} template={template6} selected={selectedTemplate === 6} onSelect={handleTemplateSelect} />

                  </div>
                  
                  
                 
                  
                
                </div>
                <h5 className='copyright'>Copyright © 2023 HubSpot, Inc</h5>
              </div>
            </CustomTabPanel>
          </div>

          <div>
            <CustomTabPanel value={value} index={1}>
              <div className='inputs slide_in'>
                <h4>Enter Your Signature Details</h4>
                <div className='field-1'>
                  <h5 className='input-text'>First Name</h5>
                  <input
                    type="text"
                    placeholder="Jhon"
                    required
                    className="custom-input" 
                    onChange={(e) =>setfirstname (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Last Name</h5>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="custom-input" 
                    onChange={(e) =>setlastname (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Job Title</h5>
                  <input
                    type="text"
                    placeholder="Marketer"
                    className="custom-input" 
                    onChange={(e) =>setjobtitle (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Department</h5>
                  <input
                    type="text"
                    placeholder="Marketer"
                    className="custom-input" 
                    onChange={(e) =>setdepartment (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Company Name</h5>
                  <input
                    type="text"
                    placeholder="HubSpot"
                    className="custom-input" 
                    onChange={(e) =>setcompanyname (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Office Phone Number</h5>
                  <input
                    type="text"
                    placeholder="111 222 333"

                    className="custom-input" 
                    onChange={(e) =>setofficeno (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Mobile Phone Number</h5>
                  <input
                    type="text"
                    placeholder="111 222 333"
                    className="custom-input" 
                    onChange={(e) =>setmobileno (e.target.value)}
                    />
                </div>
                
                <div className='field-1'>
                  <h5 className='input-text'>Email Address</h5>
                  <input
                    type="text"
                    placeholder="john@smith.com"
                    className="custom-input" 
                    onChange={(e) =>setemail (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Website URL</h5>
                  <input
                    type="text"
                    placeholder="www.hubspot.com"
                    className="custom-input" 
                    onChange={(e) =>setwebsite (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Address</h5>
                  <input
                    type="text"
                    placeholder="Address line 1"
                    className="custom-input" 
                    onChange={(e) =>setaddress1 (e.target.value)}
                    />
                  <input
                    type="text"
                    placeholder="Address line 2"
                    className="custom-input" 
                    onChange={(e) =>setaddress2 (e.target.value)}
                    />
                  <input
                    type="text"
                    placeholder="Address line 3"
                    className="custom-input" 
                    onChange={(e) =>setaddress3 (e.target.value)}
                    />
                  <input
                    type="text"
                    placeholder="Address line 4"
                    className="custom-input" 
                    onChange={(e) =>setaddress4 (e.target.value)}
                    />
                </div>
                <h4>Enter Your Social Links</h4>
                <div className='field-1'>
                  <h5 className='input-text'>LinkedIn</h5>
                  <input
                    type="link"
                    placeholder="https://www.linkedin.com"
                    className="custom-input" 
                    onChange={(e) =>setlinkedin (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Facebook</h5>
                  <input
                    type="link"
                    placeholder="https://www.facebook.com"
                    className="custom-input" 
                    onChange={(e) =>setfacebook (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Twitter</h5>
                  <input
                    type="link"
                    placeholder="https://www.twitter.com"
                    className="custom-input" 
                    onChange={(e) =>settwitter (e.target.value)}
                    />
                </div>
                <div className='field-1'>
                  <h5 className='input-text'>Instagram</h5>
                  <input
                    type="link"
                    placeholder="https://www.instagram.com"
                    className="custom-input" 
                    onChange={(e) =>setinstagram (e.target.value)}
                    />
                </div>
                <h4>Custom Field</h4>
                <div className='field-1'>
                  <div className='help'>
                    <h5 className='input-text'>Custom Field</h5>
                    <Tooltip
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="This field can include whatever you want, such as your working hours, name pronunciation, or pronouns."
                    >
                      <HelpIcon style={{ fontSize: '20px' }} />
                    </Tooltip>

                  </div>
                  <input
                    type="link"
                    placeholder="Bonus Content"
                    className="custom-input" 
                    onChange={(e) =>setcustomfield (e.target.value)}
                    />
                </div>
                <h5 className='copyright'>Copyright © 2023 HubSpot, Inc</h5>
              </div>

            </CustomTabPanel>
          </div>
        
          <div>
            <CustomTabPanel value={value} index={2}>
              <div className='style slide_in'>
                <div className='color-pick'>
                  <h3>Stylize Your Signature</h3>
                  <div>
                    <h4>Select Theme color</h4>
                    <div className='color-picker'>
                      <h3>#</h3>

                      <p>{selectedColorcolor}</p>
                      <div
                        className='color-circle'
                        style={{ backgroundColor: selectedColorcolor }}
                        onClick={toggleColorPickercolor}
                      >
                      </div>
                    </div>
                    {showColorPickercolor && (
                      <Chrome
                        color={selectedColorcolor}
                        onChange={(color) => setSelectedColorcolor(color.hex)} />
                    )}

                  </div>
                  <div>
                    <h4>Select Text color</h4>
                    <div className='color-picker'>
                      <h3>#</h3>

                      <p>{selectedColortext}</p>
                      <div
                        className='color-circle'
                        style={{ backgroundColor: selectedColortext }}
                        onClick={toggleColorPickertext}
                      >

                      </div>
                    </div>
                    {showColorPickertext && (
                      <Chrome
                        color={selectedColortext}
                        onChange={(color) => setSelectedColortext(color.hex)} />
                    )}

                  </div>
                  <div>
                    <h4>Select Link color</h4>
                    <div className='color-picker'>
                      <h3>#</h3>

                      <p>{selectedColorlink}</p>
                      <div
                        className='color-circle'
                        style={{ backgroundColor: selectedColorlink }}
                        onClick={toggleColorPickerlink}
                      >

                      </div>
                    </div>
                    {showColorPickerlink && (
                      <Chrome
                        color={selectedColorlink}
                        onChange={(color) => setSelectedColorlink(color.hex)} />
                    )}

                  </div>
                </div>
                <div className='fonts'>
                  <h3>Font </h3>

                  <form>
                    <select id="fontSelector" onChange={handleFontChange} value={selectedFont}>
                      <option value="Arial"  >Arial</option>
                      <option value="Courier New" >Courier New</option>
                      <option value="Georgia" >Georgia</option>
                      <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                      <option value="Tahoma" >Tahoma</option>
                      <option value="Times New Roman" >Times New Roman</option>
                      <option value="Trebuchet MS" >Trebuchet MS</option>
                      <option value="Verdana" >Verdana</option>
                    </select>
                  </form>

                </div>
                <div className='slider'>
                <Typography id="font-size-slider" gutterBottom>
                  Font Size
                </Typography>
                <Slider
                  aria-labelledby="font-size-slider"
                  defaultValue={12} 
                  valueLabelDisplay="auto"
                  step={2}
                  marks={marks}
                  min={12}
                  max={16}
                  onChange={handleSliderChange}
                />
                </div>
                <h5 className='copyright'>Copyright © 2023 HubSpot, Inc</h5>
              </div>

            </CustomTabPanel>
          </div>

          <div>
            <CustomTabPanel value={value} index={3}>
              <div className='pic slide_in'>
                <div>
                  <h3>Upload Your Custom Signature Images</h3>
                  <div className='field-2'>
                    <div className='help-2'>
                      <h4 className='input-text-2'>Profile Picture</h4>
                      <Tooltip
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="Upload an image to your Dropbox, Google Drive or a similar site and paste the URL here. The file size should not exceed 3 MB."
                      >
                        <HelpIcon style={{ fontSize: '20px' }} />
                      </Tooltip>
                    </div>
                    <input
                      type="link"
                      placeholder="https://exapmle.com/images/my"
                      className="custom-input" />
                  </div>
                  <div className='field-2'>
                    <div className='help-2'>
                      <h4 className='input-text-2'>Company Logo</h4>
                      <Tooltip
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="Upload an image to your Dropbox, Google Drive or a similar site and paste the URL here. The file size should not exceed 3 MB."
                      >
                        <HelpIcon style={{ fontSize: '20px' }} />
                      </Tooltip>
                    </div>
                    <input
                      type="link"
                      placeholder="https://exapmle.com/images/my"
                      className="custom-input" />
                  </div>
                </div>
                <div>
                  <h3>Create a Custom CTA</h3>
                  <div className='field-2'>
                    <div className='help-2'>
                      <h4 className='input-text-2'>Custom CTA Copy</h4>
                      <Tooltip
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title="Your CTA copy should not exceed 24 characters."
                      >
                        <HelpIcon style={{ fontSize: '20px' }} />
                      </Tooltip>
                    </div>
                    <input
                      type="link"
                      value={cta}
                      placeholder="Find Out More"
                      className="custom-input" 
                      onChange={(e) =>setcta (e.target.value)}
                      />
                  </div>
                  <div className='field-2'>
                    <h4 className='input-text-2'>Custom CTA URL</h4>
                    <input
                      type="link"
                      placeholder="www.hubspot.com"
                      className="custom-input" 
                      onChange={(e) =>setctaurl (e.target.value)}
                      />
                  </div>
                </div>
                <div>
                  <h4>Select CTA Color</h4>
                  <div className='color-picker'>
                    <h3>#</h3>

                    <p>{selectedColorCTAcolor}</p>
                    <div
                      className='color-circle'
                      style={{ backgroundColor: selectedColorCTAcolor }}
                      onClick={toggleColorPickerCTAcolor}
                    >
                    </div>
                  </div>
                  {showColorPickerCTAcolor && (
                    <Chrome
                      color={selectedColorCTAcolor}
                      onChange={(color) => setSelectedColorCTAcolor(color.hex)} />
                  )}

                </div>
                <div>
                  <h4>Select CTA Text Color</h4>
                  <div className='color-picker'>
                    <h3>#</h3>

                    <p>{selectedColorCTAtextcolor}</p>
                    <div
                      className='color-circle'
                      style={{ backgroundColor: selectedColorCTAtextcolor }}
                      onClick={toggleColorPickerCTAtextcolor}
                    >
                    </div>
                  </div>
                  {showColorPickerCTAtextcolor && (
                    <Chrome
                      color={selectedColorCTAtextcolor}
                      onChange={(color) => setSelectedColorCTAtextcolor(color.hex)} />
                  )}
                </div>
                <div className="separator">
                  <hr className="line" />
                  <p>OR</p>
                  <hr className="line" />
                </div>
                <div className='field-2'>
                  <div className='help-2'>
                    <h4 className='input-text-2'>Custom CTA Image</h4>
                    <Tooltip
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="Your CTA copy should not exceed 24 characters."
                    >
                      <HelpIcon style={{ fontSize: '20px' }} />
                    </Tooltip>
                  </div>
                  <input
                    type="link"
                    placeholder="https://exapmle.com/images/my"
                    className="custom-input" />
                </div>
                <div className='field-2'>
                  <div className='help-2'>
                    <h4 className='input-text-2'>Custom CTA URL</h4>
                  </div>
                  <input
                    type="link"
                    placeholder="www.hubspot.com"
                    className="custom-input" />
                </div>
                <h5 className="copyright">Copyright © 2023 HubSpot, Inc</h5>
              </div>
            </CustomTabPanel>
          </div>
        </Box>
      </Box>
      </div>
    
      <div className='content'>
        <div style={{paddingBottom:'35px',display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
          <img src={logo} className='logo' />
          <form>
            <select id="language" style={{padding:'10px 50px',border:'1px solid white',borderRadius:'120px', color:'white',textAlign:'left', background:'none'}} >
              <option >English</option>
            </select>
          </form>
        </div>
         {/* Render the selected template */}
      {selectedTemplate1 === 'template1' && (
         <Template1 
         img={img}
         selectedColortext={selectedColortext}
         selectedColorlink={selectedColorlink}
         selectedColorCTAtextcolor={selectedColorCTAtextcolor}
         selectedColorCTAcolor={selectedColorCTAcolor}
         selectedFont={selectedFont} 
         fontSize={fontSize}
         selectedColorcolor={selectedColorcolor} 
         lastname={lastname} 
         firstname={firstname} 
         jobtitle={jobtitle} 
         department={department} 
         companyname={companyname} 
         officeno={officeno} 
         mobileno={mobileno} 
         website={website} 
         email={email} 
         address1={address1} 
         address2={address2} 
         address3={address3} 
         address4={address4} 
         linkedin={linkedin} 
         facebook={facebook} 
         twitter={twitter} 
         instagram={instagram} 
         customfield={customfield} 
         cta={cta} 
         ctaurl={ctaurl}
         isSwitchOn={isSwitchOn}>
 
         </Template1>
      )}
      {selectedTemplate1 === 'template2' && (
        <Template2 
        img={img}
        selectedColortext={selectedColortext}
        selectedColorlink={selectedColorlink}
        selectedColorCTAtextcolor={selectedColorCTAtextcolor}
        selectedColorCTAcolor={selectedColorCTAcolor}
        selectedFont={selectedFont} 
        fontSize={fontSize}
        selectedColorcolor={selectedColorcolor} 
        lastname={lastname} 
        firstname={firstname} 
        jobtitle={jobtitle} 
        department={department} 
        companyname={companyname} 
        officeno={officeno} 
        mobileno={mobileno} 
        website={website} 
        email={email} 
        address1={address1} 
        address2={address2} 
        address3={address3} 
        address4={address4} 
        linkedin={linkedin} 
        facebook={facebook} 
        twitter={twitter} 
        instagram={instagram} 
        customfield={customfield} 
        cta={cta} 
        ctaurl={ctaurl}
        isSwitchOn={isSwitchOn}>

        </Template2>
      )}
      {selectedTemplate1 === 'template3' && (
        <Template3 
        img={img}
        selectedColortext={selectedColortext}
        selectedColorlink={selectedColorlink}
        selectedColorCTAtextcolor={selectedColorCTAtextcolor}
        selectedColorCTAcolor={selectedColorCTAcolor}
        selectedFont={selectedFont} 
        fontSize={fontSize}
        selectedColorcolor={selectedColorcolor} 
        lastname={lastname} 
        firstname={firstname} 
        jobtitle={jobtitle} 
        department={department} 
        companyname={companyname} 
        officeno={officeno} 
        mobileno={mobileno} 
        website={website} 
        email={email} 
        address1={address1} 
        address2={address2} 
        address3={address3} 
        address4={address4} 
        linkedin={linkedin} 
        facebook={facebook} 
        twitter={twitter} 
        instagram={instagram} 
        customfield={customfield} 
        cta={cta} 
        ctaurl={ctaurl}
        isSwitchOn={isSwitchOn}>

        </Template3>
      )}
      {selectedTemplate1 === 'template4' && (
        <Template4 
        img={img}
        selectedColortext={selectedColortext}
        selectedColorlink={selectedColorlink}
        selectedColorCTAtextcolor={selectedColorCTAtextcolor}
        selectedColorCTAcolor={selectedColorCTAcolor}
        selectedFont={selectedFont} 
        fontSize={fontSize}
        selectedColorcolor={selectedColorcolor} 
        lastname={lastname} 
        firstname={firstname} 
        jobtitle={jobtitle} 
        department={department} 
        companyname={companyname} 
        officeno={officeno} 
        mobileno={mobileno} 
        website={website} 
        email={email} 
        address1={address1} 
        address2={address2} 
        address3={address3} 
        address4={address4} 
        linkedin={linkedin} 
        facebook={facebook} 
        twitter={twitter} 
        instagram={instagram} 
        customfield={customfield} 
        cta={cta} 
        ctaurl={ctaurl}
        isSwitchOn={isSwitchOn}>

        </Template4>
      )}
      {selectedTemplate1 === 'template5' && (
        <Template5 
        img={img}
        selectedColortext={selectedColortext}
        selectedColorlink={selectedColorlink}
        selectedColorCTAtextcolor={selectedColorCTAtextcolor}
        selectedColorCTAcolor={selectedColorCTAcolor}
        selectedFont={selectedFont} 
        fontSize={fontSize}
        selectedColorcolor={selectedColorcolor} 
        lastname={lastname} 
        firstname={firstname} 
        jobtitle={jobtitle} 
        department={department} 
        companyname={companyname} 
        officeno={officeno} 
        mobileno={mobileno} 
        website={website} 
        email={email} 
        address1={address1} 
        address2={address2} 
        address3={address3} 
        address4={address4} 
        linkedin={linkedin} 
        facebook={facebook} 
        twitter={twitter} 
        instagram={instagram} 
        customfield={customfield} 
        cta={cta} 
        ctaurl={ctaurl}
        isSwitchOn={isSwitchOn}>

        </Template5>
      )}
      {selectedTemplate1 === 'template6' && (
      <Template6 
      img={img}
      selectedColortext={selectedColortext}
      selectedColorlink={selectedColorlink}
      selectedColorCTAtextcolor={selectedColorCTAtextcolor}
      selectedColorCTAcolor={selectedColorCTAcolor}
      selectedFont={selectedFont} 
      fontSize={fontSize}
      selectedColorcolor={selectedColorcolor} 
      lastname={lastname} 
      firstname={firstname} 
      jobtitle={jobtitle} 
      department={department} 
      companyname={companyname} 
      officeno={officeno} 
      mobileno={mobileno} 
      website={website} 
      email={email} 
      address1={address1} 
      address2={address2} 
      address3={address3} 
      address4={address4} 
      linkedin={linkedin} 
      facebook={facebook} 
      twitter={twitter} 
      instagram={instagram} 
      customfield={customfield} 
      cta={cta} 
      ctaurl={ctaurl}
      isSwitchOn={isSwitchOn}>

      </Template6>
      )}
       
       

        
        
        
        
        

      </div>

      
    </div>

      <Footer/>

    </>
  );
};

export default BasicTabs;

// {/* <div className='container'>
//   <div className='header'>
//     <hr style={{border:'none',padding:'.1px', background:'grey'}}/>
//     <div className='header-content'>
//       <p>To: Your Recipient</p>
//       <p>Subject:Check out my new Email Signature</p>
//     </div>
//   </div>

//   <div className='form' style={{ fontFamily: selectedFont,fontSize:fontSize }}>
//     <img src={img} style={{borderRadius:'100px',marginBottom:'20px',color:'red',background:'red',width:'100px',height:'100px'}} />           
//     <hr style={{border:'none',padding:'.1px', background:selectedColorcolor}}/>            
//     <div style={{display:'flex',padding:'20px 0px'}}>             
//       <div style={{lineHeight:'8px',paddingRight:'20px',color:selectedColortext}}>
//         <h3>{firstname || 'John'} {lastname || 'Smith'}</h3>
//         <p>{jobtitle || 'Marketer'}</p>
//         <p>{department || 'Marketing'} | {companyname || 'HubSpot'}</p>
//         <p>{customfield || 'He / Him'}</p>
//       </div>
//       <hr style={{border:'none',padding:'0 .5px', background:selectedColorcolor}} />              
//       <div style={{lineHeight:'0px', color:selectedColortext,paddingLeft:'20px'}}>                 
//             <p style={{textAlign:'left'}}>                   
//               <i className="fa-solid fa-phone" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                    
//               {officeno || '111 222 333'} |{mobileno || '111 222 333'}                      
//             </p>
//             <p style={{textAlign:'left'}}>                   
//               <i className="fa-solid fa-envelope" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                   
//               {email || 'john@smith.com'}                     
//             </p>
//             <p style={{textAlign:'left'}}>                    
//               <i className="fa-sharp fa-solid fa-link" style={{color: selectedColorcolor,paddingRight:'10px'}}></i>                     
//               {website|| 'www.hubspot.com'}
//             </p>
//             <p style={{textAlign:'left'}}>
//               <i className="fa-solid fa-location-dot" style={{color: selectedColorcolor,paddingRight:'10px'}}></i> 
//               {address1 || 'line 1, line 2, line 3, line 4'} {address2} {address3} {address4}
//             </p>
//       </div>           
//     </div>
//     <hr style={{border:'none',padding:'.1px', background:selectedColorcolor}}/>
//     <div style={{display:'flex',paddingTop:'20px',alignItems: 'center',justifyContent: 'space-between'}}>
//       <img src={img} style={{borderRadius:'5px',color:'red',background:'red',width:'130px',height:'30px'}}/>
//       <div style={{fontSize:'larger',paddingRight:'40px'}}>
//         <a href={facebook}><i className="fa-brands fa-facebook" style={{color: selectedColorlink,padding:'4px'}}></i></a>
//         <a href={twitter}><i className="fa-brands fa-twitter" style={{color: selectedColorlink,padding:'4px'}}></i></a>
//         <a href={linkedin}><i className="fa-brands fa-linkedin" style={{color: selectedColorlink,padding:'4px'}}></i></a>
//         <a href={instagram}><i className="fa-brands fa-instagram" style={{color: selectedColorlink,padding:'4px'}}></i></a>
//       </div>                    
//     </div>
//     <div style={{display:'flex',justifyContent: "space-between"}}>
//       <p style={{ display: isSwitchOn ? 'none' : 'block' }}><a href="" style={{color:selectedColortext,textDecoration: 'none'}}>Create Your Own Free Signature</a></p>
//       <button
//         style={{ display: cta ? 'inline-block' : 'none',padding:'15px',border:'none',color: selectedColorCTAtextcolor,background: selectedColorCTAcolor}}
//         onClick={() => { window.location.href = ctaurl}}>
//         {cta}
//       </button>                   
//      </div>
//   </div>

// </div>

// <div style={{paddingTop:'35px',alignItems:'center', display:"flex", justifyContent: 'center'}}>
//   <button onClick={copyDiv} style={{padding:'5px 50px',alignItems:'center', color:'white',background:'#2e475d', border:'none',borderRadius:'8px'}}>
//     <h3> Create signature</h3>
//   </button>
// </div> */}
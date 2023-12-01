import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './Sidebar.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import {Box,  Fade, Slider, Switch } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import Chrome from 'react-color/lib/components/chrome/Chrome';
import template1 from './template1.png';

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

const Sidebar: React.FC = () => {
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
  const [selectedColorCTAcolor, setSelectedColorCTAcolor] = useState('#2e475d'); // Initial color
  const [selectedColorCTAtextcolor, setSelectedColorCTAtextcolor] = useState('#2e475d'); // Initial color

  

  const marks = [
    
    {
      value: 0,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Small</span>,
      
    },
    {
      value: 5,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Medium</span>,
    },
    {
      value: 10,
      label: <span style={{ color: 'white', fontSize: '15px', fontWeight:'bold' }}>Large</span>,
    },
    
  ];
  return (
    
    <>
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
                <Switch {...label} defaultChecked />
              </div>
              <div className='template-type'>
                <h4>Template 1</h4>
                <img src={template1} alt="" className='template1'/>
              </div>
              <div className='template-type'>
                <h4>Template 2</h4>
              </div>
              <div className='template-type'>
                <h4>Template 3</h4>
              </div>
              <div className='template-type'>
                <h4>Template 4</h4>
              </div>
              <div className='template-type'>
                <h4>Template 5</h4>
              </div>
              <div className='template-type'>
                <h4>Template 6</h4>
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
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Last Name</h5>
                <input
                  type="text"
                  placeholder="Smith"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Job Title</h5>
                <input
                  type="text"
                  placeholder="Marketer"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Department</h5>
                <input
                  type="text"
                  placeholder="Marketer"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Company Name</h5>
                <input
                  type="text"
                  placeholder="HubSpot"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Office Phone Number</h5>
                <input
                  type="text"
                  placeholder="111 222 333"

                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Mobile Phone Number</h5>
                <input
                  type="text"
                  placeholder="111 222 333"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Website URL</h5>
                <input
                  type="text"
                  placeholder="www.hubspot.com"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Email Address</h5>
                <input
                  type="text"
                  placeholder="john@smith.com"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Address</h5>
                <input
                  type="text"
                  placeholder="Address line 1"
                  className="custom-input" />
                <input
                  type="text"
                  placeholder="Address line 2"
                  className="custom-input" />
                <input
                  type="text"
                  placeholder="Address line 3"
                  className="custom-input" />
                <input
                  type="text"
                  placeholder="Address line 4"
                  className="custom-input" />
              </div>
              <h4>Enter Your Social Links</h4>
              <div className='field-1'>
                <h5 className='input-text'>LinkedIn</h5>
                <input
                  type="link"
                  placeholder="https://www.linkedin.com"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Facebook</h5>
                <input
                  type="link"
                  placeholder="https://www.facebook.com"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Twitter</h5>
                <input
                  type="link"
                  placeholder="https://www.twitter.com"
                  className="custom-input" />
              </div>
              <div className='field-1'>
                <h5 className='input-text'>Instagram</h5>
                <input
                  type="link"
                  placeholder="https://www.instagram.com"
                  className="custom-input" />
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
                  className="custom-input" />
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
                  <select id="Font" name="fonts">
                    <option value="au">Arial</option>
                    <option value="ca">Courier New</option>
                    <option value="usa">Georgia</option>
                    <option value="usa">Lucida Sans Unicode</option>
                    <option value="usa">Tahoma</option>
                    <option value="usa">Times New Roman</option>
                    <option value="usa">Trebuchet MS</option>
                    <option value="usa">Verdana</option>
                  </select>
                </form>

              </div>
              <div className='slider'>
                <h4>Font Size</h4>
                <Slider
                  sx={{ width: '100%' }}
                  aria-label="Custom marks"
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  style={{ color: 'white' }}
                  step={5}
                  marks={marks}
                  min={0}
                  max={10} />
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
                    placeholder="Find Out More"
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
                <h4>Select CTA Color</h4>
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
    </>
  );
};

export default Sidebar;

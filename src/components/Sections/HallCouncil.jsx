import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../style/HallCouncil.css'
import FacebookIcon from '@mui/icons-material/FacebookSharp';
import hp from '../../assets/img/Hall Council/current/Aditya Verma.jpg'
import ssm from '../../assets/img/Hall Council/current/Dhruv Singhal.jpg'
import tech2122 from '../../assets/img/Hall Council/current/Aditya Verma.jpg'
import socult2122 from '../../assets/img/Hall Council/current/Nishant Gahlaut.jpg'
import sports2122 from '../../assets/img/Hall Council/current/Nitin Baghel.jpg'
import alumni2122 from '../../assets/img/Hall Council/current/Aditya Agrawal.jpg'
import mess2122 from '../../assets/img/Hall Council/current/Sudhanwa Kulkarni.jpg'
import library2122 from '../../assets/img/Hall Council/current/Ishan Goel.jpg'
import maintenance2122 from '../../assets/img/Hall Council/current/Anuj Singh.jpg'
import studentswelfare2122 from '../../assets/img/Hall Council/current/Ashish Gupta.jpg'



import { Fade } from '@mui/material';
import Card from './Card';
import Card2 from './Card2';
import '../../style/Card.css';
import '../../style/index.css';


function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function HallCouncil() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <>
      
        <div className='box'>
          <div className="head">
                <h2 className="text">Hall Council</h2>
          </div>

      
    <Box  sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  style ={{marginTop:"2rem"}}value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="2021-2022" {...a11yProps(0)} />
          <Tab label="2020-2021" {...a11yProps(1)} />
          <Tab label="2019-2020" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
         <div className=" row justify-content-center">
                <Card
                  img={alumni2122}
                  name="Divakar Chauhan"
                  position="Hall President"
                  fb="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                  linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                />
                   
                 <Card
                  img={ssm}
                  name="Dhruv Singhal"
                  position="Second Senate Member"
                  fb="data:image/jpeg;base64,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"
                  linkedin=""
                />
                   
                
            </div>
       
              
               <div className="row justify-content-center">
          
                <Card2
                 img={tech2122}
                  name="Aditya Verma"
                  position="General Secretary Technology"
                  fb="https://www.facebook.com/profile.php?id=100005749835976"
                  linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                />

                 <Card2
                 img={alumni2122}
                  name="Aditya Agrawal"
                  position="General Secretary Alumni Affairs "
                  fb="https://www.facebook.com/adityaagrawal.99/"
                  linkedin="https://www.linkedin.com/in/adityaagrawal99/"
                />

                 <Card2
                 img={socult2122}
                  name="Nishant Gahlaut"
                  position="General Secretary Social and Cultural"
                  fb="https://www.facebook.com/nishantgahlaut.nishantgahlaut.3"
                  linkedin=""
                />

                 <Card2
                 img={sports2122}
                  name="Nitin Baghel"
                  position="General Secretary Sports and Games "
                  fb="https://www.facebook.com/nitin.baghel.92372446"
                  linkedin="https://www.linkedin.com/in/nitin-baghel-b1b3361b1"
                />
   
            </div>
            <div className="row justify-content-center">
          
                <Card2
                 img={maintenance2122}
                  name="Anuj Singh"
                  position="General Secretary Maintenance"
                  fb="https://facebook.com/anuj.changed"
                  linkedin="https://www.linkedin.com/mwlite/in/anuj-singh-9371701b9"
                />

                 <Card2
                 img={studentswelfare2122}
                  name="Ashish Gupta"
                  position="General Secretary Students' Welfare "
                  fb="https://www.facebook.com/profile.php?id=100006281109857"
                  linkedin="https://www.linkedin.com/in/ashishgiitkgp"
                />

                 <Card2
                 img={mess2122}
                  name="Sudhanwa Ganesh Kulkarni"
                  position="General Secretary Mess"
                  fb="https://www.facebook.com/Sudhanwa248330/"
                  linkedin="https://www.linkedin.com/in/sudhanwa-kulkarni-404b0421a/"
                />

                 <Card2
                 img={library2122}
                  name="Ishan Goel"
                  position="General Secretary Library "
                  fb="https://www.facebook.com/ishan.goel.9889"
                  linkedin="https://www.linkedin.com/in/ishan-goel-6377811b9"
                />
           
=======

            </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className=" row justify-content-center">
                <Card
                  img={alumni2122}
                  name="Divakar Chauhan"
                  position="Hall President"
                  fb="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                  linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                />
                   
                 <Card
                  img={sports2122}
                  name="Dhruv Singhal"
                  position="Second Senate Member"
                  fb="data:image/jpeg;base64,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"
                />
                   
                
            </div>
       
              
               <div className="row justify-content-center">
          
                <Card2
                 img={tech2122}
                  name="Aditya Verma"
                  position="General Secretary Technology"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={alumni2122}
                  name="Aditya Agrawal"
                  position="General Secretary Alumni Affairs "
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={socult2122}
                  name="Nishant Gahlaut"
                  position="General Secretary Social and Cultural"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={sports2122}
                  name="Nitin Baghel"
                  position="General Secretary Sports and Games "
                  fb=""
                  linkedin=""
                />
   
            </div>
            <div className="row justify-content-center">
          
                <Card2
                 img={maintenance2122}
                  name="Anuj Singh"
                  position="General Secretary Maintenance"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={studentswelfare2122}
                  name="Ashish Gupta"
                  position="General Secretary Students' Welfare "
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={mess2122}
                  name="Sudhanwa Ganesh Kulkarni"
                  position="General Secretary Mess"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={library2122}
                  name="Ishan Goel"
                  position="General Secretary Library "
                  fb=""
                  linkedin=""
                />
           
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className=" row justify-content-center">
                <Card
                  img={alumni2122}
                  name="Divakar Chauhan"
                  position="Hall President"
                  fb="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                  linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
                />
                   
                 <Card
                  img={sports2122}
                  name="Dhruv Singhal"
                  position="Second Senate Member"
                  fb="data:image/jpeg;base64,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"
                />
                   
                
            </div>
       
              
               <div className="row justify-content-center">
          
                <Card2
                 img={tech2122}
                  name="Aditya Verma"
                  position="General Secretary Technology"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={alumni2122}
                  name="Aditya Agrawal"
                  position="General Secretary Alumni Affairs "
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={socult2122}
                  name="Nishant Gahlaut"
                  position="General Secretary Social and Cultural"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={sports2122}
                  name="Nitin Baghel"
                  position="General Secretary Sports and Games "
                  fb=""
                  linkedin=""
                />
   
            </div>
            <div className="row justify-content-center">
          
                <Card2
                 img={maintenance2122}
                  name="Anuj Singh"
                  position="General Secretary Maintenance"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={studentswelfare2122}
                  name="Ashish Gupta"
                  position="General Secretary Students' Welfare "
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={mess2122}
                  name="Sudhanwa Ganesh Kulkarni"
                  position="General Secretary Mess"
                  fb=""
                  linkedin=""
                />

                 <Card2
                 img={library2122}
                  name="Ishan Goel"
                  position="General Secretary Library "
                  fb=""
                  linkedin=""
                />
           
            </div>
      </TabPanel>
            </Box>
            </div>
            



            
            </>
  );
}

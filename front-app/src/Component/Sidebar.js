import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav
        expanded={this.state.isVisible}
        style={{ backgroundColor: "#ADD8E6",color:'black' }}
      >
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />

        <SideNav.Nav defaultSelected="home">
          <div style={{paddingLeft:'2vh'}}>
            <img src="https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png" alt='logo' style={{ width: '150px', alignItems: "center" }} />
          </div>

         <br/>

          <NavItem eventKey="My Profile">
          
            <NavText style={{paddingLeft:'4vh' }} >
            <a href="/profile" style={{textDecoration:'none',color:'black'}}>
              <b>My Profile</b>
              </a>
              </NavText>
          </NavItem>

          <NavItem eventKey="Countryr">
           
            <NavText style={{color:'black',paddingLeft:'4vh' }}>
              <a href="/acountry" style={{textDecoration:'none',color:'black'}}>
              <b> Country Management</b>
              </a>
            </NavText>
          </NavItem>

          <NavItem eventKey="Qualification ">
           
           <NavText style={{color:'black',paddingLeft:'4vh' }}>
             <a href="/aquali" style={{textDecoration:'none',color:'black'}}>
             <b> Qualification Management</b>
             </a>
           </NavText>
         </NavItem>

         <NavItem eventKey="Job Category ">
           
           <NavText style={{color:'black',paddingLeft:'4vh' }}>
             <a href="/ajobcountry" style={{textDecoration:'none',color:'black'}}>
             <b> Assign Country - Job Category</b>
             </a>
           </NavText>
         </NavItem>

         
          
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;

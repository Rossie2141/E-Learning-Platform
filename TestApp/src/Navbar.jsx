import React, { useState } from 'react';
import {
  CButton,
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'; // Importing the icon
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Tooltip from "@mui/material/Tooltip";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" style={{ backgroundColor: '#459c98', color: 'white' }}>
      <CContainer fluid>
        <CNavbarBrand href="#" style={{ color: 'white' }}>E-Learning</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink href="/home" active style={{ color: 'white' }}>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" style={{ color: 'white' }}>
                Link
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          {/* Add the icon to the rightmost part of the navbar */}
          <CNavItem className="d-flex align-items-center">
            <Tooltip title="Your Account" arrow>
              <PermIdentityIcon style={{ cursor: 'pointer', color: 'white' }} />
            </Tooltip>
          </CNavItem>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;

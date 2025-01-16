import { useState } from "react";
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity"; // Importing the icon
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" style={{ backgroundColor: "#459c98", color: "white" }}>
      <CContainer fluid>
        <CNavbarBrand href="#" style={{ color: "white" }}>
          E-Learning
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink href="/home" active style={{ color: "white" }}>
                Home
              </CNavLink>
            </CNavItem>
            {/* Add dropdown for the avatar */}
            <CDropdown className="d-flex align-items-center">
              <CDropdownToggle
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0",
                }}
              >
                <PermIdentityIcon
                  style={{ cursor: "pointer", color: "white" }}
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/my-courses">My Courses</CDropdownItem>
                <CDropdownItem href="/certifications">Certifications</CDropdownItem>
                <CDropdownItem href="/">Sign Out</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;

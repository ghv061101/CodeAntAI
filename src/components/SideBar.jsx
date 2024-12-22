import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import {
  Bars4Icon,
  ChevronDownIcon,
  HomeIcon,
  CodeBracketIcon,
  CloudIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import logo1 from "../assets/logo1.png"; // Ensure the path is correct

const SideBar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      if (isMobileLocal) {
        setIsMobile(true);
        isMobileRef.current = true;
      } else {
        setIsMobile(false);
        isMobileRef.current = false;
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    borderRight: '1px solid #ddd',
    position: 'relative',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
  };

  const logoTextStyle = {
    fontSize: '1.125rem',
    marginLeft: '8px',
  };

  const mobileToggleStyle = {
    display: 'flex',
  };

  const sidebarContentStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    height: isMobile ? (isSideBarVisible ? 'calc(100vh - 64px)' : '0px') : '100%',
  };

  const sidebarBodyStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '16px',
    height: '100%',
  };

  const userInfoStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  };

  const userInfoTextStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    gap: '8px',
  };

  const navLinksStyle = {
    flexGrow: '1',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const navItemStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: isActive ? 'white' : '#4a4a4a',
    borderRadius: '8px',
    textDecoration: 'none',
    backgroundColor: isActive ? '#1570ef' : 'transparent',
    transition: 'background-color 0.2s',
  });

  const footerLinksStyle = {
    padding: '16px',
  };

  const footerItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    fontSize: '0.875rem',
    color: '#4a4a4a',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  };

  const handleLogout = () => {
    // Trigger logout and navigate to the auth page
    navigate('/'); 
  };

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      <div style={headerStyle}>
        {/* Mobile Toggle */}
        <div style={mobileToggleStyle}>
          <button onClick={() => setIsSideBarVisible(prevState => !prevState)}>
            <Bars4Icon style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>

      {/* Sidebar Content */}
      <div style={sidebarContentStyle}>
        <div style={sidebarBodyStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <img
                src={logo1}
                alt="Logo"
                style={{
                  width: '35.62px', // Decreased logo size
                  height: '40px', // Decreased logo size
                  marginBottom: '15px',
                }}
              />
            </div>
            <div>
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#4B5563',
                  lineHeight: '1.5',
                  marginBottom: '10px',
                }}
              >
                CodeAnt AI
              </span>
            </div>
          </div>
          {/* User Info */}
          <div style={userInfoStyle}>
            <span style={userInfoTextStyle}>
              <span>UtkarshDhairyaPanwar...</span>
              <ChevronDownIcon style={{ width: '20px', height: '20px'}} />
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={navLinksStyle}>
            <a href="#" style={navItemStyle(true)}>
              <HomeIcon style={{ width: '24px', height: '24px', marginBottom: 'px' }} />
              <span style={{ marginLeft: '12px' }}>Repositories</span>
            </a>
            <a href="#" style={navItemStyle(false)}>
              <CodeBracketIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>AI Code Review</span>
            </a>
            <a href="#" style={navItemStyle(false)}>
              <CloudIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>Cloud Security</span>
            </a>
            <a href="#" style={navItemStyle(false)}>
              <BookOpenIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>How to Use</span>
            </a>
            <a href="#" style={navItemStyle(false)}>
              <Cog6ToothIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>Settings</span>
            </a>
          </nav>

          {/* Footer Links */}
          <div style={footerLinksStyle}>
            <a href="#" style={footerItemStyle}>
              <PhoneIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>Support</span>
            </a>
            <a href="" onClick={handleLogout} style={footerItemStyle}>
              <ArrowRightStartOnRectangleIcon style={{ width: '24px', height: '24px' }} />
              <span style={{ marginLeft: '12px' }}>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

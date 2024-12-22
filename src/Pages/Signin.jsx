import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate for React Router v6
import logoFaded from '../assets/logoFaded.png';
import logo1 from '../assets/logo1.png';
import icm from '../assets/icm.png';
import group5 from '../assets/group5.png';
import git1 from '../assets/git1.png';
import bit1 from '../assets/bit1.png';
import azure from '../assets/azure.png';
import gitlab from '../assets/gitlab.png';
import sso from '../assets/sso.png';

// Stats data
const stats = [
    { value: '30+', label: 'Language Support' },
    { value: '10K+', label: 'Developers' },
    { value: '100K+', label: 'Hours Saved' }
];

// Reusable button component with image and text center-aligned
const SignInButton = ({ onClick, text, image, customStyles }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center the content horizontally and vertically
            margin: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            color: '#000',
            fontWeight: "bolder",
            borderRadius: '5px',
            textAlign: 'center',
            width: '100%',
            backgroundColor: '#f4f5f5',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Added transition
            ...customStyles // Applying custom styles
        }}
        onMouseEnter={(e) => e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'} // Mouse hover effect
        onMouseLeave={(e) => e.target.style.boxShadow = 'none'} // Mouse leave effect
    >
        {image && <img src={image} alt={text} style={{ width: '20px', height: '20px', marginRight: '10px' }} />}
        {text}
    </button>
);

// Main SignIn component
function SignIn() {
    const [activeTab, setActiveTab] = useState('saas');  // Set default activeTab to 'saas'
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const signInOptions = {
        saas: [
            { text: 'Sign in with GitHub', image: git1 },
            { text: 'Sign in with Bitbucket', image: bit1 },
            { text: 'Sign in with Azure DevOps', image: azure },
            { text: 'Sign in with GitLab', image: gitlab }
        ],
        selfHosted: [
            { text: 'Sign in with Self-Hosted GitLab', image: gitlab },
            { text: 'Sign in with SSO', image: sso }
        ]
    };

    // Handle button click to redirect to the dashboard
    const handleRedirect = () => {
        navigate('/dashboard'); // Redirect to the dashboard route using navigate
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left half for displaying cards */}
            <div
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    maxWidth: '100%',
                    flexDirection: 'column', // Adjusting layout for smaller screens
                }}
                className="left-section"
            >
                <div
                    style={{
                        width: '672px', // Fixed width of 672px
                        height: '326.34px', // Fixed height of 326.34px
                        position: 'relative',
                    }}
                >
                    {/* Card 1 */}
                    <div
                        style={{
                            width: '447px',
                            height: '100px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            background: 'linear-gradient(145deg, #fff, #f5f5f5)',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            top: '0',
                            left: '20px',
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '8px',
                            }}
                        >
                            <img
                                src={logo1}
                                alt="Logo"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <span
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: '#4B5563',
                                    lineHeight: '1.5',
                                    flex: 1,
                                }}
                            >
                                AI to Detect & Autofix Bad Code
                            </span>
                        </div>

                        {/* Stats */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                textAlign: 'center',
                                gap: '15px',
                                paddingTop: '15px',
                            }}
                        >
                            {stats.map((item, index) => (
                                <div key={index}>
                                    <span
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            display: 'block',
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '0.875rem',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        style={{
                            width: '265px',
                            height: '100px',
                            gap: '0px',
                            borderRadius: '24px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            background: 'linear-gradient(145deg, #fff, #f5f5f5)',
                            position: 'absolute',
                            top: '39.5%',
                            left: '54%',
                            zIndex: 3,
                            padding: '1.5rem',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                bottom: '10%',
                            }}
                        >
                            <img src={icm} alt="icm" />
                            <img src={group5} alt="" />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.2rem',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                Issues Fixed
                            </span>
                            <span
                                style={{
                                    fontSize: '17px',
                                    fontWeight: 'bold',
                                }}
                            >
                                500K+
                            </span>
                        </div>
                    </div>
                </div>

                {/* Faded Logo */}
                <img
                    src={logoFaded}
                    alt="Faded Logo"
                    style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '0',
                        width: '300px',
                        height: '350px',
                        zIndex: 1,
                        opacity: 0.4,
                    }}
                />
            </div>

            {/* Right half for signing in */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                    marginBottom: '20%',
                }}
            >
                {/* Card for Logo and Text */}
                <div
                    style={{
                        width: '80%',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        background: 'linear-gradient(145deg, #fff, #f5f5f5)',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* Adjusted Logo Size */}
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
                    <h2 style={{ fontSize: '1.5rem', color: '#6B7280' }}>
                        Welcome to CodeAnt AI
                    </h2>

                    {/* Tab Buttons */}
                    <div
                        style={{
                            marginTop: '20px',
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                        }}
                    >
                        <button
                            onClick={() => setActiveTab('saas')}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                                backgroundColor: activeTab === 'saas' ? '#1D4ED8' : '#f5f5f5',
                                color: '#000',
                                borderRadius: '5px',
                                border: '2px solid',
                                width: '301px',
                                height: '50px'
                            }}
                        >
                            SaaS
                        </button>
                        <button
                            onClick={() => setActiveTab('selfHosted')}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                                backgroundColor: activeTab === 'selfHosted' ? '#1D4ED8' : '#f6f5f5',
                                color: '#000',
                                borderRadius: '5px',
                                border: '2px solid',
                                width: '301px',
                                height: '50px'
                            }}
                        >
                            Self-Hosted
                        </button>
                    </div>
                </div>

                {/* Card for Sign-In Options */}
                <div
                    style={{
                        width: '590px',
                        height: '326.34px',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {activeTab && (
                        <div style={{ marginTop: '20px', textAlign: 'center', width: '590px', height: '200px' }}>
                            {signInOptions[activeTab].map((option, index) => (
                                <SignInButton key={index} text={option.text} image={option.image} customStyles={{ textAlign: 'center' }} onClick={handleRedirect} />
                            ))}
                        </div>
                    )}
                </div>
                <p style={{ textAlign: 'center' }}>
                    By signing up, you agree to the <a style={{ fontWeight: 'bold' }}>Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
}

export default SignIn;

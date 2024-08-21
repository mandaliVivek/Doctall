
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import img1 from '../assets/ArrowRight.jpg.svg';
import img2 from '../assets/images1.jpg';
import img3 from '../assets/images2.jpg';
import img4 from '../assets/M&C.jpg';
import img5 from '../assets/banner4.jpg';
import img6 from '../assets/banner10.jpg';
import img7 from '../assets/banner11.jpg';
import img8 from '../assets/images3.jpg';
import img9 from '../assets/images4.jpg';
import img10 from '../assets/toggleMenu.jpg.svg';

const Header = () => {
    const [activeInfo, setActiveInfo] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMouseEnter = (item) => setActiveInfo(item);
    const handleMouseLeave = () => setActiveInfo(null);

    const handleDropdownEnter = (dropdown) => setActiveDropdown(dropdown);
    const handleDropdownLeave = () => setActiveDropdown(null);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const DrawerList = (
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Nav className="flex-column p-3" style={{ width: '250px' }}>
                <NavDropdown
                    title="Men's Health"
                    id="men's health-dropdown"
                    show={activeDropdown === 'men'}
                    onMouseEnter={() => {
                        handleMouseEnter('men');
                        handleDropdownEnter('men');
                    }}
                    onMouseLeave={() => {
                        handleMouseLeave();
                        handleDropdownLeave();
                    }}
                >
                    <h5 style={{ color: 'orangered', marginLeft: '10%' }} >Men's Health</h5>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                    <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                        title="Women's Health"
                        id="women's health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'women'}
                        onMouseEnter={() => {
                            handleMouseEnter('women');
                            handleDropdownEnter('women');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Women's Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>PCOS</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Menopause</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Chronic Conditions"
                        id="chronic conditions-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'chronic'}
                        onMouseEnter={() => {
                            handleMouseEnter('chronic');
                            handleDropdownEnter('chronic');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Chronic Conditions</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Thyroid</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Diabetes</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>PCOS</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Kidney Failures</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Liver</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>HIV</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Common Condition"
                        id="common condition-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'common'}
                        onMouseEnter={() => {
                            handleMouseEnter('common');
                            handleDropdownEnter('common');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Common Condition</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Malaria</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Thyroid</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Cold, Cough, or Fever</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>STIs</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Covid 19</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Sexual Health"
                        id="sexual health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'sexual'}
                        onMouseEnter={() => {
                            handleMouseEnter('sexual');
                            handleDropdownEnter('sexual');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Sexual Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>STIs</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>HIV</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Lifestyle & Health"
                        id="lifestyle health-dropdown"
                        className="text-white"
                        style={{ marginleft: '1%' }}
                        show={activeDropdown === 'lifestyle'}
                        onMouseEnter={() => {
                            handleMouseEnter('lifestyle');
                            handleDropdownEnter('lifestyle');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Lifestyle & Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Diabetes"
                        id="diabetes-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        onMouseEnter={() => handleMouseEnter('diabetes')}
                        onMouseLeave={handleMouseLeave}
                    >
                    </NavDropdown>

                    <NavDropdown
                        title="Mother & Child"
                        id="mother & child-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        onMouseEnter={() => handleMouseEnter('motherChild')}
                        onMouseLeave={handleMouseLeave}
                    >
                    </NavDropdown>
            </Nav>
        </div>
    );

    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown
                        title="Men's Health"
                        id="men's health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'men'}
                        onMouseEnter={() => {
                            handleMouseEnter('men');
                            handleDropdownEnter('men');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Men's Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Women's Health"
                        id="women's health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'women'}
                        onMouseEnter={() => {
                            handleMouseEnter('women');
                            handleDropdownEnter('women');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Women's Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>PCOS</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Menopause</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Chronic Conditions"
                        id="chronic conditions-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'chronic'}
                        onMouseEnter={() => {
                            handleMouseEnter('chronic');
                            handleDropdownEnter('chronic');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Chronic Conditions</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Thyroid</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Diabetes</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>PCOS</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Kidney Failures</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Liver</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>HIV</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Common Condition"
                        id="common condition-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'common'}
                        onMouseEnter={() => {
                            handleMouseEnter('common');
                            handleDropdownEnter('common');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Common Condition</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Malaria</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Thyroid</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Cold, Cough, or Fever</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>STIs</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Covid 19</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Sexual Health"
                        id="sexual health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={activeDropdown === 'sexual'}
                        onMouseEnter={() => {
                            handleMouseEnter('sexual');
                            handleDropdownEnter('sexual');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Sexual Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>STIs</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>HIV</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Lifestyle & Health"
                        id="lifestyle health-dropdown"
                        className="text-white"
                        style={{ marginleft: '1%' }}
                        show={activeDropdown === 'lifestyle'}
                        onMouseEnter={() => {
                            handleMouseEnter('lifestyle');
                            handleDropdownEnter('lifestyle');
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            handleDropdownLeave();
                        }}
                    >
                        <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Lifestyle & Health</h5>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hormone & Fertility</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Prostate</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Hair Loss</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premarital Check</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Erectile Dysfunction</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Premature Ejaculation</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Heart & Hypertension</NavDropdown.Item>
                        <NavDropdown.Item href="#" style={{ marginLeft: '7%' }}>Stress Management</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Diabetes"
                        id="diabetes-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        onMouseEnter={() => handleMouseEnter('diabetes')}
                        onMouseLeave={handleMouseLeave}
                    >
                    </NavDropdown>

                    <NavDropdown
                        title="Mother & Child"
                        id="mother & child-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        onMouseEnter={() => handleMouseEnter('motherChild')}
                        onMouseLeave={handleMouseLeave}
                    >
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

            <Button onClick={toggleDrawer(true)} className="drawer-toggle-btn" ><img src={img10} style={{height:'20px' , width: '20px'}} /></Button>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

             {activeInfo && (
                <div className="info-card" style={{ backgroundColor: 'whitesmoke' }}>
                    <h5 style={{ color: 'orangered', fontSize: 'small' }}>SUMMARY</h5>
                    <p>
                        {activeInfo === 'men' && (
                            <>
                                <p style={{ color: 'black' }}>How are you feeling? We all have times when we wonder if <br />
                                    everything is ok with our health - and as men, we're famous <br />
                                    for not checking things out until it's too late. so We offer a <br />
                                    series of packages that can check a wide range of issues <br />
                                    for any man that wants to take control of his health.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }} alt="Arrow"></img></button>
                                <img src={img2} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '10%' }} alt="Men's Health"></img>
                            </>
                        )}
                        {activeInfo === 'women' && (
                            <>
                                <p style={{ color: 'black' }}>How are you feeling today? We all have times when we <br />
                                    wonder if everything is ok with our health, so we offer <br />
                                    a series of packages that can check out a wide range of <br />
                                    issues for any women who wants to take control of their <br />
                                    health.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }} alt="Arrow"></img></button>
                                <img src={img3} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '10%' }} alt="Women's Health"></img>
                            </>
                        )}
                        {activeInfo === 'chronic' && (
                            <>
                                <p style={{ color: 'black' }}>The thyroid is a small gland in your neck that produces <br />
                                    hormones that influence most of your metabolic processes, <br />
                                    body temperature, and heart rate.
                                    <br />
                                    <br />
                                    It is an essential part of your body. There are a variety of <br />
                                    illnesses that can happen when it is not functioning as <br />
                                    planned.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }} alt="Arrow"></img></button>
                                <img src={img7} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }} alt="Chronic Conditions"></img>
                            </>
                        )}
                        {activeInfo === 'common' && (
                            <>
                                <p style={{ color: 'black' }}>Malaria potentially life-threatening disease is spread to <br />
                                    humans by mosquito bites. A single mosquito bite is enough <br />
                                    to become infected with malaria.
                                    <br />
                                    <br />
                                    The good news is that it is preventable and curable,<br />
                                    particularly if treated quickly once symptoms appear.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }} alt="Arrow"></img></button>
                                <img src={img8} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }} alt="Common Illnesses"></img>
                            </>
                        )}
                         {activeInfo === 'sexual' && (
                            <>
                                <p style={{ color: 'black' }}>It is not unusual at any age to occasionally not be able to <br />
                                    achieve an erection but Erectile Dysfunction (ED) is <br />
                                    typically seen in men over 40.
                                    <br />
                                    <br />
                                    Various reasons can cause this, from stress, anxiety,<br />
                                    tiredness, or excessive alcohol intake.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }}></img></button>
                                <img src={img6} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }}></img>
                            </>
                        )}
                        {activeInfo === 'lifestyle' && (
                            <>
                                <p style={{ color: 'black' }}>We offer a series of packages that check out a wide range <br />
                                    of issues for any woman who wants to take control of her <br />
                                    health.
                                    <br />
                                    <br />
                                    Women's wellness tests to ensure all your main body <br />
                                    organs are working properly and check your hormone <br />
                                    levels.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }}></img></button>
                                <img src={img9} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }}></img>
                            </>
                        )}
                        {activeInfo === 'diabetes' && (
                            <>
                                <h2 style={{ color: 'black' }}>Diabetes</h2>
                                <p style={{ color: 'black' }}>While there are different types, diabetes is characterised by <br />
                                    high sugar levels in the blood due to insulin malfunction.It is a <br />
                                    chronic disease, but with lifestyle modifications and medications, <br />
                                    diabetes can be properly managed.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }}></img></button>
                                <img src={img5} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }}></img>
                            </>
                        )}
                        {activeInfo === 'motherChild' && (
                            <>
                                <h2 style={{ color: 'black' }}>Mother and Child</h2>
                                <p style={{ color: 'black' }}>Doctall offer tests to keep you aware of what is happening <br />
                                    with your child's health as well as your own body as a new <br />
                                    mother.</p>
                                <button>READ MORE <img src={img1} style={{ marginLeft: '0%', height: '20px', width: '20px' }}></img></button>
                                <img src={img4} style={{ height: '150px', width: '150px', marginLeft: '62%', marginTop: '1%' }}></img>
                            </>
                        )}
                    </p> 
                </div>
            )}
            </Navbar>
    );
};

export default Header;            

            

















































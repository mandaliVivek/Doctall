
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import img22 from '../assets/abstract.jpg';
import img16 from '../assets/lifestyle&health1.jpg';
import img15 from '../assets/sexualhealth.jpg';
import img14 from '../assets/commonconditions.jpg';
import img13 from '../assets/chronicconditions.jpg';
import img12 from '../assets/HealthyMen.jpg';
import img11 from '../assets/yoga.jpg';
import img9 from '../assets/close.jpg.svg';
import img8 from '../assets/doctall_logo.jpg.svg';
import img7 from '../assets/istockphoto.jpg';
import img1 from '../assets/Medical-icons-19.jpg';
import img from '../assets/ArrowRight.jpg.svg';
import img2 from '../assets/icon.conditions.jpg';
import img3 from '../assets/sexual.icon.jpg';
import img4 from '../assets/lifestyle&health.jpg';
import img5 from '../assets/mother&child.jpg';
import img10 from '../assets/icons8-menu-50.png';
import img18 from '../assets/pwbgimg.jpg';
import img20 from '../assets/factsLooper.jpg.svg';
import img21 from '../assets/Hormone1.jpg';
import img29 from '../assets/Prostate1.jpg';
import img23 from '../assets/HairLoss1.jpg';
import img24 from '../assets/Premarital1.jpg';
import img25 from '../assets/Erectyle1.jpg';
import img26 from '../assets/heart1.jpg';
import img27 from '../assets/Premature1.jpg';
import img28 from '../assets/StressedMan1.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Head.css';


export default function Header() {
    const [state, setState] = React.useState({
        left: false,
    });

    const [showImages, setShowImages] = useState(false);

    const [showMenHealth, setShowMenHealth] = useState(false);
    const [showWomenHealth, setShowWomenHealth] = useState(false);
    const [showChronicConditions, setShowChronicConditions] = useState(false);
    const [showCommonConditions, setShowCommonConditions] = useState(false);
    const [showSexualHealth, setShowSexualHealth] = useState(false);
    const [showLifestyleHealth, setShowLifestyleHealth] = useState(false);


    const toggleShow = (setShow) => {
        setShow(prev => !prev);
    };

    const [dropdownState, setDropdownState] = useState({
        menHealth: false,
        womenHealth: false,
        chronicConditions: false,
        commonCondition: false,
        sexualHealth: false,
        lifestyleHealth: false,
    });

    const handleMouseEnter = (dropdown) => {
        setDropdownState(prevState => ({ ...prevState, [dropdown]: true }));
    };

    const handleMouseLeave = (dropdown) => {
        setDropdownState(prevState => ({ ...prevState, [dropdown]: false }));
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
        setShowImages(open);
    };

    const closeDrawer = () => {
        setState({ ...state, top: true });
        setShowImages(true);
    };

    const handleAppStoreClick = () => {
        window.open("https://doctall.com/heart-and-hypertension", "_blank");
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
        >
            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Men's Health
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Wellness', 'Hormone & Fertility', 'Prostate', 'Hair Loss', 'Premarital Check', 'Erectile Dysfunction', 'Premature Ejaculation', 'Heart & Hypertension', 'Stress Management'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img1} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Women's Health
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Wellness', 'Hormone & Fertility', 'PCOS', 'Hair Loss', 'Premarital Check', 'Heart & Hypertension', 'Menopause', 'Stress Management'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img2} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Chronic Conditions
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Thyroid', 'Diabetes', 'PCOS', 'Kidney Failures', 'Liver', 'HIV', 'Hairloss', 'Prostate', 'Heart & Hypertension', 'Stress Management'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img2} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Common Conditions
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Malaria', 'Typhoid', 'Cold, Cough or Fever', 'Erectile Dysfunction', 'STIs', 'Covid-19',].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img2} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Sexual Health
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Erectile Dysfunction', 'STIs', 'Premature Ejaculation', 'HIV'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img3} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        Lifestyle & Health
                    </AccordionSummary>
                    <AccordionDetails>
                        {['Wellness', 'Nutrition', 'Fitness & Endurance', 'Sport', 'Weight Management', 'Energy & Vigor', 'Stress Management'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={img4} style={{ height: '20px', width: '20px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        Diabetes
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        Mother & Child
                    </AccordionSummary>
                </Accordion>
            </List>
        </Box>
    );

    const [hoveredItem, setHoveredItem] = useState('Wellness');


    const handleMouseEnterItem = (item) => {
        setHoveredItem(item);
    };

    const renderCardContent = () => {
        switch (hoveredItem) {
            case 'Wellness':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        How are you feeling? We all have times when we wonder if <br />
                        everything is ok with our health - and as men, we're famous <br />
                        for not checking things out until it's too late. So we offer a <br />
                        series of packages that can check a wide range of issues <br />
                        for any man that wants to take control of his health.
                    </p>
                );
            case 'Hormone & Fertility':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Hormone imbalances and fertility issues can significantly impact a <br />
                        man's life. Explore our specialized packages to address these <br />
                        concerns and maintain a healthy lifestyle.
                    </p>
                );
            case 'Prostate':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Prostate health is crucial for overall well-being. Our checks help <br />
                        identify any potential issues early, ensuring you remain healthy <br />
                        and active.
                    </p>
                );
            case 'HairLoss':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        The prostate is a small walnut-shaped gland found only in men. <br />
                        It creates a thick fluid that mixes with sperm to create semen.
                        <br />
                        Prostate cancer is one of the leading cancers in men. <br />
                        Therefore regular checks are recommended - especially  <br />
                        once over the age of 50. It also adversely impacts black men, <br />
                        though the reasons for that have not yet been identified. Being <br />
                        obese also increases the risk of developing prostate cancer.
                    </p>
                );
            case 'PreMarital Check':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        If you are getting married, you may want to make sure that you <br />
                        and your partner are aware of any potential health problems <br />
                        that both of you may not already know of.
                        <br />
                        This package of tests provides reassurance and ensures that you <br />
                        are both aware of any potential illnesses that could also impact <br />
                        plans for children. This helps you plan accordingly and have options <br />
                        for your future together.
                    </p>
                );
            case 'Erectile Dysfunction':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Erectile dysfunction (ED) is quite common, typically seen in men over 40.<br />
                        It is not unusual at any age to occasionally not be able to achieve an erection.<br />
                        Various reasons can cause this, from stress, anxiety, tiredness, or excessive <br />
                        alcohol intake.
                        <br />
                        If it happens often, it is worth speaking to a doctor to investigate the cause <br />
                        and discuss potential treatments to resolve the problem.
                    </p>
                );
            case 'Heart & Hypertension':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        High blood pressure is also known as hypertension.<br />
                        Blood pressure is the measure of the force created by <br />
                        pushing blood against the walls of your arteries, which <br />
                        are the major vessels moving blood throughout your body.
                        <br />
                        The measure is made up of two numbers.<br />
                        If your reading is 140/90mmHg or more, you're diagnosed with high blood pressure.<br />
                        Readings between 120/80mmHg - 140/90mmHg mean that you could develop high blood <br />
                        pressure unless you take action to control it.
                    </p>
                );
            case 'Premature Ejaculation':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Like erectile dysfunction, premature ejaculation is experienced <br />
                        by most men occasionally. Research shows that about one in five <br />
                        male adults between 18-59  experience premature ejaculation.
                        <br />
                        If you find that more than half of your sexual encounters result <br />
                        in ejaculating sooner than desired, please book an appointment with <br />
                        one of our doctors. They will investigate and offer various treatment options.
                    </p>
                );
            case 'Stress Management':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        There's no exact medical definition of stress - that's <br />
                        because what causes it and how it affects each person  <br />
                        can be different. It can generally occur when events or <br />
                        different situations put us under pressure. It also relates <br />
                        to our reaction to said pressure.
                    </p>
                );
            default:
                return <p>Hover over an item to see more details.</p>;
        }
    };

    const renderContent = () => {
        switch (hoveredItem) {
            case 'Wellness':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        How are you feeling today? We all have times when we <br />
                        wonder if everything is ok with our health, so we offer<br />
                        a series of packages that can check out a wide range of<br />
                        issues for any women who wants to take control of their<br />
                        health.
                    </p>
                );
            case 'Hormone & Fertility':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Are you concerned that your hormone levels may be <br />
                        causing some other health condition or illness? Do <br />
                        you want to start a family, but you and your partner <br />
                        are experiencing problems conceiving? Let us help you <br />
                        get some clarity and reassurance with these health packages.
                    </p>
                );
            case 'PCOS':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Although we lose between 50-100 hair a day which is very <br />
                        normal, some hair loss can be more severe and permanent.
                        <br />
                        It affects both men and women and can affect generation <br />
                        after generation of the same family but there is help available.
                    </p>
                );
            case 'Hair Loss':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Although we lose between 50-100 hair a day which is very <br />
                        normal, some hair loss can be more severe and permanent.
                        <br />
                        It affects both men and women and can affect generation <br />
                        after generation of the same family but there is help available.
                    </p>
                );
            case 'Premarital Check':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        If you're getting married, you may want to make sure that <br />
                        you and your partner are aware of any potential health problems <br />
                        that both of you may not already know of.
                        <br />
                        This package of tests provides reassurance and ensures that you <br />
                        are both aware of any potential illnesses that could also impact <br />
                        plans for children.
                    </p>
                );
            case 'Heart & Hypertension':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Keeping stress levels at a minimum can help you live a more balanced life. <br />
                        Stress is an automatic physical, mental, and emotional response to a <br />
                        challenging event.
                        <br />
                        While stress is a normal part of everyone's life, managing stress <br />
                        effectively is key to living a healthy life.
                    </p>
                );
            case 'Menopause':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Menopause is a normal part of a woman's life between 45 and 55. <br />
                        When a woman's periods stop - this typically starts with them <br />
                        becoming less frequent over some months or even years before <br />
                        stopping completely.<br />
                        There are also occasions when they stop suddenly.
                    </p>
                );
            case 'Stress Management':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Keeping stress levels at a minimum can help you live a more balanced life.<br />
                        Stress is an automatic physical, mental, and emotional response to a  <br />
                        challenging event.
                        <br />
                        While stress is a normal part of everyone's life, managing stress <br />
                        effectively is key to living a healthy life.
                    </p>
                );
        }
    }

    const Content = () => {
        switch (hoveredItem) {
            case 'Thyroid':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        The thyroid is a small gland in your neck that produces hormones <br />
                        that influence most of your metabolic processes, body temperature, <br />
                        and heart rate.
                        <br />
                        It is an essential part of your body. There are a variety of illnesses <br />
                        that can happen when it is not functioning as planned.
                    </p>
                );
            case 'Diabetes':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        While there are different types, diabetes is characterised by high <br />
                        sugar levels in the blood due to insulin malfunction.
                        <br />
                        It is a chronic disease, but with lifestyle modifications and <br />
                        medications, diabetes can be properly managed.
                    </p>
                );
            case 'PCOS':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        This condition is usually characterised by irregular periods, hair <br />
                        growth in strange places, weight gain, thinning hair, or hair loss <br />
                        on the head.
                        <br />
                        Over half of women affected do not have any symptoms and are diagnosed <br />
                        when they have problems getting pregnant.
                    </p>
                );
            case 'Kidney Failures':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Your kidneys are crucial to keeping you healthy as they <br />
                        remove waste and extra fluid from your body - creating urine <br />
                        that you then pass. They also make hormones that help keep your <br />
                        bones strong and manage your blood pressure.
                    </p>
                );
            case 'Liver':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Your liver is a large body organ that sits on the right side <br />
                        of your belly. Its main job is to help you digest food and  <br />
                        cleanse your body of toxic substances. Some liver problems <br />
                        can be genetic, while others are caused by issues such as  <br />
                        alcohol usage, being overweight, or some viruses.
                    </p>
                );
            case 'HIV':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        HIV stands for Human Immunodeficiency Virus. This means that <br />
                        the virus weakens the immune system and compromises its ability <br />
                        to fight other illnesses. BUT with effective treatment through daily <br />
                        medication, most people have a normal life and can not pass it on to <br />
                        other people.
                    </p>
                );
            case 'Hair Loss':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Although we lose between 50-100 hair a day which is very  <br />
                        normal, some hair loss can be more severe and permanent.
                        <br />
                        It affects both men and women and can affect generation <br />
                        after generation of the same family but there is help available.
                    </p>
                );
            case 'Prostate':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Prostate cancer is one of the most common cancers in men <br />
                        and rarely has any symptoms until it has grown large enough <br />
                        to pressure the urethra that carries urine from the bladder.
                        <br />
                        Some types of prostate cancer grow slowly while others <br />
                        progress aggressively and may require radiation.
                    </p>
                );
            case 'Heart & Hypertension':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        High blood pressure or hypertension rarely has warning signs <br />
                        or symptoms, but it can lead to heart attacks and strokes <br />
                        when left untreated.
                        <br />
                        Your doctor will recommend treatments to bring your blood <br />
                        pressure down depending on your health history.
                    </p>
                );
            case 'Stress Management':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Keeping stress levels at a minimum can help you live a more <br />
                        balanced life. Stress is an automatic physical, mental, and <br />
                        emotional response to a challenging event.
                        <br />
                        While stress is a normal part of everyone's life, managing <br />
                        stress effectively is key to living a healthy life.
                    </p>
                );
        }
    }

    const Common = () => {
        switch (hoveredItem) {
            case 'Malaria':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Malaria potentially life-threatening disease is spread to <br />
                        humans by mosquito bites. A single mosquito bite is enough <br />
                        to become infected with malaria.
                        <br />
                        The good news is that it is preventable and curable, <br />
                        particularly if treated quickly once symptoms appear.
                    </p>
                );
            case 'Typhoid':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Typhoid is a life-threatening bacterial infection spread <br />
                        through contaminated food and water. It is highly contagious <br />
                        and can pass from person to person very quickly.
                    </p>
                );
            case 'Cold, Cough or Fever':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        The common cold is caused by a virus that enters your <br />
                        body through the nose or mouth.
                        <br />
                        It affects your nose and throat, and while it's not <br />
                        life-threatening, the common cold can make you feel <br />
                        dreadful for up to 10 days.
                    </p>
                );
            case 'Erectile Dysfunction':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        It is not unusual at any age to occasionally not be able to <br />
                        achieve an erection but Erectile Dysfunction (ED) is  <br />
                        typically seen in men over 40.
                        <br />
                        Various reasons can cause this, from stress, anxiety, <br />
                        tiredness, or excessive alcohol intake.
                    </p>
                );
            case 'STIs':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        More than 30 different viruses, parasites, and bacteria spread <br />
                        through sexual activity. These sexually transmitted infections <br />
                        (STIs) have specific symptoms and potential treatment routes.
                        <br />
                        Though specific symptoms for each STI vary, the majority of  <br />
                        them affect the genitals of both genders.
                    </p>
                );
            case 'Covid-19':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Coronavirus is an acute infectious illness caused by the  <br />
                        Covid-19 (SARS-CoV-2) virus.
                        <br />
                        Initially identified in China in late December 2019, the <br />
                        disease is capable of causing mild and severe symptoms and, <br />
                        in some cases, death, especially in aged people or those with <br />
                        underlying health conditions.
                    </p>
                );
        }
    }

    const Lifestyle = () => {
        switch (hoveredItem) {
            case 'Wellness':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        We offer a series of packages that check out a wide range <br />
                        of issues for any woman who wants to take control of her health.
                        <br />
                        Women's wellness tests to ensure all your main body organs are <br />
                        working properly and check your hormone levels.
                    </p>
                );
            case 'Nutrition':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        It is essential to nourish your body with food and drinks to <br />
                        stay healthy and function properly.
                        <br />
                        Nutrition is crucial to your survival because it supplies <br />
                        your body with the macro and micronutrients that fuel your <br />
                        body and keeps you fit and strong.
                    </p>
                );
            case 'Fittness & Endurance':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Your endurance level is the rate at which your lungs, heart, <br />
                        and muscles work together when you are exercising.
                        <br />
                        It is essential to know your endurance level and how your <br />
                        cardiorespiratory system functions because it indicates <br />
                        how fit you are.
                    </p>
                );
            case 'Sport':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Staying active with sporting activities has very many health <br />
                        benefits for your body.
                        <br />
                        Engaging in sports makes you physically fit and healthy. It helps <br />
                        to mentally and physically challenge you positively.
                    </p>
                );
            case 'Weight Management':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        These are the deliberate techniques and psychological <br />
                        processes taken to attain and maintain a certain weight. <br />
                        One of the critical factors of weight management is adjustment <br />
                        and change in lifestyle.
                        <br />
                        Eating healthy and exercising are very important to achieving <br />
                        and maintaining the body goal you desire.
                    </p>
                );
            case 'Energy & Vigor':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Doctall provides tests tailored to check your energy levels <br />
                        to help you alleviate stress and manage the risk of health  <br />
                        challenges such as diabetes, cancer, and heart diseases.
                        <br />
                        The package also provides you with energy-boosting vitamins <br />
                        that you need to stay strong, full of energy, and ready to go.
                    </p>
                );
            case 'Stress Management':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Keeping stress levels at a minimum can help you live a more <br />
                        balanced life. Stress is an automatic physical, mental, and <br />
                        emotional response to a challenging event.
                        <br />
                        While stress is a normal part of everyone's life, managing stress <br />
                        effectively is key to living a healthy life.
                    </p>
                );
        }
    }

    const Sexual = () => {
        switch (hoveredItem) {
            case 'Erectile Dysfunction':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        It is not unusual at any age to occasionally not be able to <br />
                        achieve an erection but Erectile Dysfunction (ED) is typically <br />
                        seen in men over 40.
                        <br />
                        Various reasons can cause this, from stress, anxiety, <br />
                        tiredness, or excessive alcohol intake.
                    </p>
                );
            case 'STIs':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        More than 30 different viruses, parasites, and bacteria <br />
                        spread through sexual activity. These sexually transmitted <br />
                        infections (STIs) have specific symptoms and potential  <br />
                        treatment routes.
                        <br />
                        Though specific symptoms for each STI vary, the majority <br />
                        of them affect the genitals of both genders.
                    </p>
                );
            case 'Premature Ejaculation':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        Research shows that about one in five male adults between <br />
                        18-59 experience Premature Ejaculation.
                        <br />
                        If you find that more than half of your sexual encounters <br />
                        result in ejaculating sooner than desired, there are solutions to help.
                    </p>
                );
            case 'HIV':
                return (
                    <p style={{ marginTop: '-130px' }}>
                        HIV means Human Immunodeficiency Virus. This means that <br />
                        the virus weakens the immune system and compromises its <br />
                        ability to fight other illnesses.
                        <br />
                        With effective treatment through daily medication, most <br />
                        people live a normal life and can not pass it on to other people.
                    </p>
                );
        }
    }


    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown
                        title="Men's Health"
                        id="men's-health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={dropdownState.menHealth}
                        onMouseEnter={() => handleMouseEnter('menHealth')}
                        onMouseLeave={() => handleMouseLeave('menHealth')}
                        onClick={() => toggleShow(setShowMenHealth)}
                    >
                        <div className="dropdown-container" style={{ backgroundColor: 'white' }}>
                            <div className="dropdown-items" style={{ width: '643px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-15px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Men's Health</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Wellness')}>Wellness</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hormone & Fertility')}>Hormone & Fertility</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Prostate')}>Prostate</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('HairLoss')}>HairLoss</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('PreMarital Check')}>Premarital Check</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Erectile Dysfunction')}>Erectile Dysfunction</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Premature Ejaculation')}>Premature Ejaculation</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Heart & Hypertension')}>Heart & Hypertension</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Stress Management')}>Stress Management</NavDropdown.Item>
                            </div>

                            <div
                                className="card"
                                style={{
                                    width: '709px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '628px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {renderCardContent()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img12} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>



                    <NavDropdown
                        title="Women's Health"
                        id="women's health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={dropdownState.womenHealth}
                        onMouseEnter={() => handleMouseEnter('womenHealth')}
                        onMouseLeave={() => handleMouseLeave('womenHealth')}
                        onClick={() => toggleShow(setShowWomenHealth)}
                    >
                        <div className="dropdown-container" style={{ backgroundColor: 'white' }}>
                            <div className="dropdown-items" style={{ width: '643px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-162px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Women's Health</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Wellness')}>Wellness</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hormone & Fertility')}>Hormone & Fertility</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('PCOS')}>PCOS</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hair Loss')}>Hair Loss</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Premarital Check')}>Premarital Check</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Heart & Hypertension')}>Heart & Hypertension</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Menopause')}>Menopause</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Stress Management')}>Stress Management</NavDropdown.Item>
                            </div>

                            <div
                                className="card"
                                style={{
                                    width: '709px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '477px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {renderContent()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img11} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>

                    <NavDropdown
                        title="Chronic Conditions"
                        id="chronic conditions-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={dropdownState.chronicConditions}
                        onMouseEnter={() => handleMouseEnter('chronicConditions')}
                        onMouseLeave={() => handleMouseLeave('chronicConditions')}
                        onClick={() => toggleShow(setShowChronicConditions)}
                    >
                        <div className="dropdown-container" style={{ backgroundColor: 'white' }}>
                            <div className="dropdown-items" style={{ width: '643px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-336px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Chronic Conditions</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Thyroid')} >Thyroid</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Diabetes')}>Diabetes</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('PCOS')}>PCOS</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Kidney Failures')}>Kidney Failures</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Liver')}>Liver</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('HIV')}>HIV</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hair Loss')}>Hair Loss</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Prostate')}>Prostate</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Heart & Hypertension')}>Heart & Hypertension</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Stress Management')}>Stress Management</NavDropdown.Item>
                            </div>

                            <div
                                className="card"
                                style={{
                                    width: '709px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '305px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {Content()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img13} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>

                    <NavDropdown
                        title="Common Condition"
                        id="common condition-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={dropdownState.commonCondition}
                        onMouseEnter={() => handleMouseEnter('commonCondition')}
                        onMouseLeave={() => handleMouseLeave('commonCondition')}
                        onClick={() => toggleShow(setShowCommonConditions)}
                    >
                        <div className="dropdown-container" style={{ backgroundColor: 'white' }}>
                            <div className="dropdown-items" style={{ width: '603px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-536px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Common Condition</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Malaria')}>Malaria</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Thyroid')}>Thyroid</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Cold, Cough, or Fever')}>Cold, Cough, or Fever</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Erectile Dysfunction')}>Erectile Dysfunction</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('STIs')}>STIs</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Covid 19')}>Covid 19</NavDropdown.Item>
                            </div>

                            <div
                                className="card"
                                style={{
                                    width: '709px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '112px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {Common()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img14} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>

                    <NavDropdown
                        title="Sexual Health"
                        id="sexual health-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                        show={dropdownState.sexualHealth}
                        onMouseEnter={() => handleMouseEnter('sexualHealth')}
                        onMouseLeave={() => handleMouseLeave('sexualHealth')}
                        onClick={() => toggleShow(setShowSexualHealth)}
                    >
                        <div className="dropdown-container" style={{ backgroundColor: 'white' }}>
                            <div className="dropdown-items" style={{ width: '673px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-736px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Sexual Health</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Erectile Dysfunction')} >Erectile Dysfunction</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('STIs')}>STIs</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Premature Ejaculation')}>Premature Ejaculation</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('HIV')}>HIV</NavDropdown.Item>
                            </div>


                            <div
                                className="card"
                                style={{
                                    width: '690px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '-64px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {Sexual()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img15} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>

                    <NavDropdown
                        title="Lifestyle & Health"
                        id="lifestyle health-dropdown"
                        className="text-white"
                        style={{ marginleft: '1%' }}
                        show={dropdownState.lifestyleHealth}
                        onMouseEnter={() => handleMouseEnter('lifestyleHealth')}
                        onMouseLeave={() => handleMouseLeave('lifestyleHealth')}
                        onClick={() => toggleShow(setShowLifestyleHealth)}
                    >
                        <div className="dropdown-container" style={{ backgroundImage: `url(${img22})`, backgroundSize: 'cover', height: '100%', width: '100%', backgroundColor: 'beige' }}>
                            <div className="dropdown-items" style={{ width: '653px', backgroundImage: `url(${img18})`, height: '600px', marginLeft: '-870px' }}>
                                <h5 style={{ color: 'orangered', marginLeft: '10%' }}>Lifestyle & Health</h5>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Wellness')}  >Wellness</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hormone & Fertility')} >Hormone & Fertility</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Prostate')} >Prostate</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Hair Loss')} >Hair Loss</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Premarital Check')} >Premarital Check</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Erectile Dysfunction')} >Erectile Dysfunction</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Premature Ejaculation')} >Premature Ejaculation</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Heart & Hypertension')} >Heart & Hypertension</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="#" style={{ marginLeft: '7%' }} onMouseEnter={() => handleMouseEnterItem('Stress Management')} >Stress Management</NavDropdown.Item>
                            </div>

                            <div
                                className="card"
                                style={{
                                    width: '711px',
                                    backgroundImage: `url(${img7})`,
                                    backgroundSize: 'cover',
                                    backgroundColor: 'skyblue',
                                    padding: '20px',
                                    color: 'black',
                                    height: '100vh',
                                    marginLeft: '-225px',
                                    marginTop: '-600px',
                                    borderRadius: '0px',
                                }}
                            >
                                <h5 style={{ color: 'orangered' }}>SUMMARY</h5>
                                {Lifestyle()}
                                <button style={{ backgroundColor: 'orangered', color: 'white', width: '30%', borderRadius: '15px', fontSize: 'small', marginTop: '-100px' }} onClick={handleAppStoreClick}>
                                    READ MORE
                                    <img src={img} alt="arrow" style={{ height: '10px', width: '10px' }} />
                                </button>
                                <img src={img16} style={{ height: '250px', width: '250px', marginLeft: '350px', marginTop: '-100px', borderRadius: '25px' }}></img>
                            </div>
                        </div>
                    </NavDropdown>


                    <NavDropdown
                        title="Diabetes"
                        id="diabetes-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                    >
                    </NavDropdown>

                    <NavDropdown
                        title="Mother & Child"
                        id="mother & child-dropdown"
                        className="text-white"
                        style={{ marginLeft: '1%' }}
                    >
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

            <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', color: '#fff' }}>

                <Button onClick={toggleDrawer(true)} className="drawer-toggle-btn">
                    <img src={img10} style={{ height: '20px', width: '20px', color: 'antiquewhite' }} />
                </Button>
                <Drawer
                    anchor='left'
                    open={state.left}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </header>

        </Navbar>
    );
}



import React from 'react';
import './Body.css';
import img from '../assets/ArrowRight.jpg.svg';
import img1 from '../assets/banner4.jpg';
import img2 from '../assets/banner5.jpg';
import img3 from '../assets/banner6.jpg';
import img4 from '../assets/banner7.jpg';
import img5 from '../assets/banner8.jpg';
import img6 from '../assets/banner9.jpg';
import img7 from '../assets/banner10.jpg';
import img8 from '../assets/banner11.jpg';



const DiseaseCard = ({ title, imgSrc, symptoms }) => {

    const handleAppStoreClick = () => {
        window.open("https://doctall.com/heart-and-hypertension", "_blank");
    };

    return (
        <div className="disease-card">
            <h2 style={{fontSize: 'x-large'}}>{title}</h2>
            <ul style={{fontSize: 'xx-small'}}>
                {symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                ))}
            </ul>
            <button onClick={handleAppStoreClick}>Read More  <img src={img} style={{marginLeft: '0%', marginTop: '3%' , height: '12px' , width: '12px'}}></img> </button>
            <img src={imgSrc} alt={title} style={{height: '100px', width: '150px', marginLeft: '130px', marginBottom: '0px'}} />
        </div>
    );
};

const DiseaseGrid = () => {
    const diseases = [
        {
            title: 'Diabetes',
            imgSrc: img1,
            symptoms: [
                'Increased thirst',
                'Blurred vision',
                'Frequent urination',
                'Fatigue/feeling worn out',
                'Unexplained weight loss'
            ]
        },
        {
            title: 'Heart & Hypertension',
            imgSrc: img2,
            symptoms: [
                'Nosebleeds',
                'Changes your vision',
                'Early morning headaches',
                'Buzzing in the ears'
            ]
        },
        {
            title: 'Cold , Cough or Fever',
            imgSrc: img3,
            symptoms: [
                'Sneezing',
                'Sore throat',
                'Faint body aches or a mild headache',
                'Runny or stuffy nose',
                'Cough'
            ]
        },
        {
            title: 'Covid-19',
            imgSrc: img4,
            symptoms: [
                'Fever',
                'Cough',
                'Body aches',
                'Fatigue',
                'Loss of taste & smell'
            ]
        },
        {
            title: 'Kidney Failures',
            imgSrc: img5,
            symptoms: [
                'Blood in urine or even foamy urine',
                'Swollen hands, ankles, and feet',
                'Trouble sleeping',
                'Muscle cramps',
                'Fatigue'
            ]
        },
        {
            title: 'Hair Loss',
            imgSrc: img6,
            symptoms: [
                'Bald patches',
                'Thinning Hair',
                'Sudden loss of hair'
            ]
        },
        {
            title: 'Erectile Dysfunction',
            imgSrc: img7,
            symptoms: [
                'Weak Erection',
                'Low libido',
                'Trouble getting an erection'
            ]
        },
        {
            title: 'Thyroid',
            imgSrc: img8,
            symptoms: [
                'Intolerance to cold temperatures',
                'Gaining or losing significant weight',
                'Muscle weakness and tremors',
                'Having dry and coarse hair',
                'Feeling tired'
            ]
        }
    ];

    return (
        <div>
            <h6 style={{textAlign: 'left' , color: 'orangered' , marginLeft: '5%' , fontFamily: 'Visuelt Pro', fontStyle: 'normal' , fontWeight: 'bold'}}>BROWSE BY DISEASE</h6>
            <br />
            <h2 style={{textAlign: 'left' , marginLeft: '5%'}}>
                Some of the common health concerns that people <br/>
                face and suggestions from specialists
            </h2>

            <div className="disease-grid">
                {diseases.map((disease, index) => (
                    <DiseaseCard key={index} {...disease} />
                ))}
            </div>
        </div>
    );
};

export default DiseaseGrid;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//images
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import api from '../../services/api';

//icons
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//CSS
import './styles.css';

function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response =>{
           const { total } = response.data;
           
           setTotalConnections(total)
        })
    }, [])
 
    return (
        <div id="page-landing">
            <div id="page-landing-content"  className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
 
                <img 
                    className="hero-image"
                    src={landingImg} 
                    alt=""
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="dar aulas" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="purple heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
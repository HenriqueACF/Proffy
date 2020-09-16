import React from 'react'
//Routes
import { Link } from 'react-router-dom'


//ICONS
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

//CSS
import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="" />
                    </Link>
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="header-content">
                    <strong>Estes são os proffys disponíveis.</strong>
                </div>
            </header>
        </div>
    )
}

export default TeacherList;
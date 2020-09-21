import React from 'react';

//ICONs
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
//CSS
import './styles.css';

export interface Teacher{
    id:number
    avatar:string;
    bio:string;
    cost:number
    name:string
    subject:string
    whatsapp: string
}

interface TeacherItemProps{
    teacher:Teacher;
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) =>{
  return(
    <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong> {teacher.name} </strong>
                            <span> {teacher.subject} </span>
                        </div>
                    </header>
                    <p> {teacher.bio} </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong> {teacher.cost} </strong>
                        </p>

                        <a href={`https://wa.me/${teacher.avatar}`}> 
                            <img src={whatsappIcon}/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
  )
}

export default TeacherItem;

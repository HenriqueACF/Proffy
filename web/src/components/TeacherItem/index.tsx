import React from 'react';

//ICONs
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
//CSS
import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/45006908?s=460&u=886c48b82f23b3ff23ede6b03b729a9ad97e803e&v=4" alt="" />
                        <div>
                            <strong>Henrique Assis</strong>
                            <span>Desenvolvimento Frontend</span>
                        </div>
                    </header>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <br/><br/>
                    Pellentesque rhoncus, lectus in facilisis mollis, ligula tellus bibendum dolor, sit amet fermentum risus erat id felis. Nunc egestas nisl odio, a facilisis quam varius vitae. Aliquam sem risus, porta eget

                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$50,00</strong>
                        </p>

                        <button type="button"> 
                            <img src={whatsappIcon}/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
  )
}

export default TeacherItem;

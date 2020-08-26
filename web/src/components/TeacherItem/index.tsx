import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number,
    subject: string,
    cost: number,
    name: string,
    avatar: string,
    whatsapp: number,
    bio: string,
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnections() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}></img>
                <div>
                    <strong>{teacher.name}</strong>
                    <span> {teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>


            <footer>
                <p>
                    Preço/hora
            <strong> {teacher.cost}</strong>
                </p>

                <a target="_blank" onClick={createNewConnections} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="contato" />
                Entrar em Contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
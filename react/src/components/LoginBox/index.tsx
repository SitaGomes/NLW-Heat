import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Container } from './style'

export const LoginBox: React.FC = () => {
    return (
        <Container>
            <strong>Envie e compartilhe sua mensagem</strong>
            
            <a href="#">
                <FaGithub className="icon" />
                Entrar com o Github
            </a>
        
        </Container>
    )
}

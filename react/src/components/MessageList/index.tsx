import React from 'react'

import { Container, UserContainer } from './style'
import LogoImg from '../../assets/svg/logo.svg'

export const MessageList: React.FC = () => {
    return (
        <Container>
            <img src={LogoImg} alt="DoWhile logo" />
 
            <ul>
                <li>
                    {/* Quote */}
                    <p>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>

                    {/* Profile Info */}
                    <UserContainer>
                        <div>
                            <img src="https:github.com/SitaGomes.png" alt="Elon Musk" />
                        </div>
                        <span>Elon Musk</span>
                    </UserContainer>
                </li>
            </ul>

 
        </Container>
    )
}

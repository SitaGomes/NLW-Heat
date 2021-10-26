import styled from "styled-components";
import banner from '../../assets/img/banner-girl.png'

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    background: var(--grey-800) url(${banner}) no-repeat center top; 

    padding: 27.5rem 5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    gap: 2rem;

    strong {
        font-size: 2rem;
        line-height: 2rem;
    }

        
    a {
        
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--grey-800);
        background-color: var(--yellow);
        
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        
        gap: 0.5rem;
        padding: 1rem 40px;

        .icon {
            width: 24px;
            height: 24px;
        }

        &:hover{
            filter: brightness(0.9);
        }

    }


` 
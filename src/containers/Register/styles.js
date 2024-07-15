import styled from "styled-components";
import Background from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RegisterImage = styled.img`
    height: 85%;
`

export const ContainerItens = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0; 
    height: 85%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        text-align: center;
        margin-top: 30px;

        form {
            display: flex;
            flex-direction: column;
        }
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: ${ props => (props.error ? '12px' : '28px')};
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    padding-left: 10px;
`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14;
    line-height: 16px;
    color: #ffffff;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`
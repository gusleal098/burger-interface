import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    padding: 10px;
    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    margin-left: 20px;
    border-bottom: 1px solid #b5b5b5;
    p {
        font-size: 16px;
        color: #b5b5b5;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    width: max-content;
    grid-gap: 10px 15px;

    .image-product {
        border-radius: 10px;
        width: 120px;
    }

    p {
        font-size: 16px;
        color: #000000;
        margin-top: 5px;
    }

    .quantity-container {
        display: flex;
        gap: 20px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        p {
            margin-top: 5px;
        }

        img {
            width: 15px;
            margin-top: 5px;
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';

        .title {
        grid-area: title;
        margin-bottom: 20px;
        }

        .items {
            grid-area: items;
        }

        .items-price {
            grid-area: items-price;
        }

        .delivery-tax {
            grid-area: delivery-tax;
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
        }
    }

    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;
    }
`

export const InputAdress = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background: #373737;
    border-radius: 10px;
    padding: 15px;

    h2 {
        display: flex;
        margin-bottom: 10px;
        color: #ffffff;
    }

    input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: none;
        padding: 10px;
    }

    .number {
        width: 50px;
    }

    select { 
        margin-top: 20px;
        width: 100%;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;

        cursor: pointer;
    }

    select:hover {
        opacity: 0.8;
    }

    label {
        margin-top: 10px;
        color: #ffffff;
    }
`
import React from "react";

import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useCart } from '../../hooks/CartContext'
import {Button} from '../Button'
import { 
    Container,
    Image,
    ProductName,
    ProductPrice
 } 
from "./styles";

export function CardProduct({product}){
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => {
                            putProductInCart(product)
                            // push('/carrinho')
                        }}
                        >Adicionar</Button>
            </div>
        </Container>
    )
}

CardProduct.propTypes = {
    children: PropTypes.object
}
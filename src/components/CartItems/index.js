import React from 'react'

import {useCart} from '../../hooks/CartContext'
import {Container, Header, Body, EmptyCart} from './styles'
import formatCurrency from '../../utils/formatCurrency'
import Trash from '../../assets/trash.png'

export function CartItems(){
    const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()
    console.log(cartProducts)

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
            cartProducts.map( product => (
            <Body key={product.id}>
                <img className='image-product' src={product.url} />
                <p>{product.name}</p>
                <p>{formatCurrency(product.price)}</p>
                <div className='quantity-container'>
                    <button onClick={() => decreaseProducts(product.id)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseProducts(product.id)}>+</button>
                    <button className='button-remove' onClick={() => deleteProducts(product.id)}><img src={Trash} alt="lata-de-lixo"/></button>
                </div>
                <p>{formatCurrency(product.quantity * product.price)}</p>
            </Body>
            ))
                : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                )
        }
        </Container>
    )
}
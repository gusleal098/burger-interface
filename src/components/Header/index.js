import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { useCart } from '../../hooks/CartContext'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'

import {
    Container,
    ContainerLeft,
    PageLink,
    PageLinkExit,
    ContainerRight,
    ContainerText,
    Line,

} from './styles'

export function Header(){
    const { logout, userData } = useUser()
    const {cartProducts} = useCart([])

    const {
        push,
        location: {pathname}
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt='carrinho' />
                    {cartProducts && cartProducts.length > 0 ?
                        cartProducts.map(product => (
                            <p>{product.id}</p>
                        ))
                            : ( <p></p>)
                    }
                    
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt='logo-pessoa' />
                </PageLink>
                <ContainerText>
                    <p>Ola, {userData?.user?.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}
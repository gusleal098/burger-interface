import React from 'react'

import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import LogoutIcon from '@mui/icons-material/Logout'
import listLinks from './menu-list'
import {Container, ItemContainer, ListLink} from './styles'

export function SideMenuAdmin({path}){
    const {logout} = useUser()

    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className='icon'/>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <button>Loja</button>
            <button>Abrir Loja</button>
            <button>Fechar Loja</button>

            <ItemContainer style={{position: 'fixed', bottom: '30px'}}>
                <LogoutIcon style={{color: '#ffffff'}}/>
                <ListLink to="/login" onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    )
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}
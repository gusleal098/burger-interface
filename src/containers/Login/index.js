import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useUser } from '../../hooks/UserContext'

import {Button} from '../../components';
import LoginImg from '../../assets/login-image.png';
import Logo from '../../assets/logo.png';

import {
    Container,
    LoginImage,
    ContainerItens, 
    Label,
    Input,
    SignInLink,
    ErrorMessage
} from './styles';

export function Login() {
    const history = useHistory()
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string()
            .required("A senha é obrigatória")
            .min(6, "A senha deve ter pelo menos 6 caracteres")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (clientData) => {
        try {
            const response = await api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            });

            if (response.status === 200) {
                toast.success('Seja bem-vindo(a)');
                
            } else {
                toast.error('Verifique seu e-mail e senha');
            }

            putUserData(response.data)

            setTimeout(() => {
                history.push('/')
            }, 1000)
            
        } catch (error) {
            if (error.response &&
                (error.response.status === 401 ||
                    error.response.status === 403)
            ) {
                toast.error('Verifique seu e-mail e senha')
            } else {
            console.error('Erro ao fazer login:', error);
            toast.error('Falha ao fazer login. Tente novamente');
            }
        }
    };

    return (
        <Container>
            <LoginImage src={LoginImg} alt='login-image'/>
            <ContainerItens> 
                <img src={Logo} alt='logo-code-burger'/>
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type='password' {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type='submit' style={{ marginTop: 75, marginBottom: 25 }}>Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta?{' '}
                    <Link to="/cadastro">
                    Sign Up
                    </Link>
                </SignInLink>
            </ContainerItens> 
        </Container>
    );
}
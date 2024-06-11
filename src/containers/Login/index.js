import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import LoginImg from '../../assets/login-image.png'
import Logo from '../../assets/logo.png'
import api from '../../services/api'

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    ErrorMessage
} from './styles'

function Login() {
    const users = useUser()

    console.log(users)
    const schema = Yup.object().shape({
        email: Yup.string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
        password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve ter pelo menos 6 digitos")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const response = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }
        )

        console.log(response)
    }

    return (
        <Container>
            <LoginImage src= {LoginImg} alt='login-image'/>
            <ContainerItens>
                <img src={Logo} alt='logo-code-burger'/>
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' {...register("email")}
                    error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type='password' {...register("password")}
                    error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type='submit' style={{ marginTop: 75, marginBottom: 25}}>Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta ? <a>Sign Up</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login
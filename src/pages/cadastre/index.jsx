import React from 'react'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useState } from 'react';
import { useForm} from "react-hook-form";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from  '../../components/Input';
import { Container, Title, Column, TitleCadastre, SubtitleCadastre, AccordTitle, JaTenhoText, LoginText, Row, Wrapper } from './styles';


const Cadastre = () => {

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>               
                <TitleCadastre>Comece agora grátis</TitleCadastre>
                <SubtitleCadastre>Crie sua conta e make the change._</SubtitleCadastre>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name"  control={control} />
                    {errors.name && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />                    
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                <AccordTitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AccordTitle>
                </Row>
                <Row>
                    <JaTenhoText>Já tenho minha conta.</JaTenhoText>
                    <LoginText>Fazer Login</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    );

};

export {Cadastre};
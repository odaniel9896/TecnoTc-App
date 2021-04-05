import React, { useState } from "react";
import { StatusBar, Alert} from "react-native";
import ButtonPurple from "../../components/buttonPurple";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar, EditTextLightGreen } from "../../styles/stylesGlobal";
import { Content, TextInputLogin, Label, TitleLogin, SubtitleLogin, Span, CreateAccount} from "./styles";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login({navigation}) {

    StatusBar.setBackgroundColor(colors.darkPurple);

    return (
        <Container>
            <Content>
                <TitleLogin> Nós somos <EditTextLightGreen> TecnoTc! </EditTextLightGreen> </TitleLogin>
                <SubtitleLogin> Seja bem vindo(a) de volta! </SubtitleLogin>
                <Label> E-mail </Label>
                <TextInputLogin
                    autoCompleteType="email" 
                    placeholder="Digite aqui seu email"
                    placeholderTextColor={colors.lightGrey}/>
                <Label> Senha </Label>
                <TextInputLogin 
                    autoCompleteType="password" 
                    placeholder="Digite aqui sua senha"
                    placeholderTextColor={colors.lightGrey}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true}/>
                <Span> Esqueci a senha </Span>    
                    <ButtonPurple 
                    text="Login"/>
                    {/* //só habilita o botão de entrar se os campos email ou password não estiverem vazios
                    disabled={login.email === "" || login.password === "" } */}
                <CreateAccount> Não tem uma conta? <EditTextLightGreen>Cadastre-se agora!</EditTextLightGreen> </CreateAccount>
            </Content>
        </Container>
    )
}

export default Login;
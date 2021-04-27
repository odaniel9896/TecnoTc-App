import React from "react";
import { StatusBar} from "react-native";
import colors from "../../styles/colors";
import { Container } from "../../styles/stylesGlobal";
import {Content, TitleForgotPassword, ImageForgotPassword, TextForgotPassword, Label, TextInputForgotPassword} from "./styles";
import ImgForgotPassword from "../../../assets/esqueceuSenha.gif";
import ButtonLightGreen from "../../components/buttonLightGreen";

function ForgotPassword() {

    StatusBar.setBackgroundColor(colors.darkPurple);

    return(
        <Container>
            <Content>
                <TitleForgotPassword> Esqueceu sua senha? </TitleForgotPassword>
                <ImageForgotPassword source={ImgForgotPassword} alt="Esqueceu a senha" />
                <TextForgotPassword> 
                    Está tudo bem! Digite seu e-mail abaixo{"\n"} para receber um link e redefinir{"\n"} sua senha!
                </TextForgotPassword>
                <Label> Digite seu e-mail: </Label>
                <TextInputForgotPassword
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={30}
                    placeholder="Digite aqui seu e-mail"
                    placeholderTextColor={colors.lightGrey}/>
                <ButtonLightGreen text="Enviar link de recuperação"/>
            </Content>
        </Container>
    );
}

export default ForgotPassword;
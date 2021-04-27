import React from "react";
import { StatusBar} from "react-native";
import ButtonLightGreen from "../../components/buttonLightGreen";
import colors from "../../styles/colors";
import { Container } from "../../styles/stylesGlobal";
import {Content, TitleNewPassword, ImageNewPassword, TextNewPassword, TextInputNewPassword, Label} from "./styles";
import ImgNewPassword from "../../../assets/novaSenha.gif";

function NewPassword() {

    StatusBar.setBackgroundColor(colors.darkPurple);

    return(
        <Container>
            <Content>
            <TitleNewPassword> Nova Senha </TitleNewPassword>
                <ImageNewPassword source={ImgNewPassword} alt="Esqueceu a senha" />
                <TextNewPassword> 
                    Defina uma senha fácil de lembrar{"\n"} e de alta segurança!
                </TextNewPassword>
                <Label> Nova senha: </Label>
                <TextInputNewPassword
                    autoCompleteType="password"
                    returnKeyType="send"
                    maxLength={30}
                    placeholder="Digite aqui sua nova senha"
                    placeholderTextColor={colors.lightGrey}/>
                <Label> Confirmar senha: </Label>
                <TextInputNewPassword
                    autoCompleteType="password"
                    returnKeyType="send"
                    maxLength={30}
                    placeholder="Confirme aqui sua nova senha"
                    placeholderTextColor={colors.lightGrey}/>    
                <ButtonLightGreen text="Redefinir Senha"/>
            </Content>
        </Container>
    );
}

export default NewPassword;
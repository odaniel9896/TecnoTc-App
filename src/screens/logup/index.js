import React from "react";
import { StatusBar} from "react-native";
import colors from "../../styles/colors";
import ButtonLightGreen from "../../components/buttonLightGreen";
import { Container} from "../../styles/stylesGlobal";
import { Content, TextInputLogup, Label, TitleLogup, EditTextLightGreen, SubtitleLogup, EnterAccount, Span, ImageTeacher, ImageStudent, ImageOther, ContainerImage, ContainerOpcoesUsuario, UserOption} from "./styles";
import imgTeacher from "../../../assets/GifProfessores.gif";
import imgStudent from "../../../assets/GifAlunos.gif";
import imgOther from "../../../assets/GifOutros.gif";

function Logup({navigation}) {

    StatusBar.setBackgroundColor(colors.darkPurple);

    return (
        <Container>
            <Content>
                <TitleLogup> TecnoTc! </TitleLogup>
                <SubtitleLogup> Junte-se à nossa comunidade! </SubtitleLogup>
                <Span> Você é: </Span>
                <ContainerOpcoesUsuario>
                    <ContainerImage>
                        <ImageTeacher source={imgTeacher} alt="Professor"/>
                        <UserOption> Professor </UserOption>
                    </ContainerImage>
                    <ContainerImage>
                        <ImageStudent source={imgStudent} alt="Aluno"/>
                        <UserOption> Aluno </UserOption>
                    </ContainerImage>
                    <ContainerImage>
                        <ImageOther source={imgOther} alt="Outro"/>
                        <UserOption> Outro </UserOption>
                    </ContainerImage>
                </ContainerOpcoesUsuario>
                <Label> Nome completo </Label>
                <TextInputLogup
                    autoCompleteType="name" 
                    placeholder="Digite aqui seu nome completo"
                    placeholderTextColor={colors.lightGrey}/>
                <Label> E-mail </Label>
                <TextInputLogup
                    autoCompleteType="name" 
                    placeholder="Digite aqui seu e-mail"
                    placeholderTextColor={colors.lightGrey}/>
                <Label> Senha </Label>
                <TextInputLogup 
                    autoCompleteType="password" 
                    placeholder="Digite aqui sua senha"
                    placeholderTextColor={colors.lightGrey}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true}/>   
                    <ButtonLightGreen 
                    text="Criar conta"/>
                    {/* //só habilita o botão de entrar se os campos email ou password não estiverem vazios
                    disabled={login.email === "" || login.password === "" } */}
                <EnterAccount> Já possui conta? <EditTextLightGreen>Entre agora!</EditTextLightGreen> </EnterAccount>
            </Content>
        </Container>
    )
}

export default Logup;
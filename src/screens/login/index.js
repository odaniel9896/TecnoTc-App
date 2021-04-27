import React, { useState } from "react";
import { StatusBar, Alert, TouchableOpacity} from "react-native";
import ButtonPurple from "../../components/buttonPurple";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar, EditTextLightGreen } from "../../styles/stylesGlobal";
import { Content, TextInputLogin, Label, TitleLogin, SubtitleLogin, Span, CreateAccount} from "./styles";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login({navigation}) {

    StatusBar.setBackgroundColor(colors.darkPurple);

    const handleReturnRegister = () => {
        navigation.navigate("Logup")
    }

    const [login, setLogin] = useState({
		email: "",
		password: "",
	});

    const handleEmail = (e) => {
		setLogin({ ...login, email: e });
	};

	const handlePassword = (e) => {
		setLogin({ ...login, password: e });
	};

    const handleSubmit = async () => {
		try {

			const response = await api.post("/login", login);

			signIn(response.data);
            console.log("Login realizado com sucesso")
		} catch (error) {
			console.log(error);
			if (error.response) {
				Alert.alert("Ops", error.response.data.error);
			}
		}
	};


    return (
        <Container>
            <Content>
                <TitleLogin> Nós somos <EditTextLightGreen> TecnoTc! </EditTextLightGreen> </TitleLogin>
                <SubtitleLogin> Seja bem vindo(a) de volta! </SubtitleLogin>
                <Label> E-mail </Label>
                <TextInputLogin
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    onChangeText={handleEmail} 
                    placeholder="Digite aqui seu email"
                    placeholderTextColor={colors.lightGrey}/>
                <Label> Senha </Label>
                <TextInputLogin 
                    autoCompleteType="password"
                    returnKeyType="send"
                    maxLength={20}
                    onChangeText={handlePassword} 
                    placeholder="Digite aqui sua senha"
                    placeholderTextColor={colors.lightGrey}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true}/>
                <Span> Esqueci a senha </Span>    
                    <ButtonPurple
                    onPress={handleSubmit}
                    text="Login"/>
                    {/* //só habilita o botão de entrar se os campos email ou password não estiverem vazios
                    disabled={login.email === "" || login.password === "" } */}
                <TouchableOpacity>
                    <CreateAccount> Não tem uma conta? <EditTextLightGreen onPress={handleReturnRegister}>Cadastre-se agora!</EditTextLightGreen> </CreateAccount>
                </TouchableOpacity>
               
            </Content>
        </Container>
    )
}

export default Login;
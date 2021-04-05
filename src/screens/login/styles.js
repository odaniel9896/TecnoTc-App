import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
    height: 75%;
    width: 100%;
    margin-top: auto;
    padding-top: 90px;
    background-color: ${colors.white};
    border-top-left-radius: 180px;
    border-top-right-radius: 180px;
    align-items: center;
`;

export const TitleLogin = styled.Text`
    font-size: 30px;
    color: ${colors.darkPurple};
    font-weight: bold;
`;

export const SubtitleLogin = styled.Text`
    font-size: 18px;
    color: ${colors.darkGray};
    font-weight: bold;
    margin-bottom: 50px;
`;

export const Label = styled(TextDefault)`
    width: 96%;
    align-self: flex-start;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: ${colors.black};
`;

export const TextInputLogin = styled.TextInput`
    width: 90%;
    height: 45px;
    font-size: 18px;
    margin-bottom: 15px;
    padding-left: 20px;
    border-radius: 15px;
    border: 1px solid ${colors.darkPurple};
`;

export const Span = styled.Text`
    font-size: 16px;
    font-weight: bold;
    align-self: flex-end;
    color: ${colors.black};
    left: -15px;
    margin-bottom: 50px;
`;

export const CreateAccount = styled.Text`
    font-size: 16px;
    color: ${colors.darkGray};
    font-weight: bold;
    margin-top: 10px;
`;
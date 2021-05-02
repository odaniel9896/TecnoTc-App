import React from "react";
import colors from "../../../styles/colors";
import { ViewGroup, Container, InfoUser, Background, TitleUserProfile, ImageProfile, NameUser, EmailUser, ButtonProfile, TextButton, ViewNote, ImageGroup, TitleGroup, Group, SettingsGroup, Note, TitleNote, SettingsNote } from "./styles";
import { StatusBar } from "react-native";
import imgBackground from "../../../../assets/backgroundGradiente.png";
import settings from "../../../../assets/settings.png";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function GroupsScreen() {
  return (
    <>
      <ViewGroup>
          <Group>
            <SettingsGroup source={settings}/>
            <ImageGroup/>
            <TitleGroup> nome do grupo </TitleGroup>
          </Group>

          <Group>
            <SettingsGroup source={settings}/>
            <ImageGroup/>
            <TitleGroup> nome do grupo </TitleGroup>
          </Group>
      </ViewGroup>      
    </>
  );
}

function NoteScreen() {
  return (
    <>
      <ViewNote>
        <Note>
          <SettingsNote source={settings}/>
          <TitleNote> titulo da anotação </TitleNote>
        </Note>

        <Note>
          <SettingsNote source={settings}/>
          <TitleNote> titulo da anotação </TitleNote>
        </Note>
      </ViewNote>
    </>
  );
}

function TestScreen() {
  return (
    <>
      <ViewNote>
        <Note>
          <TitleNote> nome do grupo </TitleNote>
        </Note>

        <Note>
          <TitleNote> nome do grupo </TitleNote>
        </Note>
      </ViewNote>
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

function Profile() {

  StatusBar.setBackgroundColor(colors.darkPurple);

  return (
    <>
      <Container>
        <InfoUser>
          <Background source={imgBackground} />
          <TitleUserProfile> Perfil do Usuário </TitleUserProfile>
          <ImageProfile />
          <NameUser> karina soares </NameUser>
          <EmailUser> karina@gmail.com </EmailUser>
          <ButtonProfile>
            <TextButton> Editar Perfil </TextButton>
          </ButtonProfile>
        </InfoUser>
      </Container>
      <Tab.Navigator tabBarOptions={{
            activeTintColor: 'white',
            indicatorStyle: {borderColor: 'white', borderBottomWidth: 4},
          style: {
            backgroundColor: 'transparent',
            }  
          }}>
        <Tab.Screen name="Grupos" component={GroupsScreen} />
        <Tab.Screen name="Anotações" component={NoteScreen} />
        <Tab.Screen name="Teste" component={TestScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Profile;
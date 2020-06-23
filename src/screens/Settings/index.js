import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import * as C from "./styles";
import { StatusBar } from "react-native";

import ListItems from "../../components/ListItems";

export default function Settings() {
  const myAccount = [
    { key: 1, itemTitle: "Meu PicPay", itemValue: "@gustavo.jobstraibizer" },
    { key: 2, itemTitle: "Meu número", itemValue: "(14) 99691-8629" },
    {
      key: 3,
      itemTitle: "Meu e-mail",
      itemValue: "gustavojobs_dev@outlook.com",
    },
  ];

  const promotions = [
    { key: 1, itemTitle: "Conta universitária" },
    { key: 2, itemTitle: "Usar código promocional" },
    {
      key: 3,
      itemTitle: "Convide seus amigos",
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <C.Wrapper>
        <C.Container>
          <C.ContainerUser>
            <FontAwesome name="user-circle-o" size={85} color="#99C09D" />
            <C.UserEmail>@gustavo.jobstraibizer</C.UserEmail>
            <C.UserName>Gustavo Jobstraibizer</C.UserName>

            <C.ProfileViewContainer>
              <C.ProfileView>Ver meu perfil</C.ProfileView>
              <Ionicons
                name="ios-arrow-forward"
                size={18}
                color="#56b970"
                style={{ marginLeft: 2, alignSelf: "flex-end" }}
              />
            </C.ProfileViewContainer>
          </C.ContainerUser>

          <ListItems title={"Minha conta"} items={myAccount} />
          <ListItems title={"Promoções"} items={promotions} />
        </C.Container>
      </C.Wrapper>
    </>
  );
}

import React from "react";
import { FontAwesome } from "@expo/vector-icons";

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

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <C.Wrapper>
        <C.Container>
          <C.Header>
            <C.Title>Ajustes</C.Title>
          </C.Header>

          <C.ContainerUser>
            <FontAwesome name="user-circle-o" size={85} color="#99C09D" />
            <C.UserEmail>@gustavo.jobstraibizer</C.UserEmail>
            <C.UserName>Gustavo Jobstraibizer</C.UserName>

            <C.ProfileView>Ver meu perfil</C.ProfileView>
          </C.ContainerUser>

          <ListItems title={"Minha conta"} items={myAccount} />
        </C.Container>
      </C.Wrapper>
    </>
  );
}

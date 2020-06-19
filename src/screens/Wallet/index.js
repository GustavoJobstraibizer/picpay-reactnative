import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import { Switch } from "react-native";

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethodContainer,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  CardFooter,
  CardFooterTitle,
  Img,
  TicketContainer,
  TicketButton,
  TicketLabel,
} from "./styles";

import creditCard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={() => setIsVisible((prevState) => !prevState)}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={22}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch
          value={useBalance}
          onValueChange={() => setUseBalance((prevState) => !prevState)}
        />
      </UseBalance>

      <PaymentMethodContainer>
        <PaymentMethods>
          <PaymentMethodsTitle>Formas de pagamentos</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>

                <CardInfo>
                  Cadastre seu cartão de crédito para poder fazer pagamentos
                  mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode="contain" />
            </CardBody>

            <CardFooter>
              <AntDesign name="pluscircleo" size={30} color="#0db060" />
              <CardFooterTitle>Adicionar cartão de crédito</CardFooterTitle>
            </CardFooter>
          </Card>

          <TicketContainer>
            <TicketButton>
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#0db060"
              />

              <TicketLabel>Usar código promocional</TicketLabel>
            </TicketButton>
          </TicketContainer>
        </PaymentMethods>
      </PaymentMethodContainer>
    </Wrapper>
  );
}

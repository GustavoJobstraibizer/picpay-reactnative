import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as P from "./styles";
import { Dimensions, Text } from "react-native";
import { TabBar, SceneMap } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./pages/Principal";
import Locais from "./pages/Locais";
import Store from "./pages/Store";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#5BC477" }}
    activeColor="#5BC477"
    inactiveColor="#fff"
    labelStyle={{ textTransform: "capitalize", fontSize: 16 }}
    style={{ backgroundColor: "#000" }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: color ? color : "#fff", fontWeight: "600" }}>
        {route.key == "second" ? (
          <Ionicons
            name={route.icon}
            style={{ fontSize: 18 }}
            color={focused ? "#5BC477" : "#fff"}
          />
        ) : null}

        {route.key == "third" ? (
          <MaterialCommunityIcons
            name={route.icon}
            style={{ fontSize: 18 }}
            color={focused ? "#5BC477" : "#fff"}
          />
        ) : null}
        {route.title}
      </Text>
    )}
  />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function Pay() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Principais" },
    { key: "second", title: "Locais", color: "#5BC477", icon: "md-pin" },
    { key: "third", title: "Store", icon: "store" },
  ]);

  const renderScene = SceneMap({
    first: Principal,
    second: Locais,
    third: Store,
  });

  return (
    <>
      <P.Wrapper>
        <P.Container>
          <P.Header>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color="#10c86e"
            />

            <P.InputWhoPay
              placeholder="Quem você quer pagar?"
              placeholderTextColor="#A0A4AF"
            />
          </P.Header>

          <P.TabPayMent
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </P.Container>
      </P.Wrapper>
    </>
  );
}

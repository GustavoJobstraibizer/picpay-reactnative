import styled from "styled-components";
import { TabView } from "react-native-tab-view";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputWhoPay = styled.TextInput`
  height: 40px;
  background-color: #3b454c;
  border: 2px solid #d0d6e3;
  border-radius: 20px;
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  padding-left: 20px;
`;

export const TabPayMent = styled(TabView)`
  background: #000;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  background: #000;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  color: #88888c;
  margin: 10px 0 10px 15px;
`;

export const ItemContent = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px 20px;
  background: #1f2229;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #3f4045;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ItemValue = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

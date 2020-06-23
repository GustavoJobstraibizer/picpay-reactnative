import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerUser = styled.View`
  background: #000;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;

export const UserEmail = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #959595;
  margin-top: 5px;
`;

export const ProfileViewContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ProfileView = styled.Text`
  color: #56b970;
  font-size: 16px;
`;

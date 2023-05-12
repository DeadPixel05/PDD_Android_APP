// // import styled from 'styled-components';
import React from "react";
import { StyleSheet } from "react-native";
// import Constants from 'expo-constants';

// //Colors
// export const Colors = {
//     primary: '#FFEBEB',
//     secondary: '#ADE4DB',
//     tertiary: '#6DA9E4',
//     brand: '#F6BA6F',

// };

// const { primary, secondary, tertiary, brand } = Colors;

export const StyledContainer = StyleSheet.create({
  view: {
    flex: 1,
    padding: 25,
    // padding-top: {StatusBarHeight + 10}px,
    // background-color: ${primary},
  },
});

// export const InnerContainer = styled.View`
//     flex: 1;
//     width: 100%;
//     align-items: center;
// `;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo_image: {
    width: 250,
    height: 250,
  },

  title_style: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    // color: '#F6BA6F',
  },

  inputBox: {
    width: 380,
    height: 70,
    backgroundColor: "white",

    paddingHorizontal: 16,
    fontSize: 22,
    color: "#2f312c",
    marginVertical: 10,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});

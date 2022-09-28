/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="59px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Footer")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="3.66%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Fira Sans"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        position="absolute"
        bottom="17px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="POC Demo using AWS Amplify Studio"
        {...getOverrideProps(overrides, "POC Demo using AWS Amplify Studio")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        position="absolute"
        bottom="17px"
        right="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2022 Vimal Thapliyal"
        {...getOverrideProps(overrides, "2022 Vimal Thapliyal")}
      ></Text>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { PasEmployees } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function UserProfile(props) {
  const { pasEmployees, overrides, ...rest } = props;
  const vectorOnClick = useDataStoreDeleteAction({
    id: pasEmployees?.id,
    model: PasEmployees,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="10px 13px 15px 13px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserProfile")}
    >
      <View
        width="315px"
        height="5px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Icon
          width="14px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
          paths={[
            {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="3px"
          left="298px"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Image
        width="160px"
        height="160px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        src={pasEmployees?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Fira Sans"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pasEmployees?.name}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Fira Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pasEmployees?.designation}
          {...getOverrideProps(overrides, "Design Engineer at Cloth Studios")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Followers")}
      >
        <MyIcon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="group"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Text
          fontFamily="Fira Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"+91"}${pasEmployees?.mobile}`}
          {...getOverrideProps(overrides, "99 Followers")}
        ></Text>
      </Flex>
      <View
        width="310px"
        height="46px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="162px"
          width="148px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          backgroundColor="rgba(162,184,193,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button34512695")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="0px"
          width="151px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          backgroundColor="rgba(0,177,156,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
      </View>
    </Flex>
  );
}

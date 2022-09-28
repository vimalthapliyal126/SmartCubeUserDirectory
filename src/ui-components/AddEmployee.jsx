/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { PasEmployees } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddEmployee(props) {
  const { pasEmployees, prop, overrides, ...rest } = props;
  const [
    textFieldThreeFourSixZeroTwoSevenSixOneValue,
    setTextFieldThreeFourSixZeroTwoSevenSixOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoSevenSixEightValue,
    setTextFieldThreeFourSixZeroTwoSevenSixEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoSevenSevenFiveValue,
    setTextFieldThreeFourSixZeroTwoSevenSevenFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoSevenEightTwoValue,
    setTextFieldThreeFourSixZeroTwoSevenEightTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoSevenEightNineValue,
    setTextFieldThreeFourSixZeroTwoSevenEightNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoEightOneZeroValue,
    setTextFieldThreeFourSixZeroTwoEightOneZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoEightZeroThreeValue,
    setTextFieldThreeFourSixZeroTwoEightZeroThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoEightOneEightValue,
    setTextFieldThreeFourSixZeroTwoEightOneEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSixZeroTwoEightTwoFiveValue,
    setTextFieldThreeFourSixZeroTwoEightTwoFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const frameFourTwoZeroOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldThreeFourSixZeroTwoSevenSixOneValue,
      employeecode: textFieldThreeFourSixZeroTwoSevenSixOneValue,
      designation: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      sector: textFieldThreeFourSixZeroTwoSevenSixEightValue,
      reportingmanager: textFieldTwoNineSevenSixSixNineTwoFourValue,
      functionhead: textFieldThreeFourSixZeroTwoSevenSevenFiveValue,
      teamhead: textFieldThreeFourSixZeroTwoSevenEightTwoValue,
      hrbp: textFieldThreeFourSixZeroTwoSevenEightNineValue,
      ext: textFieldThreeFourSixZeroTwoEightOneZeroValue,
      mobile: textFieldThreeFourSixZeroTwoEightZeroThreeValue,
      image: textFieldThreeFourSixZeroTwoEightOneEightValue,
      email: textFieldThreeFourSixZeroTwoEightTwoFiveValue,
    },
    model: PasEmployees,
    schema: schema,
  });
  const buttonThreeFourSixZeroTwoEightThreeNineOnClick =
    useDataStoreUpdateAction({
      fields: {
        name: textFieldThreeFourSixZeroTwoSevenSixOneValue,
        employeecode: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        designation: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        sector: textFieldThreeFourSixZeroTwoSevenSixEightValue,
        reportingmanager: textFieldTwoNineSevenSixSixNineTwoFourValue,
        functionhead: textFieldThreeFourSixZeroTwoSevenSevenFiveValue,
        teamhead: textFieldThreeFourSixZeroTwoSevenEightTwoValue,
        hrbp: textFieldThreeFourSixZeroTwoSevenEightNineValue,
        ext: textFieldThreeFourSixZeroTwoEightOneZeroValue,
        mobile: textFieldThreeFourSixZeroTwoEightZeroThreeValue,
        image: textFieldThreeFourSixZeroTwoEightOneEightValue,
        email: textFieldThreeFourSixZeroTwoEightTwoFiveValue,
      },
      id: pasEmployees?.id,
      model: PasEmployees,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddEmployee")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Fira Sans"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pas Employee"
            {...getOverrideProps(overrides, "Add Pas Employee")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <View
          height="550px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="0px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Name"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoSevenSixOneValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoSevenSixOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602761")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="0px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Employee Code"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="94px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Designation"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="94px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Sector"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoSevenSixEightValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoSevenSixEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602768")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="186px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Reporting Manager"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="276px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Team Head"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoSevenEightTwoValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoSevenEightTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602782")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="366px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Ext"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoEightOneZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoEightOneZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602810")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="455px"
            left="0px"
            direction="column"
            width="275px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Your Image url"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoEightOneEightValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoEightOneEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602818")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="186px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Function Head"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoSevenSevenFiveValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoSevenSevenFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602775")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="276px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="HRBP"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoSevenEightNineValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoSevenEightNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602789")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="366px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Mobile Number"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoEightZeroThreeValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoEightZeroThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602803")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="456px"
            left="298px"
            direction="column"
            width="294px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Email Address"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSixZeroTwoEightTwoFiveValue}
            onChange={(event) => {
              setTextFieldThreeFourSixZeroTwoEightTwoFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34602825")}
          ></TextField>
        </View>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourTwoZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            display="flex"
            gap="0"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            backgroundColor="rgba(0,177,156,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeFourSixZeroTwoEightThreeNineOnClick();
            }}
            {...getOverrideProps(overrides, "Button34602839")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

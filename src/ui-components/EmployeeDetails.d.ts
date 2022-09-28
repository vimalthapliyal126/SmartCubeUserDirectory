/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { PasEmployees } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EmployeeDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    pasEmployees?: PasEmployees;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function EmployeeDetails(props: EmployeeDetailsProps): React.ReactElement;

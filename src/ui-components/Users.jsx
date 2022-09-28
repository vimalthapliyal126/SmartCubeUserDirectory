/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { PasEmployees } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import UserProfile from "./UserProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function Users(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.createdAt(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PasEmployees,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="top"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Users")}
    >
      {(item, index) => (
        <UserProfile
          pasEmployees={item}
          height="auto"
          width="auto"
          margin="20px 0 10px 20px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></UserProfile>
      )}
    </Collection>
  );
}

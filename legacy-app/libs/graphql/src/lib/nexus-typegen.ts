/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type { Context } from './context';
import type { core } from 'nexus';

declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void; // "Json";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Json";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateUserInput: {
    // input type
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    firstName: string; // String!
    lastName: string; // String!
  };
}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  BigInt: any;
  Bytes: any;
  DateTime: any;
  Decimal: any;
  Json: any;
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Tenant: {
    // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    name: string; // String!
    shortName: string; // String!
  };
  User: {
    // root type
    authId: string; // String!
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  };
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects;

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars;

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    registerUser: NexusGenRootTypes['User']; // User!
  };
  Query: {
    // field return type
    currentTenant: NexusGenRootTypes['Tenant'] | null; // Tenant
    currentUser: NexusGenRootTypes['User'] | null; // User
    tenants: NexusGenRootTypes['Tenant'][]; // [Tenant!]!
    userById: NexusGenRootTypes['User'] | null; // User
  };
  Tenant: {
    // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    name: string; // String!
    shortName: string; // String!
  };
  User: {
    // field return type
    authId: string; // String!
    birthdate: NexusGenScalars['DateTime']; // DateTime!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    firstName: string; // String!
    fullName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  };
}

export interface NexusGenFieldTypeNames {
  Mutation: {
    // field return type name
    registerUser: 'User';
  };
  Query: {
    // field return type name
    currentTenant: 'Tenant';
    currentUser: 'User';
    tenants: 'Tenant';
    userById: 'User';
  };
  Tenant: {
    // field return type name
    createdAt: 'DateTime';
    id: 'ID';
    name: 'String';
    shortName: 'String';
  };
  User: {
    // field return type name
    authId: 'String';
    birthdate: 'DateTime';
    createdAt: 'DateTime';
    firstName: 'String';
    fullName: 'String';
    id: 'ID';
    lastName: 'String';
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    registerUser: {
      // args
      userInput?: NexusGenInputs['CreateUserInput'] | null; // CreateUserInput
    };
  };
  Query: {
    userById: {
      // args
      id: string; // ID!
    };
  };
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false;
    resolveType: true;
    __typename: false;
  };
};

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}

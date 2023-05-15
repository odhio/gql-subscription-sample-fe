import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
};

export type GetPingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPingQuery = { __typename?: 'Query', ping: string };


export const GetPingDocument = gql`
    query getPing {
  ping
}
    `;

export function useGetPingQuery(options?: Omit<Urql.UseQueryArgs<GetPingQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPingQuery, GetPingQueryVariables>({ query: GetPingDocument, ...options });
};
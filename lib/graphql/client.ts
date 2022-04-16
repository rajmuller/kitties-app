import { GraphQLClient } from "graphql-request";
import { getSdk } from "../../generated/queries.graphql";

export const client = getSdk(
  new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`)
);

import { gql } from "@apollo/client";

export const LOCATION_FIELDS = gql`
  fragment LocationFields on Location {
    id
    name
    type
    dimension
  }
`;

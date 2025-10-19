import { gql } from 'graphql-tag';

export const dogTypeDefs = gql`
  type Dog {
    id: ID!
    name: String!
    breed: String!
  }

  extend type Query {
    dogs: [Dog!]!
    dog(id: ID!): Dog
  }

  extend type Mutation {
    addDog(name: String!, breed: String!): Dog!
  }
`;

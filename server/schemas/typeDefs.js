const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type quality {
    _id: ID!
    name: String!
  }

  type Duration {
    _id: ID!
    sleepHours: String!
    sleepQuality: String!
  }

  type Query {

quality: quality
    Duration(_id: String): [Duration]
  }

  type Mutation {
    createDuration(sleepHours: String!, sleepQuality: String!): Duration
  }
`;

module.exports = typeDefs;

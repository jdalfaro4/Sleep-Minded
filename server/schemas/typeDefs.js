const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Quality {
    _id: ID
    quality: Int
  }

  type Length {
    _id: ID
    hours: Int
  }
  type Duration {
    _id: ID
  }

  type Query {
    quality(_id: ID!): Quality
    length(_id: ID!): Length
    duration(_id: ID!): Duration
  }
  type Mutation {
    createDuration(sleepHours: String!, sleepQuality: String!): Duration
  }
`;

module.exports = typeDefs;

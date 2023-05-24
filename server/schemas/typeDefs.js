const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Quality {
    _id: ID
    quality: Int
  }

  type Duration {
    sleepHours: Int
  }

  type User {
    _id: ID
    email: String
    duration: Duration
    quality: Quality
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    quality(_id: ID!): Quality
    duration(_id: ID!): Duration
  }

  type Mutation {
     addUser(email: String!, password: String!): Auth
    createDuration(sleepHours: Int!): Duration
    createQuality(quality: Int!): Quality
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

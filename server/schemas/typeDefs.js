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

  type User{
    _id: ID
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    quality(_id: ID!): Quality
    length(_id: ID!): Length
    duration(_id: ID!): Duration
  }
  type Mutation {
    addUser(email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    createDuration(sleepHours: String!, sleepQuality: String!): Duration
  }
`;

module.exports = typeDefs;

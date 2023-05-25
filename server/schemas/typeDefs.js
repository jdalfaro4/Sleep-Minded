const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    email: String
    quality: Int
    sleepHours: Int
    user_id: User
  }

  type SleepInstance {
    _id: ID
    quality: Int
    sleepHours: Int
    createdAt: String
    user_id: User
    }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: User
user(email: String!):User
sleepInstance(email: String): [SleepInstance]
me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addSleepInstance(quality: Int!, sleepHours: Int!): SleepInstance
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


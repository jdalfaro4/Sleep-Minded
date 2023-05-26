import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      email
      sleepInstance {
        quality
        sleepHours
        createdAt
      }
    }
  }
`;

export const QUERY_SLEEPINSTANCE = gql`
  query getSleepInstance {
    sleepInstance {
      _id
      quality
      sleepHours
      createdAt
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      sleepInstance {
        quality
        sleepHours
        createdAt
      }
    }
  }`



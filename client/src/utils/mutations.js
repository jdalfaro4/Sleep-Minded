import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      email
    }
  }
`;

export const ADD_DURATION = gql`
  mutation AddDuration($sleepHours: String!) {
    addDuration(sleepHours: $sleepHours) {
      duration {
        sleepHours
      }
    }
  }
`;

export const ADD_QUALITY = gql`
  mutation AddQuality($sleepQuality: String!) {
    addQuality(sleepQuality: $sleepQuality) {
      quality {
        sleepQuality
      }
    }
  }
`;
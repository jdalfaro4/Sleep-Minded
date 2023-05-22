import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
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
  mutation addDuration($sleepHours: String!) {
    addDuration(sleepHours: $sleepHours) {
      duration {
        sleepHours
      }
    }
  }
`;

export const ADD_QUALITY = gql`
  mutation addQuality($sleepQuality: String!) {
    addQuality(sleepQuality: $sleepQuality) {
      quality {
        sleepQuality
      }
    }
  }
`;
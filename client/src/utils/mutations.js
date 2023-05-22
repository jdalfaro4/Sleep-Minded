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

export const CHANGE_DURATION = gql`
  mutation changeDuration($sleepHours: String!, $sleepQuality: String!) {
    changeDuration(sleepHours: $sleepHours, sleepQuality: $sleepQuality) {
      duration {
        sleepHours
        sleepQuality
      }
    }
  }
`;

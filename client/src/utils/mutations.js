import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      _id
      email
    }
  }
`;

export const ADD_DURATION = gql`
  mutation AddDuration($sleepHours: Int!) {
    addDuration(sleepHours: $sleepHours) {
      duration {
        sleepHours
        _id
      }
    }
  }
`;

export const ADD_QUALITY = gql`
  mutation AddQuality($sleepQuality: Int!) {
    addQuality(sleepQuality: $sleepQuality) {
      quality {
        sleepQuality
        _id
      }
    }
  }
`;

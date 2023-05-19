import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
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

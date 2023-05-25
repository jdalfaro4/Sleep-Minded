import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_SLEEP_INSTANCE_MUTATION = gql`
  mutation AddSleepInstance($sleepHours: Int!) {
    addSleepInstance(sleepHours: $sleepHours) {
      sleepDuration
    }
  }
`;



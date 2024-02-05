import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      name
    }
  }
`;

export const DOG_FACT = gql`
  query DogFact {
    dogFact {
      facts
      success
    }
  }
`;

export const DOG_IMAGE = gql`
  query DogImage {
    dogImage {
      message
      status
    }
  }
`;

export const GET_ACCESS_LOGS = gql`
  query AccessLogs {
    accessLogs {
      timestamp
      userId
      method
      query
      statusCode
      path
    }
  }
`;

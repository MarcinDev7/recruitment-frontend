import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
  query Users {
    users {
      name
    }
  }
`;

export const GET_DOG_FACT_QUERY = gql`
  query DogFact {
    dogFact {
      facts
      success
    }
  }
`;

export const GET_DOG_IMAGE_QUERY = gql`
  query DogImage {
    dogImage {
      message
      status
    }
  }
`;

export const GET_ACCESS_LOGS_QUERY = gql`
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

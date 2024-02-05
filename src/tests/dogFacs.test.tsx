import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import DogFact, { DogFactLoading } from "../components/DogFacts/DogFact";
import { GET_DOG_FACT_QUERY } from "../graphql/queries";

const mocks = [
  {
    request: {
      query: GET_DOG_FACT_QUERY,
    },
    result: {
      data: {
        dogFact: { facts: "Some fact" },
      },
    },
  },
];
it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DogFact />
    </MockedProvider>
  );
  expect(await screen.findByText(DogFactLoading)).toBeInTheDocument();
});

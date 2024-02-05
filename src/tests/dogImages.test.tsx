import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import DogImage, { DogImageLoading } from "../components/DogImages/DogImage";
import { GET_DOG_IMAGE_QUERY } from "../graphql/queries";

const imgSource =
  "https://images.dog.ceo/breeds/setter-gordon/n02101006_1707.jpg";

const mock = {
  delay: Infinity,
  request: {
    query: GET_DOG_IMAGE_QUERY,
  },

  result: {
    error: undefined,
    data: {
      dogImage: {
        message: imgSource,
        status: "success",
      },
    },
  },
};

it("renders loading", async () => {
  render(
    <MockedProvider mocks={[{ ...mock, delay: Infinity }]} addTypename={false}>
      <DogImage />
    </MockedProvider>
  );
  expect(await screen.findByText(DogImageLoading)).toBeInTheDocument();
});

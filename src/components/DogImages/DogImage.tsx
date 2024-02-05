import React from "react";
import { GET_DOG_IMAGE_QUERY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

export const DogImageLoading = "Dog image loading...";

export default function DogImage() {
  const { loading, data, error } = useQuery(GET_DOG_IMAGE_QUERY);
  if (loading) return <p>{DogImageLoading}</p>;
  if (error) return <p>{error?.message ?? "Error"}</p>;
  return (
    data.dogImage && (
      <img
        alt="Dog"
        style={{ maxHeight: 500, maxWidth: 500 }}
        src={data.dogImage.message}
      />
    )
  );
}

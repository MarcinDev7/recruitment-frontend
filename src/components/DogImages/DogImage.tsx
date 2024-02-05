import React from "react";
import { DOG_IMAGE } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

export default function DogImage() {
  const { loading, data, error } = useQuery(DOG_IMAGE);

  return (
    data && (
      <div>
        <img
          alt="Dog"
          style={{ maxHeight: 500, maxWidth: 500 }}
          src={data.dogImage.message}
        ></img>
      </div>
    )
  );
}

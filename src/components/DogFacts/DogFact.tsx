import { useQuery } from "@apollo/client";
import React from "react";
import { GET_DOG_FACT_QUERY } from "../../graphql/queries";

export const DogFactLoading = "Loading fact";

export default function DogFact() {
  const { loading, data, error } = useQuery(GET_DOG_FACT_QUERY);
  if (loading) return <p>{DogFactLoading}</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {data.dogFact.facts.map((fact: string, index: number) => (
        <p key={index}>{fact}</p>
      ))}
    </div>
  );
}

import { useQuery } from "@apollo/client";
import React from "react";
import { DOG_FACT } from "../../graphql/queries";

export default function DogFact() {
  const { loading, data, error } = useQuery(DOG_FACT);
  if (loading) return <p>Loading fact</p>;
  return (
    <div>
      {data.dogFact.facts.map((fact: string, index: number) => (
        <p key={index}>{fact}</p>
      ))}
    </div>
  );
}

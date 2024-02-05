import { useAuth0 } from "@auth0/auth0-react";
import DogImage from "./DogImages/DogImage";
import DogFact from "./DogFacts/DogFact";

const MainPage: React.FunctionComponent = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <DogImage />
      <DogFact />
    </div>
  );
};
export default MainPage;

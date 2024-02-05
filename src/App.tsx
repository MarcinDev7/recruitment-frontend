import { Routes, Route } from "react-router-dom";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import MainPage from "./components/MainPage";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <WithToken>
      <Routes>
        <Route
          path="*"
          element={
            <AuthenticationGuard
              component={() => <MainPage />}
            ></AuthenticationGuard>
          }
        />
      </Routes>
    </WithToken>
  );
}

export default App;
function WithToken({ children }: { children: JSX.Element }) {
  const { isLoading, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    getAccessTokenSilently().then((token) => {
      localStorage.setItem("token", token);
    });

    return () => {};
  }, []);

  if (isLoading) return <PageLoader />;

  return <>{children}</>;
}

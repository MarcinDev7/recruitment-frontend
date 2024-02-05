import { ApolloProvider, createHttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as ReactDOM from "react-dom/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

import { Auth0ProviderWithNavigate } from "./components/AuthProviderWithNavigate";
import App from "./App";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_AUTH0_AUDIENCE,
});
const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_AUTH0_AUDIENCE,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

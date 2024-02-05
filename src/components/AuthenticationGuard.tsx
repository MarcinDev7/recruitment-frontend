import { withAuthenticationRequired } from "@auth0/auth0-react";
import PageLoader from "./PageLoader";

export const AuthenticationGuard = (props: {
  component: React.FunctionComponent;
}) => {
  const Component = withAuthenticationRequired(props.component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};

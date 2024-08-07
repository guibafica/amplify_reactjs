import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator
      loginMechanisms={["email"]}
      socialProviders={["amazon", "apple", "facebook", "google"]}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

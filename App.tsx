import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./routes/AppNavigator";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: `https://api-apeast.graphcms.com/v1/ck78wmzj1203401dv0dbjd45g/master`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiMGQxYmVkYmYtYjZhZS00ZDY4LTk0YzItZTA5ODFiMzBiYmE3IiwiaWF0IjoxNTgzMDYyMzkyLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.zixw9jU5L8xw2NEhKIgFMn43NpDQe_XaSTVIiKEtrd1cUQgnZk2Klze_BHqIa5FT6jDBwNnkHsthLGyj3IOuJfA9Cj2gQIPWVf1Q0PJTRbLZ4XKjEghwCwYNnBUZj2f8zNytaagVH3EH6jic_4aUNpzXc2XBFOaVB2aHzmZ6yXWblD_NtnzqpY3AqudyPASlX1juH1vIg3ARzk9hFSmJrVUvj7n4r36owkdX5ZYuWZuf6whrKPi26hhr6pJ-ATMeSHByaRr_Hg6BE54HmL_j9L6rW_go59ZaSWJzitH9suM0oOKTomGt8MxuNeuSxnf_myjAmLB-uFeyldjZ49fgqY00k_yCQi7xM0NwImXl7kt7qJYwoGVuXV2h3oLv8mGB4WE5IVH569EjxSpPajM4HLP7tDImnhJ6KdEtfMXypEWOCwMaFdK8EZRb5IWKtnNE0H-_srytsZdA7Rt4H9UhbL9W-_dAYuc0CmiNQn8ReizlBYjW_sGpgPlIVgzd4Q2oWT4FtLBJ5efZ2shVADaAEzeLxrjk3dEEIQYCf8WzpPXqCghgpkP6KkthcZqVQbap3N-i64hVAC1Krkmwr5abyEzElFkyzRaISzOjiXQ0Zd323PCV2KFzd_PHHXjQmT1veT1thSHzBQVfCAZZ7ZrJ1ovhFQYD9ZsldW8e1yDNBaQ`,
  },
});

const initialState = {
  action: "",
  name: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;

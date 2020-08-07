import React from "react";
import ReactDOM from "react-dom";
import Client from "shopify-buy";
import HttpsRedirect from "react-https-redirect";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById("root")
);

const client = Client.buildClient({
  storefrontAccessToken: "1df5ee877c2a440b12d7055b3a4c4aaa",
  domain: "poly-nation-market.myshopify.com",
});

console.log(client);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App client={client} />, document.getElementById("root"));

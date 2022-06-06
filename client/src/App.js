import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import "./App.css";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from "./SpaceX_Logo.png";
import Footer from "./components/Footer";


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          ></img>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Launches />}></Route>
              <Route
                exact
                path="/launch/:flight_number"
                element={<Launch />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </React.Fragment>
      
    </ApolloProvider>
  );
}

export default App;

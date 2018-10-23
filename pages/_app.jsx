import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import WithApollo from "../lib/withApollo";
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}
export default WithApollo(MyApp);

import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
export default withApollo(
  () =>
    new ApolloClient({
      uri: "https://api.graph.cool/simple/v1/cjlnt6k8u0e3a0158hipjjdg8"
    })
);

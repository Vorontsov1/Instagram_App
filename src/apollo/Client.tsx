import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

interface IClient { 
    children: React.ReactNode;
}

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",       
    cache: new InMemoryCache(),
});

const Client = ({ children }: IClient) => {
    return <ApolloProvider client={ client }>{ children }</ApolloProvider>;
};


export default Client;
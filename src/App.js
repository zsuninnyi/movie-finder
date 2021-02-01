import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Main from './components/Main'
import Header from './components/Header'
import { GRAPHQL_API_URL } from './config'

const App = () => {
    const clientParam = { uri: GRAPHQL_API_URL }
    const client = new ApolloClient(clientParam)
    return (
        <ApolloProvider client={client}>
            <Header />
            <Main />
        </ApolloProvider>
    )
}

export default App

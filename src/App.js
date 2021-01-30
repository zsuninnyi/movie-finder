import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Main from './components/Main'
import Header from './components/Header'

const App = () => {
    const clientParam = { uri: 'https://tmdb.apexlab.io/graphql' }
    const client = new ApolloClient(clientParam)
    return (
        <ApolloProvider client={client}>
            <Header />
            <Main />
        </ApolloProvider>
    )
}

export default App

const { ApolloServer, gql } = require('apollo-server');
const { sequelize } = require('./models');

// The GraphQL schema
const typeDefs = require('./graphql/typeDevs');

// A map of functions which return data for the schema.
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
    sequelize
        .authenticate()
        .then(() => console.log('Database connected!!'))
        .catch((err) => console.log(err))

});

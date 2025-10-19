import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { driver } from './neo4jDriver';
import { APOLLO_PORT } from './config';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { typeDefs as schemaArray } from './schema';
import { resolvers as resolverArray } from './resolvers';

async function startServer() {
  const typeDefs = mergeTypeDefs(schemaArray);
  const resolvers = mergeResolvers(resolverArray);

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
  });

  const schema = await neoSchema.getSchema();

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ req }),
    listen: { port: APOLLO_PORT || 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});

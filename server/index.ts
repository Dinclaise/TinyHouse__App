require('dotenv').config();

import { connectDatabase } from './src/database';
import express, {Application} from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/graphql';


const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });

    server.applyMiddleware({ app, path: '/api' });
    app.listen(process.env.PORT);

    console.log(`[app] : http://localhost:${port}`);

    const listings = await db.listings.find({}).toArray();
    console.log(listings)
}

mount(express());
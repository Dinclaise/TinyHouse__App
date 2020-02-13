import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from "graphql";

const Listing = new GraphQLObjectType({
    name: 'Listing',
    fields: {
        id : { type: GraphQLID},
        title: { type: GraphQLString },
        image: {  type: GraphQLString },
        address: {  type: GraphQLString },
        price: { type: GraphQLInt },
        numOfGuests: { type: GraphQLInt },
        numOfBeds: { type: GraphQLInt },
        numOfBaths: { type: G
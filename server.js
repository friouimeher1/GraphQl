import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
//body-parser :is middleware to parse json wherever query or mutation 
import bodyParser from 'body-parser';
import schema from './schema.js';
const server = express();


// this is use for get graphiql editor to show up in the browser
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));


server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(4000, () => {
    console.log('listening on port 4000');
});
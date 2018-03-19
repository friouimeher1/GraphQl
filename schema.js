import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolvers.js'
const typeDefs = `type User {
    id: Int
    age: Int
    name: String
    books: [String]
    gender:String
}
    type Query {
        users: [User]
        user(id: Int): User
    }
`; 

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;
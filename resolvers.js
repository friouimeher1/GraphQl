const users = [{
    id: 21,
    name: "Target",
    age: 50,
    books: ["Best", "Target"],
    gender:'male'
}, {
    id: 34,
    name: "Tunisie",
    age: 60,
    books: ["Best", "Cool"],
    gender:'famle'
    
}
]
const resolvers = {
    Query: {
        users: () => {
            return users
        },
        user: (root, {id}) => {
            return users.find(author => user.id === id);
        }
    }
}

export default resolvers;
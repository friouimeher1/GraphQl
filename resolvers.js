const authors = [{
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
        authors: () => {
            return authors
        },
        author: (root, {id}) => {
            return authors.find(author => author.id === id);
        }
    }
}

export default resolvers;
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const books = [
  {
    id: '1',
    name: 'To Kill a Mockingbird',
    genre: 'Classic',
    authorId: '1',
  },
  {
    id: '2',
    name: '1984',
    genre: 'Science Fiction',
    authorId: '2',
  },
  {
    id: '3',
    name: 'Pride and Prejudice',
    genre: 'Romance',
    authorId: '3',
  },
  {
    id: '4',
    name: 'The Great Gatsby',
    genre: 'Classic',
    authorId: '4',
  },
  {
    id: '5',
    name: 'The Hobbit',
    genre: 'Fantasy',
    authorId: '5',
  },
  {
    id: '6',
    name: "Harry Potter and the Sorcerer's Stone",
    genre: 'Fantasy',
    authorId: '1',
  },
  {
    id: '7',
    name: 'To the Lighthouse',
    genre: 'Modernist',
    authorId: '2',
  },
  {
    id: '8',
    name: 'The Catcher in the Rye',
    genre: 'Coming-of-age',
    authorId: '3',
  },
  {
    id: '9',
    name: 'Brave New World',
    genre: 'Science Fiction',
    authorId: '4',
  },
  {
    id: '10',
    name: 'Crime and Punishment',
    genre: 'Psychological Thriller',
    authorId: '5',
  },
];

const authors = [
  {
    id: '1',
    name: 'Harper Lee',
    age: 89,
  },
  {
    id: '2',
    name: 'George Orwell',
    age: 46,
  },
  {
    id: '3',
    name: 'Jane Austen',
    age: 41,
  },
  {
    id: '4',
    name: 'F. Scott Fitzgerald',
    age: 44,
  },
  {
    id: '5',
    name: 'J.R.R. Tolkien',
    age: 81,
  },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log({ parent, args });
        return authors.find((author) => author.id === parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return books.filter((book) => book.authorId === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log({ parent, args });
        return books.find((book) => book.id === args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return authors.find((author) => author.id === args.id);
      },
    },
  }),
});

module.exports = {
  schema: new GraphQLSchema({
    query: RootQuery,
  }),
};

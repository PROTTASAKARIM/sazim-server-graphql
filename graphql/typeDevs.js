const { gql } = require('apollo-server');
module.exports = gql`
type Product{

    title: String!
    categories: String!
    description: String!
    price: String!
    rent: String!
    rentoption: String!
    email: String!
    
}

  type Query {
    "A simple type for getting started!"
    getProducts:[Product]!
  }
  type Mutation{
    addProducts(title: String!
    categories: String!
    description: String!
    price: String!
    rent: String!
    rentoption: String!
    email: String!): [Product]!

    updateProducts(title: String!
    categories: String!
    description: String!
    price: String!
    rent: String!
    rentoption: String!
    email: String!): [Product]!

    deleteProducts(id:String!):[Product]!
  }
`
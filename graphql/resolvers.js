const { Products } = require('../models')

module.exports = {
    Query: {
        getProducts: async () => {
            try {
                const products = await Products.findAll();

                return products
            } catch (err) {
                console.log(err)
            }

        },
    },
    Mutation: {
        addProducts: async (_, args) => {
            const { title, categories, description, price, rent, rentoption, email } = args


            try {

                const products = await Products.create({
                    title, categories, description, price, rent, rentoption, email
                })

                return products

            } catch (err) {
                console.log(err)
            }

        },
        updateProducts: async (parent, args) => {
            const { title, categories, description, price, rent, rentoption, email } = args


            try {

                const id = await Products.findOne({ id: args.id });

                const products = await Products.update(
                    { title: title }, { categories: categories }, { description: description }, { price: price }, { rent: rent }, { rentoption: rentoption }, { email: email }
                )

                return products

            } catch (err) {
                console.log(err)
            }

        },
        deleteProducts: async (parent, args) => {
            const { id } = args;
            try {
                const products = await Products.delete(id)


            } catch (err) {
                console.log(err)
            }
        }

    }
};
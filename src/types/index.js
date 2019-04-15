import { mergeTypes } from 'merge-graphql-schemas'

import User from './user'
import Category from './category'
import Product from './product'
import Order from './order'

const typeDefs = [User, Category, Product, Order]

export default mergeTypes(typeDefs, { all: true })
import { mergeResolvers } from 'merge-graphql-schemas'

import User from './user.resolver'
import Category from './category.resolver'
import Product from './product.resolver'
import Order from './order.resolver'

const resolvers = [User, Category, Product, Order]

export default mergeResolvers(resolvers)
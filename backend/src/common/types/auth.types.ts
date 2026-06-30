import { User } from 'generated/prisma/client'

export type AuthorizedUser = Omit<User, 'password'>

import { createSlug } from './create-slug.util'

type FindBySlug = (slug: string) => Promise<unknown>

export const generateUniqueSlug = async (value: string, findBySlug: FindBySlug): Promise<string> => {
  const baseSlug = createSlug(value)

  let slug = baseSlug
  let counter = 2

  while (await findBySlug(slug)) {
    slug = `${baseSlug}-${counter}`
    counter += 1
  }

  return slug
}

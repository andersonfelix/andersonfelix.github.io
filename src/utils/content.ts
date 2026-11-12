import { getCollection } from "astro:content";

type OrderedCollection = "expertise" | "projects" | "experience" | "skills";

export async function getOrderedCollection<C extends OrderedCollection>(
  collection: C,
) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

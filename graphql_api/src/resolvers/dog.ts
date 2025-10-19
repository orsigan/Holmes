import type { Dog } from '../types/dog.ts';

const dogs: Dog[] = [];

export const dogResolvers = {
  Query: {
    dogs: () => dogs,
    dog: (_: any, args: { id: string }) => dogs.find(d => d.id === args.id),
  },
  Mutation: {
    addDog: (_: any, args: { name: string; breed: string }) => {
      const newDog: Dog = {
        id: String(dogs.length + 1),
        name: args.name,
        breed: args.breed,
      };
      dogs.push(newDog);
      return newDog;
    },
  },
};

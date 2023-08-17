import { atom } from "nanostores";

export const isCartOpen = atom(false);

export type Child = {
  id: number;
  name: string;
};

const children = atom<Child[]>([
  {
    id: 1,
    name: "Garry",
  },
  {
    id: 2,
    name: "Jerry",
  },
  {
    id: 3,
    name: "Larry",
  },
  {
    id: 4,
    name: "Mary",
  },
  {
    id: 5,
    name: "Zeary",
  },
]);

const site = atom<Child[]>([]);

export { children, site };

import { readFileSync } from "fs";
import path from "path";
import { act } from "react-testing-library";

const breeds = [
  { name: "Bich" },
  { name: "Bolog" },
  { name: "Coton " },
  { name: "Havane" },
  { name: "Maltes" },
];

const doggos = JSON.parse(readFileSync(path.join(__dirname, "res.json")).toString());

export const ANIMALS = ["dogs", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: (callback) => act(() => callback({ breeds: breeds })),
    };
  }),
  animals: jest.fn(() => {
    return {
      then: (callback) => act(() => callback(doggos)),
    };
  }),
};

export default mock;

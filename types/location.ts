import { CharacterBase } from "./character";

export type LocationBase = {
  id: string;
  name: string;
  type: string;
  dimension: string;
};

export type LocationDetails = LocationBase & {
  residents: CharacterBase[];
};

import { alemanha } from "./alemanha";
import { espanha } from "./espanha";
import { estadosUnidos } from "./estados-unidos";
import { italia } from "./italia";
import { portugal } from "./portugal";

export const countryMaps = { portugal, italia, estadosUnidos, espanha, alemanha };
export type CountryMapKey = keyof typeof countryMaps;

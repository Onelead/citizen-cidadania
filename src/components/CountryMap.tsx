import { countryMaps, type CountryMapKey } from "@/data/maps";

/** Mapa do país com as regiões destacáveis ao passar o mouse (sem JavaScript). */
export function CountryMap({ map }: { map: CountryMapKey }) {
  const data = countryMaps[map];
  return (
    <svg
      className="country-map"
      viewBox={data.viewBox}
      role="img"
      aria-label={data.label}
      preserveAspectRatio="xMidYMid meet"
    >
      {data.regions.map((r) => (
        <path key={r.name} d={r.d} fillRule="evenodd">
          <title>{r.name}</title>
        </path>
      ))}
    </svg>
  );
}

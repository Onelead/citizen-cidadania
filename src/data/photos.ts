export type Photo = {
  src: string;
  width: number;
  height: number;
  author: string;
  url: string;
};

// Fotos do Unsplash (licença Unsplash: uso comercial livre). Crédito exibido no rodapé.
export const photos = {
  passaportePortuguesMao: {
    src: "/images/passaporte-portugues-mao.webp",
    width: 1400,
    height: 933,
    author: "Get Golden Visa",
    url: "https://unsplash.com/photos/EKClLTG93ws",
  },
  passaportesPortuguesesLisboa: {
    src: "/images/passaportes-portugueses-lisboa.webp",
    width: 1400,
    height: 933,
    author: "Get Golden Visa",
    url: "https://unsplash.com/photos/vrn_mRPDuVU",
  },
  passaporteItaliano: {
    src: "/images/passaporte-italiano.webp",
    width: 1400,
    height: 1959,
    author: "Marco Palumbo",
    url: "https://unsplash.com/photos/OUd_ydzzet0",
  },
  bandeiraItalianaVaranda: {
    src: "/images/bandeira-italiana-varanda.webp",
    width: 1400,
    height: 933,
    author: "Ben Kupke",
    url: "https://unsplash.com/photos/95wiz-e-d2Y",
  },
  assinaturaDocumentos: {
    src: "/images/assinatura-documentos.webp",
    width: 1400,
    height: 1050,
    author: "Romain Dancre",
    url: "https://unsplash.com/photos/doplSDELX7E",
  },
  fachadaBandeirasItaliaUe: {
    src: "/images/fachada-bandeiras-italia-ue.webp",
    width: 1400,
    height: 1400,
    author: "João Rodrigues",
    url: "https://unsplash.com/photos/fu_lNOKPqHA",
  },
  palacioItalianoBandeiras: {
    src: "/images/palacio-italiano-bandeiras.webp",
    width: 1400,
    height: 933,
    author: "Henry Möllers",
    url: "https://unsplash.com/photos/j1QZZkefGOc",
  },
  passaporteAmericanoMao: {
    src: "/images/passaporte-americano-mao.webp",
    width: 1400,
    height: 1050,
    author: "Global Residence Index",
    url: "https://unsplash.com/photos/q0vfoRmGIRA",
  },
  passaportesAmericanos: {
    src: "/images/passaportes-americanos.webp",
    width: 1400,
    height: 1750,
    author: "Spencer Davis",
    url: "https://unsplash.com/photos/0QcSnCM0aMc",
  },
  passaporteEspanholMao: {
    src: "/images/passaporte-espanhol-mao.webp",
    width: 1400,
    height: 2099,
    author: "My Spain Visa",
    url: "https://unsplash.com/photos/f4blA_Vo-gI",
  },
  madriPalacioBandeiras: {
    src: "/images/madri-palacio-bandeiras.webp",
    width: 1400,
    height: 1867,
    author: "Álvaro Bernal",
    url: "https://unsplash.com/photos/d5vpK2XFF5E",
  },
  passaporteAlemao: {
    src: "/images/passaporte-alemao.webp",
    width: 1400,
    height: 933,
    author: "Markus Winkler",
    url: "https://unsplash.com/photos/cu_0B866ZLE",
  },
  reichstagBandeira: {
    src: "/images/reichstag-bandeira.webp",
    width: 1400,
    height: 990,
    author: "Maheshkumar Painam",
    url: "https://unsplash.com/photos/HF-lFqdOMF8",
  },
  fachadaBandeirasPortugalUe: {
    src: "/images/fachada-bandeiras-portugal-ue.webp",
    width: 1400,
    height: 2100,
    author: "Eduard Pretsi",
    url: "https://unsplash.com/photos/0v4zAgGQmQw",
  },
} satisfies Record<string, Photo>;

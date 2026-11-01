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
    src: "/images/passaporte-portugues-mao.jpg",
    width: 1800,
    height: 1200,
    author: "Get Golden Visa",
    url: "https://unsplash.com/photos/EKClLTG93ws",
  },
  passaportesPortuguesesLisboa: {
    src: "/images/passaportes-portugueses-lisboa.jpg",
    width: 1800,
    height: 1200,
    author: "Get Golden Visa",
    url: "https://unsplash.com/photos/vrn_mRPDuVU",
  },
  passaporteItaliano: {
    src: "/images/passaporte-italiano.jpg",
    width: 1800,
    height: 2519,
    author: "Marco Palumbo",
    url: "https://unsplash.com/photos/OUd_ydzzet0",
  },
  bandeiraItalianaVaranda: {
    src: "/images/bandeira-italiana-varanda.jpg",
    width: 1800,
    height: 1200,
    author: "Ben Kupke",
    url: "https://unsplash.com/photos/95wiz-e-d2Y",
  },
  assinaturaDocumentos: {
    src: "/images/assinatura-documentos.jpg",
    width: 1800,
    height: 1350,
    author: "Romain Dancre",
    url: "https://unsplash.com/photos/doplSDELX7E",
  },
  fachadaBandeirasItaliaUe: {
    src: "/images/fachada-bandeiras-italia-ue.jpg",
    width: 1800,
    height: 1800,
    author: "João Rodrigues",
    url: "https://unsplash.com/photos/fu_lNOKPqHA",
  },
  palacioItalianoBandeiras: {
    src: "/images/palacio-italiano-bandeiras.jpg",
    width: 1800,
    height: 1200,
    author: "Henry Möllers",
    url: "https://unsplash.com/photos/j1QZZkefGOc",
  },
  passaporteAmericanoMao: {
    src: "/images/passaporte-americano-mao.jpg",
    width: 1800,
    height: 1350,
    author: "Global Residence Index",
    url: "https://unsplash.com/photos/q0vfoRmGIRA",
  },
  passaportesAmericanos: {
    src: "/images/passaportes-americanos.jpg",
    width: 1800,
    height: 2250,
    author: "Spencer Davis",
    url: "https://unsplash.com/photos/0QcSnCM0aMc",
  },
  passaporteEspanholMao: {
    src: "/images/passaporte-espanhol-mao.jpg",
    width: 1800,
    height: 2699,
    author: "My Spain Visa",
    url: "https://unsplash.com/photos/f4blA_Vo-gI",
  },
  madriPalacioBandeiras: {
    src: "/images/madri-palacio-bandeiras.jpg",
    width: 1800,
    height: 2400,
    author: "Álvaro Bernal",
    url: "https://unsplash.com/photos/d5vpK2XFF5E",
  },
  passaporteAlemao: {
    src: "/images/passaporte-alemao.jpg",
    width: 1800,
    height: 1200,
    author: "Markus Winkler",
    url: "https://unsplash.com/photos/cu_0B866ZLE",
  },
  reichstagBandeira: {
    src: "/images/reichstag-bandeira.jpg",
    width: 1800,
    height: 1273,
    author: "Maheshkumar Painam",
    url: "https://unsplash.com/photos/HF-lFqdOMF8",
  },
} satisfies Record<string, Photo>;

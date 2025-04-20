const sampleVehicles = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    km: 45000,
    price: 97500000, // 25,000 USD → 97'500,000 COP
    image:
      "https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg",
    location: "Bogotá",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Blanco",
    doors: 4,
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2019,
    km: 38000,
    price: 89700000, // 23,000 USD → 89'700,000 COP
    image:
      "https://image.tienphong.vn/w890/Uploaded/2025/izb_dk/2018_08_14/TPO_2019_honda_civic_2__PSLZ.jpg",
    location: "Medellín",
    fuelType: "Híbrido",
    transmission: "Manual",
    color: "Gris",
    doors: 4,
  },
  {
    id: 3,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    km: 52000,
    price: 81900000, // 21,000 USD → 81'900,000 COP
    image:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/07/ford-focus-2018.jpg?tf=3840x",
    location: "Cali",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Azul",
    doors: 5,
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Cruze",
    year: 2021,
    km: 30000,
    price: 101400000, // 26,000 USD → 101'400,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWSCHVpcRg4Q0jwvpCuJ-3Ay2CCYK3WpTmA&s",
    location: "Barranquilla",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Negro",
    doors: 4,
  },
  {
    id: 5,
    brand: "Mazda",
    model: "3",
    year: 2022,
    km: 15000,
    price: 107250000, // 27,500 USD → 107'250,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEniGP0nM8yV85WRRCS35k09G7V_0oxxG9Q&s",
    location: "Cartagena",
    fuelType: "Gasolina",
    transmission: "Manual",
    color: "Gris oscuro",
    doors: 5,
  },
  {
    id: 6,
    brand: "Nissan",
    model: "Sentra",
    year: 2017,
    km: 60000,
    price: 76050000, // 19,500 USD → 76'050,000 COP
    image:
      "https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/Nissan%20Sentra.jpg.ximg.m_12_h.smart.jpg",
    location: "Pereira",
    fuelType: "Gasolina",
    transmission: "CVT",
    color: "Plateado",
    doors: 4,
  },
  {
    id: 7,
    brand: "Mazda",
    model: "CX-5",
    year: 2021,
    km: 30000,
    price: 124800000, // 32,000 USD → 124'800,000 COP
    image:
      "https://es.mazda-press.com/siteassets/assets/news-heroes/mazdacxcincohomura.jpg/highdefinitionhalfsize?token=DNMRPzmo7mHjtgIEzFTPDxlilrsqWqzZvtd65ctvG_U1",
    location: "Bucaramanga",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Gris oscuro",
    doors: 5,
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang",
    year: 2018,
    km: 55000,
    price: 156000000, // 40,000 USD → 156'000,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyQj3MVmh9nON5T8m1IVCY0dumI2ze00X1g&s",
    location: "Manizales",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Azul",
    doors: 2,
  },
  {
    id: 9,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2019,
    km: 42000,
    price: 148200000, // 38,000 USD → 148'200,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2QBTnr7orWjvDvmKodbxMSgP_7c-D0E1Nw&s",
    location: "Armenia",
    fuelType: "Gasolina",
    transmission: "Manual",
    color: "Azul rey",
    doors: 2,
  },
  {
    id: 10,
    brand: "BMW",
    model: "X3",
    year: 2022,
    km: 15000,
    price: 202800000, // 52,000 USD → 202'800,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD2zwuhhAVyOx6KNi89ahNvKiqq2ZTZrkRQ&s",
    location: "Santa Marta",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Negro",
    doors: 5,
  },
  {
    id: 11,
    brand: "Kia",
    model: "Sportage",
    year: 2020,
    km: 36000,
    price: 105300000, // 27,000 USD → 105'300,000 COP
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGFIkWZIw6_esFwCbtDdBiO6BHUDYa1d0rQ&s",
    location: "Ibagué",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Blanco perlado",
    doors: 5,
  },
  {
    id: 12,
    brand: "Hyundai",
    model: "Tucson",
    year: 2017,
    km: 67000,
    price: 85800000, // 22,000 USD → 85'800,000 COP
    image:
      "https://soymotor.com/sites/default/files/imagenes/noticia/hyundai_tucson_frontal.jpg",
    location: "Neiva",
    fuelType: "Diésel",
    transmission: "Manual",
    color: "Beige",
    doors: 5,
  },
  // Vehículos premium añadidos
  {
    id: 13,
    brand: "Mercedes-Benz",
    model: "Clase C",
    year: 2021,
    km: 12000,
    price: 234000000, // 60,000 USD → 234'000,000 COP
    image:
      "https://soymotor.com/sites/default/files/styles/watermark_wide_960/public/imagenes/noticia/mercedes-benz-clase-c-2021-soymotor_0.jpg.webp?itok=rOMjRQ5f",
    location: "Bogotá",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Plateado",
    doors: 4,
  },
  {
    id: 14,
    brand: "Audi",
    model: "Q5",
    year: 2022,
    km: 8000,
    price: 195000000, // 50,000 USD → 195'000,000 COP
    image:
      "https://cdn.motor1.com/images/mgl/rxoe6/s3/audi-q5-sportback-tfsi-e.webp",
    location: "Medellín",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Gris oscuro",
    doors: 5,
  },
  {
    id: 15,
    brand: "Renault",
    model: "Duster",
    year: 2021,
    km: 28000,
    price: 78000000, // ~20,000 USD
    image:
      "https://acnews.blob.core.windows.net/imgnews/large/NAZ_1eb4253fb930415692e117cb9e56bdc6.jpg",
    location: "Bogotá",
    fuelType: "Gasolina",
    transmission: "Manual",
    color: "Entre naranjoso y café",
    doors: 5,
  },
  {
    id: 16,
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2022,
    km: 15000,
    price: 136500000, // ~35,000 USD
    image:
      "https://acnews.blob.core.windows.net/imgnews/large/NAZ_98a5f6a40a754ed386c834f3348755cf.jpg",
    location: "Medellín",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Blanco Perlado (creo)",
    doors: 5,
  },
  {
    id: 17,
    brand: "Suzuki",
    model: "Vitara",
    year: 2020,
    km: 35000,
    price: 85800000, // ~22,000 USD
    image:
      "https://suzukiderco.vtexassets.com/arquivos/vitara-4x4-interna.png?v=638272981163670000",
    location: "Cali",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Rojo",
    doors: 5,
  },
  {
    id: 18,
    brand: "Jeep",
    model: "Compass",
    year: 2021,
    km: 22000,
    price: 117000000, // ~30,000 USD
    image:
      "https://hips.hearstapps.com/hmg-prod/images/foto-2-1591281131.jpg?resize=980:*",
    location: "Barranquilla",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Azul grisoso",
    doors: 5,
  },
  {
    id: 19,
    brand: "Toyota",
    model: "RAV4",
    year: 2022,
    km: 10000,
    price: 156000000, // ~40,000 USD
    image:
      "https://acnews.blob.core.windows.net/imgnews/large/NAZ_a0b9f3d28ced44a2bf231d6efdf2fddb.jpg",
    location: "Cartagena",
    fuelType: "Híbrido",
    transmission: "Automático",
    color: "Azul clarito",
    doors: 5,
  },
  {
    id: 20,
    brand: "Mitsubishi",
    model: "Montero Sport",
    year: 2019,
    km: 45000,
    price: 105300000, // ~27,000 USD
    image:
      "https://http2.mlstatic.com/D_NQ_NP_994363-MCO81709448192_012025-O.webp",
    location: "Bucaramanga",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Plateado",
    doors: 5,
  },
  {
    id: 21,
    brand: "Hyundai",
    model: "Creta",
    year: 2023,
    km: 5000,
    price: 97500000, // ~25,000 USD
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
    location: "Pereira",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "El negro mas negro",
    doors: 5,
  },
  {
    id: 22,
    brand: "Kia",
    model: "Seltos",
    year: 2022,
    km: 12000,
    price: 89700000, // ~23,000 USD
    image: "https://cdn.kia.com.co/Seltos_gris_001_0f8d236069.png",
    location: "Manizales",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Negro carbon",
    doors: 5,
  },
  {
    id: 23,
    brand: "Chevrolet",
    model: "Tracker",
    year: 2021,
    km: 18000,
    price: 81900000, // ~21,000 USD
    image:
      "https://cdn.motor1.com/images/mgl/LQ4jR/s3/lanzamiento-chevrolet-tracker-2021.webp",
    location: "Armenia",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Azul parecido al Toyota",
    doors: 5,
  },
  {
    id: 24,
    brand: "Nissan",
    model: "Kicks",
    year: 2022,
    km: 8000,
    price: 85800000, // ~22,000 USD
    image:
      "https://www.edmunds.com/assets/m/nissan/kicks/2022/oem/2022_nissan_kicks_4dr-hatchback_sr_fq_oem_1_815.jpg",
    location: "Ibagué",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Rojo",
    doors: 5,
  },
  {
    id: 25,
    brand: "Ford",
    model: "Escape",
    year: 2021,
    km: 20000,
    price: 113100000, // ~29,000 USD
    image:
      "https://www.cnet.com/a/img/resize/433d4b03d9283183abf539e3afbfe1b71544d73e/hub/2021/01/07/eef8101c-cde8-4ad5-a864-d8edfbd6d4db/ford-escape-titanium-2021-736167.jpg?auto=webp&width=768",
    location: "Neiva",
    fuelType: "Híbrido",
    transmission: "Automático",
    color: "Naranja",
    doors: 5,
  },
  {
    id: 26,
    brand: "Mazda",
    model: "CX-30",
    year: 2022,
    km: 10000,
    price: 120900000, // ~31,000 USD
    image:
      "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614999/2022_mazda_cx_30_angularfront.jpg",
    location: "Santa Marta",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Rojo",
    doors: 5,
  },
  {
    id: 27,
    brand: "Subaru",
    model: "Forester",
    year: 2021,
    km: 25000,
    price: 136500000, // ~35,000 USD
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2021-subaru-forester-mmp-1-1597762434.jpg?crop=0.817xw:0.769xh;0.0785xw,0.193xh&resize=1200:*",
    location: "Villavicencio",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Blanco",
    doors: 5,
  },
  {
    id: 28,
    brand: "Peugeot",
    model: "2008",
    year: 2022,
    km: 7000,
    price: 97500000, // ~25,000 USD
    image:
      "https://car-images.bauersecure.com/wp-images/3546/1056x594/89-peugeot2008-front34.jpg",
    location: "Pasto",
    fuelType: "Gasolina",
    transmission: "Automático",
    color: "Gris",
    doors: 5,
  },
  {
    id: 29,
    brand: "Fiat",
    model: "Toro",
    year: 2021,
    km: 30000,
    price: 105300000, // ~27,000 USD
    image:
      "https://moparinsiders.com/wp-content/uploads/2019/07/Fiat_Toro_Ranch_2_0_Diesel_005-780x405.jpg",
    location: "Montería",
    fuelType: "Diésel",
    transmission: "Automático",
    color: "Café oscuro",
    doors: 4,
  },
];

export { sampleVehicles };

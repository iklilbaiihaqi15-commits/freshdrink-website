export const drinks = [
  // ==================================================
  // Smoothies & Juices
  // ==================================================
  {
    id: 1,
    name: "Strawberry Banana Smoothie",
    category: "Smoothies & Juices",
    rating: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxQVLxSMgn3Z12Wb7EsEz7KaJeg71TGI_uw&s",
    desc: "Smoothie creamy perpaduan stroberi segar dan pisang manis.",
    alat: [
      "Blender",
      "Pisau",
      "Talenan",
      "Gelas saji"
    ],
    bahan: [
      "5 buah stroberi segar",
      "1 buah pisang matang",
      "200 ml susu cair",
      "1 sdm madu",
      "5 butir es batu"
    ],
    cara: [
      "Cuci stroberi hingga bersih.",
      "Kupas dan potong pisang kecil-kecil.",
      "Masukkan semua bahan ke dalam blender.",
      "Blender hingga halus dan creamy.",
      "Tuang ke gelas saji.",
      "Sajikan dingin."
    ]
  },

  {
    id: 2,
    name: "Mango Tango Smoothie",
    category: "Smoothies & Juices",
    rating: 5,
    img: "https://tribest.com/cdn/shop/articles/Sultry-Strawberry-Mango-Tango-Smoothie.jpg?v=1629329927",
    desc: "Smoothie mangga manis dan segar.",
    alat: [
      "Blender",
      "Pisau",
      "Gelas saji"
    ],
    bahan: [
      "1 buah mangga matang",
      "1 buah pisang",
      "150 ml susu cair",
      "4 butir es batu"
    ],
    cara: [
      "Kupas dan potong mangga.",
      "Kupas pisang lalu iris kecil.",
      "Masukkan semua bahan ke blender.",
      "Blender hingga lembut.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  },

  {
    id: 3,
    name: "Green Goddess Smoothie",
    category: "Smoothies & Juices",
    rating: 3,
    img: "https://theherbeevore.com/wp-content/uploads/2022/05/wp-16537444434217069250251564906297.jpg",
    desc: "Smoothie sehat dari bayam dan apel hijau.",
    alat: [
      "Blender",
      "Pisau",
      "Gelas saji"
    ],
    bahan: [
      "1 genggam bayam",
      "1 buah apel hijau",
      "1 buah pisang",
      "200 ml air kelapa"
    ],
    cara: [
      "Cuci bayam dan apel hingga bersih.",
      "Potong apel dan buang bijinya.",
      "Masukkan semua bahan ke blender.",
      "Blender sampai halus.",
      "Tuang ke gelas dan sajikan."
    ]
  },

  {
    id: 4,
    name: "Chocolate Peanut Butter Smoothie",
    category: "Smoothies & Juices",
    rating: 5,
    img: "https://godairyfree.org/wp-content/uploads/2022/06/pics-PB-Chocolate-Smoothie-feature.jpg",
    desc: "Smoothie coklat kacang creamy.",
    alat: [
      "Blender",
      "Gelas saji"
    ],
    bahan: [
      "1 buah pisang",
      "200 ml susu cair",
      "2 sdm selai kacang",
      "1 sdm coklat bubuk",
      "4 butir es batu"
    ],
    cara: [
      "Masukkan semua bahan ke blender.",
      "Blender hingga creamy dan lembut.",
      "Tuang ke gelas saji.",
      "Sajikan dingin."
    ]
  },

  {
    id: 5,
    name: "Dragon Fruit Smoothie",
    category: "Smoothies & Juices",
    rating: 5,
    img: "https://www.vegkitchen.com/wp-content/uploads/2021/06/dragon-fruit-smoothie-4-of-10.jpg",
    desc: "Smoothie buah naga segar dan lembut.",
    alat: [
      "Blender",
      "Pisau",
      "Gelas saji"
    ],
    bahan: [
      "1/2 buah naga merah",
      "1 buah pisang",
      "150 ml susu cair",
      "4 butir es batu"
    ],
    cara: [
      "Kupas dan potong buah naga.",
      "Masukkan semua bahan ke blender.",
      "Blender hingga halus.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  },

  // ==================================================
  // Coffee & Tea
  // ==================================================
  {
    id: 6,
    name: "Espresso Coffee",
    category: "Coffee & Tea",
    rating: 3,
    img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    desc: "Kopi hitam pekat khas espresso.",
    alat: [
      "Mesin espresso",
      "Cangkir espresso"
    ],
    bahan: [
      "18 gram bubuk kopi",
      "30 ml air panas"
    ],
    cara: [
      "Masukkan bubuk kopi ke portafilter.",
      "Padatkan kopi menggunakan tamper.",
      "Ekstrak kopi menggunakan mesin espresso.",
      "Tuang ke cangkir.",
      "Sajikan hangat."
    ]
  },

  {
    id: 7,
    name: "Americano Coffee",
    category: "Coffee & Tea",
    rating: 5,
    img: "https://loveincrediblerecipes.com/wp-content/uploads/2023/12/nespresso-americano-1200x1200-1.jpg",
    desc: "Espresso dengan tambahan air panas.",
    alat: [
      "Mesin espresso",
      "Cangkir"
    ],
    bahan: [
      "1 shot espresso",
      "150 ml air panas"
    ],
    cara: [
      "Siapkan espresso.",
      "Tuang air panas ke cangkir.",
      "Tambahkan espresso.",
      "Aduk perlahan dan sajikan."
    ]
  },

  {
    id: 8,
    name: "Latte Coffee",
    category: "Coffee & Tea",
    rating: 3,
    img: "https://cdn-prd.tongkolspace.com/unakaffe/wp-content/uploads/2024/12/hot-palm-latte-sugar.jpg",
    desc: "Kopi susu creamy dengan foam lembut.",
    alat: [
      "Mesin espresso",
      "Milk frother",
      "Cangkir latte"
    ],
    bahan: [
      "1 shot espresso",
      "200 ml susu cair"
    ],
    cara: [
      "Buat espresso terlebih dahulu.",
      "Panaskan susu dan buat foam.",
      "Tuang espresso ke cangkir.",
      "Tambahkan susu panas perlahan.",
      "Sajikan hangat."
    ]
  },

  {
    id: 9,
    name: "Cappuccino Coffee",
    category: "Coffee & Tea",
    rating: 5,
    img: "https://lh3.googleusercontent.com/proxy/DxA-QppM8fFo7wDOlBp4eJrzqoMdkt0tNJw7gcYvK4f3MTu5GFl0uWX7un4w6JnxUzPmGYAH8OLmkb1ngxEX-vYZkxbJT3MsNNrsCKiUhYKxZ_1bGBx1WpnkG17zf8OnRt7mKFnER1Qay8OGcGaBjpA5GJr93DOD7dZ3IlIdZUk",
    desc: "Kopi susu dengan foam tebal.",
    alat: [
      "Mesin espresso",
      "Milk frother",
      "Cangkir"
    ],
    bahan: [
      "1 shot espresso",
      "100 ml susu cair",
      "Foam susu secukupnya"
    ],
    cara: [
      "Siapkan espresso.",
      "Panaskan susu dan buat foam tebal.",
      "Tuang susu ke espresso.",
      "Tambahkan foam di atasnya.",
      "Sajikan hangat."
    ]
  },

  {
    id: 10,
    name: "Mocha Coffee",
    category: "Coffee & Tea",
    rating: 5,
    img: "https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg",
    desc: "Perpaduan kopi, susu, dan coklat.",
    alat: [
      "Mesin espresso",
      "Cangkir"
    ],
    bahan: [
      "1 shot espresso",
      "1 sdm saus coklat",
      "150 ml susu cair"
    ],
    cara: [
      "Tuang saus coklat ke cangkir.",
      "Tambahkan espresso.",
      "Tuang susu panas.",
      "Aduk hingga rata.",
      "Sajikan hangat."
    ]
  },

  // ==================================================
  // Mocktails
  // ==================================================
  {
    id: 11,
    name: "Virgin Mojito Mocktails",
    category: "Mocktails",
    rating: 3,
    img: "https://40aprons.com/wp-content/uploads/2021/04/virgin-mojito-3.jpg",
    desc: "Minuman soda mint lemon yang segar.",
    alat: [
      "Gelas tinggi",
      "Sendok"
    ],
    bahan: [
      "5 lembar daun mint",
      "1 buah jeruk nipis",
      "150 ml soda",
      "1 sdm gula cair",
      "Es batu secukupnya"
    ],
    cara: [
      "Masukkan daun mint dan jeruk nipis ke gelas.",
      "Tekan perlahan agar aroma keluar.",
      "Tambahkan es batu dan gula cair.",
      "Tuang soda.",
      "Aduk perlahan dan sajikan."
    ]
  },

  {
    id: 12,
    name: "Shirley Temple Mocktails",
    category: "Mocktails",
    rating: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDo_x8IHwTIcOUQ9qLpdl6zmjuYQkjiE-o0A&s",
    desc: "Mocktail manis dan segar dengan grenadine.",
    alat: [
      "Gelas",
      "Sendok"
    ],
    bahan: [
      "2 sdm sirup grenadine",
      "150 ml lemon soda",
      "Es batu secukupnya"
    ],
    cara: [
      "Isi gelas dengan es batu.",
      "Tuang sirup grenadine.",
      "Tambahkan lemon soda.",
      "Aduk perlahan.",
      "Sajikan dingin."
    ]
  },

  {
    id: 13,
    name: "Virgin Mary Mocktails",
    category: "Mocktails",
    rating: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHnhUkMI8Ftq8dQhHzwbrdVjOILBEg4SIIA&s",
    desc: "Mocktail jus tomat segar.",
    alat: [
      "Gelas",
      "Sendok"
    ],
    bahan: [
      "200 ml jus tomat",
      "1 sdm air lemon",
      "Sedikit garam",
      "Es batu secukupnya"
    ],
    cara: [
      "Masukkan es batu ke gelas.",
      "Tuang jus tomat dan air lemon.",
      "Tambahkan sedikit garam.",
      "Aduk rata dan sajikan."
    ]
  },

  {
    id: 14,
    name: "Citrus Fizz Mocktails",
    category: "Mocktails",
    rating: 5,
    img: "https://cocktail-society.com/wp-content/uploads/2025/01/Citrus-Fizz-Mocktail.jpg",
    desc: "Mocktail jeruk soda segar.",
    alat: [
      "Gelas",
      "Sendok"
    ],
    bahan: [
      "100 ml jus jeruk",
      "1 sdm air lemon",
      "100 ml soda",
      "Es batu secukupnya"
    ],
    cara: [
      "Masukkan es batu ke gelas.",
      "Tuang jus jeruk dan air lemon.",
      "Tambahkan soda.",
      "Aduk perlahan.",
      "Sajikan dingin."
    ]
  },

  {
    id: 15,
    name: "Sunrise Mocktails",
    category: "Mocktails",
    rating: 5,
    img: "https://drinkdesoi.com/cdn/shop/articles/Tequila_Sunrise_Mocktail_Recipe_2048x2048.webp?v=1727473022",
    desc: "Mocktail cantik dengan gradasi warna.",
    alat: [
      "Gelas tinggi",
      "Sendok"
    ],
    bahan: [
      "150 ml jus jeruk",
      "2 sdm grenadine",
      "Es batu secukupnya"
    ],
    cara: [
      "Isi gelas dengan es batu.",
      "Tuang jus jeruk.",
      "Tambahkan grenadine perlahan.",
      "Biarkan membentuk gradasi warna.",
      "Sajikan segera."
    ]
  },

  // ==================================================
  // Milkshakes
  // ==================================================
  {
    id: 16,
    name: "Chocolate Milkshake",
    category: "Milkshakes",
    rating: 3,
    img: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/sanjeev-kapoor/media/media_files/RMOguySzmkwFvClYhOj4.jpg",
    desc: "Milkshake coklat creamy.",
    alat: [
      "Blender",
      "Gelas saji"
    ],
    bahan: [
      "2 scoop es krim coklat",
      "200 ml susu cair",
      "2 sdm sirup coklat"
    ],
    cara: [
      "Masukkan semua bahan ke blender.",
      "Blender hingga lembut.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  },

  {
    id: 17,
    name: "Strawberry Milkshake",
    category: "Milkshakes",
    rating: 5,
    img: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg",
    desc: "Milkshake stroberi segar.",
    alat: [
      "Blender",
      "Gelas saji"
    ],
    bahan: [
      "5 buah stroberi",
      "2 scoop es krim vanilla",
      "150 ml susu cair"
    ],
    cara: [
      "Cuci dan potong stroberi.",
      "Masukkan semua bahan ke blender.",
      "Blender hingga creamy.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  },

  {
    id: 18,
    name: "Vanilla Milkshake",
    category: "Milkshakes",
    rating: 3,
    img: "https://t3.ftcdn.net/jpg/09/60/78/54/360_F_960785479_duR0GPpLbu7WaQMJPsg2Tn2Dp9NXSxz0.jpg",
    desc: "Milkshake vanilla lembut dan creamy.",
    alat: [
      "Blender",
      "Gelas saji"
    ],
    bahan: [
      "2 scoop es krim vanilla",
      "200 ml susu cair",
      "1 sdt vanilla extract"
    ],
    cara: [
      "Masukkan semua bahan ke blender.",
      "Blender hingga lembut.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  },

  {
    id: 19,
    name: "Oreo Milkshake",
    category: "Milkshakes",
    rating: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rl2FfADbwAaZ3V8aYv7bNxsKJuN97pGdFQ&s",
    desc: "Milkshake oreo creamy dan lezat.",
    alat: [
      "Blender",
      "Gelas saji"
    ],
    bahan: [
      "5 keping Oreo",
      "2 scoop es krim vanilla",
      "150 ml susu cair"
    ],
    cara: [
      "Masukkan Oreo, es krim, dan susu ke blender.",
      "Blender hingga lembut.",
      "Tuang ke gelas.",
      "Taburi remahan Oreo di atasnya.",
      "Sajikan dingin."
    ]
  },

  {
    id: 20,
    name: "Banana Milkshake",
    category: "Milkshakes",
    rating: 5,
    img: "https://www.shutterstock.com/image-photo/banana-milkshake-whipped-cream-caramel-600nw-2534601985.jpg",
    desc: "Milkshake pisang manis dan creamy.",
    alat: [
      "Blender",
      "Pisau",
      "Gelas saji"
    ],
    bahan: [
      "1 buah pisang matang",
      "2 scoop es krim vanilla",
      "200 ml susu cair"
    ],
    cara: [
      "Kupas dan potong pisang.",
      "Masukkan semua bahan ke blender.",
      "Blender hingga creamy.",
      "Tuang ke gelas.",
      "Sajikan dingin."
    ]
  }
];

export const categories = [
  {
    name: "Smoothies & Juices",
    desc: "Minuman sehat dari buah segar.",
    img: "https://natural-cure.org/wp-content/uploads/Fresh-Juices-and-Smoothies.jpg"
  },
  {
    name: "Coffee & Tea",
    desc: "Pilihan kopi dan teh kekinian.",
    img: "https://images.hindustantimes.com/img/2024/07/28/1600x900/ct_1722155306232_1722155321059.jpg"
  },
  {
    name: "Mocktails",
    desc: "Minuman soda segar tanpa alkohol.",
    img: "https://s7ap1.scene7.com/is/image/itcportalprod/seven-amazing-pineapple-mocktails-to-try?fmt=webp-alpha"
  },
  {
    name: "Milkshakes",
    desc: "Milkshake creamy lezat.",
    img: "https://magicalbutter.com/cdn/shop/articles/vkkaghljdtrftxdlzhxa.jpg?v=1692647211"
  }
];
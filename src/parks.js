const parks = [
  {
    title: "Arches",
    location: "Utah",
    googleMapsUrl: "https://goo.gl/maps/W5tgAYqwLciHTfsg7",
    startDate: "29 Oct, 2019",
    endDate: "29 Oct, 2019",
    description:
      "Arches National Park is a wonderland of red rocks and blue sky. The red rock landscape at Arches might feel timeless, dream-like, or even other-worldly. People have documented over 2,000 natural stone arches within park boundaries.",
    imageUrl:
      "https://images.unsplash.com/photo-1602086010043-4db598ce5d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2820&q=80",
  },
  {
    title: "Canyonlands",
    location: "Utah",
    googleMapsUrl: "https://goo.gl/maps/vbxtsHb3nU7V9MhV9",
    startDate: "30 Oct, 2019",
    endDate: "30 Oct, 2019",
    description:
      "Canyonlands is the largest national park in Utah, and its diversity staggers the imagination. The easiest way to see the park is with a visit to the Island in the Sky district, only 32 miles (51.5 km) from Moab. The Island in the Sky offers many pullouts with spectacular views along the paved scenic drive. Hiking trails and four-wheel-drive roads access backcountry areas for day or overnight trips.",
    imageUrl:
      "https://images.unsplash.com/photo-1615925947852-f5f623c8ac64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Bryce Canyon",
    location: "Utah",
    googleMapsUrl: "https://goo.gl/maps/ob1Ryncxxzrv6HtR9",
    startDate: "9 Jun, 2020",
    endDate: "9 Jun, 2020",
    description:
      "The major feature of the park is Bryce Canyon, which despite its name, is not a canyon, but a collection of giant natural amphitheaters along the eastern side of the Paunsaugunt Plateau. Bryce is distinctive due to geological structures called hoodoos, formed by frost weathering and stream erosion of the river and lake bed sedimentary rocks.",
    imageUrl:
      "https://images.unsplash.com/photo-1583222494933-2d610ee573bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Zion",
    location: "Utah",
    googleMapsUrl: "https://goo.gl/maps/42coTiMZnvUF1yeq8",
    startDate: "10 Jun, 2020",
    endDate: "10 Jun, 2020",
    description:
      "Zion National Park is an American national park located in southwestern Utah near the town of Springdale. A prominent feature of the 229-square-mile (590 km 2) park is Zion Canyon, which is 15 miles (24 km) long and up to 2,640 ft (800 m) deep.",
    imageUrl:
      "https://images.unsplash.com/photo-1600198778090-9c9a9013a44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
  },
  {
    title: "Yellowstone",
    location: "Wyoming",
    googleMapsUrl: "https://goo.gl/maps/obvTFCAtGtfWK4jN8",
    startDate: "22 Aug, 2021",
    endDate: "24 Aug, 2021",
    description:
      "Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872.",
    imageUrl:
      "https://images.unsplash.com/photo-1550347778-473e0058577c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    title: "Grand Teton",
    location: "Wyoming",
    googleMapsUrl: "https://goo.gl/maps/h8pQGgyLL7bfitbn8",
    startDate: "25 Aug, 2021",
    endDate: "25 Aug, 2021",
    description:
      "Grand Teton is the highest mountain in Grand Teton National Park, in Northwest Wyoming, and a classic destination in American mountaineering. Contents 1 Geography 2 History 2.1 Name 2.2 First ascent 2.3 First ski and snowboard descents 3 Climbing routes",
    imageUrl:
      "https://images.unsplash.com/photo-1604541805943-2b549ac8fecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Capitol Reef",
    location: "Utah",
    googleMapsUrl: "https://goo.gl/maps/ZsMcfcJ3YzKMM4HP7",
    startDate: "21 Jun 2022",
    endDate: "21 Jun, 2022",
    description:
      "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
    imageUrl:
      "https://images.unsplash.com/photo-1657589943803-26e34206e5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "North Cascades",
    location: "Washington",
    googleMapsUrl: "https://goo.gl/maps/KPAwqn1859nPvcJy7",
    startDate: "18 Aug, 2022",
    endDate: "18 Aug, 2022",
    description:
      "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
    imageUrl:
      "https://images.unsplash.com/photo-1568879316114-b1671be72502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    title: "Olympic",
    location: "Washington",
    googleMapsUrl: "https://goo.gl/maps/d9xPdthRCbpAqfRa7",
    startDate: "20 Aug, 2022",
    endDate: "21 Aug, 2022",
    description:
      "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline.",
    imageUrl:
      "https://images.unsplash.com/photo-1614664868369-8beb346d090e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    title: "Mt. Rainier",
    location: "Washington",
    googleMapsUrl: "https://goo.gl/maps/2UEENBbSWe5stAHp7",
    startDate: "22 Aug, 2022",
    endDate: "22 Aug, 2022",
    description:
      "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes.",
    imageUrl:
      "https://images.unsplash.com/photo-1598416549712-51d1da68bad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default parks;

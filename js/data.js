// filter categories
//an array of objects
const categories = [
  {
    name: 'All',
    filter: 'all',
  },
  {
    name: 'Print',
    filter: 'print',
  },
  {
    name: 'Graphic',
    filter: 'graphic',
  },
  {
    name: 'Web',
    filter: 'web',
  },
  {
    name: 'Branding',
    filter: 'branding',
  },
];

//also an array of objects
const images = [
  {
    id: '1',
    url: 'BFAposter-day-small.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster - Day (2021)',
    href: './portfolio-items/BFAposters.html'
  },
  {
    id: '2',
    url: 'BFAposter-morning-small.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster - Morning (2021)',
    href: './portfolio-items/BFAposters.html'
  },
  {
    id: '3',
    url: 'BFAposter-night-small.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster - Night (2021)',
    href: './portfolio-items/BFAposters.html'
  },
  {
    id: '4',
    url: 'oceancollage-no1.jpg',
    category: 'graphic',
    title: 'Ocean Collage No. 1 (2020)',
    href: './portfolio-items/ocean-collage.html'
  },
  {
    id: '5',
    url: 'oceancollage-no2.jpg',
    category: 'graphic',
    title: 'Ocean Collage No. 2 (2020)',
    href: './portfolio-items/ocean-collage.html'
  },
  {
    id: '6',
    url: 'holidaycard.jpg',
    category: 'graphic',
    title: 'Holiday Card (2020)',
    href: './portfolio-items/holidaycard.html'
  },
  // {
  //   id: '8',
  //   url: 'linesbylis-cover.png',
  //   category: 'branding',
  //   title: 'Lines by Lis Marketing Campaign (2021)',
  // },
  {
    id: '9',
    url: 'recipegenerator.png',
    category: 'web',
    title: 'Random Recipe Generator (2020)',
    href: 'https://github.uconn.edu/pages/kav19006/dmd3475-finalproject/home.html'
  },
  {
    id: '11',
    url: 'nutmeg-winter.jpg',
    category: 'print',
    title: 'Nutmeg Winter Scenery Spread (2021)',
    href: './portfolio-items/nutmeg-winter.html'
  },
  {
    id: '12',
    url: 'nutmeg-lctalks.jpg',
    category: 'print',
    title: 'Nutmeg LC Talks Spread (2021)',
    href: './portfolio-items/nutmeg-lctalks.html'
  },
  {
    id: '13',
    url: 'covid-frontpage.png',
    category: 'print',
    title: 'Collection: Nutmeg Covid-19 Timeline (2021)',
    href: './portfolio-items/nutmeg-covidtimeline.html'
  },
  {
    id: '14',
    url: 'nutmeg-huskython1.png',
    category: 'print',
    title: 'Nutmeg Huskython Spreads (2021)',
    href: './portfolio-items/nutmeg-huskython.html'
  },
  {
    id: '15',
    url: 'nutmeg-latenightcarnival.jpg',
    category: 'print',
    title: 'Nutmeg Late Night Carnival Spread (2021)',
    href: './portfolio-items/nutmeg-carnival.html'
  },
  {
    id: '16',
    url: 'nutmeg-greenhousespread.jpg',
    category: 'print',
    title: 'Nutmeg Greenhouse Spread (2021)',
    href: './portfolio-items/nutmeg-greenhouse.html'
  },
  {
    id: '17',
    url: 'nutmeg-seniorquote1.jpg',
    category: 'print',
    title: 'Nutmeg Senior Quote Spreads (2021)',
    href: './portfolio-items/nutmeg-seniorquotes.html'
  },
  {
    id: '18',
    url: 'nutmeg-tedspread.jpg',
    category: 'print',
    title: 'Nutmeg Experimental Spread (2022)',
    href: './portfolio-items/nutmeg-experimental.html'
  },
  {
    id: '19',
    url: 'emailcampaign-mockup.jpg',
    category: 'branding',
    title: 'Ten Percent Happier Email Campaign (2022)',
    href: './portfolio-items/tenpercent-emailcampaign.html'
  },
  {
    id: '20',
    url: 'typographical-exploration-1.jpg',
    category: 'graphic',
    title: 'Typographical Exploration No. 1 (2022)',
    href: './portfolio-items/typographicalexploration1.html'
  }
];

//add dairy bar? probs not
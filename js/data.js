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
    url: 'BFAposter-day.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster (2021) - Day',
  },
  {
    id: '2',
    url: 'BFAposter-morning.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster (2021) - Morning',
  },
  {
    id: '3',
    url: 'BFAposter-night.jpg',
    category: 'print',
    title: 'UConn BFA Exhibition Poster (2021) - Night',
  },
  {
    id: '4',
    url: 'oceancollage-no1.jpg',
    category: 'graphic',
    title: 'Ocean Collage No. 1 (2020)',
  },
  {
    id: '5',
    url: 'oceancollage-no2.jpg',
    category: 'graphic',
    title: 'Ocean Collage No. 2 (2020)',
  },
  {
    id: '6',
    url: 'holidaycard.jpg',
    category: 'graphic',
    title: 'Holiday Card (2020)',
  },
  {
    id: '7',
    url: 'diarybar-cover.jpg',
    category: 'branding',
    title: 'UConn Dairy Bar Brand Redesign (2021)',
  },
  {
    id: '8',
    url: 'linesbylis-cover.png',
    category: 'branding',
    title: 'Lines by Lis Marketing Campaign (2021)',
  },
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
  },
  {
    id: '12',
    url: 'nutmeg-lctalks.jpg',
    category: 'print',
    title: 'Nutmeg LC Talks Spread (2021)',
  },
  {
    id: '13',
    url: 'covid-frontpage.png',
    category: 'print',
    title: 'Collection: Nutmeg Covid-19 Timeline (2021)',
  },
  {
    id: '14',
    url: 'nutmeg-huskython1.png',
    category: 'print',
    title: 'Nutmeg Huskython Spreads (2021)',
  },
  {
    id: '15',
    url: 'nutmeg-latenightcarnival.jpg',
    category: 'print',
    title: 'Nutmeg Late Night Carnival Spread (2021)',
  },
  {
    id: '16',
    url: 'nutmeg-greenhousespread.jpg',
    category: 'print',
    title: 'Nutmeg Greenhouse Spread (2021)',
  },
  {
    id: '17',
    url: 'nutmeg-seniorquote1.jpg',
    category: 'print',
    title: 'Nutmeg Senior Quote Spreads (2021)',
  },
  {
    id: '18',
    url: 'nutmeg-tedspread.jpg',
    category: 'print',
    title: 'Nutmeg Experimental Spread (2022)',
  },
];
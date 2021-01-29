const horseCard = document.getElementById('horseCard');
const weedCard = document.getElementById('weedCard');
const mindCard = document.getElementById('mindCard');
const horseCardback = document.getElementById('horseCardback');
const weedCardback = document.getElementById('weedCardback');
const mindCardback = document.getElementById('mindCardback');
const horseNug = document.getElementById('horseNug');
const weedNug = document.getElementById('weedNug');
const mindNug = document.getElementById('mindNug');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card1back = document.getElementById('card1back');
const card2back = document.getElementById('card2back');
const card3back = document.getElementById('card3back');
const horseLogo = `<i class = "fas fa-horse fa-9x"></i>`;
const weedLogo = `<i class="fas fa-cannabis fa-9x"></i>`;
const mindLogo = `<i class="far fa-eye fa-9x"></i>`;

const button = document.getElementById('button');

// displayShuffle = function () {
//   let display = [card1, card2, card3];
//   let shuffle = String(Math.floor(Math.random() * display.length));
//   console.log(shuffle);
// };

let horseChoices = [
  "Admiral's Voyage",
  'Alpha',
  'American Flag',
  'Atomic Rain',
  'Backtalk',
  'Best Present Ever',
  'Bodemeister',
  'Cajun Beat',
  'California Chrome',
  'Celtic Ash',
  'Chocolate Candy',
  'Colorado King',
  'Commando',
  'Creative Cause',
  'Daddy Long Legs',
  'Daddy Nose Best',
  'Dance With Fate',
  'Danza',
  'Delhi',
  'Discreet Marq',
  'Done Talking',
  'Dunkirk',
  'Eight Thirty',
  'El Padrino',
  'Falling Sky',
  'Flying Private',
  'Frac Daddy',
  'Freesian Fire',
  'Genie',
  'Gentle Savage',
  'Ghost Zapper',
  'Gold Coin',
  'Golden Soul',
  'Greek Money',
  "Harry's Holiday",
  'Highest Honors',
  'Ice Box',
  'Indian Blessing',
  'Intense Holiday',
  'June Cleaver',
  'Kauai King',
  'Kid Cruz',
  'Kiss Moon',
  'Kona Gold',
  'Lady Secret',
  'Lemon Punch',
  'Liaison',
  'Luv Gov',
  'Magical Band',
  'Magic Hour',
  'Matterhorn',
  'Midnight Hawk',
  'Midnight Interlude',
  'Midnight Taboo',
  'Mind Bender',
  "Mind's Eyes",
  'Mister Hot Stuff',
  'Misty Morn',
  'Moccasin',
  'Mucho Macho Man',
  'Optimizer',
  'Orb',
  'Papa Clem',
  'Papa Jerry',
  'Peter Pan',
  'Please Explain',
  'Prime Directive',
  'Rachel Alexandra',
  'Rousing Sermon',
  'Sabercat',
  'Sacred Light',
  'Samraat',
  'Scottish Chieftain',
  'Scrimshaw',
  'Sizzling Gold',
  'Somali Lemonade',
  'Star Shoot',
  'Stay Thirsty',
  'St. Liam',
  'Stop Time',
  'Sugar Shock',
  'Summer Bird',
  'Summer Tan',
  'Sunshine Forever',
  'Sweet Vendetta',
  'Take The Points',
  'Terrain',
  'The Bard',
  'The Green Monkey',
  "Thor's Echo",
  'Thunder Gulch',
  'Token Special',
  'Twenty Grand',
  'Twilight Ridge',
  'Twinspired',
  'Union Rags',
  'Westside Bernie',
  'Wicked Strong',
  'Wildcat Red',
  'Wild Rush',
];

let horse = String(Math.floor(Math.random() * horseChoices.length));

let weedChoices = [
  'Accidental Tourist',
  'Ace of Spades',
  'Air Force One',
  'Allen Wrench',
  'American Dream',
  'Armageddon',
  'Aruel',
  'Asteroid',
  'Atmosphere',
  'Beehive',
  'Big Bud',
  'Bio-Jesus',
  'Black Domina',
  'Blue Bayou',
  'Blue Moon',
  'Brain Child',
  "Buddha's Sister",
  'Cherry Pie',
  'Chocolope',
  'Cracker Jack',
  'Dairy Queen',
  'Don Cristo',
  'Double Dream',
  'Dr. Grinspoon',
  'Dutch Treat',
  'Early Garage',
  'Early Girl',
  'Edelweiss',
  'El Jeffe',
  "Emperor's Cut",
  'Galactic Jack',
  'Glass Slipper',
  "God's Gift",
  'Godzilla',
  'Grand Hustle',
  'Grand Platinum',
  'Gun',
  'Hawaiian Fire',
  'Holy Grail',
  'Hubba Bubba',
  'Incredible Hulk',
  "Jack's Cleaner",
  'Jane Doe',
  'Jilly Bean',
  'Johnnie Walker',
  "Johnny's Tonic",
  "Joker's Revenge",
  'King Henry',
  'King Louis',
  "King's Bread",
  'L.A. Confidential',
  'Life Saver',
  'Liquid Butter',
  'Little Devil',
  'Loud Dream',
  'Louis XIII',
  'Low Rider',
  'Lucky Charms',
  'Medicine Man',
  'MK Ultra',
  'Morning Glory',
  'Morning Star',
  'Motorcity Whip',
  'Mr. Nice Guy',
  'Muchacho Man',
  "Neville's Maze",
  "Nevil's Wreck",
  'Orange Moon',
  'Outlaw',
  'Pennies From Heaven',
  'Pennywise',
  'Polite With a Punch',
  'Private Reserve',
  'Professor Chaos',
  'Purple Arrow',
  'Qrazy Train',
  'Rare Darkness',
  'Rated R',
  'Red Bull',
  'Richie Rich',
  'Rocklock',
  'Royal Dwarf',
  'Sapphire Star',
  'Shark Shock',
  'Shipwreck',
  'Smoke on the Water',
  'Soul Shine',
  'Sour Grapes',
  'Sunny Side Up',
  'Sunset Sherbert',
  'Sweet Tooth',
  'Tasmanian Devil',
  'Uncle Pete',
  'Watermelon Tormaline',
  'Whitaker Blues',
  'White Gold',
  'White Rhino',
  'White Russian',
  'Willies Wonder',
  'Yumboldt',
];

let weed = String(Math.floor(Math.random() * weedChoices.length));

let mindChoices = [
  'Accho',
  'Adios Amigos',
  'Albany New York',
  'Apples and Oranges',
  'Apricot',
  'Autumn Haze',
  'Avalanche',
  'Backlot Tour',
  'Ballyhoo',
  "Beethoven's Bust",
  "Bob's Your Uncle",
  'Boogeyman',
  'Buried Treasure',
  'Burnt Toast',
  'Cannery Row',
  'Captain America',
  'Chardonnay',
  'Charm Bracelet',
  "Cliff's Surprise",
  'Court Jester',
  'Crystal Ship',
  'Detour',
  'Dollar Bill',
  "Dolphin's Fin",
  'Double Barrel',
  'Double Jeopardy',
  'Dust-up',
  'Earth Worm',
  'Executive Suite',
  'Fog',
  'Fortunate Son',
  'Galaxy',
  'General Patton',
  'Ghost Town',
  'Giddy Up and Go',
  'Grape Nuts',
  'Grey Flannel',
  'Gupta',
  'High Tide',
  'Hummer',
  'Irish Eyes',
  'Jazz Age',
  'Joni Mitchell',
  'Lemonade',
  "Let's Hear It for the Boy",
  'Lieutenant Dan',
  'Long Tall Sally',
  'Low Tide',
  'Macho Nacho',
  'Milk & Cookies',
  "Miranda's Miracle",
  'Monkey Wrench',
  'Muldoon',
  'Par Excellence',
  'Pepper',
  "Poseidon's Trident",
  'Quote-Unquote',
  'Sacrificial Lamb',
  'Sealed With a Kiss',
  'Space Needle',
  'Stealth Bomber',
  'Strange Dawn',
  'Ukulele',
  'Uncle Ben',
  'Undeterred Goon',
  'Unlawful Entry',
  'Upstart',
  'Up Up and Away',
  'Waikiki Wave',
  'Weekender',
  'Holy Roller',
  'Inclement Weather',
  'Pop Rox',
  'Masquerade',
  "Monkey's Uncle",
  'Bible Thumper',
  'Shazam',
  'Photon Torpedo',
  "Devil's Workshop",
  'Frankenbutter',
  'Dung Beetle',
  'Black Astronaut',
  'Bowtie Rasta',
  'Carbon Credit',
  'High Fructose Porn Syrup',
  'Tiny Tim',
  'Free Raisin',
  'Chrysalis',
  'Porkchop Parody',
  "White Man's Burden",
  'Red Menace',
  'Bletchley Park',
  'High as Balls',
  'What a Crowd',
  'Boob Glue',
  'Culture Shock',
  'Marriage Sow',
  'Ka-ching!',
  'Alien Visitation',
  'Police Brutality',
];

let mind = String(Math.floor(Math.random() * mindChoices.length));
let draw = [horseChoices[horse], weedChoices[weed], mindChoices[mind]];

function shuffle(horse, weed, mind) {
  var ctr = draw.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = draw[ctr];
    draw[ctr] = draw[index];
    draw[index] = temp;
  }

  card1.innerHTML = draw[0];
  card2.innerHTML = draw[1];
  card3.innerHTML = draw[2];
  card1back.innerHTML = draw[0];
  card2back.innerHTML = draw[1];
  card3back.innerHTML = draw[2];
  if (draw[0] == horseChoices[horse]) {
    card1logo.innerHTML = horseLogo;
  } else if (draw[0] == weedChoices[weed]) {
    card1logo.innerHTML = weedLogo;
  } else {
    card1logo.innerHTML = mindLogo;
  }
  if (draw[1] == horseChoices[horse]) {
    card2logo.innerHTML = horseLogo;
  } else if (draw[1] == weedChoices[weed]) {
    card2logo.innerHTML = weedLogo;
  } else {
    card2logo.innerHTML = mindLogo;
  }
  if (draw[2] == horseChoices[horse]) {
    card3logo.innerHTML = horseLogo;
  } else if (draw[2] == weedChoices[weed]) {
    card3logo.innerHTML = weedLogo;
  } else {
    card3logo.innerHTML = mindLogo;
  }
  console.log(draw);
  return draw;
}
shuffle(horse, weed, mind);

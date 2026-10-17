export interface Destination {
  id: string;
  name: string;
  tagline: string;
  state: string;
  badge: string;
  category: 'Royal' | 'Coast' | 'Alpine' | 'Wellness' | 'Lakes' | 'Sacred' | 'Adventure' | 'Highlands' | 'Island' | 'Spiritual';
  description: string;
  heroImage: string;
  galleryImages: string[];
  bestTime: string;
  idealDuration: string;
  dailyBudget: string;
  permitRequired: boolean;
  permitNote?: string;
  highlights: string[];
  culinarySpecialties: string[];
  howToReach: {
    flight: string;
    train?: string;
    road?: string;
  };
  stayTypes: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  theme: string;
  morning: string;
  afternoon: string;
  evening: string;
  diningTip: string;
}

export interface TravelGuide {
  id: string;
  destinationId: string;
  title: string;
  subtitle: string;
  readTime: string;
  tag: string;
  heroImage: string;
  overview: string;
  itinerary: DayPlan[];
  transitAdvice: string;
  packingList: string[];
  etiquette: string[];
  budgetTips: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'The Pink City of palatial marvels, monumental Amer fortresses, and vibrant centuries-old artisan bazaars.',
    state: 'Rajasthan',
    badge: 'Royal',
    category: 'Royal',
    description: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a masterclass in Rajput town planning. Behind its distinctive terracotta-pink facade lies an intricate world of geometric astronomy instruments at Jantar Mantar, soaring hill fortresses overlooking the Aravalli hills, and narrow bazaar alleyways fragrant with rose petals, block-printed indigo textiles, and simmering cardamom tea.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARjQd9ImPbRFfEXqYCwWEplcwmpx2NrCERZmFW-TmGlaAX2IQFn8gfWGwi2fArxxV8XHqowluPLcR9k7z8SFtpizSt4KaenWnKG3JJB8Kdt2TDM0Bj3bztL3WvNPdfE9hzWBJcmGttrOSZTZOfFNXnrDQnrD-W4CBZvCA2LQrP__djKOFPLuiy6FBqY44adfyAIM24vTQjw1b7z-DcC4dOcjIlS4_oSw4CNCJfVGYvvUhgf1DxIBfy',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiJleai86kIQa4L_0JP9pIuQ5poDC6LS7-DuBkWYwJXwkYOk7xEGDr356zAMo053FPr17lna9z8rdMv7udOBKOhcwzhcyW2eK0YgToIyFZmuDVHYtKvydxT1lbv8zx-0iUr9n2tWZz7IcBj7n5XLtdkdcCxeZ8r-cxuV3mCKCaqptzmiuDC848VhioLQaQgyJyYriKI8X_3XnIssO4ahlzNK45ZNlLRIl5iT6OdENa0RD0VKav0itK',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoE5xUnc0N9DJu4c9cmp6cFtwe-fxnR3K4GQGagPvCradsQqp2d8vhuJEpZqU1RJSOP1cayWcOTeljKokk3uUX8zxWjhjJhtPS4gUesD4J-CQtpGSK9xsGjNcbA4fqU2pN1lgCcqBS7zJsibHeDe8i5mIxj5WGNAQjIuxRAN4DhWVD99AEoNnW2Vp_uveE3D6NhYkAWLLEY60sVzwhcNUK2DCid3JGvLoa9Upx5N7wdsq5DWWm9G2s'
    ],
    bestTime: 'October to March',
    idealDuration: '3 – 4 Days',
    dailyBudget: '₹4,000 – ₹12,000 / day',
    permitRequired: false,
    highlights: [
      'Amer Fort Sheesh Mahal (Mirror Palace) at early morning light',
      'Hawa Mahal honeycomb balconies street photography',
      'UNESCO-listed Jantar Mantar astronomical observatory',
      'Hand block printing workshop in Sanganer village',
      'Sunset tea atop Nahargarh Fort ramparts'
    ],
    culinarySpecialties: [
      'Dal Baati Churma cooked in pure desi ghee',
      'Pyaaz Kachori from Rawat Mishthan Bhandar',
      'Ghevar honey-comb sweet pastry from LMB',
      'Laal Maas slow-cooked smoked mutton curry'
    ],
    howToReach: {
      flight: 'Jaipur International Airport (JAI) with direct flights from Delhi, Mumbai, Bengaluru, Dubai.',
      train: 'Jaipur Junction is directly linked via Vande Bharat and Shatabdi Express from New Delhi (3.5 hrs).',
      road: 'Delhi-Jaipur Expressway (NH 48) provides smooth 4-hour highway connectivity.'
    },
    stayTypes: ['Restored Royal Havelis', 'Palatial Heritage Hotels', 'Boutique Courtyard Stays']
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Sun-kissed Arabian shores, Portuguese baroque chapels, and organic spice plantations.',
    state: 'Goa',
    badge: 'Coast',
    category: 'Coast',
    description: 'Far beyond conventional beach shacks, Goa offers an exquisite confluence of Latin-Portuguese maritime heritage and Konkani coastal culture. Wander through the ochre and cobalt alleys of Fontainhas, listen to church bells echo across Old Goa’s 16th-century basilicas, explore hidden cliff trails in Cabo de Rama, and savor fresh mud crab cooked in roasted kokum curry.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1S8CCKSOMWpOmH5F66P7l55cBaz_pOuN5axZQHpoRBsRvDuehPrPFnL-WVhrKbtTCzsLng1IG7LjajJhgntTVl-b-aZJoyJIIyU-Fkyo-Ypvoqv7p4gOhxZN4iICpEdAzgb8OnedvMFvhbyH0CtHe0eVBxcv8fTQvD7FI4x9eos2yI_56DdJf-aXDMwuDE55HXcGazhz1ques2BwvGz5Rk1Lx5g2jOahU-PYCXBYXOqzyB89vRfge',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmm8dTC3JDtAgbY8HHaYVwIV7uuJ8-qwNKKa0J4eQ2-whWb_49-ArmyM8aM6a4MW83ndsnvzF5OC_KjGf8_OGLgV8tHNnap1rvlmcn2lXjIqcogjVOibXfz9FGhoHkj_U0FqxEYBXBLL_ZXaHI7L8n4PKfXVYe1tczpz4EMA7a74CBKybK1aek4V2WwuKufVfBVAlWL-V40hFJzUJUgoEkAnTPjahfoSw9B562kAfGe4ZG02Xmkfcw'
    ],
    bestTime: 'November to March',
    idealDuration: '4 – 6 Days',
    dailyBudget: '₹4,500 – ₹14,000 / day',
    permitRequired: false,
    highlights: [
      'Heritage walking tour of Fontainhas Latin Quarter',
      'Basilica of Bom Jesus and Se Cathedral in Velha Goa',
      'Kayaking through Chapora River mangrove canopies',
      'Spice plantation luncheon with organic feni tasting',
      'Solitary sunset walks along Galgibaga and Cola beaches'
    ],
    culinarySpecialties: [
      'Goan Fish Curry with steamed red rice',
      'Pork Vindaloo prepared in Goan toddy vinegar',
      'Fresh Bebinca 7-layer coconut milk dessert',
      'Poi bread stuffed with spicy Chorizo sausages'
    ],
    howToReach: {
      flight: 'Manohar International Airport, Mopa (GOX) or Dabolim Airport (GOI).',
      train: 'Madgaon Junction and Thivim on the scenic Konkan Railway route.',
      road: 'Scenic drive via Mumbai-Goa Highway (NH 66) or Western Ghats passes.'
    },
    stayTypes: ['Indo-Portuguese Heritage Villas', 'Beachfront Eco-Cottages', 'Boutique River Retreats']
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    tagline: 'Heaven on earth with emerald Dal Lake houseboats and snowline pine forests.',
    state: 'Jammu & Kashmir',
    badge: 'Alpine',
    category: 'Alpine',
    description: 'Poets have long praised Kashmir as Jannat on Earth. Float serenely on ornate carved cedarwood shikaras on Dal Lake, witness saffron fields blooming in Pampore, ride the highest cable car in Gulmarg across fresh powder snow, and savor traditional Wazwan feasts served in copper platters amid walnut wood orchards.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0WR4RE0DkmqcDx8uXsdBlQ9YtkZ9DBmrj04a1QuAzpYUpoPXCtfMb7tWPdf3rpJK84jm7I32VxumLugFLCNfmWkWx5UhtdFu6wIvZ1NrJSERX1TboFZHeqHkV7OvpoLZGM43b8aCBvmwBqhKyTH3eLrjgdKYcwwLCVQh0EVi2V2Xr_UoYsWJ07qNAW5_IZiF1qGdQmNXV-MKvhStZt3k_l6GNLmjCsdJxSokNNAWEtne3D0u4MDK',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAT23tDirHbsEP2b_dyAzsuI875iExhc5u6vjNdI5TxjVAU9RYyekeYNn2H_HkhD44BPaeqZgoAbbjiDcPbxM2vP6b95zjO5aD8trxgRhuxMiQsG412Cm1lx4qdCq9Sjd2dp80B1DuCCJf67H2agFyrWW3qD2ZIv6DyNrjlzIAdqnYwwu7gZ0wgNZCddus5kO_xF09JXW9z1bYO37_MY-0ByP9qwrVUv-msHVbZvumB41aShl0L97os'
    ],
    bestTime: 'April to October (Spring/Summer) or Dec to Feb (Snow)',
    idealDuration: '5 – 7 Days',
    dailyBudget: '₹5,000 – ₹15,000 / day',
    permitRequired: false,
    permitNote: 'Standard ID verification for high-altitude passes.',
    highlights: [
      'Dawn shikara ride to the floating vegetable market on Dal Lake',
      'Phase 2 Gulmarg Gondola at 13,780 ft with Himalayan vistas',
      'Walking through the ancient Mughal Gardens of Shalimar & Nishat',
      'Trek along Lidder River in Betaab Valley, Pahalgam',
      'Sonamarg Thajiwas Glacier alpine pony trek'
    ],
    culinarySpecialties: [
      'Rogan Josh with authentic Kashmiri red chilies',
      'Kahwa green tea infused with saffron, cardamom, and sliced almonds',
      'Gushtaba (silky mutton meatballs in yogurt gravy)',
      'Dum Aloo cooked with whole roasted spices'
    ],
    howToReach: {
      flight: 'Sheikh ul-Alam International Airport, Srinagar (SXR) with frequent daily connections.',
      train: 'Jammu Tawi or Udhampur station, connecting via Vande Bharat and expressway.',
      road: 'National Highway 44 through the Chenani-Nashri & Banihal tunnels.'
    },
    stayTypes: ['Carved Cedar Dal Houseboats', 'Luxury Alpine Ski Lodges', 'Riverside Pine Cottages']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'Serene palm-fringed backwaters, ayurvedic hills, and tranquil tea estates.',
    state: 'Kerala',
    badge: 'Wellness',
    category: 'Wellness',
    description: 'Revered as God’s Own Country, Kerala is a tropical sanctuary of tranquil lagoon waterways, undulating misty tea gardens in Munnar, and centuries-old Ayurvedic holistic retreats. Unplug aboard a private handcrafted kettuvallam as it glides past peaceful village paddy fields and coconut groves.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoB9VKQPj7JGox7Y5TUdczOZODpCnBY1wuWji5Wvlh9LAOMiOJFmrGFJhoDrO7iaSgj6Glircu6tKVJmqlolTO7tOuektLoEa2yNN5DDYKpeAhcACBzOIX1NVoPOUWd7ZG0Ir1dn7ezlk7hgWmesgCRgri72nILzWairLtKXapoDSd-Q1UBKiZMnnz5fmeD92PY9lqUIHpQr5CJJuFDhG9uw6ErVxIViKb8h1Ry8-wgcj1M7JpMjw3',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QlUU0-nTGKjDjrEgdAM8Ct5_SCbuM44f_xitrSOh3je9Il1Ktr-FGzyVaH_5NutrvX19uyIJ5WyA5vv1Yr6mL7A_H5h2fYXTyFAWtIDj8hKQhUQcEhTwKbwQiEecc30mcB8Ns7VAlG879Ckf4ZWKs6GEcf_Jc8PQNHsfeS1jXnvHw02p9YjbP6YcAcMC1UKEBvkio5FQGvNj7q--9FhznVpK6NBOWDT3aiSeVAvBKnWsI_YkxWcT'
    ],
    bestTime: 'September to March',
    idealDuration: '5 – 8 Days',
    dailyBudget: '₹4,500 – ₹13,000 / day',
    permitRequired: false,
    highlights: [
      'Overnight kettuvallam cruise through Alleppey backwater canals',
      'Sunrise mist walking in Munnar high-range tea estates',
      'Traditional Kathakali and Kalaripayattu martial art demonstrations',
      'Spice garden exploration in Thekkady Periyar tiger reserve',
      'Chinese fishing nets and heritage art cafes in Fort Kochi'
    ],
    culinarySpecialties: [
      'Kerala Sadya served on banana leaf with 24 accompaniments',
      'Appam with vegetable stew or spicy egg roast',
      'Karimeen Pollichathu (pearl spot fish baked in banana leaves)',
      'Malabar Parotta with pepper chicken curry'
    ],
    howToReach: {
      flight: 'Cochin International Airport (COK) or Trivandrum (TRV).',
      train: 'Ernakulam Junction or Alappuzha stations with major connections.',
      road: 'Scenic coastal and high-range highway network.'
    },
    stayTypes: ['Private Solar Houseboats', 'Ayurvedic Wellness Resorts', 'Colonial Tea Planter Bungalows']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of shimmering lakes and romantic marble palaces rising above water.',
    state: 'Rajasthan',
    badge: 'Lakes',
    category: 'Lakes',
    description: 'Often crowned the Venice of the East, Udaipur is crowned by the gleaming white facade of the City Palace commanding the waters of Lake Pichola. Sunset boat rides past Jag Mandir and the Lake Palace, candlelit rooftop dinners overlooking water reflections, and centuries of Rajput bravery create an unforgettable royal escape.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJnKGVvnaLC68bhSHzC1s1X-rgq52olNscjFHuwv1uIYiRLUTgJL1vTSpBrZnqo32tqRxbZGUSEFOtwDiZ1otnQBxmWRtTMTnYKhDoQCrtDk0EOei0vjCyBKpCSur7K5qk8RDVO7yNdYutPiUIZk6eXCg08zlSVfe6S3KT-aibr5ZlRnX1GMI88iwfJ1DQ2brCCnNM9vzgl35CdPsizsXmVLegbWqaHXz-76ly9qmfMzpYaQXmQDtE',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoE5xUnc0N9DJu4c9cmp6cFtwe-fxnR3K4GQGagPvCradsQqp2d8vhuJEpZqU1RJSOP1cayWcOTeljKokk3uUX8zxWjhjJhtPS4gUesD4J-CQtpGSK9xsGjNcbA4fqU2pN1lgCcqBS7zJsibHeDe8i5mIxj5WGNAQjIuxRAN4DhWVD99AEoNnW2Vp_uveE3D6NhYkAWLLEY60sVzwhcNUK2DCid3JGvLoa9Upx5N7wdsq5DWWm9G2s'
    ],
    bestTime: 'October to March',
    idealDuration: '3 – 4 Days',
    dailyBudget: '₹4,500 – ₹16,000 / day',
    permitRequired: false,
    highlights: [
      'City Palace complex and Mor Chowk peacock glass mosaics',
      'Lake Pichola sunset boat ride past Taj Lake Palace',
      'Bagore Ki Haveli evening folk dance and puppet show',
      'Saheliyon Ki Bari historic royal fountains and gardens',
      'Monsoon Palace (Sajjangarh) hilltop panoramic view'
    ],
    culinarySpecialties: [
      'Safed Maas (royal mutton simmered in cashew-almond sauce)',
      'Gatte Ki Sabzi with hot missi rotis',
      'Kachori with tamarind chutney at Jagdish Chowk',
      'Mawa Kachori sweet dessert'
    ],
    howToReach: {
      flight: 'Maharana Pratap Airport (UDR) connecting Delhi, Mumbai, Jaipur.',
      train: 'Udaipur City railway station with direct express connections.',
      road: 'NH 48 four-lane highway connectivity from Ahmedabad and Jaipur.'
    },
    stayTypes: ['Floating Island Palaces', 'Lakeside Havelis', 'Hilltop Mewari Sanctuaries']
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Timeless spiritual awakening along the sacred evening Ganga aartis.',
    state: 'Uttar Pradesh',
    badge: 'Sacred',
    category: 'Sacred',
    description: 'Mark Twain wrote that Varanasi is older than history, older than tradition, older even than legend. At dawn, wooden boats slide silently past pilgrims praying in the holy river Ganges while ancient temples glow in vermilion sunbeams. At dusk, the thunderous brass bells and flaming lamps of the Ganga Aarti at Dashashwamedh Ghat celebrate the cycle of existence.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhsCSikJ-6d3qkL7rwOZrdkPXmgECnyat8DyPrSP2Hhm744h3ng_1FR1g9gVePtBbo_fPWIDkdOQsNIwE5SvICYBtw1QGgRjEhqsjQ5YE-28Y6Dok4pTFg0idTw0P7BzxC50dXipIHx6KQDtXtaKLVFaNvExROCfbBXlK8FP0cBq1UOg2BX0wmfp1OkzAHYF-izAFJex-ruQKs2RJ1AsOVGU17hdYciDv8r4pp7xZoU7BeoVI2nI_C',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoDf3N58Sxtd2k1V_vSRDO6lnuwjoR1M1KEyfkUzMO5p9FUPF_0BovjCjJCQmaH_CMpn8mgPcTo6V1-bz9HejmaNt7FQtFtULNsx3Hw_RWaDMmRSeqYicX7KXSFknjvHYTMLbanT9MAI7Jp5ebDeF0ODu_4xISTecTJcMMwsW2CQFYuJvG-G5qdYrYMyCwlTVBU0N7zHc6qyS_a4IdySc3S15WFrAfEub0NtoyOobXMxxezkVSnUQd'
    ],
    bestTime: 'October to March',
    idealDuration: '2 – 3 Days',
    dailyBudget: '₹3,000 – ₹9,000 / day',
    permitRequired: false,
    highlights: [
      'Dawn wooden rowing boat cruise from Assi Ghat to Manikarnika',
      'Dashashwamedh Ghat evening Grand Maha Aarti ritual',
      'Kashi Vishwanath Corridor spiritual pilgrimage',
      'Excursion to Sarnath where Buddha gave his first sermon',
      'Walking through centuries-old Banarasi silk handloom weaver lanes'
    ],
    culinarySpecialties: [
      'Malaiyo saffron milk foam dessert (winter specialty)',
      'Banarasi Paan garnished with silver leaf',
      'Kachori Sabzi with Jalebi breakfast',
      'Tamatar Chaat served in earthen clay kulhad cups'
    ],
    howToReach: {
      flight: 'Lal Bahadur Shastri International Airport (VNS).',
      train: 'Varanasi Junction (BSB) and Banaras (BSBS) linked by Vande Bharat.',
      road: 'National Highway 19 connects easily to Lucknow and Prayagraj.'
    },
    stayTypes: ['Ghat-facing Heritage Havelis', 'Riverfront Ashram Suites', 'Pilgrim Guest Houses']
  },
  {
    id: 'manali',
    name: 'Manali',
    tagline: 'Alpine cedar valleys, thrilling mountain passes, and roaring glacial rivers.',
    state: 'Himachal Pradesh',
    badge: 'Adventure',
    category: 'Adventure',
    description: 'Surrounded by towering deodar forests and snow-crowned Himalayan peaks, Manali is Himachal’s premier mountain haven. From the bohemian stone cafes of Old Manali to the sheer adrenaline of the Atal Tunnel and Rohtang Pass, it bridges tranquil apple orchard walks with high-altitude alpine thrills.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEscuEov1P7hCcx6qoMyuyHWdAVkxjEqt5v12uUTU03WiCqu28Uk_-sp_AVAj0Xm18gU67CWTsGLzcM39STl25jWbnuZhnQrc-mbDQRubTiYH9KgpIxAYhCIS6WB_dYLnG0aWlwZ-1nAt7tW6J9CTeQ5O21oyDWY9JiJfLWddCUNPHUqHTh0FYJiSfaL5q6GhVBtz_P7-uMbYfaN4fiH8Jsk5zWLd39uM8qPny8iysVgK_NW1mpf7B',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA86TeOlFoBq606KlePH-UYifzQuJi_DNbfXf_nl3latO-RoMGG6C8jknBrWSpajovlSyIQakh1NKgPvNuWyevgH7P6X_z_3qe91lg9-9u6y7t7s6n5SioZFAL61b48JJyHpfkedPZqqbsCMA1IPS3sRGdcK9Mr0KQT7VaBMeB7BPPmEBxNJKbDHwWPKgiPPIaqqGi3EGcpDd595LMgpLmV9VrD95aBLRXehGyJgc9VOpDYJv9mid44'
    ],
    bestTime: 'March to June (Summer) or Dec to Feb (Snow)',
    idealDuration: '4 – 5 Days',
    dailyBudget: '₹3,500 – ₹10,000 / day',
    permitRequired: true,
    permitNote: 'Rohtang Pass permits must be booked in advance via HP tourism portal.',
    highlights: [
      'Drive through engineering marvel Atal Tunnel into Lahaul Valley',
      'Rohtang Pass snow point at 13,058 ft',
      'Old Manali cafes and wooden Hidimba Devi Temple',
      'Solang Valley paragliding and zorbing adventures',
      'Jogini Waterfalls nature hike through deodar pine trails'
    ],
    culinarySpecialties: [
      'Himachali Siddu stuffed with poppy seeds and walnuts',
      'Trout Fish pan-fried in garlic butter from Tirthan rivers',
      'Dham festive feast with Madra and sweet rice',
      'Tibetan Thukpa and steamed momos with spicy chutney'
    ],
    howToReach: {
      flight: 'Bhuntar Airport (KUU) in Kullu, 50 km away.',
      train: 'Chandigarh or Kalka railway station (7-8 hours scenic taxi drive).',
      road: 'Smooth overnight Volvo bus service from New Delhi (12 hours).'
    },
    stayTypes: ['Apple Orchard Cottages', 'Cedar Forest Chalets', 'Luxury Alpine Glamping']
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    tagline: 'Dramatic high-altitude moonscapes, turquoise lakes, and ancient cliffside gompas.',
    state: 'Ladakh',
    badge: 'Highlands',
    category: 'Highlands',
    description: 'The Land of High Passes is a mesmerizing cold desert plateau bordered by the Karakoram and Himalayan ranges. Home to ancient Tibetan Buddhist monasteries perched dramatically on rocky pinnacles, the shimmering colors of Pangong Tso, and the double-humped camel dunes of Nubra Valley.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsBy3bUKH1nkn_h1M083bFbPoJ0obgMFD3_IvKMJL4ypfRhA0ZUZadxj5LHBVSX8Lxou2Tp5PFf8cR58YYt9jXy4uuBuvPrvqIHkloK4kjhDRYsYYSmpH7ozrD9GrhemaGtkwj04xom6Yul98fG8aJTl_pjSYj8CoJ864wSoyOq-XUwYU38BphP_tHckVcy1pnLDmkbQEwLgsgjkWMDe3iLd0qmDinKaqYVQKSiSJCUA9EGMDGZAvH',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEjEwcEtLRA8NERt65AeY4_NedHWMZtrWkt3-jX0DrbfFJKv9v0HshD48YnsuxPUGeK8Sw9QQ8WxYZ6_cPZoO-FoRr_LbiV-i714ZdpiQm9inZoArP1NOr5anIrR6ATcCnNpmyKLwCOpvZyInArv713fbQbq_HFnNkjhalvQUh0j8vhwuJNiiPt_GFqQejiYysYYNb03oxfL5ZzCL22GImG82ZL_MgiCf49L1d6un-GIj6xE-49tM1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHboYpdv82J1otYGUyyKAuAKPgS1TXup86yYD797chHMlSizHxguZI3Wi4m0X2VliAEpYrftNn3Urs_jcmS1kdLxRxGh9263KkCW0KpTxz13pCh8WEv31eEg16wFSvQepmr4f4Y3_MZVwVFLHPDc_TonSf39QC9-gNpNZExQOEKbxDGrNlFfJpd9sPCsvaAi1LmrdIp-fK4t9FcEbQriKCoVZLQzX1VqL6k860BqAvHuasnkdP3bhn'
    ],
    bestTime: 'May to September',
    idealDuration: '6 – 8 Days',
    dailyBudget: '₹5,500 – ₹16,000 / day',
    permitRequired: true,
    permitNote: 'Inner Line Permit (ILP) required for Pangong Tso, Nubra Valley, and Hanle.',
    highlights: [
      'Thiksey and Diskit monasteries with morning chanting rituals',
      'Pangong Tso lake reflecting changing sapphire shades at 14,270 ft',
      'Crossing Khardung La Pass (one of the highest motorable passes)',
      'Hunder sand dunes with double-humped Bactrian camel safaris',
      'Milky Way astrophotography in the crystal-clear night skies'
    ],
    culinarySpecialties: [
      'Tibetan Tingmo steamed flower buns with spicy mutton broth',
      'Gur Gur Cha (traditional salted butter tea)',
      'Skyu (Ladakhi root vegetable and hand-rolled pasta soup)',
      'Apricot jams and organic sea buckthorn juice'
    ],
    howToReach: {
      flight: 'Kushok Bakula Rimpochee Airport, Leh (IXL). Mandatory 48-hr rest for acclimatization.',
      train: 'Nearest railhead is Jammu Tawi (700 km) or Chandigarh, connecting via high mountain highways.',
      road: 'Scenic summer road trip via Manali-Leh Highway or Srinagar-Leh Highway.'
    },
    stayTypes: ['High Altitude Luxury Yurts', 'Traditional Eco Homestays', 'Heritage Leh Boutique Hotels']
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    tagline: 'Coral atolls, turquoise lagoons, and untouched virgin rainforest reserves.',
    state: 'Andaman & Nicobar Islands',
    badge: 'Island',
    category: 'Island',
    description: 'An archipelago of over 300 jewel-like islands in the Bay of Bengal, the Andamans are celebrated for powdery white shores, crystal-clear diving waters with bioluminescent plankton, and poignant colonial history at the Cellular Jail.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1S8CCKSOMWpOmH5F66P7l55cBaz_pOuN5axZQHpoRBsRvDuehPrPFnL-WVhrKbtTCzsLng1IG7LjajJhgntTVl-b-aZJoyJIIyU-Fkyo-Ypvoqv7p4gOhxZN4iICpEdAzgb8OnedvMFvhbyH0CtHe0eVBxcv8fTQvD7FI4x9eos2yI_56DdJf-aXDMwuDE55HXcGazhz1ques2BwvGz5Rk1Lx5g2jOahU-PYCXBYXOqzyB89vRfge',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoB9VKQPj7JGox7Y5TUdczOZODpCnBY1wuWji5Wvlh9LAOMiOJFmrGFJhoDrO7iaSgj6Glircu6tKVJmqlolTO7tOuektLoEa2yNN5DDYKpeAhcACBzOIX1NVoPOUWd7ZG0Ir1dn7ezlk7hgWmesgCRgri72nILzWairLtKXapoDSd-Q1UBKiZMnnz5fmeD92PY9lqUIHpQr5CJJuFDhG9uw6ErVxIViKb8h1Ry8-wgcj1M7JpMjw3'
    ],
    bestTime: 'October to May',
    idealDuration: '5 – 7 Days',
    dailyBudget: '₹6,000 – ₹18,000 / day',
    permitRequired: false,
    permitNote: 'No restricted area permit needed for major tourist islands (Havelock, Neil).',
    highlights: [
      'Radhanagar Beach (Asia’s top-rated sunset beach) on Havelock Island',
      'Scuba diving and coral reef snorkeling at Elephant Beach',
      'Cellular Jail sound and light historical tribute in Port Blair',
      'Kayaking through mangrove canals in Havelock under the stars',
      'Natural rock bridge formations on Neil Island (Shaheed Dweep)'
    ],
    culinarySpecialties: [
      'Grilled Red Snapper marinated in local crushed spices',
      'Coconut prawn curry with wild island herbs',
      'Fresh tropical papaya and mango platters',
      'Burmese Khow Suey available in Port Blair eateries'
    ],
    howToReach: {
      flight: 'Veer Savarkar International Airport, Port Blair (IXZ) from Chennai, Kolkata, Bengaluru.',
      train: 'Inter-island ferry transit via Makruzz or Green Ocean high-speed catamarans.',
      road: 'Andaman Trunk Road connects Port Blair northward to Rangat and Diglipur.'
    },
    stayTypes: ['Beachfront Palm Cottages', 'Eco Island Sanctuaries', 'Private Beachfront Villas']
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga capital of the world and white-water Himalayan river solitude.',
    state: 'Uttarakhand',
    badge: 'Spiritual',
    category: 'Spiritual',
    description: 'Nestled where the emerald Ganges tumbles out of the Shivalik Himalayas, Rishikesh is an iconic global sanctuary of yoga, meditation ashrams, and exhilarating white-water rapids.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoDf3N58Sxtd2k1V_vSRDO6lnuwjoR1M1KEyfkUzMO5p9FUPF_0BovjCjJCQmaH_CMpn8mgPcTo6V1-bz9HejmaNt7FQtFtULNsx3Hw_RWaDMmRSeqYicX7KXSFknjvHYTMLbanT9MAI7Jp5ebDeF0ODu_4xISTecTJcMMwsW2CQFYuJvG-G5qdYrYMyCwlTVBU0N7zHc6qyS_a4IdySc3S15WFrAfEub0NtoyOobXMxxezkVSnUQd',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhsCSikJ-6d3qkL7rwOZrdkPXmgECnyat8DyPrSP2Hhm744h3ng_1FR1g9gVePtBbo_fPWIDkdOQsNIwE5SvICYBtw1QGgRjEhqsjQ5YE-28Y6Dok4pTFg0idTw0P7BzxC50dXipIHx6KQDtXtaKLVFaNvExROCfbBXlK8FP0cBq1UOg2BX0wmfp1OkzAHYF-izAFJex-ruQKs2RJ1AsOVGU17hdYciDv8r4pp7xZoU7BeoVI2nI_C'
    ],
    bestTime: 'September to November & March to May',
    idealDuration: '3 – 4 Days',
    dailyBudget: '₹3,000 – ₹8,500 / day',
    permitRequired: false,
    highlights: [
      'Evening Aarti ceremony at Triveni Ghat and Parmarth Niketan',
      'The Beatles Ashram (Chaurasi Kutia) murals and meditation domes',
      'Grade III and IV white-water river rafting from Shivpuri to Rishikesh',
      'Sunrise view of Himalayan peaks from Kunjapuri Temple',
      'Walking across iconic suspension bridges Laxman Jhula and Ram Jhula'
    ],
    culinarySpecialties: [
      'Ayurvedic thalis with seasonal mountain vegetables',
      'Wood-fired sourdough pizzas in Tapovan riverside cafes',
      'Chotiwala special Garhwali vegetarian feast',
      'Warm spiced chai with ginger and tulsi'
    ],
    howToReach: {
      flight: 'Dehradun Jolly Grant Airport (DED), just 35 mins away by taxi.',
      train: 'Yog Nagari Rishikesh (YNRK) or Haridwar Junction.',
      road: 'Direct 4.5-hour expressway drive from New Delhi via Meerut.'
    },
    stayTypes: ['Riverside Yoga Ashrams', 'Forest Eco Camps', 'Luxury Wellness Spas']
  }
];

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: 'jaipur-guide',
    destinationId: 'jaipur',
    title: 'Jaipur Travel Guide: From Amer Fort to Hidden Bazaars',
    subtitle: 'A comprehensive 4-day blueprint across Jaipur’s royal palaces, ancestral blue pottery ateliers, and legendary street delicacies.',
    readTime: '8 Min Read',
    tag: 'Heritage & Palaces',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiJleai86kIQa4L_0JP9pIuQ5poDC6LS7-DuBkWYwJXwkYOk7xEGDr356zAMo053FPr17lna9z8rdMv7udOBKOhcwzhcyW2eK0YgToIyFZmuDVHYtKvydxT1lbv8zx-0iUr9n2tWZz7IcBj7n5XLtdkdcCxeZ8r-cxuV3mCKCaqptzmiuDC848VhioLQaQgyJyYriKI8X_3XnIssO4ahlzNK45ZNlLRIl5iT6OdENa0RD0VKav0itK',
    overview: 'Jaipur is a living museum of Rajput craftsmanship. This 4-day itinerary avoids the mid-day tourist rush, connects you with genuine master artisans in Sanganer, and unlocks rooftop photography locations overlooking the walled old city.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & The Pink City Gates',
        theme: 'Walled City Foundations',
        morning: 'Arrive and check into your heritage haveli. Settle in with traditional Masala Chai in the central courtyard before heading into the Old City through New Gate.',
        afternoon: 'Explore the City Palace complex, including the private Chandra Mahal suites and Mubarak Mahal textile museum.',
        evening: 'Photograph Hawa Mahal from the opposite rooftop cafes (Wind View Cafe) as evening lights illuminate the 953 sandstone lattice windows.',
        diningTip: 'Dinner at 1135 AD inside Amer Fort or authentic Dal Baati Churma at LMB in Johari Bazaar.'
      },
      {
        day: 2,
        title: 'Amer Citadel & Rajput Engineering',
        theme: 'Hilltop Sovereignty',
        morning: 'Arrive at Amer Fort by 8:00 AM before tour coaches arrive. Marvel at the mirror mosaics of Sheesh Mahal and the subterranean rainwater channels.',
        afternoon: 'Climb through the underground secret tunnel to Jaigarh Fort to view the Jaivana cannon, once the world’s largest cannon on wheels.',
        evening: 'Sunset drinks at Padao restaurant atop Nahargarh Fort, gazing at the entire panoramic expanse of Jaipur illuminated beneath you.',
        diningTip: 'Stop at Rawat Mishthan Bhandar for hot onion kachoris and mawa samosas on your way back.'
      },
      {
        day: 3,
        title: 'Astronomy & Ancestral Craftsmanship',
        theme: 'Science & Handloom Heritage',
        morning: 'Visit Jantar Mantar observatory at 10:00 AM when the sun casts sharp shadows across the giant Samrat Yantra sundial.',
        afternoon: 'Drive 30 mins to Sanganer or Bagru village to spend the afternoon inside block-printing workshops and master mud-resist dyeing.',
        evening: 'Bazaars of Bapu and Johari Bazaar for blue pottery, brass lanterns, and silver jewelry.',
        diningTip: 'Try Laal Maas and Roomali Roti at Handi on MI Road.'
      },
      {
        day: 4,
        title: 'Hidden Temples & Royal Cenotaphs',
        theme: 'Architectural Solitude',
        morning: 'Sunrise at the Gaitor Ki Chhatriyan (Royal Cenotaphs) nestled peacefully in a quiet mountain gorge away from all crowds.',
        afternoon: 'Excursion to the stepwell of Panna Meena Ka Kund and the Monkey Temple (Galta Ji).',
        evening: 'Farewell sunset dinner overlooking Jal Mahal floating in Man Sagar Lake.',
        diningTip: 'Savor seasonal Ghevar with rabri at Laxmi Mishthan Bhandar.'
      }
    ],
    transitAdvice: 'Hire an auto-rickshaw or taxi driver for the full day (₹1,500 – ₹2,200). Jaipur Metro connects railway station to Chandpole in the Old City.',
    packingList: [
      'Breathable cotton clothes with modest coverage for temples',
      'Comfortable walking shoes for rugged stone fort ramps',
      'Wide-brim hat, sunscreen and sunglasses',
      'Wide-angle camera lens for fort architecture'
    ],
    etiquette: [
      'Remove footwear before stepping onto temple and cenotaph marble platforms',
      'Respect photography permissions inside private palace wings',
      'Polite bargaining is customary in local bazaars, but support artisanal co-ops respectfully'
    ],
    budgetTips: 'Purchase the Rajasthan Tourism Composite Ticket (valid for 2 days covering Amer, Hawa Mahal, Jantar Mantar, Nahargarh) to save 40% on entry fees.'
  },
  {
    id: 'goa-guide',
    destinationId: 'goa',
    title: 'Goa Travel Guide: Fontainhas, Spice Hills & Secret Coves',
    subtitle: 'Venture past the crowded beach shacks to discover Old Goa’s 16th-century architecture, organic spice farms, and tranquil South Goa lagoons.',
    readTime: '7 Min Read',
    tag: 'Coastal & Heritage',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmm8dTC3JDtAgbY8HHaYVwIV7uuJ8-qwNKKa0J4eQ2-whWb_49-ArmyM8aM6a4MW83ndsnvzF5OC_KjGf8_OGLgV8tHNnap1rvlmcn2lXjIqcogjVOibXfz9FGhoHkj_U0FqxEYBXBLL_ZXaHI7L8n4PKfXVYe1tczpz4EMA7a74CBKybK1aek4V2WwuKufVfBVAlWL-V40hFJzUJUgoEkAnTPjahfoSw9B562kAfGe4ZG02Xmkfcw',
    overview: 'Goa is divided into two distinct spirits: the lively, artistic heritage of North Goa and the serene, untouched natural sanctuaries of South Goa. This itinerary creates a sophisticated balance between Latin architecture, secluded beaches, and farm-to-table coastal cuisine.',
    itinerary: [
      {
        day: 1,
        title: 'Fontainhas & Panaji Latin Heritage',
        theme: 'Colonial Architecture',
        morning: 'Begin at our Lady of the Immaculate Conception Church in Panaji. Walk through the cobblestone streets of Fontainhas, admiring Portuguese villas painted in pastel yellow and sea green.',
        afternoon: 'Lunch at Viva Panjim, followed by browsing Azulejos ceramic tile art studios.',
        evening: 'Sunset ferry across the Mandovi River or riverside promenade walk toward Miramar.',
        diningTip: 'Traditional Goan fish thali with Kingfish Fry at Ritz Classic.'
      },
      {
        day: 2,
        title: 'Old Goa Basilicas & Spice Hills',
        theme: 'Spiritual Legacy & Agriculture',
        morning: 'Explore the towering facade of the Basilica of Bom Jesus and the whitewashed baroque towers of Se Cathedral in Old Goa.',
        afternoon: 'Drive to Savoi or Sahakari Spice Farm for a guided walk among vanilla pods, cardamom bushes, and cinnamon bark, followed by a buffet on banana leaves.',
        evening: 'Visit Divar Island by local car ferry for peaceful countryside cycling.',
        diningTip: 'Sample home-brewed cashew feni cocktails and prawn balchão.'
      },
      {
        day: 3,
        title: 'Secluded South Goa Shores',
        theme: 'Lagoon Solitude',
        morning: 'Head south to Cabo de Rama Fort ruins perched over the Arabian Sea.',
        afternoon: 'Relax at Cola Beach where a freshwater emerald lagoon meets the ocean waves.',
        evening: 'Sunset bonfire and stargazing at Agonda or Galgibaga turtle nesting beach.',
        diningTip: 'Seafood barbecue at Fisherman’s Wharf in Cavelossim.'
      }
    ],
    transitAdvice: 'Rent a scooter (₹400/day) or self-drive hatchback (₹1,500/day). GoaMiles app operates official airport taxis.',
    packingList: [
      'Light linen shirts, swimwear, and beach sarong',
      'Waterproof phone pouch and reef-safe sunscreen',
      'Flip-flops for beach and light trainers for fort walking'
    ],
    etiquette: [
      'Dress respectfully when visiting Old Goa churches and coastal temples',
      'Avoid littering plastics on sensitive olive ridley turtle nesting beaches'
    ],
    budgetTips: 'Rent motorbikes for short distances and eat at local shacks (Ambotik & Rava Fry) instead of international cafes.'
  },
  {
    id: 'kashmir-guide',
    destinationId: 'kashmir',
    title: 'Kashmir Travel Guide: Srinagar Houseboats to Gulmarg Snow',
    subtitle: 'Navigating cedar-lined houseboats, authentic Wazwan dining feasts, high-altitude gondolas, and serene Pahalgam meadows safely.',
    readTime: '10 Min Read',
    tag: 'Alpine & Adventure',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT23tDirHbsEP2b_dyAzsuI875iExhc5u6vjNdI5TxjVAU9RYyekeYNn2H_HkhD44BPaeqZgoAbbjiDcPbxM2vP6b95zjO5aD8trxgRhuxMiQsG412Cm1lx4qdCq9Sjd2dp80B1DuCCJf67H2agFyrWW3qD2ZIv6DyNrjlzIAdqnYwwu7gZ0wgNZCddus5kO_xF09JXW9z1bYO37_MY-0ByP9qwrVUv-msHVbZvumB41aShl0L97os',
    overview: 'Kashmir remains an unmatched gem of natural wonder. This 5-day route guarantees safe transit, pre-booked gondola tickets, and unforgettable stays inside heritage walnut-wood houseboats on Nigeen Lake.',
    itinerary: [
      {
        day: 1,
        title: 'Dal Lake & Floating Market',
        theme: 'Waterway Serenity',
        morning: 'Board a wooden shikara at 5:30 AM to witness the centuries-old floating vegetable and flower market on Dal Lake.',
        afternoon: 'Visit the Mughal Gardens of Nishat Bagh and Shalimar Bagh terrace fountains overlooking the lake.',
        evening: 'Settle into your heritage cedarwood houseboat on tranquil Nigeen Lake with steaming Kahwa tea.',
        diningTip: '7-course Wazwan dinner featuring Tabak Maaz and Rista at Mughal Darbar.'
      },
      {
        day: 2,
        title: 'Gulmarg High Gondola',
        theme: 'Himalayan Ridge Line',
        morning: 'Drive 2 hours to Gulmarg. Ride Phase 1 and Phase 2 Gondola up to Apharwat Peak at 13,780 feet.',
        afternoon: 'Snowshoeing or skiing depending on season, or walk around the scenic St. Mary’s Church.',
        evening: 'Return to Srinagar for an evening stroll around Lal Chowk and craft bazaars.',
        diningTip: 'Fresh Kashmiri trout fish roasted with mountain herbs.'
      },
      {
        day: 3,
        title: 'Pahalgam & Valley of Shepherds',
        theme: 'River & Meadows',
        morning: 'Drive to Pahalgam via the saffron fields of Pampore and walnut orchards of Awantipora.',
        afternoon: 'Pony trek or walk through Betaab Valley and Aru Valley along the roaring Lidder River.',
        evening: 'Riverside campfire with hot Kashmiri Harissa or Rogan Josh.',
        diningTip: 'Traditional mutton kanti wraps at local dhabas in Pahalgam market.'
      }
    ],
    transitAdvice: 'Pre-book a trusted tourist taxi for the entire circuit. Verify Gondola Phase 2 slots online 3 weeks in advance.',
    packingList: [
      'Layered thermal wear, windcheater and down jacket',
      'Waterproof trekking boots with deep grip',
      'Kashmiri Pashmina shawl or warm woolen cap',
      'Moisturizer and lip balm for mountain air'
    ],
    etiquette: [
      'Warmly accept hospitality and cups of Kahwa tea offered by Kashmiri hosts',
      'Verify prepaid taxi union rates at Pahalgam and Gulmarg'
    ],
    budgetTips: 'Stay on Nigeen Lake instead of Dal Lake for better pricing, zero motorboat noise, and superior royal hospitality.'
  },
  {
    id: 'kerala-guide',
    destinationId: 'kerala',
    title: 'Kerala Travel Guide: Backwaters, Munnar Tea & Ayurveda',
    subtitle: 'Slow-travel itinerary detailing Kumarakom canal homestays, indigenous Kathakali dance performances, and high-range organic tea sanctuaries.',
    readTime: '9 Min Read',
    tag: 'Backwaters & Wellness',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QlUU0-nTGKjDjrEgdAM8Ct5_SCbuM44f_xitrSOh3je9Il1Ktr-FGzyVaH_5NutrvX19uyIJ5WyA5vv1Yr6mL7A_H5h2fYXTyFAWtIDj8hKQhUQcEhTwKbwQiEecc30mcB8Ns7VAlG879Ckf4ZWKs6GEcf_Jc8PQNHsfeS1jXnvHw02p9YjbP6YcAcMC1UKEBvkio5FQGvNj7q--9FhznVpK6NBOWDT3aiSeVAvBKnWsI_YkxWcT',
    overview: 'From the colonial spices of Fort Kochi to the serene waters of the backwaters and misty peaks of Munnar, Kerala offers a restorative rhythm of life.',
    itinerary: [
      {
        day: 1,
        title: 'Fort Kochi Heritage & Art',
        theme: 'Colonial Maritime Crossroads',
        morning: 'Walk past Chinese Fishing Nets, Santa Cruz Cathedral Basilica, and St. Francis Church.',
        afternoon: 'Wander through Jew Town and Mattancherry Palace, stopping at spice warehouses.',
        evening: 'Watch a traditional Kathakali makeup and dance performance at the Kerala Kathakali Centre.',
        diningTip: 'Grilled tiger prawns and Appam at Seagull Restaurant on the harbour.'
      },
      {
        day: 2,
        title: 'Munnar High-Range Tea Trails',
        theme: 'Emerald Mountain Heights',
        morning: 'Scenic 4-hour drive climbing past Cheeyappara Waterfalls to Munnar.',
        afternoon: 'Visit the Tata Tea Museum and take an olfactory guided walk through tea processing leaves.',
        evening: 'Hike to Top Station or Pothamedu View Point for sunset across rolling green hills.',
        diningTip: 'Hot Malabar Parottas with vegetable kurma or spicy chicken fry.'
      },
      {
        day: 3,
        title: 'Alleppey Kettuvallam Odyssey',
        theme: 'Aquatic Solitude',
        morning: 'Descend to Alleppey (Alappuzha) and board your private thatched-roof houseboat by noon.',
        afternoon: 'Cruise through Vembanad Lake and narrow palm-shaded canals while a private chef prepares fresh Karimeen fish.',
        evening: 'Moored by quiet village paddy fields, stargazing over still backwaters.',
        diningTip: 'Authentic Kerala Sadya lunch prepared on board.'
      }
    ],
    transitAdvice: 'Hire a dedicated private air-conditioned car and driver for the Kochi-Munnar-Alleppey circuit.',
    packingList: [
      'Light breathable cottons and rain poncho',
      'Mosquito repellant and herbal insect cream',
      'Comfortable sandals that slip off easily at temples'
    ],
    etiquette: [
      'Always use your right hand when receiving food or gifts',
      'Do not disrupt early morning backwater fishermen or bathing villagers'
    ],
    budgetTips: 'Government ferry boats (SWTD) run between Alleppey and Kottayam for just ₹25 for an authentic public water journey.'
  },
  {
    id: 'ladakh-guide',
    destinationId: 'ladakh',
    title: 'Ladakh Travel Guide: Acclimatization, Passes & Monasteries',
    subtitle: 'Critical medical tips, Nubra Valley sand dunes, Khardung La logistics, and spiritual morning chanteries in ancient Leh gompas.',
    readTime: '12 Min Read',
    tag: 'High Altitude & Expedition',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEjEwcEtLRA8NERt65AeY4_NedHWMZtrWkt3-jX0DrbfFJKv9v0HshD48YnsuxPUGeK8Sw9QQ8WxYZ6_cPZoO-FoRr_LbiV-i714ZdpiQm9inZoArP1NOr5anIrR6ATcCnNpmyKLwCOpvZyInArv713fbQbq_HFnNkjhalvQUh0j8vhwuJNiiPt_GFqQejiYysYYNb03oxfL5ZzCL22GImG82ZL_MgiCf49L1d6un-GIj6xE-49tM1',
    overview: 'Ladakh sits above 11,000 feet. Proper acclimatization is not an option—it is vital for safety. This guide lays out a verified medical protocol alongside unforgettable high-altitude passes.',
    itinerary: [
      {
        day: 1,
        title: 'Leh Arrival & Mandatory Acclimatization',
        theme: 'Rest & Adaptation',
        morning: 'Land at Leh airport (11,500 ft). Check in to hotel and do absolutely nothing strenuous for the first 24 hours. Drink 3-4 liters of water.',
        afternoon: 'Light stroll in Leh Main Market if feeling well. Monitor oxygen levels with pulse oximeter.',
        evening: 'Gentle sunset visit to Shanti Stupa overlooking Leh valley and Stok Kangri.',
        diningTip: 'Warm vegetable Thukpa or light noodle soup at Chopsticks Noodle Bar.'
      },
      {
        day: 2,
        title: 'Thiksey & Hemis Monasteries',
        theme: 'Tibetan Buddhist Sanctuaries',
        morning: 'Attend 6:30 AM morning prayer ceremony with monks at Thiksey Monastery, reminiscent of the Potala Palace.',
        afternoon: 'Visit Shey Palace and Hemis Monastery hidden inside a rocky ravine.',
        evening: 'Sunset view from Leh Palace ramparts.',
        diningTip: 'Traditional Ladakhi Skyu and apricot dessert.'
      },
      {
        day: 3,
        title: 'Khardung La to Nubra Valley',
        theme: 'Dunes & High Passes',
        morning: 'Ascend Khardung La Pass (17,982 ft). Stop for brief 15-minute photos at the world-famous pass.',
        afternoon: 'Descend into Nubra Valley. Visit the giant 106-ft Maitreya Buddha statue in Diskit.',
        evening: 'Ride double-humped Bactrian camels across the cold desert dunes of Hunder.',
        diningTip: 'Traditional Ladakhi dinner cooked with locally grown organic barley and mint.'
      },
      {
        day: 4,
        title: 'Pangong Tso Miracle Waters',
        theme: 'The Shifting Blue Lake',
        morning: 'Drive via Shyok River route to Pangong Tso (14,270 ft).',
        afternoon: 'Marvel at the lake’s water shifting between cobalt, turquoise, and emerald green.',
        evening: 'Stargaze under Bortle Class 1 dark night skies with clear view of the Milky Way core.',
        diningTip: 'Warm butter tea (Gur Gur Cha) and piping hot Tibetan bread.'
      }
    ],
    transitAdvice: 'Hire a 4x4 SUV (Toyota Innova or Fortuner) through the Leh Taxi Union. Ensure Inner Line Permits are stamped.',
    packingList: [
      'Heavy thermal undergarments and windproof fleece/down jacket',
      'Diamox (acetazolamide) prescription after consulting doctor',
      'UV sunglasses (essential against high-altitude snow blindness)',
      'High-SPF sunscreen (SPF 50+) and deep cold cream'
    ],
    etiquette: [
      'Always walk clockwise around chortens, stupas, and mani prayer stones',
      'Never touch sacred statues or frescoes inside gompa prayer halls'
    ],
    budgetTips: 'Share taxi costs with fellow travelers through traveler message boards in Leh Main Bazaar.'
  },
  {
    id: 'varanasi-guide',
    destinationId: 'varanasi',
    title: 'Varanasi Travel Guide: Dawn Boats, Silk Weavers & Ancient Ghats',
    subtitle: 'Experiencing the world’s oldest living city: sunrise boat odysseys, authentic Banarasi silk workshops, and peaceful evening ceremonies.',
    readTime: '8 Min Read',
    tag: 'Spiritual & Culture',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoDf3N58Sxtd2k1V_vSRDO6lnuwjoR1M1KEyfkUzMO5p9FUPF_0BovjCjJCQmaH_CMpn8mgPcTo6V1-bz9HejmaNt7FQtFtULNsx3Hw_RWaDMmRSeqYicX7KXSFknjvHYTMLbanT9MAI7Jp5ebDeF0ODu_4xISTecTJcMMwsW2CQFYuJvG-G5qdYrYMyCwlTVBU0N7zHc6qyS_a4IdySc3S15WFrAfEub0NtoyOobXMxxezkVSnUQd',
    overview: 'Varanasi is an intense, profoundly moving sensory encounter. This guide shows you how to navigate the sacred city respectfully with authentic local guides.',
    itinerary: [
      {
        day: 1,
        title: 'Sunrise on the Ganges & Kashi Vishwanath',
        theme: 'Awakening of the Ghats',
        morning: 'Board a private wooden hand-rowed boat at Assi Ghat at 5:15 AM. Watch the city awaken, cremation pyres at Manikarnika, and pilgrims performing morning surya namaskar.',
        afternoon: 'Walk through the newly built Kashi Vishwanath Corridor to the golden spired temple.',
        evening: 'Secure a boat vantage for the Grand Ganga Aarti at Dashashwamedh Ghat.',
        diningTip: 'Kachori Sabzi followed by hot saffron Jalebis at Ram Bhandar.'
      },
      {
        day: 2,
        title: 'Silk Weavers of Madanpura & Sarnath',
        theme: 'Artisans & Buddhist Heritage',
        morning: 'Walk through the Muslim handloom quarter of Madanpura to observe master weavers crafting pure Banarasi zardozi silk sarees on jacquard pit looms.',
        afternoon: 'Drive 30 mins to Sarnath, site of Buddha’s first sermon, Dhamek Stupa, and the Ashoka Lion Capital museum.',
        evening: 'Boat to Manikarnika Ghat at twilight for quiet philosophical reflection on life and impermanence.',
        diningTip: 'Chaat feast at Kashi Chaat Bhandar (Tamatar Chaat and Palak Chaat).'
      }
    ],
    transitAdvice: 'Walking and hand-pulled cycle rickshaws are the only realistic ways to navigate the narrow labyrinthine galis.',
    packingList: [
      'Comfortable slip-on shoes (shoes come off frequently at temples and ghats)',
      'Modest, breathable cotton clothing covering knees and shoulders',
      'Small sanitizer and earplugs'
    ],
    etiquette: [
      'Strictly do not photograph cremation pyres at Manikarnika or Harishchandra Ghats',
      'Treat sadhus with respect; ask permission before photographing people'
    ],
    budgetTips: 'Hire rowboats directly from boatmen at Assi Ghat in the morning rather than booking through hotels for 50% lower rates.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'The Rajasthan circuit guide was extraordinary. From the heritage haveli recommendation in Mandawa to the timing for Amer Fort without crowds, RJ Traveller Guide made our family voyage effortless.',
    author: 'Priya & Rahul Sharma',
    location: 'Mumbai',
    circuit: 'Explored Rajasthan Circuit',
    initials: 'PS',
    badgeClass: 'bg-secondary-fixed text-secondary'
  },
  {
    quote: 'As a solo foreign photographer traversing Kashmir and Ladakh, the high-altitude acclimatization schedule and monastery festival dates saved me days of guesswork. Truly authentic insights.',
    author: 'David Miller',
    location: 'London',
    circuit: 'Kashmir & Ladakh Expedition',
    initials: 'DM',
    badgeClass: 'bg-surface-container-high text-primary'
  },
  {
    quote: 'The Kerala backwater homestay selected through their guide offered the purest Ayurvedic food and quiet sunrise birdwatching I have ever experienced. A treasure trove of real India.',
    author: 'Ananya Sen',
    location: 'Kolkata',
    circuit: 'Kerala & Munnar Retreat',
    initials: 'AS',
    badgeClass: 'bg-secondary-fixed text-secondary'
  }
];

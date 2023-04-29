const feature_dishes = [{
    id: 1,
    dish: "Crispy Pork Belly",
    description: ' Crispy Pork Belly Chicharon might look like your regular lechon kawali. However, it is way crispier',
    category: 'Featured Dishes',
    Prep_time: '1 hour',
    cook_time: '1 hour 20 mins',
    servings: '5 servings',
    ingredients: ['2 lbs. pork belly', '6 cups water', '2 cups cooking oil',
        '1 1/2 tablespoons whole peppercorn', '8 pieces dried bay leaves'],
    steps: ['Boil water in a cooking pot. Add salt, bay leaves, whole peppercorn, and pork. Cover and continue to boil for 60 minutes.', 'Remove from the pot and let pork cool down. Poke holes on the skin using a toothpick. Slice the pork in half for a thinner piece.',
        'Rub salt all over the pork belly. Air dry for 1 hour. Note: placing the pork in front of an electric fan is a good idea.', 'Heat oil on a cooking pot. Deep fry pork belly until crispy and golden brown. Note: be extra careful when doing this step. Use of splatter screen is recommended.', 'Remove crispy pork belly from the cooking pot and place over a wire rack. Let it cool down.', 'Transfer to a serving plate. Serve with spicy vinegar.', 'Serve! Share and enjoy!'],
    image: 'https://eatlikepinoy.com/wp-content/uploads/2020/06/32583619138_c8d4fb77b2_c.jpg',
},
{
    id: 2,
    dish: "Lumpia",
    description: 'Many people wonder what does lumpia mean? Lumpia is a Filipino word and it comes from the Chinese spring roll, with veggies (like cabbage and carrots), meats (usually pork), and/or seafood (sometimes shrimp) as the filling.',
    category: 'Featured Dishes',
    prep_time: '30 mins',
    cook_time: '10 mins',
    servings: '3 servings',
    ingredients: ['3 package Lumpia wrappers', '6 lbs. ground pork', '15 cloves garlic', '3 inch ginger, peeled and minced',
        '9 tablespoons soy sauce', '1.5 teaspoon chicken bouillon powder', '6 eggs ', '1.5 teaspoon ground black pepper',
        '18 oz. cabbage, thinly sliced'],
    steps: ['Using a serrated knife, cut the square lumpia wrappers in half so that you have two stacks of rectangular wrappers. Place a damp paper towel over the wrappers to keep them from drying out as you work.', 'Combine the pork, cabbage, garlic, ginger, soy sauce, chicken bouillon powder (if using), eggs, and ground black pepper in a large bowl. Using your hands, or a rubber spatula, mix the filling well so that the seasonings are evenly distributed.', 'Place one of the rectangular wrappers vertically on your work surface with the short edge facing you. Place a heaping teaspoon of the filling on the wrapper about half an inch from the edge closest to you. Grasp the bottom edge of the wrapper and roll it up and over the filling, continuing to roll until 2 inches of wrapper remain.', 'Dip two fingers into a bowl of water, then moisten the last 2 inches of wrapper with your fingers. Finish rolling the lumpia, then rest it on its seam. Continue rolling with the rest of the filling and lumpia wrappers.',
        'At this point, you can freeze your rolled lumpia if you wish by placing them in freezer bags and then into your freezer.', 'To cook the lumpia, fill a large frying pan with about 1/2-inch of vegetable oil. Heat the oil over medium-high heat. Gently place the lumpia into the hot oil and fry until golden brown on all sides, 3 to 5 minutes total (if frying frozen lumpia, it will take 1 to 2 minutes longer).', 'Place the fried lumpia on paper towels and serve immediately with sweet and sour sauce or chili sauce (bottled from the store is fine).'],
    image: 'https://www.cookmunitybyajinomoto.com/wp-content/uploads/2021/05/Lumpiang-Baboy-at-Carrots.jpg',
},
{
    id: 3,
    dish: "Tortang Giniling",
    description: 'Tortang Giniling is a Filipino ground beef omelette. It is unique in that the omelette is made more like a fritter and is filled with lots of beef and veggies. It is a delicious recipe for breakfast or for a light lunch or snack.',
    category: 'Featured Dishes',
    prep_time: '20 mins',
    cook_time: '20 mins',
    servings: '3 servings',
    ingredients: ['1 Tbsp oil', '1 onion, diced', '3 cloves garlic, minced', '1 tomato, diced',
        '1 lb ground beef', '½ tsp salt', '¼ tsp ground black pepper', '½ c peas', '5 eggs, lightly beaten', 'Vegetable or canola oil, for frying'],
    steps: ['In a large skillet, heat oil over medium high heat. Add the onion and garlic and saute until softened, 2-3 minutes.',
        'Add the diced tomato to the skillet and continue cooking for 5 minutes, letting the tomatoes release their juices.', 'Add the ground beef to the vegetables and saute until browned, 5-7 minutes.', 'Add the salt and pepper. Mix well. Taste the mixture and adjust the salt and pepper as desired.',
        'Transfer the mixture to a medium bowl. Add the peas and let the mixture cool slightly.', 'Once the meat mixture has cooled, add the beaten eggs and mix well.',
        'Wipe out the skillet you used for the meat and heat a little oil in it, over medium heat. Reduce the heat to medium low and spoon ¼ c of the egg and beef mixture into the skillet, flatten the mixture and shape it roughly into a 3-4 inch patty. (Depending on the size of your skillet, you may be able to cook more than one omelette at a time. Just be careful not to overcrowd the pan, or flipping the omelettes will be difficult.)', 'Cook the omelette for 2-3 minutes on the first side. (If your omelettes cook faster than this, your pan is too hot. Reduce the heat for the next batch.)', 'Flip the omelette and cook for an additional 1-2 minutes on the second side, until golden.',
        'Transfer the omelette to a paper towel-lined plate and continue with the remaining batter. (Keeping the plate with the cooked omelettes in a very low oven will keep them warm until all are made.)'],
    image: 'https://images.aws.nestle.recipes/resized/99d4944149e037a65b65d37d6f969d0e_All_in_One_Tortang_Giniling.6_944_531.jpg',
},
{
    id: 4,
    dish: "Filipino Adobo",
    description: '"Adobo" comes from the Spanish word "adobar," which means "marinate." In Filipino cuisine, the marinade for a chicken adobo recipe is traditionally vinegar-based. Serve this flavorful dish with a simple Almond Rice Pilaf or a Veggie Rice Bowl for color and flavor.',
    category: 'Featured Dishes',
    prep_time: '30 mins',
    cook_time: '45 mins',
    servings: '6 people',
    ingredients: ['1 cup white vinegar', '1/4 cup soy sauce', '1 whole garlic bulb, smashed and peeled', '2 teaspoons kosher salt', '1 teaspoon coarsely ground pepper', '1 bay leaf', '2 pounds bone-in chicken thighs or drumsticks', '1 tablespoon canola oil', '1 cup water'],
    steps: ['In a shallow dish, combine the first 6 ingredients. Add chicken; refrigerate, covered, 20-30 minutes. Drain, reserving marinade. Pat chicken dry.', 'In a large skillet, heat oil over medium-high heat; brown chicken. Stir in water and reserved marinade. Bring to a boil. Reduce heat; simmer, uncovered, until chicken is no longer pink and sauce is slightly reduced, 20-25 minutes. Discard bay leaf. If desired, serve chicken with cooking sauce.', 'Share and enjoy!'],
    image: 'https://www.seriouseats.com/thmb/uc8nb040OwgXekR9obuhEqm8WoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg',
},
{
    id: 5,
    dish: "Sinigang",
    description: 'Sinigang is a sour soup native to the Philippines. This recipe uses pork as the main ingredient. Other proteins and seafood can also be used. Beef, shrimp, fish are commonly used to cook sinigang.',
    category: 'Featured Dishes',
    prep_time: '15 mins',
    cook_time: '1hr mins',
    servings: '6 servings',
    ingredients: ['2 lbs pork belly or buto-buto', '1 bunch spinach or kang-kong', '3 tablespoons fish sauce', '12 pieces string beans sitaw, cut in 2 inch length', '2 pieces tomato quartered',
        '3 pieces chili or banana pepper', '1 tablespoons cooking oil', '2 quarts water', '1 piece onion sliced', '2 pieces taro gabi, quartered', '1 pack sinigang mix good for 2 liters water'],
    steps: ['Heat the pot and put-in the cooking oil',
        'Sauté the onion until its layers separate from each other', 'Add the pork belly and cook until outer part turns light brown',
        'Put-in the fish sauce and mix with the ingredients', 'Pour the water and bring to a boil', 'Add the taro and tomatoes then simmer for 40 minutes or until pork is tender', 'Put-in the sinigang mix and chili', 'Add the string beans (and other vegetables if there are any) and simmer for 5 to 8 minutes', 'Put-in the spinach, turn off the heat, and cover the pot. Let the spinach cook using the remaining heat in the pot.', 'Serve hot. Share and enjoy!'],
    image: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/fe9c5b7c-0016-4680-98b3-cef70a92c8ec.png'
}, {
    id: 6,
    dish: "Puto Bungbong",
    description: 'Puto Bumbong is traced back to the early part of the Spanish colonial era. This rice dainty is believed to be brought over all the way from Mexico by the people under the expedition of Miguel Lopez de Legazpi.',
    category: 'Featured Dishes',
    prep_time: '10 mins',
    cook_time: '15 mins',
    servings: '2 people',
    ingredients: ['1 cup glutinous rice', '2 tsp purple food color (ube)', '2 cups water', 'panutsa'],
    steps: [' Soak glutinous rice in water overnight.',
        'Grind the soaked rice. (see bibingka how)', ' Mix food color while the glutinous rice is being ground.',
        'Wrap the ground glutinous rice on a piece of muslin cloth and place it in a strainer to drain excess liquid. Another technique in draining excess liquid is by pressing a heavy object that has been placed over the muslin cloth.'
        , 'Once the ground rice has slightly dried, rub it against the screen of a strainer to produce coarse grained rice flour.', 'The rice flour for making puto bumbong is now ready to cook.Fill each bamboo tube(bumbong) with just enough glutinous rice and put them into the steamer.See to it that the steamer contains boiling water.'
        , 'Steam rice flour in the bamboo tubes for 10 minutes. Once cooked, shake out the contents of each bamboo tube or remove the cooked glutinous rice from the bumbong with the help of a knife.', 'Spread butter on the puto bumbong and place a small piece of panutsa (sugar cane sweets). Add a small amount of grated coconut before serving. This recipe is good for 6 - 8 pieces of puto bumbong.',
        ],
    image: 'https://grecipes.s3.amazonaws.com/recipe_picture/1573010/Pinoy_Puto_Bumbong.jpg',
},
{
    id: 7,
    dish: "Bicol Express",
    description: `Bicol Express is the ultimate comfort food! With pork cubes cooked in coconut milk and chili peppers, it's rich, creamy, spicy and delicious! Serve with steamed rice for a hearty and big flavored meal!`,
    category: 'Featured Dishes',
    prep_time: '15 mins',
    cook_time: '1hour',
    servings: '6 people',
    ingredients: ['1 tablespoon canola oil', '1 onion, peeled and sliced thinly', '4 cloves garlic, peeled and minced', '2 pounds pork belly, cut into 1-inch cubes', '2 tablespoons fresh shrimp paste', '1 can (13.5 ounces) coconut milk', '1 cup water', '14 pieces Thai chili peppers, stemmed and minced', '2 cups finger chilies (siling haba), sliced', '1 cup coconut cream', 'salt and pepper to taste'],
    steps: ['In a wide pot over medium heat, heat oil. Add onions and garlic and cook, stirring occasionally, until softened.', 'Add pork and cook, stirring occasionally, until lightly browned.', 'Add shrimp paste and cook, stirring occasionally, for about 1 to 2 minutes.', 'Add coconut milk, water, and chili peppers. Bring to a simmer and cook for about 35 to 35 minutes or until pork is tender and liquid is reduced and begins to render fat.', 'Add finger chilies and cook, stirring regularly, for about 1 to 2 minutes.', 'Add coconut cream and continue to simmer until thickened and begins to render fat.', 'Season with salt and pepper to taste. Serve hot.'],
    image: 'https://amiablefoods.com/wp-content/uploads/bicol-express-500-500x375.jpg',
},
{
    id: 8,
    dish: "Kare kare",
    description: 'Kare Kare is a type of Filipino stew with a rich and thick peanut sauce.',
    cateory: 'Featured Dishes',
    prep_time: '20 minutes',
    cook_time: '2hours 30 mins',
    servings: '6 servings',
    ingredients: ['3 lbs oxtail cut in 2 inch slices you an also use tripe or beef slices', '1 piece small banana flower bud sliced',
        , '1 bundle pechay or bok choy', '1 bundle string beans cut into 2 inch slices', '4 pieces eggplants sliced', '1 cup ground peanuts', '1/2 cup peanut butter', '1/2 cup shrimp paste', '34 Ounces water about 1 Liter', '1/2 cup annatto seeds soaked in a cup of water', '1/2 cup toasted ground rice', '1 tbsp garlic minced', '1 piece onion chopped', 'salt and pepper'],
    steps: ['In a large pot, bring the water to a boil', 'Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker)', 'Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes', 'Add the toasted ground rice and simmer for 5 minutes', 'On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes', 'Transfer the cooked vegetables to the large pot (where the rest of the ingredients are)', 'Add salt and pepper to taste', 'Serve hot with shrimp paste. Enjoy!'],
    image: 'https://api.lifegetsbetter.ph/uploads/recipes/featured/Kare-KAre.jpg',
},
{
    id: 9,
    dish: "Kinilaw",
    description: `It is not actually the dish but the process of preparing it. It hailed from the Visayan region and is derived from the word, kilaw, which means raw or uncooked. The meat, normally a fish, is 'cooked' without the application of heat but is rather cured in vinegar.`,
    cateory: 'Featured Dishes',
    prep_time: '15 minutes',
    marinating_time: '1 hour',
    servings: '4 servings',
    ingredients: ['1 pounds Tanigue or Tuna skinned and deboned', '1 cup vinegar',
        '4 pieces calamansi or half of a lemon',
        '2 thumbs ginger minced', '1 medium red onion minced',
        '2 pieces green chili or Thai chili, cut into thin slices',
        'salt', 'fresh ground pepper'],
    steps: ['Wash the fish meat and tap dry with paper towels. Cut into 1-inch cubes.'
        , 'Place the fish cubes in a bowl. Pour in the vinegar and the juice from calamansi. Season with salt and pepper. Add the ginger, onion, and chili. Toss gently until well blended.'
        , 'Cover and marinate for an hour or up to 3 hours in the fridge. The fish should lose its translucent and pinkish color and should turn whiter and opaque.', 'transfer to a serving dish and serve immediately.'],
    image: 'https://www.foxyfolksy.com/wp-content/uploads/2019/11/kinilaw-recipe.jpg',
},
{
    id: 10,
    dish: "Bulalo",
    description: 'It’s a well known fact that Filipinos love stew and soup dishes. From the sour sinigang to the sweet tinola, there’s guaranteed to be a soup dish for every flavor palate preference –– all great to sip and enjoy, especially during long, cool nights. But one of the most popular, and arguably most delicious, soups…',
    cateory: 'Featured Dishes',
    prep_time: '15 minutes',
    cook_time: '2 hours',
    servings: '4 servings',
    ingredients: ['2 lbs beef shank', '1 onion',
        '34 ounces water'
        , 'fish sauce to taste optional', '½ cabbage whole leaf individually detached', '1 bundle bok choy', '2 cobs corn each cut into 3 parts', '2 Tablespoons whole peppercorn', '1/2 cup green onions cut unto 1 1/2 inch pieces'],
    steps: ['In a big cooking pot, pour in water and bring to a boil'
        , 'Put-in the beef shank followed by the onion and whole pepper corn then simmer for 1.5 hours (30 mins if using a pressure cooker) or until meat is tender.'
        , 'Add the corn and simmer for another 10 minutes', 'Add the fish sauce,cabbage, pechay, and green onion (onion leeks)', 'Serve hot. Share and Enjoy!'],
    image: 'https://media.istockphoto.com/id/1180896416/photo/philippines-famous-dish-bulalo-made-from-beef-marrow-bones.jpg?s=612x612&w=0&k=20&c=gdTaPXMx6dOJ1IOxtlXrf88UQ27dRGG4ziq7ZuAuhtw=',
}
]



export default feature_dishes
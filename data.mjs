const Data = [{
  id: 1,
  dish: "Chicken Adobo",
  description: 'Chicken slices cooked in soy sauce and vinegar with garlic. This is a delicious Filipino chicken dish that you can eat for lunch with warm white rice.',
  Category: 'lunch',
  Prep_time: '5 mins',
  cook_time: '30 mins',
  servings: '4 servings',
  ingredients: ['2 lbs chicken', '3 pieces dried bay leaves', '8 tablespoons soy sauce',
    '4 tablespoon white vinegar', '5 gloves garlic', '1 1/2 cups water', '3 tabelspoons cooking oil',
    ' 1 teaspoon sugar', '1/4 teaspoon salt', '1 teaspoon whole pppercorn'],
  Steps: ['Combine chicken, soy sauce, and garlic in a large bowl. Mix well. Marinate the chicken for at least 1 hour. Note: the longer the time, the better',
    'Heat a cooking pot. Pour cooking oil.', 'When the oil is hot enough, pan-fry the marinated chicken for 2 minutes per side.', 'Pour-in the remaining marinade, including garlic. Add water. Bring to a boil',
    'Add dried bay leaves and whole peppercorn. Simmer for 30 minutes or until the chicken gets tender', 'Add vinegar. Stir and cook for 10 minutes.',
    'Put-in the sugar, and salt. Stir and turn the heat off.Serve hot. Share and Enjoy!'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2018/11/Filipino-Chicken-Adobo-Recipe-728x750.jpg',
},
{
  id: 2,
  dish: "Chicken Curry",
  description: 'This is a Filipino version of Chicken Curry. It is rich and tasty. Delicious!.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '1 hour',
  servings: '6 servings',
  ingredients: ['2 lbs. chicken', '1 tablespoon curry powder', '1 piece potato ', '4 cloves garlic',
    '2 stalks celery', '1 piece red bell pepper', '2 pieces long green pepper', '1 piece onion',
    '2 thumbs ginger', '2 cups coconut milk', '1/2 cup all-purpose cream', '1 cup water', 'fish sauce and ground black pepper to taste'],
  Steps: ['Heat oil in a pan. Fry potato for 1 minute per side. Remove from the pan. Set aside.', 'Using the remaining oil, saute garlic, onion, celery, and ginger until onion softens.',
    'Add the chicken pieces. Saute until the outer part of the chicken turns light brown.', 'Add 1 tablespoon fish sauce. Continue sautéing for 1 minute.',
    'Pour-in coconut milk and water. Let boil.', 'Add curry powder. Stir until the powder is completely diluted. Cover the pot and continue cooking between low to medium heat until the liquid reduces to half',
    'Add the red bell pepper and pan fried-potato. Cook for 5 minutes.', 'Season with fish sauce and ground black pepper as needed. You can also add all-purpose cream if desired.',
    'Transfer to a serving bowl. Serve and enjoy!'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2021/08/Pinoy-Style-Chicken-Curry-jpg-257x257.webp',
},
{
  id: 3,
  dish: "Pininyahang Manok",
  description: 'Pininyahang Manok literally translates to pineapple chicken. This Recipe calls for chicken slices to be marinated in pineapple juice then stewed with pineapple chunks.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '45 mins',
  servings: '6 servings',
  ingredients: ['2 lbs chicken', '12 ounces pineapple chunks', '2 pieces tomato', '1 cup bell pepper', '1 piece carrot',
    '2 1/2 tablespoon fish sauce', '1/2 cup fresh milk', '2 tablespoon garlic', '1 piece onion', '2 tablespoon cooking oil'],
  Steps: ['Marinate the chicken in pineapple juice/concentrate (derived from the can of pineapple chunks) for 20 to 30 minutes',
    'Pour the cooking oil in a cooking pot / casserole then apply heat', '3.Sauté the garlic, onion, and tomatoes', 'Put-in the chicken and cook until color of the outer part turns light brown',
    'Add the pineapple juice/concentrate marinade and fresh milk then bring to a boil', 'Add the pineapple chunks and simmer until the chicken is tender and half of the liquid evaporates (about 20 to 30 minutes).',
    'Put-in the carrots and simmer for 5 minutes', 'Add the bell pepper and fish sauce then simmer for 3 minutes', 'Remove from the cooking pot / casserole and transfer to a serving dish.',
    'Serve hot. Share and enjoy!'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2009/11/Pininyahang-Manok-Pineapple-Chicken-jpg-300x200.webp',
},
{
  id: 4,
  dish: "Chicken Tinola",
  description: 'Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '1 hour',
  servings: '6 servings',
  ingredients: ['1 whole chicken', '36 ounces rice washing', '1/2 piece green papaya', '1 tablespoon garlic', '1 piece onion', '1 thumb ginger',
    '2 tablespoon fish sauce', '1 cup Hot pepper leaves', '3 tablespoons fish sauce', '1/4 teaspoon ground black pepper'],
  Steps: ['Sauté the garlic, onion, and ginger', 'Put-in the chicken and cook until color turns light brown', 'Add the fish sauce. Stir. Pour rice washing into the cooking pot. Let boil. Cover the pot and simmer for 45 minutes. Note: add water if needed.',
    'Add green papaya. Cook for 5 minutes', 'Add the hot pepper leaves or malunggay leaves. Stir and cook for 1 minute.', 'Season with ground black pepper. Note you can also add fish sauce or salt if needed.',
    'Transfer to a serving bowl. Serve hot. Share and enjoy!'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2018/11/Chicken-Tinola-Soup-Recipe-728x750.jpg',
},
{
  id: 5,
  dish: "Chicken Caldereta",
  description: 'chicken Caldereta is a type of Filipino chicken stew. This version involves cooking the chicken in a tomato-based sauce.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '55 mins',
  servings: '4 servings',
  ingredients: ['2 lbs chicken', '1 piece Knorr Chicken Cube', '2 pieces carrots', '2 pieces potato', '8 ounces tomato sauce',
    '2 pieces bell pepper', '4 tablespoons liver spread', '1 piece tomato', '3 pieces chili pepper', '1 piece onion', '3 cloves garlic'
    , '3 tablespoons cheddar cheese ', '1 ½ cups water', '4 tablespoons cooking oil'],
  Steps: ['Start by pan-frying the potato and carrots. Heat oil in a pan. Add potato. Fry each side for 1 minute. Remove from the pan and put in a bowl lined with paper towel. Set aside. Do the same thing with the carrots.',
    'Using the remaining oil, fry the chicken for 1 ½ minutes per side. Remove from the pan. Set aside.', 'Saute onion and garlic. Add tomato. Continue to saute while stirring until tomato and onion softens.',
    'Add chicken and pour-in tomato sauce and water. Let boil.', 'Stir and then add Knorr Chicken Cube and chili pepper. Cover the pan. Cook between low to medium heat for 15 minutes.',
    'Turn the chicken pieces over to equally cook the opposite side. Add liver spread. Stir. Cover and cook for 20 minutes.', 'Add bell peppers and cheese. Cook for 3 minutes.',
    'Put the carrots and potatoes into the pan. Continue to cook for 5 to 7 minutes', 'Season with salt and ground black pepper. Serve..'],
  image: `https://api.lifegetsbetter.ph/uploads/recipes/featured/qne-chicken-caldereta-img.jpg`,
},
{
  id: 6,
  dish: "Dinuguan",
  description: 'Pork Dinuguan is a type of stew native to the Philippines. It is peculiar when compared to other types of stews because of the use of pork blood as the main ingredient.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '50 mins',
  servings: '6 servings',
  ingredients: ['2 lbs. pork shoulder', '1 1/4 cups pork blood', '1 piece Knorr Pork Cube', '4 pieces long peppers', '2 pieces onion', '6 cloves garlic',
    '2 cups water', '¾ cup white vinegar', '3 pieces dried bay leaves', '3 tablespoons cooking oil', '1 tablespoon granulated white sugar', 'Salt and ground black pepper to taste'],
  Steps: ['Heat oil in a cooking pot', 'Saute onion for 30 seconds. Add garlic. Continue to cook until onion softens.', 'Add pork. Saute for 3 to 5 minutes.',
    'Pour water. Let boil. Add bay leaves and vinegar. Let the liquid re-boil.', 'Add Knorr Pork Cube. Stir. Cover and simmer for 1 hour. Note: add water as needed.',
    'Add long green peppers and pour pork blood into the pot. Stir. Continue to cook between low to medium heat for 15 minutes while stirring every 3 minutes.',
    'Add sugar and season with salt and ground black pepper.'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2018/12/Pork-Dinuguan-728x750.jpg',
},
{
  id: 7,
  dish: "Sinigang na Baboy",
  description: 'One of the most beloved and familiar Filipino dishes out there, sinigang introduces a great balance of warmth and sourness.',
  cateory: 'lunch',
  prep_time: '10 mins',
  cook_time: '50 mins',
  servings: '5 servings',
  ingredients: ['3 lbs. pork baby back ribs', '3 bunches bok choy', '1 1/2 liter water', '44 grams Knorr Sinigang sa Sampaloc with Gabi',
    '15 counts string beans', '8 okra', '1 eggplant', '3 long green chili pepper', '1 cup daikon radish ', '2 tomato', '1 onion', '3 tablespoons cooking oil',
    'Fish sauce and ground black pepper to taste'],
  Steps: ['Heat oil in a large pot. Saute onion and tomato until the layers of the onion starts to separate.', 'Add pork spare ribs. Continue sautéing until the pork turns light brown in color.',
    'Pour water. Cover the pot. Let the water boil. Adjust heat to low setting and continue boiling for 30 minutes.', 'Add Knorr Sinigang sa Sampaloc with Gabi recipe mix and daikon radish. Stir and cover the pot. Continue cooking until the pork gets tender.',
    'Add chili pepper, string beans, okra, and eggplant. Cook for 12 minutes.', 'Add pechay. Cook for 3 minutes', 'season with fish sauce and ground black pepper.',
  ],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2021/12/Porknigang-Recipe-jpg-257x257.webp',
},
{
  id: 8,
  dish: "Pork Steak",
  description: 'Soy sauce, onions, salt, pepper, calamansi– these are a couple of ingredients you may commonly find in most classic Filipino viands.',
  category: 'lunch',
  prep_time: '10 mins',
  cook_time: '50 mins',
  servings: '4 servings',
  ingredients: ['4 pieces pork chops', '5 tablespoons soy sauce', '2 pieces lime', '1/2 cup cooking oil', '2 pieces onions', ' 1/2 cups water',
    '1/2 teaspoon granulated white sugar', 'Salt and pepper to taste'],
  Steps: ['combine pork chops, soy sauce, and lime juice in a large bowl or resealable bag. Marinate for at least 1 hour.', 'Heat a pan then pour-in cooking oil.',
    'Pan-fry the marinated pork chops in medium heat for 3 minutes per side.',
    'Remove excess oil. Pour-in the remaining marinade and water and let boil. Simmer for 45 minutes or until the pork is tender. Note: Add water as needed.',
    'Add-in the sugar, salt, and pepper then stir.', 'Put-in the onions and cook for 3 minutes more.', 'Turn-off heat and transfer to a serving plate.'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2011/02/Pork-Steak-Bistek.jpg',
},
{
  id: 9,
  dish: "Pork Sisig",
  description: 'Pork sisig is a popular Filipino dish. It can be considered as a main dish or an appetizer.',
  category: 'lunch',
  prep_time: '12 mins',
  cook_time: '1 hour',
  servings: '6 servings',
  ingredients: ['1 lb. pig ears', '1 1/2 lb pork belly', '1 piece onion', '3 tablespoons soy sauce', '1/4 teaspoon ground black pepper',
    '1 knob ginger', '3 tablespoons chili flakes', '1/2 teaspoon garlic powder', '1 piece lemon ', '½ cup butter', '¼ lb chicken liver',
    '6 cups water', '3 tablespoons mayonnaise', '1/2 teaspoon salt', '1 piece egg'],

  Steps: ['Pour the water in a pan and bring to a boil Add salt and pepper.', 'Put-in the pigs ears and pork belly then simmer for 40 minutes to 1 hour (or until tender).',
    'Remove the boiled ingredients from the pot then drain excess water', 'Grill the boiled pig ears and pork belly until done', 'Chop the pig ears and pork belly into fine pieces',
    'In a wide pan, melt the butter or margarine. Add the onions. Cook until onions are soft.', 'Put-in the ginger and cook for 2 minutes', 'Add the chicken liver. Crush the chicken liver while cooking it in the pan.',
    'Add the chopped pig ears and pork belly. Cook for 10 to 12 minutes', 'Put-in the soy sauce, garlic powder, and chili. Mix well', 'Add salt and pepper to taste',
    'Put-in the mayonnaise and mix with the other ingredients', 'ransfer to a serving plate. Top with chopped green onions and raw egg'],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2014/10/Pork-Sisig.jpg',
},
{
  id: 10,
  dish: "Pork Barbecue",
  descriprtion: 'Filipino skewered marinated pork slices that are grilled to perfection.',
  category: 'lunch',
  prep_time: '3 hours',
  cook_time: '15 mins',
  servings: '1:1 Serving',
  ingredients: ['3 lbs. pork shoulder', '2 sachets Knorr SavorRich Pork Liquid Seasoning', '2 tablespoons brown sugar', '½ cup banana ketchup',
    '3 pieces calamansi', '6 cloves garlic', '½ cup soy sauce', '½ teaspoon ground black pepper'],
  Steps: ['Arrange pork slices in a large bowl.', 'Add Knorr SavorRich, soy sauce, ketchup, sugar, garlic, and ground black pepper. Mix well.', 'Cover and refrigerate for at least 3 hours. Note: marinating the meat longer will provide better results.',
    'Skewer the marinated meat on a bamboo skewer (also called barbecue stick). Set aside.',
    'Heat-up the grill. Start to grill the pork barbecue for 3 to 5 minutes per side. Continue this step until pork is thoroughly cooked. Note: baste with a mixture of soy sauce, banana ketchup, and vegetable oil after turning the barbecue over.'
  ],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2019/12/filipino-pork-barbecue-scaled-jpg-257x257.webp',
},
{
  id: 11,
  dish: "Filipino Omelet",
  description: 'Beaten eggs seasoned with salt and pepper and cooked with onions and tomato. This is a delicious breakfast dish best paired with pandesal.',
  category: 'Breakfast',
  prep_time: '5 mins',
  cook_time: '8 mins',
  servings: '1 serving',
  ingredients: ['3 pieces large eggs', '2 piece tomatoes diced', '1 piece red onion diced', '1/4 teaspoon ground black pepper', '1/4 teaspoon sea salt',
    '2 tablespoons cooking oil'
  ],
  steps: ['Crack the eggs and then place in a medium bowl. Add the salt and pepper and then beat using a wire whisk or fork. Set aside.',
    'Heat the cooking oil in a pan.',
    'Saute the onion and tomatoes for 2 minutes.',
    'Pour-in the beaten egg mixture. Spread the mixture by tilting the pan sideways. Continue to cook in medium heat for 3 to 4 minutes.',
    'Flip the omelet with the aid of a wide spatula and then cook the other side for 3 minutes. Note: If you are having a hard time flipping the omelet, try to first place the egg on a wide plate (the cooked side should be facing down). Quickly flip the plate on top of the pan so that the omelet will slide to the pan with the uncooked side facing down.',
    'Turn off the heat and then transfer the omelet to a serving plate. Enjoy with pandesal or garlic rice. Serve with banana ketchup.',
    'Share and enjoy!'
  ],
  image: 'https://www.curiouscuisiniere.com/wp-content/uploads/2018/05/Tortang-Giniling-Filipino-Beef-Omelette-5666-450.2.jpg'
},
{
  id: 12,
  dish: "Skinless Longganisa",
  description: 'Skinless longganisa refers to a type of Filipino sausage without the casing. It is also known as naked sausage. Filipino Longganisa can either be sweet or garlicky. This version has the best of both worlds. It also has no preservatives.',
  category: 'Breakfast',
  prep_time: '15 mins',
  cook_time: '10 mins',
  servings: '1 serving',
  ingredients: ['1 ¾ lbs. ground pork', '9 tablespoons dark brown sugar', '1 tablespoon smoked paprika', '3 tablespoons vegetable oil', '1 ¼ tablespoons coarse salt',
    '1 teaspoon ground black pepper', '2 head garlic'
  ],
  steps: ['Peel the skin off the garlic cloves. Crush thoroughly using mortar and pestle. Mince the crushed garlic. Set aside.',
    'In a large mixing bowl, combine ground pork along with all of the ingredients. Mix well.',
    'Cover the bowl. Refrigerate for 2 hours.',
    'Shape the longganisa by laying a sheet of wax paper on a flat surface. Scoop around 3 tablespoons of mixture and put over the wax paper. Fold the wax paper from top to down until the mixture covered. Hold the edge of the paper with your fingers and then slide the card towards the mixture. Push a bit more until a sausage shape is formed. Do this step until the entire mixture is consumed.',
    'Refrigerate overnight.',
    'Cook and serve for breakfast. Share and enjoy!'
  ],
  image: 'https://www.foxyfolksy.com/wp-content/uploads/2017/04/homemade-skinless-longganisa-640-1-500x375.jpg',

},
{
  id: 13,
  dish: "Hotsilog",
  description: 'Hotsilog is a meal composed of hotdogs, garlic fried rice, and fried egg. In a Filipino household, this is commonly eaten for breakfast with a condiment of banana ketchup and some pickled shredded papaya (atchara) on the side. Red juicy hotdogs are used to make hotsilog.',
  category: 'Breakfast',
  prep_time: '5 mins',
  cook_time: '20 mins',
  servings: '1 servings',
  ingredients: ['3 pieces red hotdogs', '2 eggs', '1 cup garlic fried rice', '1 medium tomato sliced',
    '3/4 cup water', '6 tablespoons cooking oil'
  ],
  steps: ['Pour water in a small cooking pot. Let boil.',
    'Add hotdogs and then pour 2 tablespoons cooking oil. Continue to cook until the water evaporates.',
    'Once the water is gone, fry the hotdogs in the remaining oil for 1 to 2 minutes while slowly rolling it back and forth to prevent it from getting burnt. Set aside.',
    'Prepare the eggs by heating 4 tablespoons of cooking oil in a pan.',
    'Once the oil gets hot, crack a piece of egg and start to fry it. As the egg is frying, grab a spoon and scoop the oil from the bottom of the pot. Pour the oil over the egg. Do this until the yolk gets a white covering. Remove the egg and set aside. Do the same step on the other piece of egg.',
    'Arrange the garlic fried rice, hotdogs, and fried eggs in a plate. Put the slices of tomato on the side.',
    'Serve with ketchup. Share and enjoy!'
  ],
  image: 'https://panlasangpinoy.com/wp-content/uploads/2017/07/Hotdog-Sinangag-at-Itlog.jpg',

},
{
  id: 14,
  dish: "Lugaw ",
  description: 'Lugaw or plain congee is the most basic congee recipe that only requires rice, water, and salt.',
  category: 'Breakfast',
  prep_time: '3 mins',
  cook_time: '35 mins',
  servings: '1 servings',
  ingredients: ['1 cup long grain white rice', '4 to 5 cups water', '2 teaspoons salt', '1/4 cup rousong pork floss'
  ],
  steps: ['Pour water in a cooking pot. Bring to a boil.',
    'Put-in the rice. Continue cooking for 30 minutes or until the texture becomes thick, while stirring once in awhile.',
    'Add the salt, stir and then cook for 2 minutes more.',
    'Transfer to a serving bowl. Top with a tablespoon of rousing.',
    'Serve hot. Share and enjoy!'
  ],
  image: 'https://images.summitmedia-digital.com/yummyph/images/2016/07/25/lugaw-with-egg-640.jpg',

},
{
  id: 15,
  dish: "Champorado",
  description: 'Champorado is a sweet chocolate rice porridge that uses sweet glutinous rice (locally known as malagkit) and cocoa powder as main ingredients. A more traditional approach would be using tableya (pure cocoa blocks) instead of cocoa powder.',
  category: 'Breakfast',
  prep_time: '5 mins',
  cook_time: '25 mins',
  servings: '1 servings',
  ingredients: ['8 tbsp cocoa powder or about 4 pieces tableya', '1 cup glutinous rice malagkit', '1/2 cup sugar', '3 1/2 cups water', 'condensed milk optional'
  ],
  steps: ['Pour 2 1/2 cups of water in a pot and bring to a boil',
    'Put-in the glutinous rice and allow water to re-boil for a few minutes',
    'Dilute the cocoa powder in 1 cup warm water then pour-in the pot. Stir continuously',
    'Once the glutinous rice is cooked (about 12 to 18 minutes of cooking with constant stirring), add the sugar and cook for another 5 minutes or until the texture becomes thick.',
    'Remove from the pot and place in a serving bowl.',
    'Serve hot with a swirl of condensed milk on top.'
  ],
  image: 'https://www.lutongbahayrecipe.com/wp-content/uploads/2019/03/lutong-bahay-recipe-champorado-1200x727.jpg',

},
{
  id: 16,
  dish: "Daing Na Bangus",
  description: 'Daing na Bangus refers to milkfish that is marinated in a mixture composed of vinegar, crushed peppercorn, garlic, and salt. Hot pepper such as cayenne pepper powder can be added to make it spicy. It is usually marinated overnight for best results, and then fried until crispy. Unlike traditional daing wherein the fish is salted…',
  category: 'Breakfast',
  prep_time: '1 hour',
  cook_time: '10 mins',
  servings: '1 servings',
  ingredients: ['1 medium sized milkfish cleaned and scales removed', '10 tablespoons white or cane vinegar', '1 teaspoon crushed peppercorn', '1 head garlic crushed', '1/4 teaspoon cayenne pepper powder optional', '1/2 teaspoon coarse sea salt', '1/2 cup cooking oil'
  ],
  steps: ['Combine vinegar, pepper, salt, garlic, and cayenne pepper powder in a bowl. Stir to mix the ingredients. Set aside.',
    'Butterfly the bangus (slice from the top) and the place it inside a large re-sealable plastic bag.',
    'Pour the vinegar mixture in the bag and then let all the air out. Seal the bag and refrigerate overnight.',
    'Remove the fish from the bag and let the liquid drip.',
    'Heat the cooking oil in a pan. Once the oil gets hot, fry the fish in medium heat until one side gets crisp. Turn it over and repeat the process on the other side.',
    'Remove from the pan and place in a serving plate. Serve with bowl of spicy vinegar.',
    'Share and enjoy!'
  ],
  image: 'https://api.lifegetsbetter.ph/uploads/recipes/featured/daing-na-bangus-featured.jpg',

},
{
  id: 17,
  dish: "Tortang Talong",
  description: 'Tortang talong (or torta) is a Filipino eggplant omelette made by pan-frying a charred eggplant doused in egg.',
  category: 'Breakfast',
  prep_time: '15 mins',
  cook_time: '12 mins',
  servings: '2 servings',
  ingredients: ['4 pieces Chinese eggplant', '2 pieces raw eggs', '1 teaspoon salt', '6 tablespoons cooking oil'
  ],
  steps: ['Grill the eggplant until the color of skin turns almost black',
    'Let the eggplant cool for a while then peel off the skin. Set aside.',
    'Crack the eggs and place in a bowl',
    'Add salt and beat',
    'Place the eggplant on a flat surface and flatten using a fork.',
    'Dip the flattened eggplant in the beaten egg mixture',
    'Heat the pan and pour the cooking oil',
    'Fry the eggplant (that was dipped in the beaten mixture). Makes sure that both sides are cooked. Frying time will take you about 3 to 4 minutes per side on medium heat.'
  ],
  image: 'https://rmn.ph/wp-content/uploads/2020/03/Tortang-Talong.jpg',

},
{
  id: 18,
  dish: "Homemade Pork Tocino",
  description: 'Tocino is a cured meat product native to the Philippines. It is sometimes referred to as sweet red pork. The curing preparation for this pork dish is similar to that of ham and bacon, except that red food coloring is needed to for this Filipino cured meat.',
  category: 'Breakfast',
  prep_time: '12 hours',
  cook_time: '20 mins',
  servings: '2 servings',
  ingredients: ['2 lbs. pork ham', '1 1/2 tablespoons sea salt', '1/2 teaspoon Prague powder #1', '3/4 cups granulated white sugar', '1 teaspoon sodium phosphate',
    '1/4 cup anisette liquor', '1/2 cup pineapple juice', '1/4 cup crushed garlic', '1 tablespoon garlic powder', '1/4 teaspoon Vitamin C powder', '1/4 teaspoon Red food coloring'
  ],
  steps: ['Slice the pork ham to about ¼ inch thickness',
    'Dissolve the sodium phosphate in 5 tablespoons of water.',
    'Except for the meat, combine all ingredients in a large bowl and mix well',
    'Apply the combined mixture to the meat by rubbing. Make sure that the mixture is evenly distributed across the meat',
    'Place the mixed ingredients in a covered container',
    'Store the covered container (with meat and mixture) in room temperature for 14 hours. It may also be refrigerated but would take at least 3.5 days to complete.'
  ],
  image: 'https://mommyjheng.files.wordpress.com/2022/01/tocino02.png?w=1024',

},
{
  id: 19,
  dish: "Tuyo Fish With Rice And Tomato",
  description: 'Tuyo fish is a type of Filipino sun dried fish. This is usually fried quickly and eaten with spicy vinegar dip and rice. Tuyo is usually consumed for breakfast in the Philippines, although this dried fish can also be eaten for anytime of the day.',
  category: 'Breakfast',
  prep_time: '5 mins',
  cook_time: '10 mins',
  servings: '2 servings',
  ingredients: ['10 pieces tuyo salted dried fish', '3 cups cooked white rice', '3 plum tomatoes wedged', 'Cooking oil spray', '1/2 cup spiced vinegar sinamak'
  ],
  steps: ['Preheat oven to 400F.',
    'Arrange the tuyo fish in an aluminum foil sheet. Spray both sides of the fish with cooking oil. Secure the fish inside the sheet by covering with another aluminum sheet and secure the sides.',
    'Open your vent (this is important). Bake for 6 to 10 minutes.',
    'Remove the fish from the sealed sheet and arrange in individual plates with a cup of white rice and wedged tomato.',
    'Serve with spiced vinegar.',
    'Share and enjoy!'
  ],
  image: 'https://pinoycook.files.wordpress.com/2013/12/tuyo.jpg?w=908',

},
{
  id: 20,
  dish: "Tapsilog",
  description: 'A delicious meal composed of fried marinated beef, garlic fried rice, and fried egg. This is best eaten with a saucer of vinegar as dipping sauce for the beef.',
  category: 'Breakfast',
  prep_time: '10 mins',
  cook_time: '30 mins',
  servings: '1 servings',
  ingredients: ['1 lb. beef sirloin sliced thinly', '3 pieces eggs', '6 tablespoons cooking oil', '3 tablespoons Knorr Liquid Seasoning', '6 cloves crushed garlic',
    '¾ cups pineapple juice', '2 tablespoons brown sugar', '¼ teaspoon ground white peppe', '5 cups leftover rice', '1 teaspoon salt',
    '5 cloves garlic crushed'
  ],
  steps: ['Prepare the tapa by placing the beef in  large bowl. Combine with all the tapa marinade ingredients. Mix well and cover the bowl. Place inside the fridge and marinateovernight.',
    'Cook the garlic fried rice (sinangag na kanin) by heating 3 tablespoons cooking oil in a pan. Add crushed garlic. Cook until garlic turns light brown. Add the leftover rice. Stir-fry for 3 minutes.',
    'Season with salt. Continue to stir-fry for 3 to 5 minutes. Set aside.',
    'Start to cook the tapa. Heat a pan and pour the marinated beef into it, including the marinade. Add ¾ cups water. Let the mixture boil. Cover the pan and continue to cook until the liquid reduces to half. Add 3 tablespoons cooking oil into the mixture. Continue to cook until the liquid completely evaporates. Fry the beef tapa in remaining oil until medium brown. Set aside.',
    'Fry the egg by pouring 1 tablespoon oil on a pan. Crack a piece of egg and sprinkle enough salt on top. Cook for 30 seconds. Pour 2 tablespoons water on the side of the pan. Cover and let the water boil. Continue to cook until the egg yolks gets completely cooked by the steam.',
    'Arrange the beef tapa, sinangag, and fried egg on a large plate to form Tapsilog. Serve with vinegar as dipping sauce for tapa.'
  ],
  image: 'https://images.summitmedia-digital.com/sap/images/2020/12/18/spot-purefoods-clientimage-mainimage-1-1608283411.jpg',

},
{
  id: 21,
  dish: "Tokwa't Baboy",
  description: ' Filling and flavorful, the delightful tokwat baboy is a staple in any Filipino kitchen.',
  Category: 'dinner',
  Prep_time: '20 mins',
  cook_time: '1 hour 30 mins',
  servings: '4 servings',
  ingredients: ['1 lb pig ears', '1 lb pork belly liempo', '1 lb tofu extra firm tofu',
    '1 1/2 cup white vinegar', '1/4 cup soy sauce', '1 tablespoon sugar', '1 tablespoon salt',
    '1 tablespoon whole peppercorn', '1 piece onion sliced', '2 stalks scallions cut in 1/2 inch length', '1/8 teaspoon ground black pepper', '5 cups water', '2 cups cooking oil'],

  Steps: ['Pour-in water in a pot and bring to a boil', 'Add salt and whole peppercorn', 'Put-in the pig’s ears and pork belly then simmer until tender (about 30 mins to 1 hour)', 'Pour cooking oil on a separate pan and allow to heat', 'When the oil is hot enough, deep-fry the tofu until color turns golden brown and outer texture is somewhat crispy',
    'Cube the fried tofu and slice the boiled pigs ears and pork belly into bite-sized pieces then set aside', 'Combine the sugar, salt, soy sauce, and vinegar in bowl. Stir.', 'Microwave for 1 minute.', 'Add the ground black pepper, onions, green onions, and chili pepper. Transfer the sauce in a serving bowl.', 'Place the sliced meat and tofu in a serving plate with the bowl of sauce by the side', 'Serve hot! Share and Enjoy!'],
  image: 'https://www.ajinomoto.com.ph/web/wp-content/uploads/2019/02/Tokwat-Baboy.jpg',
},
{
  id: 22,
  dish: "Adobong Sitaw",
  description: 'A popular Filipino dish made with string beans (also known as sitaw) that are cooked in a savory and tangy sauce.',
  category: 'dinner',
  prep_time: '10 mins',
  cook_time: '25 mins',
  servings: '3 servings',
  ingredients: ['1 lb string beans sitaw, cut in 2 inch length', '1/4 lb pork belly thinly sliced (optional)', '1/2 cup soy sauce', '1/3 cup vinegar',
    '1 piece onion (thinly sliced lengthwise)', '4 to 6 cloves garlic', '1/2 teaspoon ground black pepper',
    '1 cup water'],
  Steps: ['Heat a frying pan or wok then sear the pork.', 'When oil and juice comes out of the pork, add garlic and onions then cook for 2 minutes.', 'Pour-in the soy sauce, vinegar, and water then bring to a boil.', 'Shake-in the ground black pepper and stir.',
    'Cover and simmer for 15 minutes or until the pork is tender.', 'Add the string beans and cook for 3 to 5 minutes.', 'Turn off the heat and transfer to a serving bowl.', 'Serve hot with steamed rice.', 'Share and enjoy!'],
  image: 'https://images.summitmedia-digital.com/yummyph/images/2019/09/25/adobongsitawrecipewithchicken.jpg',
},
{
  id: 23,
  dish: "Ginisang Ampalaya",
  description: 'This is a popular vegetable dish in the Philippines made with bitter melon, onions, garlic, tomatoes, and eggs. It is a low-calorie, nutrient-dense dish that is perfect for those who are trying to eat healthy.',
  category: 'dinner',
  prep_time: '10 mins',
  cook_time: '20 mins',
  servings: '3 servings',
  ingredients: ['2 pieces ampalaya', '1 tbsp garlic', '1/2 tsp ground black pepper', 'salt to taste',
    '2 raw eggs', '18 ounces luke warm water', '1 tomato', '1 onion', '3 tbsp cooking oil'],
  Steps: ['Place the ampalaya in a large bowl',
    'Add salt and lukewarm water then leave for 5 minutes', 'Place the ampalaya in a cheesecloth then squeeze tightly until all liquid drips', 'Heat the pan and place the cooking oil',
    'Saute the garlic, onion, and tomato', 'Add the ampalaya mix well with the other ingredients',
    'Put-in salt and pepper to taste', 'Beat the eggs and pour over the ampalaya then let the eggs cook partially', 'Mix the egg with the other ingredients',
    'Serve hot. Share and Enjoy!'],
  image: 'https://www.ajinomoto.com.ph/ajinomoto-static/web/wp-content/uploads/2021/03/GINISANG-AMPALAYA-WITH-EGG-TOMATO-2.jpg',
},
{
  id: 24,
  dish: "Piniritong Manok (Fried Chicken)",
  description: 'A crispy and flavorful fried chicken dish that is popular in the Philippines. It is usually marinated in a mixture of soy sauce, vinegar, garlic, and pepper before being coated in flour and deep-fried until golden brown.',
  category: 'dinner',
  prep_time: '20 mins',
  cook_time: '15 mins',
  servings: '4 servings',
  ingredients: ['3 lbs. chicken cut into individual pieces', '1 tablespoon salt', '3 cups cooking oil', '1 cup all-purpose flour', '2 teaspoons garlic powder', '¼ teaspoon ground black pepper'],
  Steps: ['Rub salt all over the chicken. Let it stay for 15 minutes.', 'Heat the oil in a cooking pot.', 'Combine flour,garlic powder, salt, and ground black pepper. Mix well using a fork or a wire whisk. Set aside.',
    'Beat the eggs in a large mixing bowl.Continue to beat until all the ingredients are all incorporated. Add half of flour mixture. Whisk. Add the remaining half and whisk until the texture of the batter becomes smooth.', 'Dredge the chicken in flour and then roll it in flour until completely covered. Fry in medium heat for 7 minutes per side.',
    'Remove from the pot and put in a plate lined with paper towel. This will absorb the oil.',
    'Serve with ketchup or gravy.', 'Share and enjoy!'],
  image: 'https://i.ytimg.com/vi/Eh6opoRQJz8/maxresdefault.jpg',
},
{
  id: 25,
  dish: "Tuna Salad",
  description: 'A refreshing and light salad made with canned tuna, mixed greens, cherry tomatoes, cucumber, red onions, and a dressing made with olive oil, lemon juice, and Dijon mustard.',
  category: 'dinner',
  prep_time: '12 mins',
  cook_time: '2 mins',
  servings: '3 servings',
  ingredients: ['2 cans 14 ounces white tuna', '1/2 cup mayonnaise', '1 tablespoon parmesan cheese', '1 tablespoon cheddar cheese', '1 medium white onion minced',
    '1/3 teaspoon garlic powder', '1/4 cup minced celery', '1/2 teaspoon granulated white sugar', 'Salt and pepper to taste'],
  Steps: ['Drain the liquid from the tuna and then place the tuna in a medium mixing bowl.',
    'Add mayonnaise, parmesan and cheddar cheeses, onion, celery, garlic powder, and white sugar. Gently mix to incorporate all the ingredients.', 'Try to taste the mixture and then add salt and pepper as needed.',
    'Serve. You can make sandwiches, wraps, and finger food out of this recipe. Enjoy!'],
  image: 'https://img.taste.com.au/ChmIAzAE/w1200-h630-cfill/taste/2016/11/mediterranean-tuna-salad-31059-1.jpeg',
},
{
  id: 26,
  dish: "Grilled Chicken Salad",
  description: ' A hearty salad that is packed with flavor and also happens to be full of nutrition.',
  category: 'dinner',
  prep_time: '20 mins',
  cook_time: '15 mins',
  servings: '6 servings',
  ingredients: ['1 pound boneless skinless chicken breasts', '6 cups romaine lettuce coarsely chopped', '3/4 cup cherry tomatoes halved', '3/4 cup corn kernels fresh, thawed from frozen or canned', '3/4 cup cucumber chopped'
    , '1/4 cup red onion thinly sliced', '1/2 cup cooked crumbled bacon', '1/2 cup blue cheese crumbled', '1 avocado peeled, pitted and sliced', '3 tablespoons lemon juice', '2 tablespoons Dijon mustard',
    '3 tablespoons red wine vinegar', '2 teaspoons granulated sugar', '2 tablespoons finely minced shallot', '1/2 teaspoon dried oregano', '1 1/2 teaspoons dried parsley'
    , '2/3 cup olive oil', 'salt and pepper to taste'],
  Steps: ['Place all the ingredients in a medium bowl and whisk until well combined.',
    'Pour half the dressing into a container and save for later use.', 'Add the chicken breasts to the bowl with the remaining dressing.',
    'Marinate for at least one hour or up to 8 hours.', 'Preheat an outdoor grill or indoor grill to medium high heat. Remove the chicken from the marinade and place on the grill.'
    , 'Cook for 5-6 minutes per side or until chicken is browned and cook through.', 'Let the chicken cool for 5 minutes, then slice.', 'Place the lettuce in a large bowl. Drizzle half of the reserved dressing over the lettuce.'
    , 'Arrange the chicke, tomatoes, corn, cucumber, red onion, bacon, blue cheese and avocado on top of the lettuce', 'Drizzle the rest of the dressing over the top, then serve immediately.'],
  image: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg',
},
{
  id: 27,
  dish: "Baked Sweet Potato",
  description: 'A delicious and nutritious side dish that is low in calories and high in fiber. Simply bake sweet potatoes in the oven and serve with a dollop of Greek yogurt or a sprinkle of cinnamon.',
  cateory: 'dinner',
  prep_time: '5 mins',
  cook_time: '40 mins',
  servings: '2 servings',
  ingredients: ['Sweet Potatoes', 'butter or vegan butter', 'sea salt', 'greek yogurt'],
  Steps: ['Preheat the oven to 425°F and place a piece of foil on a baking sheet. Use a fork to poke holes into the sweet potatoes, set them on the baking sheet, and roast for 40 to 50 minutes, or until puffed up and soft inside when pierced with a fork.'],
  image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/01/Baked-Sweet-Potato-main-1.jpg',
},
{
  id: 28,
  dish: "Sushi Rolls",
  description: 'Homemade Sushi is so much cheaper than at the restaurant. Plus, it is easy and fun to make your own rolls at home, so you can put all your favorite ingredients into your perfect custom roll.',
  cateory: 'Dinner',
  prep_time: '40 mins',
  cook_time: '25 mins',
  servings: '1:1 serving',
  ingredients: ['6 sheets sushi seaweed', '1 batch prepared sushi rice', '1/2 lb sashimi-grade raw salmon or desired raw fish of choice'
    , '4 oz cream cheese sliced into strips', '1 avocado sliced', 'soy sauce for serving'],
  Steps: ['Place the seaweed on a bamboo mat, then cover the sheet of seaweed with an even layer of prepared sushi rice. Smooth gently with a rice paddle.', 'Layer salmon, cream cheese, and avocado on the rice, and roll it up tightly. Slice with a sharp knife, and enjoy right away with soy sauce.'],
  image: 'https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-3-640x427.jpg',
},
{
  id: 29,
  dish: "Vegetable Soup",
  description: 'This Vegetable Soup has become one of my most popular soup recipes and for good reason!',
  cateory: 'Dinner',
  prep_time: '15 mins',
  cook_time: '40 mins',
  servings: '8 servings',
  ingredients: ['2 Tbsp olive oil', '1 1/2 cups chopped yellow onion', '2 cups peeled and chopped carrots',
    '1 1/4 cups chopped celery', '4 cloves garlic , minced', '4 (14.5 oz) cans low-sodium chicken broth or vegetable broth',
    '2 (14.5 oz) cans diced tomatoes (undrained)', '3 cups peeled and 1/2-inch thick diced potatoes (from about 3 medium)',
    '1/3 cup chopped fresh parsley', '2 bay leaves', '1/2 tsp dried thyme, or 1 Tbsp fresh thyme leaves', 'Salt and freshly ground black pepper',
    '1 1/2 cups chopped frozen or fresh green beans', '1 1/4 cups frozen or fresh corn', '1 cup frozen or fresh peas'],

  Steps: ['Heat olive oil in a large pot over medium-high heat.'
    , 'Add onions, carrots, and celery and saute 4 minutes then add garlic and saute 30 seconds longer.'
    , 'Add in broth, tomatoes, potatoes, parsley, bay leaves, thyme and season with salt and pepper to taste.',
    'Bring to a boil, then add green beans.', 'Reduce heat to medium-low, cover and simmer until potatoes are almost fully tender, about 20 - 30 minutes.', 'Add corn and peas and cook 5 minutes longer. Serve warm.Plknife, and enjoy right away with soy sauce.'],
  image: 'https://thecozyapron.com/wp-content/uploads/2018/07/vegetable-soup_thecozyapron_1.jpg',
},
{
  id: 30,
  dish: "Baked Salmon",
  description: 'This baked salmon is what easy, weeknight dinners are all about! It is moist, flakey, and baked with a delicious lemon garlic butter sauce!',
  cateory: 'Dinner',
  prep_time: '5 mins',
  cook_time: '15 mins',
  servings: '4 servings',
  ingredients: ['4 (6-ounce) salmon fillets', '2 tablespoons butter, melted',
    '1/2 tablespoon lemon juice, plus more lemon slices for garnish', '3 garlic cloves, minced'
    , 'salt and pepper', '1 teaspoon finely chopped parsley', '1 teaspoon finely chopped dill'],

  Steps: ['Preheat your oven to 375F/190C and let the salmon come to room temperature for 15 minutes. Mix together the melted butter and lemon juice (I use the juice from 1/4 slice of lemon) in a small bowl. Then, place the salmon in baking dish and brush the butter mix all over.'
    , 'Top the salmon with the minced garlic, salt, and pepper, and bake for 12-15 minutes, or until cooked through.'
    , 'Sprinkle the fresh parsley and dill on the salmon before serving.'],
  image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Baked-Salmon-8.jpg',
}
]










export default Data
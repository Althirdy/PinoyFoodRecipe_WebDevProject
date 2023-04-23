const Data = [{
    id: 1,
    dish: "Chicken Adobo",
    description: 'Chicken slices cooked in soy sauce and vinegar with garlic. This is a delicious Filipino chicken dish that you can eat for lunch with warm white rice.',
    Category: 'dinner',
    Prep_time: '5 minutes',
    cook_time: '30 minutes',
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
    category: 'dinner',
    prep_time: '10 minutes',
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
    category: 'dinner',
    prep_time: '1o minutes',
    cook_time: '45 minutes',
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
    category: 'dinner',
    prep_time: '10 minutes',
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
    category: 'dinner',
    prep_time: '10 minutes',
    cook_time: '55 minutes',
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
    category: 'dinner',
    prep_time: '10 minutes',
    cook_time: '50 minutes',
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
    cateory: 'dinner',
    prep_time: '10 minutes',
    cook_time: '50 minutes',
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
    category: 'dinner',
    prep_time: '10 minutes',
    cook_time: '50 minutes',
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
    category: 'dinner',
    prep_time: '12 minutes',
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
    category: 'dinner',
    prep_time: '3 hours',
    cook_time: '15 minutes',
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

}
]





const selector = (name) => {
    const base = document.querySelector(`${name}`)
    return base;
}

const navbar = selector(".navbar");
const toggle = selector(".toggle")
const count = document.querySelectorAll(".value");
var interval = 1000;
const nav = selector("nav")
const dinner_show = selector(".dinner")
const breakfast_show = selector(".breakfast")
//----------------live count

count.forEach(n => {
    var startvalue = 0
    var endValue = parseInt(n.getAttribute("data-val"));
    var duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startvalue += 1;
        n.textContent = `${startvalue}+`
        if (startvalue == endValue) {
            clearInterval(counter)

        }
    }, duration)

})

// END OF LIVE COUNT
//-----------Toggle Navbar
toggle.addEventListener('click', () => {
    navbar.classList.toggle("show");
    toggle.classList.toggle("show_toggle")


})



// ---------for Navbar show
var lasttop = window.scrollY
window.addEventListener("scroll", () => {
    if (lasttop < window.scrollY) {
        nav.classList.add("nav_hidden")
    } else {
        nav.classList.remove("nav_hidden")
    }
    lasttop = window.scrollY
})

// ----------- Dinner Dishes
const dinner = Data.slice(0, 10)
const dinner_display = dinner.map(n => (
    ` <div class="Card" id=${n.id}>
    <img src="${n.image}" alt="">
    <h3>${n.dish}</h3>
    <div class="desc">
    <p>${n.servings}</p>
    <p>Cook Time: ${n.cook_time}</p>
    </div>
   
    </div>`

))
const join_dinner = dinner_display.join('')
dinner_show.innerHTML = join_dinner
// ----------------- BreakFast dishes

const breakfast = Data.slice(10, 20)
const breakfast_display = breakfast.map(n => (
    ` <div class="Card" id=${n.id}>
    <img src="${n.image}" alt="">
    <h3>${n.dish}</h3>
    <div class="desc">
    <p>${n.servings}</p>
    <p>Cook Time: ${n.cook_time}</p>
    </div>
    </div>`
))

breakfast_show.innerHTML = breakfast_display.join('')

// TESTING for click

const card = document.querySelectorAll(".Card");

card.forEach(n=>{
    n.addEventListener('click',()=>{
        console.log(n.id)

    })

})


















// -----------For glider

function glid(class_for_glide, dots) {
    new Glider(document.querySelector(`.${class_for_glide}`), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: `.${dots}`,
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 250,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 'auto',
                itemWidth: 50,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 350,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 'auto',
                itemWidth: 50,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 760,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
        ]
    });

} //<<<< FUNCTION FOR GLIDE 

glid("dinner", "dots_dinner") //dinner
glid("breakfast", "dots_breakfast")//breakfast
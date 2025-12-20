const words = [

    //animal

    { word: "Chimpanzee", hint: "Known for using tools and deep jungle chatter." },
    { word: "Alligator", hint: " Ancient reptile with powerful jaws and a grin-like snout.." },
    { word: "Kangaroos", hint: "Masters of hopping and carrying their young in pouches." },
    { word: "Crocodile", hint: "Patient river stalker with prehistoric armor." },
    { word: "Hippopotamus", hint: "Big, semi - aquatic grazer with a short temper." },
    { word: "Porcupine", hint: "Defensive creature covered with sharp quills." },
    { word: "Armadillo", hint: "Armored digger that rolls into a ball." },
    { word: "Chameleon", hint: "Expert in blending colors with its surroundings." },
    { word: "Rhinoceros", hint: "Massive grazer with a prominent horn on its nose." },
    { word: "Dragonfly", hint: "Aerial acrobat found near ponds with shimmering wings." },


    //fruits
    { word: "Pineapple", hint: "Tropical fruit with a spiky crown and golden sweetness." },
    { word: "Blackberry", hint: "Dark, juicy berry often found in thorny bushes." },
    { word: "Pomegranate", hint: "Red sphere filled with ruby-like seeds." },
    { word: "Watermelon", hint: "Picnic favorite—green shell, red heart." },
    { word: "Raspberry", hint: "Tiny cluster fruit with a soft tartness." },
    { word: "Strawberry", hint: "Heart-shaped fruit with dotted surface." },
    { word: "Mangosteen", hint: "Sweet purple “queen” of tropical fruits." },
    { word: "Cranberry", hint: "Tart berry often enjoyed in juice or sauce." },
    { word: "Passionfruit", hint: "Wrinkled shell hiding aromatic pulp." },
    { word: "Blueorange", hint: "A mythical blend of color and zest (trick fruit!)." },


    //foods
    { word: "Spaghetti", hint: "Long strands often twirled in tomato sauce." },
    { word: "Croissant", hint: "Flaky pastry that began in France." },
    { word: "Lasagna", hint: "Layered pasta dish baked with cheese and sauce." },
    { word: "Cheeseburg", hint: "Savory sandwich loved worldwide for its melty center." },
    { word: "Chocolate ", hint: "Sweet treat born from cacao beans." },
    { word: "Casserole", hint: "Oven-baked mix of comfort and carbs." },
    { word: "Pancake", hint: "Flat breakfast favorite served with syrup." },
    { word: "Sandwiche", hint: "Edible invention with endless filling varieties." },
    { word: "Cappuccino", hint: "Frothy coffee with a creamy foam top." },
    { word: "Doughnut", hint: "Round, ringed, and sugar-dusted indulgence." },

    //sports
    { word: "Basketball", hint: "Game of hoops, dribbles, and slam dunks." },
    { word: "Badminton", hint: "Racket sport played with a feathered projectile." },
    { word: "Volleyball", hint: "Beach or court action with high-flying spikes." },
    { word: "Snowboarding", hint: "Gliding gracefully down wintry slopes." },
    { word: "Tabletennis", hint: "Miniature version of a paddle-based rivalry." },
    { word: "Windsurfing", hint: "Combines wave riding with wind mastery." },
    { word: "Gymnastics", hint: "Artistic flips and gravity-defying strength." },
    { word: "Baseballer ", hint: "Bat, cap, glove, and bases define it." },
    { word: "Cricketing", hint: "Gentlemans game played with bat and wickets." },
    { word: "Bodyweight", hint: "Fitness regime relying purely on self-resistance." },


    //vegetables
    { word: "Cauliflower", hint: "White florets often disguised as rice or mash." },
    { word: "Broccoli", hint: "Tree-like green packed with nutrients." },
    { word: "Asparagus", hint: "Tender stalks often served grilled or steamed." },
    { word: "Artichoke ", hint: "Layered veggie with an edible heart." },
    { word: "Zucchinii", hint: "Green squash perfect for stir-fries." },
    { word: "Cucumber", hint: "Cool and crisp salad favorite." },
    { word: "Spinachie", hint: "Leafy green Popeye adored." },
    { word: "Eggplants", hint: "Glossy purple veggie with spongy flesh." },
    { word: "Kohlrabis", hint: "Bulbous stem vegetable from the cabbage clan." },
    { word: "Coriander", hint: "Herb with fragrant leaves and versatile seeds." },


    //vehicles
    { word: "Motorcycle", hint: "Two-wheeled speedster with a roar of freedom." },
    { word: "Helicopter", hint: "Sky hopper that spins its way through clouds." },
    { word: "Submarine", hint: "Deep-sea vessel that vanishes beneath the waves." },
    { word: "Convertible", hint: "Car that loves the sun with its top rolled down." },
    { word: "Bulldozer", hint: "Heavy machine that pushes the earth aside." },
    { word: "Sailboat", hint: "Wind-driven traveler gliding across blue horizons." },
    { word: "Tractor", hint: "Rural workhorse that tills and hauls with power." },
    { word: "Airplane", hint: "Winged cruiser soaring far above the clouds." },
    { word: "Hovercraft", hint: "Floats on air while gliding over land and water." },
    { word: "Bicycle", hint: "Eco-friendly ride balanced on two spinning circles." },

    //planets
    { word: "Mercury", hint: "Swift planet closest to the blazing sun." },
    { word: "Venus", hint: "Shines bright, wrapped in thick poisonous clouds." },
    { word: "Earth", hint: "Our blue home teeming with life and oceans." },
    { word: "Mars", hint: "The dusty red world with frozen poles." },
    { word: "Jupiter", hint: "Gas giant with swirling storms and a giant eye." },
    { word: "Saturn", hint: "Dazzling planet wrapped in magnificent rings." },
    { word: "Uranus", hint: "Side-spinning world of icy blue winds." },
    { word: "Neptune", hint: "Farthest, with dark storms and deep blue hues." },
    { word: "Pluto", hint: "Tiny wanderer at the edge of our solar family." },
    { word: "Kepler22b", hint: "Mysterious exoplanet with whispers of water." },

    //instruments
    { word: "Violin", hint: "Wooden string beauty that sings under a bow." },
    { word: "Trumpet", hint: "Brass voice that blares bold and clear notes." },
    { word: "Flute", hint: "Silver whisperer played by breath and grace." },
    { word: "Drums", hint: "Rhythmic heart that drives every band alive." },
    { word: "Guitar", hint: "Six-stringed storyteller from rock to romance." },
    { word: "Sitar", hint: "Indian classic with soulful vibrating strings." },
    { word: "Harp", hint: "Elegant frame weaving melodies from heaven." },
    { word: "Accordion", hint: "Portable instrument that breathes music in folds." },
    { word: "Tambourine", hint: "Jingling circle that keeps rhythm with a shake." },
    { word: "Xylophone", hint: "Colorful bars that chime under playful mallets." },

    //mythical_creatures
    { word: "Phoenix", hint: "Fiery bird reborn from its own ashes." },
    { word: "Unicorn", hint: "Graceful horse with a spiraled horn of magic." },
    { word: "Dragon", hint: "Majestic beast breathing fire and legends." },
    { word: "Mermaid", hint: "Half-human ocean dweller with shimmering fins." },
    { word: "Griffin", hint: "Winged guardian mixing lion and eagle might." },
    { word: "Minotaur", hint: "Bull-headed giant lost in a labyrinth maze." },
    { word: "Kraken", hint: "Sea monster with tentacles that crush ships whole." },
    { word: "Fairy", hint: "Tiny winged being sprinkling charm and mischief." },
    { word: "Werewolf", hint: "Beast that howls under the watchful full moon." },
    { word: "Pegasus", hint: "Flying horse racing through celestial skies." },

    //mythical_creatures
    { word: "Phoenix", hint: "Fiery bird reborn from its own ashes." },
    { word: "Unicorn", hint: "Graceful horse with a spiraled horn of magic." },
    { word: "Dragon", hint: "Majestic beast breathing fire and legends." },
    { word: "Mermaid", hint: "Half-human ocean dweller with shimmering fins." },
    { word: "Griffin", hint: "Winged guardian mixing lion and eagle might." },
    { word: "Minotaur", hint: "Bull-headed giant lost in a labyrinth maze." },
    { word: "Kraken", hint: "Sea monster with tentacles that crush ships whole." },
    { word: "Fairy", hint: "Tiny winged being sprinkling charm and mischief." },
    { word: "Werewolf", hint: "Beast that howls under the watchful full moon." },
    { word: "Pegasus", hint: "Flying horse racing through celestial skies." },

]


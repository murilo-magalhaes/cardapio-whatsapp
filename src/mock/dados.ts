export interface IDish {
  id: string;
  img_url: string;
  title: string;
  description: string;
  price: number;
}

export interface ICategory {
  id: string;
  title: string;
  icon: string;
  dishes: IDish[];
}

export interface IMenu {
  categories: ICategory[];
}

const dishesMenu: IMenu = {
  categories: [
    {
      id: '1',
      title: 'Burgers',
      icon: 'fas fa-hamburger',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg',
          title: 'Gramercy Tavern',
          description: 'The Gramercy Tavern Burger - 4 Pack',
          price: 99,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/burguers/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.jpg',
          title: 'Shake Shack',
          description: 'Shake Shack ShackBurger® - 8 Pack',
          price: 49,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/burguers/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg',
          title: "Gott's Roadside",
          description: "Gott's Complete Cheeseburger Kit for 4",
          price: 99,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/burguers/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg',
          title: 'Emmy Squared',
          description: 'Le Big Matt Burger Kit for 6',
          price: 99,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/burguers/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.jpg',
          title: 'Shake Shack',
          description: 'Shake Shack Shackburger® - 16 Pack',
          price: 89,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/burguers/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.jpg',
          title: 'Peter Luger Steak House',
          description: 'USDA Prime Burgers - Pack of 18 (8oz each)',
          price: 175.95,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/burguers/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg',
          title: 'Holeman & Finch',
          description: 'Double Stack Burger Kit for 4',
          price: 79,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/burguers/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg',
          title: 'Pat LaFrieda Meats',
          description: 'Goldbelly "Burger Bash" Pack',
          price: 109,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg',
          title: "Raoul's",
          description: 'Burger Au Poivre Kit - 4 Pack',
          price: 99,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/burguers/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg',
          title: 'Flannery Beef',
          description: 'Goldbelly Burger Blend - 4 lbs.',
          price: 79,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/burguers/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpg',
          title: "Gott's Roadside",
          description: "Gott's Complete Cheeseburger Kit for 8",
          price: 149,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg',
          title: 'Gramercy Tavern',
          description: 'Gramercy Tavern Burger + Kielbasa Combo',
          price: 149,
        },
      ],
    },
    {
      id: '2',
      title: 'Pizzas',
      icon: 'fas fa-pizza-slice',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/pizzas/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg',
          title: "Lou Malnati's Pizza",
          description: "2 Lou Malnati's Deep Dish Pizzas",
          price: 67.99,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/pizzas/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg',
          title: "Bartolini's",
          description: 'Choose Your Own Thin Crust Pizza - 4 Pack',
          price: 139,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/pizzas/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg',
          title: "Zuppardi's Apizza",
          description: 'New Haven-Style Pizza - 6 Pack (Choose Your Own)',
          price: 79,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/pizzas/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg',
          title: "Lou Malnati's Pizza",
          description: "6 Lou Malnati's Deep Dish Pizzas",
          price: 116.99,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/pizzas/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg',
          title: 'Pizzeria Bianco',
          description: 'Wood Fired Pizzas Best Seller - 4 Pack',
          price: 129,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/pizzas/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg',
          title: "Bartolini's",
          description: 'Choose Your Own Deep Dish Pizza - 3 Pack',
          price: 139,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/pizzas/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpg',
          title: 'Emmy Squared',
          description: 'Detroit-Style Pizza - Choose Your Own 3 Pack',
          price: 89,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/pizzas/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg',
          title: "Paesan's Pizza",
          description: 'Brooklyn Pizza - Choose Your Own 5 Pack',
          price: 69,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/pizzas/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg',
          title: 'My Pi Pizza',
          description: 'Chicago Deep Dish Pizza - 4 Pack',
          price: 129,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/pizzas/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg',
          title: "Lou Malnati's Pizza",
          description: "4 Lou Malnati's Deep Dish Pizzas",
          price: 96.99,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/pizzas/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.jpg',
          title: "Tony's Pizza Napoletana",
          description: 'Choose Your Own Pizza - 3 Pack',
          price: 99,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/pizzas/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg',
          title: 'The Columbia Inn',
          description: 'Plain Thin Crust Pizza - 4 Pack',
          price: 79,
        },
      ],
    },
    {
      id: '3',
      title: 'Churrasco',
      icon: 'fas fa-drumstick-bite',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/churrasco/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg',
          title: "Joe's KC BBQ",
          description: "Joe's KC Ribs, Brisket & Burnt Ends",
          price: 110.99,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/churrasco/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg',
          title: 'Kings BBQ',
          description: 'Carolina BBQ Oink Sampler',
          price: 89,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/churrasco/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.jpg',
          title: "Snow's BBQ",
          description: "Texas Monthly's #1 BBQ Brisket",
          price: 199,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/churrasco/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg',
          title: 'Franklin Barbecue',
          description: 'Whole Brisket + Texas Barbecue BBQ Sauce',
          price: 249,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/churrasco/whole-texas-smoked-brisket.a5558a25381e271408e197936e7985d8.jpg',
          title: "Terry Black's Barbecue",
          description: 'Whole Texas Smoked Brisket',
          price: 189,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/churrasco/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg',
          title: "Bludso's BBQ",
          description: 'Mini Trinity BBQ Combo - Brisket, Ribs & Links',
          price: 139,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/churrasco/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.jpg',
          title: 'Blue Smoke',
          description:
            'Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo',
          price: 129,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/churrasco/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg',
          title: 'Kings BBQ',
          description: 'BBQ Meat Lovers Special for 10',
          price: 139,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/churrasco/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpg',
          title: 'Ugly Drum',
          description: 'The Big Ugly BBQ Dinner for 6',
          price: 229,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/churrasco/mighty-quinns-bbq-sampler-pack.1bfe4a0665edc565756f5241bf25840e.jpg',
          title: "Mighty Quinn's BBQ",
          description: "Mighty Quinn's BBQ Sampler Pack",
          price: 169,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/churrasco/post-oak-smoked-usda-prime-half-brisket.6f17178dde7d806670bcc73ff11762b3.jpg',
          title: 'Southside Market & Barbeque',
          description: 'Post Oak Smoked USDA Prime Half Brisket',
          price: 109,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/churrasco/best-of-texas-bbq-combo-serves-14.7ae90266335e539c67e77fed14b43029.jpg',
          title: "Snow's BBQ",
          description: 'Best of Texas BBQ Combo - Serves 14',
          price: 269,
        },
      ],
    },

    {
      id: '4',
      title: 'Steaks',
      icon: 'fas fa-bacon',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/steaks/california-reserve-filet-mignon-steaks-gift-box.bf226e317aad85f47897ae7e325f790d.jpg',
          title: 'Flannery Beef',
          description: 'California Reserve Filet Mignon Steaks Gift Box',
          price: 129,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/steaks/valentines-steaks-and-cakes-dinner-for-2.0c63dab635eed46209455dc33cd25ea8.jpg',
          title: 'Chesapeake Bay Gourmet',
          description: 'Steaks and Cakes Date Night Dinner for 2',
          price: 129,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/steaks/holiday-sampler-9-pack.2de75ca80282ffe9d064eb757ff7a5a1.jpg',
          title: 'Saltbrick Prime',
          description: "Chef Matt's Steak Sampler for 10-12",
          price: 179,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/steaks/bone-in-rib-steak.b13d9d4233035767605f0de9acdce1ab.jpg',
          title: 'Old Homestead Steakhouse',
          description: 'Bone-in Rib Steak',
          price: 159,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/steaks/american-wagyu-gold-grade-sirloins.040dbeb8f8e615b91fa7e513e3dc089c.jpg',
          title: 'Snake River Farms',
          description: 'American Wagyu Gold Grade Top Sirloins',
          price: 119,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/steaks/peter-luger-steak-pack-b.9feb0300e6be2dfecfa314f2006a2183.jpg',
          title: 'Peter Luger Steak House',
          description: 'Peter Luger Porterhouse Steaks',
          price: 215.95,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/steaks/ribeye-prime-steak-gift-box.e74cb016baabbb2df73861de8150f29c.jpg',
          title: "Churchill's Steakhouse",
          description: 'Ribeye Prime Steak Gift Box',
          price: 229,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/steaks/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg',
          title: 'Pat LaFrieda Meats',
          description:
            'Dry-Aged USDA Prime Black Angus Porterhouse Steak - 2 Pack',
          price: 96.7,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/steaks/california-reserve-ribeye-steak-12-oz.d367c5ae72dd9f89e170662104bef4fc.jpg',
          title: 'Flannery Beef',
          description: 'California Reserve Ribeye Steak - 12 oz',
          price: 32,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/steaks/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg',
          title: 'Chef Francis Mallmann',
          description: 'Dry-Aged Boneless Ribeye Steak Dinner Kit for 4',
          price: 225,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/steaks/california-reserve-filet-mignon-steak.ff15071964ec8141d30c2ba05fb117e0.jpg',
          title: 'Flannery Beef',
          description: 'California Reserve Filet Mignon Steak',
          price: 22,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/steaks/mesquite-smoked-peppered-beef-tenderloin.5c314418a1f75c7057eed686e2fad46f.jpg',
          title: 'Perini Ranch Steakhouse',
          description: 'Mesquite Smoked Peppered Beef Tenderloin',
          price: 165,
        },
      ],
    },

    {
      id: '5',
      title: 'Bebidas',
      icon: 'fas fa-cocktail',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/bebidas/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg',
          title: 'New Territories',
          description: 'Hong Kong Boba Tea Kit for 6',
          price: 59,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/bebidas/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg',
          title: 'Guy Fieri',
          description: "Guy's Caliente Margaritas for 12",
          price: 69,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/bebidas/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg',
          title: 'Woodford Reserve',
          description: 'Woodford Reserve Mint Julep Syrup',
          price: 39,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/bebidas/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg',
          title: "Franco's Hurricane Mix",
          description: 'New Orleans Hurricane Mix',
          price: 39,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/bebidas/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg',
          title: 'Johnny Sanchez',
          description: 'Margarita Mix',
          price: 59,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/bebidas/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg',
          title: 'Woodford Reserve',
          description: 'Woodford Reserve Mint Julep Syrup - 2 Pack',
          price: 59,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/bebidas/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg',
          title: 'New Territories',
          description: 'Unicorn Parade Milkshake Kit for 8',
          price: 109,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/bebidas/chickpea-chiller-kit-for-6.4310765c71ba524b5462ea9330d32446.jpg',
          title: 'The Hummus & Pita Co.',
          description: 'Chickpea Chiller Kit for 6',
          price: 89,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/bebidas/old-honey-barn-mint-julep-mixer-200ml.e0b131d6d9b69963706b43fd4334ab74.jpg',
          title: 'Old Honey Barn Mint Julep',
          description: 'Old Honey Barn Mint Julep Mixer - 200ml Flask',
          price: 25,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/bebidas/kentucky-derby-mint-julep-gift-set.79720eda4e9c8e3fcf9ecb5c79827f2c.jpg',
          title: 'Woodford Reserve',
          description: 'Kentucky Derby Mint Julep Gift Set',
          price: 59.95,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/bebidas/weekender-charleston-bloody-mary-mix-bold-and-spicy.c372868c9937e407a299a22001e210e2.jpg',
          title: 'Charleston Beverage Company',
          description: 'Weekender | Charleston Bloody Mary Mix Bold & Spicy',
          price: 39.95,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/bebidas/nola-cold-brew-concentrate-bag-in-box.3df6fde8bd83f29235565984ae8ed22b.jpg',
          title: "Grady's Cold Brew",
          description: 'NOLA Cold Brew Concentrate Bag-in-Box',
          price: 40,
        },
      ],
    },

    {
      id: '6',
      title: 'Sobremesas',
      icon: 'fas fa-ice-cream',
      dishes: [
        {
          id: '1',
          img_url:
            '/assets/images/cardapio/sobremesas/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg',
          title: 'Killer Brownie®',
          description: 'German Chocolate Killer Brownie®',
          price: 39.99,
        },
        {
          id: '2',
          img_url:
            '/assets/images/cardapio/sobremesas/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg',
          title: 'Jacques Torres Chocolate',
          description: "Jacques' World Famous Chocolate Chip Cookies - 6 Pack",
          price: 39.95,
        },
        {
          id: '3',
          img_url:
            '/assets/images/cardapio/sobremesas/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg',
          title: 'The Cannoli Pie Company',
          description: 'Original Cannoli Pie',
          price: 69,
        },
        {
          id: '4',
          img_url:
            '/assets/images/cardapio/sobremesas/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg',
          title: 'Cotton Blues Cheesecake Company',
          description: 'Sea-Salted Caramel Swirl Cheesecake',
          price: 65,
        },
        {
          id: '5',
          img_url:
            '/assets/images/cardapio/sobremesas/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg',
          title: 'Brooklyn Blackout Company',
          description: 'Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins',
          price: 89,
        },
        {
          id: '6',
          img_url:
            '/assets/images/cardapio/sobremesas/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg',
          title: 'Crave Cupcakes',
          description: 'Best Seller Cupcake Dozen',
          price: 89,
        },
        {
          id: '7',
          img_url:
            '/assets/images/cardapio/sobremesas/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg',
          title: 'Elegant Desserts',
          description: 'Choose Your Own Ice Cream Donuts - 6 Pack',
          price: 69,
        },
        {
          id: '8',
          img_url:
            '/assets/images/cardapio/sobremesas/jewish-classics-dessert-pack.7d4b76630f2fe75dcb7bbcf2501b7390.jpg',
          title: 'Ess-a-Bagel',
          description: 'Jewish Classics Dessert Pack',
          price: 89.95,
        },
        {
          id: '9',
          img_url:
            '/assets/images/cardapio/sobremesas/dessert-bar-care-package.324aa28fe98c9dc67b75aac43376902e.jpg',
          title: 'Bread and Roses Bakery',
          description: 'Dessert Bar Care Package',
          price: 65,
        },
        {
          id: '10',
          img_url:
            '/assets/images/cardapio/sobremesas/donut-cookies-12-pack.46f42c61c4a79fd2051a99b2f23e890e.jpg',
          title: "Stan's Donuts",
          description: 'Donut Cookies - 12 Pack',
          price: 49,
        },
        {
          id: '11',
          img_url:
            '/assets/images/cardapio/sobremesas/gulab-jamun-ice-cream-cakes-2-pack.c45b4d0750ad22d741f84dc1f26d20e7.jpg',
          title: 'Malai Ice Cream',
          description: 'Gulab Jamun Ice Cream Cakes - 2 Pack',
          price: 79,
        },
        {
          id: '12',
          img_url:
            '/assets/images/cardapio/sobremesas/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg',
          title: 'Jacques Torres Chocolate',
          description: "Jacques' World Famous Chocolate Chip Cookies - 12 Pack",
          price: 69.95,
        },
      ],
    },
  ],
};

export default dishesMenu;

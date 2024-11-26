const Products = [
    {
        mcdonalds: {
            more_requests: [
                {
                    id: 1,
                    enterprise: "mcdonalds",
                    name: "Big Mac",
                    price: "4.99",
                    description: "A classic hamburger with double the meat and double the fun.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br"
                },
                {
                    id: 2,
                    enterprise: "mcdonalds",
                    name: "McChicken",
                    price: "3.99",
                    description: "A classic chicken burger with your choice of sauce.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXGzDAK/200/200/original?country=br"
                },
                {
                    id: 3,
                    enterprise: "mcdonalds",
                    name: "McDouble",
                    price: "5.99",
                    description: "A double hamburger with juicy patties and melted cheese.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0592-999_McDouble_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 4,
                    enterprise: "mcdonalds",
                    name: "McSpicy",
                    price: "4.99",
                    description: "A spicy and flavorful burger for those who love heat.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-mcspicy-april-promo:product-header-desktop?wid=829&hei=455&dpr=off"
                },
                {
                    id: 5,
                    enterprise: "mcdonalds",
                    name: "Filet-O-Fish",
                    price: "4.49",
                    description: "A soft fish fillet topped with creamy tartar sauce.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_5926-999_Filet-O-Fish_HalfSlice_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 6,
                    enterprise: "mcdonalds",
                    name: "Quarter Pounder",
                    price: "5.49",
                    description: "A juicy quarter-pound beef burger with cheese and toppings.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564?wid=1000&hei=1000&dpr=off"
                }
            ],
            list_products: [
                {
                    id: 1,
                    enterprise: "mcdonalds",
                    name: "Big Mac",
                    price: "4.99",
                    description: "A classic hamburger with double the meat and double the fun.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br"
                },
                {
                    id: 2,
                    enterprise: "mcdonalds",
                    name: "McChicken",
                    price: "3.99",
                    description: "A classic chicken burger with your choice of sauce.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXGzDAK/200/200/original?country=br"
                },
                {
                    id: 3,
                    enterprise: "mcdonalds",
                    name: "McDouble",
                    price: "5.99",
                    description: "A double hamburger with juicy patties and melted cheese.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0592-999_McDouble_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 4,
                    enterprise: "mcdonalds",
                    name: "McSpicy",
                    price: "4.99",
                    description: "A spicy and flavorful burger for those who love heat.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-mcspicy-april-promo:product-header-desktop?wid=829&hei=455&dpr=off"
                },
                {
                    id: 5,
                    enterprise: "mcdonalds",
                    name: "Filet-O-Fish",
                    price: "4.49",
                    description: "A soft fish fillet topped with creamy tartar sauce.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_5926-999_Filet-O-Fish_HalfSlice_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 6,
                    enterprise: "mcdonalds",
                    name: "Quarter Pounder",
                    price: "5.49",
                    description: "A juicy quarter-pound beef burger with cheese and toppings.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 7,
                    enterprise: "mcdonalds",
                    name: "French Fries",
                    price: "2.99",
                    description: "Crispy golden fries with a pinch of salt.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_5926-999_Filet-O-Fish_HalfSlice_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                },
                {
                    id: 8,
                    enterprise: "mcdonalds",
                    name: "French Fries",
                    price: "2.99",
                    description: "Crispy golden fries with a pinch of salt.",
                    logo: require('../../logos/mcdonalds.png'),
                    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_5926-999_Filet-O-Fish_HalfSlice_Alt_1564x1564?wid=1000&hei=1000&dpr=off"
                }
            ]
        },
        kfc: {
            more_requests: [
                {
                    id: 1,
                    enterprise: "kfc",
                    name: "Zinger Stacker Combo",
                    price: "12.99",
                    description: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/63fb28b0-9627-11ef-be4f-a734b6b6ba4f-stacker-combo-2024-10-29185539.png"
                },
                {
                    id: 2,
                    enterprise: "kfc",
                    name: "Zinger Got Wings",
                    price: "4.99",
                    description: "2 Zinger Burgers + 2 Regular Drinks + Wings Bucket (6 pcs)",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/7e703860-8c0a-11ef-96ca-83eb584d9244-Thumbnail(3)-2024-10-16220337.png"
                },
                {
                    id: 3,
                    enterprise: "kfc",
                    name: "Crispy Duo Box",
                    price: "3.99",
                    description: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/63fb28b0-9627-11ef-b5b6-331c16c28159-CrispyDuoBox-2024-10-29185539.png"
                },
                {
                    id: 4,
                    enterprise: "kfc",
                    name: "Family Festival 3",
                    price: "5.49",
                    description: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/634e6df0-9627-11ef-b12f-312c6a2b6968-family-Festivle-3-2024-10-29185538.png"
                },
                {
                    id: 5,
                    enterprise: "kfc",
                    name: "Hot Wings Bucket",
                    price: "2.49",
                    description: "10 Pcs of our Signature Hot & Crispy Wings",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/38718ee0-bc17-11ee-97ca-ad9c0958c4fc-Plain-wings-min_variant_0-2024-01-26065041.png"
                }
            ],
            list_products: [
                {
                    id: 1,
                    enterprise: "kfc",
                    name: "Krunch Combo",
                    price: "12.99",
                    description: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/63fb28b0-9627-11ef-b835-bd990eec9c91-Krunch-combocopy-2024-10-29185539.png"
                },
                {
                    id: 2,
                    enterprise: "kfc",
                    name: "Chicken & Chips",
                    price: "4.99",
                    description: "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-chicken-n-chips_variant_0-2023-05-31115706.png"
                },
                {
                    id: 3,
                    enterprise: "kfc",
                    name: "Mighty Zinger",
                    price: "3.99",
                    description: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun.",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png"
                },
                {
                    id: 4,
                    enterprise: "kfc",
                    name: "Krunch Burger",
                    price: "5.49",
                    description: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun.",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
                },
                {
                    id: 5,
                    enterprise: "kfc",
                    name: "Crispy Duo Box",
                    price: "2.49",
                    description: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/63fb28b0-9627-11ef-b5b6-331c16c28159-CrispyDuoBox-2024-10-29185539.png"
                },
                {
                    id: 6,
                    enterprise: "kfc",
                    name: "Family Festival 3",
                    price: "2.49",
                    description: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
                    logo: require('../../logos/kfc.png'),
                    image: "https://www.kfcpakistan.com/images/634e6df0-9627-11ef-b12f-312c6a2b6968-family-Festivle-3-2024-10-29185538.png"
                }
            ]
        },
        burger_king: {
            more_requests: [
                {
                    id: 1,
                    enterprise: "Burguer King",
                    name: "Whopper",
                    price: "6.49",
                    description: "A flame-grilled beef burger with fresh toppings.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/whopper.jpg"
                },
                {
                    id: 2,
                    enterprise: "Burguer King",
                    name: "Chicken Royale",
                    price: "5.49",
                    description: "A crispy chicken burger with fresh lettuce and mayo.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/chicken-royale.jpg"
                },
                {
                    id: 3,
                    enterprise: "Burguer King",
                    name: "King Fries",
                    price: "2.99",
                    description: "Golden fries cooked to perfection, seasoned lightly.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/king-fries.jpg"
                },
                {
                    id: 4,
                    enterprise: "Burguer King",
                    name: "Onion Rings",
                    price: "3.49",
                    description: "Crispy onion rings fried to a golden brown.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/onion-rings.jpg"
                },
                {
                    id: 5,
                    enterprise: "Burguer King",
                    name: "Chicken Nuggets",
                    price: "3.99",
                    description: "Tender chicken nuggets with your choice of dipping sauce.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/chicken-nuggets.jpg"
                }
            ],
            list_products: [
                {
                    id: 1,
                    enterprise: "Burguer King",
                    name: "Whopper",
                    price: "6.49",
                    description: "A flame-grilled beef burger with fresh toppings.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/whopper.jpg"
                },
                {
                    id: 2,
                    enterprise: "Burguer King",
                    name: "Chicken Royale",
                    price: "5.49",
                    description: "A crispy chicken burger with fresh lettuce and mayo.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/chicken-royale.jpg"
                },
                {
                    id: 3,
                    enterprise: "Burguer King",
                    name: "King Fries",
                    price: "2.99",
                    description: "Golden fries cooked to perfection, seasoned lightly.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/king-fries.jpg"
                },
                {
                    id: 4,
                    enterprise: "Burguer King",
                    name: "Onion Rings",
                    price: "3.49",
                    description: "Crispy onion rings fried to a golden brown.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/onion-rings.jpg"
                },
                {
                    id: 5,
                    enterprise: "Burguer King",
                    name: "Coke",
                    price: "1.99",
                    description: "A refreshing glass of Coca-Cola to pair with your meal.",
                    logo: require('../../logos/bk.png'),
                    image: "https://burgerking-assets.com/media/image/coke.jpg"
                }
            ]
        },
        bobs: {
            more_requests: [
                {
                    id: 1,
                    enterprise: "Bobs",
                    name: "Bob's Double Cheese",
                    price: "5.49",
                    description: "Two juicy patties with double the cheese.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/doublecheese.jpg"
                },
                {
                    id: 2,
                    enterprise: "Bobs",
                    name: "Big Bob",
                    price: "6.49",
                    description: "Signature burger with secret sauce.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/bigbob.jpg"
                },
                {
                    id: 3,
                    enterprise: "Bobs",
                    name: "Mighty Zinger",
                    price: "4.99",
                    description: "Crispy chicken breast in a soft bun.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/chickensandwich.jpg"
                },
                {
                    id: 4,
                    enterprise: "Bobs",
                    name: "Cheddar Fries",
                    price: "3.99",
                    description: "Crispy fries topped with melted cheddar cheese.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/cheddarfries.jpg"
                },
                {
                    id: 5,
                    enterprise: "Bobs",
                    name: "Milkshake",
                    price: "4.49",
                    description: "Creamy milkshake in various flavors.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/milkshake.jpg"
                },
                {
                    id: 6,
                    enterprise: "Bobs",
                    name: "Onion Rings",
                    price: "2.99",
                    description: "Golden and crispy onion rings.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/onionrings.jpg"
                }
            ],
            list_products: [
                {
                    id: 1,
                    enterprise: "Bobs",
                    name: "Coca-Cola",
                    price: "1.49",
                    description: "Classic fizzy drink.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/coke.jpg"
                },
                {
                    id: 2,
                    enterprise: "Bobs",
                    name: "Sprite",
                    price: "1.49",
                    description: "Lemon-lime refreshing soda.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/sprite.jpg"
                },
                {
                    id: 3,
                    enterprise: "Bobs",
                    name: "Fries",
                    price: "2.49",
                    description: "Crispy golden french fries.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/fries.jpg"
                },
                {
                    id: 4,
                    enterprise: "Bobs",
                    name: "Bob's Burger",
                    price: "5.99",
                    description: "Classic Bob's burger with fresh ingredients.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/bobsburger.jpg"
                },
                {
                    id: 5,
                    enterprise: "Bobs",
                    name: "Strawberry Sundae",
                    price: "2.99",
                    description: "Cool sundae with strawberry topping.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/strawberrysundae.jpg"
                },
                {
                    id: 6,
                    enterprise: "Bobs",
                    name: "Rice & Spice",
                    price: "3.99",
                    description: "Crispy Rice & Spice with dipping sauce.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/chickennuggets.jpg"
                },
                {
                    id: 7,
                    enterprise: "Bobs",
                    name: "Iced Coffee",
                    price: "2.99",
                    description: "Chilled and refreshing coffee.",
                    logo: require('../../logos/bk.png'),
                    image: "https://example.com/bobs/icedcoffee.jpg"
                }
            ]
        }
    }
];


export default Products;
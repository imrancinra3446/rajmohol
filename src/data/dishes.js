const DISHES = [
    {
        id: 0,
        name: 'Ginger Burger',
        image: 'assets/images/0burger.jpg',
        category: 'meal',
        label: 'Hot',
        price: '199',
        featured: true,
        description: 'This chicken burger gets an Asian-flavor twist with ginger and garlic. It\'s topped off with a fabulous coleslaw. If you like, serve the coleslaw as a side for grilled items, like chicken breasts, fish fillets or chops',
        comments: [
            {
                dishId: 0,
                id: 0,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                dishId: 0,
                id: 1,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                dishId: 0,
                id: 2,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                dishId: 0,
                id: 3,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                dishId: 0,
                id: 4,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 1,
        name: 'BBQ Chicken Pizza',
        image: 'assets/images/1pizza.jpg',
        category: 'meal',
        label: '',
        price: '599',
        featured: false,
        description: 'BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion. Gouda cheese gives the homemade pizza the most delicious smoky flavor and cilantro adds a touch of freshness. My pizza dough recipe makes enough for two 12-inch pizzas, so you can freeze half for later. It’s an easy thick-style pizza crust with unbeatable flavor.',
        comments: [
            {
                dishId: 1,
                id: 5,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                dishId: 1,
                id: 6,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                dishId: 1,
                id: 7,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                dishId: 1,
                id: 8,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                dishId: 1,
                id: 9,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            },
        ]
    },
    {
        id: 2,
        name: 'French Fries',
        image: 'assets/images/2fries.jpg',
        category: 'appetizer',
        label: 'New',
        price: '120',
        featured: false,
        description: 'These are deep-fried, very thin, salted slices of potato that are usually served at room temperature. French fries have numerous variants, from thick-cut to shoestring, crinkle, curly and many other names.',
        comments: [
            {
                dishId: 2,
                id: 10,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                dishId: 2,
                id: 11,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                dishId: 2,
                id: 12,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                dishId: 2,
                id: 13,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                dishId: 2,
                id: 14,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            },
        ]
    },
    {
        id: 3,
        name: 'Cheese Cake',
        image: 'assets/images/3cake.jpg',
        category: 'dessert',
        label: '',
        price: '170',
        featured: false,
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with cracker crust and spiced with Indian cardamoms',
        comments: [

            {
                dishId: 3,
                id: 15,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                dishId: 3,
                id: 16,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                dishId: 3,
                id: 17,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                dishId: 3,
                id: 18,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                dishId: 3,
                id: 19,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            },
        ]
    }

]





export default DISHES;

// Task 1

{
  let boughtTesla = true;

  const yearOfTeslaPurchase = 2014;

  let isUSCitizen = true;

  let currentYear = 2018;

  if (boughtTesla)
    if (isUSCitizen)
      if (currentYear - yearOfTeslaPurchase >= 4)
        console.log("Do you want to upgrade your car?");
      else
        console.log("Are you satisfied with your car?");
    else
      console.log("Do you want to move to the US?");
  else console.log("Do you want to buy a Tesla?");
}

// Task 2

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.splice(1, 2);
  numbers[3] = 1;
  numbers.splice(numbers.length - 4);
  numbers.unshift(0);

  console.log(numbers);
}

// Task 3

{
  const p1 = {
    name: "Jill",
    age: 21,
    city: "London"
  };

  const p2 = {
    name: "Robert",
    age: 22,
    city: "New York"
  };

  if (p1.age === p2.age)
    if (p1.city === p2.city)
      console.log("Jill wanted to date Robert");
    else
      console.log("Jill wanted to date Robert, but couldn't");
}

// Task 4

{
  const library = {
    books: [
      { title: "T1", author: "A1" },
      { title: "T2", author: "A2" }
    ]
  }
}

// Task 5

{
  const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

  const name = prompt('Please enter the name for your reservation');

  if (reservations[name])
    if (reservations[name].claimed)
      console.log("Someone already claimed this reservation");
    else
      console.log(`Welcome, ${name}`);
  else
    console.log("No reservation found");
}

// Task 6

{
  const date = 3;

  const kitchen = {
      owner: "Geraldine",
      hasOven: true,
      fridge: {
          price: 500,
          works: true,
          items: [
              { name: "cheese", expiryDate: 7 },
              { name: "raddish", expiryDate: 2 },
              { name: "bread", expiryDate: 1 }
          ]
      }
  }

  const { name, expiryDate } = kitchen.fridge.items[1];

  const days = date - expiryDate;

  if (kitchen.hasOven)
    if (kitchen.fridge.works)
      console.log(`
        Geraldine’s ${name} expired ${days} day(s) ago.
        Weird, considering her fridge works.
        Luckily, she has an oven to cook the ${name} in.
      `);
    else
      console.log(`
        Geraldine’s ${name} expired ${days} day(s) ago.
        Probably because her fridge doesn’t work.
        Luckily, she has an oven to cook the ${name} in.
        And she’ll have to pay 250 to fix the fridge.
      `);
  else
    if (kitchen.fridge.works)
      console.log(`
        Geraldine’s ${name} expired ${days} day(s) ago.
        Weird, considering her fridge works.
        Too bad she doesn’t have an oven to cook the ${name} in.
      `);
    else
      console.log(`
        Geraldine’s ${name} expired ${days} day(s) ago.
        Probably because her fridge doesn’t work.
        Too bad she doesn’t have an oven to cook the ${name} in.
        And she’ll have to pay 250 to fix the fridge.
      `);
}

// Task 7

{
  const names = ["Ashley", "Donovan", "Lucas"];
  const ages = [23, 47, 18];
  const people = [];

  for (let i = 0; i < names.length; i++)
    people.push({ name: names[i], age: ages[i] });

  for (const { name, age } of people)
    console.log(`${name} is ${age} years old`);
}

// Task 8

{
  const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  const index = posts.findIndex(post => post.id === 2);

  posts.splice(index, 1);
}

// Task 9

{
  const posts = [
    {
      id: 1,
      text: "Love this product",
      comments: []
    },
    {
      id: 2,
      text: "This is the worst. DON'T BUY!",
      comments:
        [
          {id: 1, text: "Idiot has no idea"},
          {id: 2, text:"Fool!"},
          {id: 3, text: "I agree!"}
        ]
     },
     {
      id: 3,
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ];

  const post = posts.find(post => post.id === 2);

  const index = post.comments.findIndex(comment => comment.id === 3);

  post.comments.splice(index, 1);
}

// Task 10

{
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  };

  for (const [letter, words] of Object.entries(dictionary)) {
    console.log(`Words that begin with ${letter}:`);
    for (const word of words)
      console.log(word);
  }
}

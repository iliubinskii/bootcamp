// JavaScript – forEachDOM
// The following exercise contains the following subjects:
// ● DOM
// ● foreach
// Instructions
// You get an array of objects of users from your database:
const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.

{
  const ul = document.createElement('ul');

  users.forEach(user => {
    const li = document.createElement('li');

    li.textContent = `${user.firstName} ${user.lastName}`;
    ul.appendChild(li);
  })

  document.body.appendChild(ul);
}

// 2. Remove the bullet points of the ordered list with
// JavaScript.

document.querySelector('ul').style.listStyleType = 'none';

// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.

document.querySelectorAll('li').forEach((li, i) => {
  li.dataset.id = users[i].id;
});

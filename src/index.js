const faker = require("faker");
const userList = document.getElementById("user-list");

const users = new Array(50).fill("").map((_) => {
  return faker.helpers.userCard();
});
console.log(faker.helpers.userCard());

const html = users
  .map((user, index) => {
    return `<li><a href="#${index}">${user.name}</a></li>`;
  })
  .join("");

userList.innerHTML = html;

module.exports = {
  users,
};

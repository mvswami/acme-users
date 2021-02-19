const faker = require("faker");
const express = require("express");
const app = express();
const userList = document.getElementById("user-list");

const users = new Array(50).fill("").map((_) => {
  return faker.helpers.userCard();
});

let curr = window.location.hash.slice(1) * 1;

const render = (users) => {
  const html = `${users
    .map((user, index) => {
      return `<li><a href="#${index}">User: ${user.name}</a>
    ${
      curr === index
        ? `<ul>
    <li>Company: ${user.company.name}</li>
    <li>Street: ${user.address.street}</li>
    </ul>`
        : " "
    }
    </li>`;
    })
    .join("")}`;
  userList.innerHTML = html;
};

window.addEventListener("hashchange", () => {
  curr = window.location.hash.slice(1) * 1;
  render(users);
});

app.get("/", (req, res) => {
  res.redirect("/#");
});

module.exports = {
  users,
};

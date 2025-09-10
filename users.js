const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const user3 = document.getElementById("user3");
const mail1 = document.getElementById("mail1");
const mail2 = document.getElementById("mail2");
const mail3 = document.getElementById("mail3");

async function fetchUserData() {
  try {
    let request = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await request.json();
    console.log(response);
    let firstUser = response[0];
    console.log(firstUser);
    name1.textContent = firstUser.name.toUpperCase();
    user1.textContent = firstUser.username.toUpperCase();
    mail1.textContent = firstUser.email.toLowerCase();
    let seventhUser = response[7];
    console.log(seventhUser);
    name2.textContent = seventhUser.name.toUpperCase();
    user2.textContent = seventhUser.username.toUpperCase();
    mail2.textContent = seventhUser.email.toLowerCase();
    let lastUser = response[response.length -1];
    console.log(lastUser);
    name3.textContent = lastUser.name.toUpperCase();
    user3.textContent = lastUser.username.toUpperCase();
    mail3.textContent = lastUser.email.toLowerCase();
  } catch (error) {
    console.log(error);
  }
}


fetchUserData();

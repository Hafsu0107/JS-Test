/*Fetch and Display Posts

Use the JSON Placeholder API to fetch a list of posts (https://jsonplaceholder.typicode.com/posts) and display their titles and body content in a styled HTML page.
*/

const shr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
shr.open("GET", url);
shr.onload = function () {
  if (shr.status === 200) {
    const userIds = JSON.parse(this.response);
    const firstFifteenId = id.slice(0, 15);
    const idList = document.getElementById("id-list");
    firstFifteenId.forEach((userIds) => {
      const userItem = document.createElement("li");
      userItem.textContent = userIds.username;
      idList.appendChild(userItem);
    });
  } else {
    console.error("not found username for ids", shr.status, shr.statusText);
  }
};
shr.onerror = function () {
  console.error("Network error occurred.");
};
shr.send();

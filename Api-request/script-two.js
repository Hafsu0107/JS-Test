
const shr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
shr.open("GET", url);
shr.onload = function () {
  if (shr.status === 200) {
    const userIds = JSON.parse(this.response);
    const firstFifteenId = userIds.slice(0, 15);
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

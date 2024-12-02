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

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: POST-request for the URL
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

// Define the payload
var data = JSON.stringify({
  title: "Sample Post",
  body: "This is a test",
  userId: 1,
});

// Set up a callback to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // Request is complete
    if (xhr.status >= 200 && xhr.status < 300) {
      // Log the successful response
      console.log("Response:", JSON.parse(xhr.responseText));
    } else {
      // Log an error if the request failed
      console.error("Error:", xhr.statusText);
    }
  }
};

// Send the request with the payload
xhr.send(data);

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: POST-request for the URL
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

// Define the payload
var data = JSON.stringify({
  title: "Sample Post",
  body: "This is a test",
  userId: 1,
});
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // Request is complete
    if (xhr.status >= 200 && xhr.status < 300) {
      // Log the successful response
      console.log("Response:", JSON.parse(xhr.responseText));
    } else {
      // Log an error if the request failed
      console.error("Error:", xhr.statusText);
    }
  }
};

// Send the request with the payload
xhr.send(data);

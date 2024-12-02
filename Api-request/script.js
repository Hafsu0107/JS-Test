const haf = new XMLHttpRequest();
const url = "'https://jsonplaceholder.typicode.com/posts';";
haf.open("GET", url);
haf.onload = function () {
  if (haf.status === 200) {
    const posts = JSON.parse(this.responseText);
    const firstTenPosts = posts.slice(0, 10);
    const postList = document.getElementById("post-list");
    firstTenPosts = forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      postList.appendChild(listItem);
    });
  } else {
    console.error("Failed to reach posts:", haf.status, haf.statusText);
  }
};
haf.onerror = function () {
  console.error("Network error occurred.");
};
haf.send();

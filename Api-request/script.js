const haf = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
haf.open("GET", url);
haf.onload = function () {
  if (haf.status === 200) {
    const posts = JSON.parse(this.responseText);
    const firstTenPosts = posts.slice(0, 10);
    const postList = document.getElementById("post-list");
    firstTenPosts.forEach((post) => {
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

/* 
sbse pehly hum var create krte hai. XMLHttpRequest() ki 
phr hum url ki link dete hai  haf.open lgakr kai hamee kis link sia data laina hai.
haf.open mai 2 parameters huty hai 1 string ka or ek method ka.
uske bd hum function lagaty hai response kaa or phr status ko sucessfuly krty hai.
phr hum ek var bnaty hai JSON.parse (this.responseText) kai wo data ko Json file mai convert kry.
uske bdd hamy jo action krna huga hum wo krgeee means kai ab is quest mai 10 post display krwnaa tha humne wo kia.
or agy aese phr chlta rahega puri detail hum btatee jayege kai iske bd kia huga kia nh .
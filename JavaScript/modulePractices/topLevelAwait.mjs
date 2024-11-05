/**
 * Top-level await only works with modules
 * NB: Blocks execution of the entire module
 */

// console.log("Top-Level Await");

// console.log("Start Fetching!");

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();

// console.log(data);

// console.log("Something!");

const getLastPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not clean
lastPost.then(post => console.log(post));

const lastPost2 = await getLastPost();
console.log(lastPost2);
// dummy data

const dataElements = [
  {
    title: "Post title 1",
    description: "Post description 1 ",
  },
  {
    title: "Post title 2",
    description: "Post description 2",
  },
  {
    title: "Post title 3",
    description: "Post description 3",
  },
  {
    title: "Post title 4",
    description: "Post description 4",
  },
  {
    title: "Post title 5",
    description: "Post description 5",
  },
  {
    title: "Post title 6",
    description: "Post description 6",
  },
  {
    title: "Post title 7",
    description: "Post description 7",
  },
  {
    title: "Post title 8",
    description: "Post description 8",
  },
];

// <div class="post">
// <h4 class="post-title">Post title 1</h4>
// <p class="post-description">post description 1</p>
// </div>

// fetch data
const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch {
    throw Error("Data is not fetched");
  }
};

// selection
const posts = document.querySelector(".posts");

const dynamicCards = async () => {
  const apiData = await fetchData(`https://jsonplaceholder.typicode.com/posts`);

  apiData.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-description">${post.body}</p>`;

    posts.appendChild(postElement);
  });
};
dynamicCards();

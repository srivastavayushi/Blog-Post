const posts = [
  {
    title: 'Post One',
    body: 'This is Post One',
  },
  {
    title: 'Post Two',
    body: 'This is Post Two',
  },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts();
createPost({ title: 'Post Three', body: 'This is Post Three' });

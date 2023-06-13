const user = {

    lastActivityTime: null,
   
    posts: []
   
   };
   
   
   
   function createPost(post) {
   
    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      user.posts.push(post);
   
      resolve();
   
     }, 1000);
   
    });
   
   }
   
   
   
   function updateLastUserActivityTime() {
   
    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      user.lastActivityTime = new Date();
   
      resolve();
   
     }, 1000);
   
    });
   
   }
   
   
   
   function deleteLastPost() {
   
    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      if (user.posts.length > 0) {
   
       const deletedPost = user.posts.pop();
   
       resolve(deletedPost);
   
      } else {
   
       reject("ERROR: No post to delete");
   
      }
   
     }, 1000);
   
    });
   
   }
   
   
   
   createPost({ title: "Post 1" })
   
    .then(() => updateLastUserActivityTime())
   
    .then(() => {
   
     console.log("Posts created:", user.posts);
   
     console.log("Last activity time:", user.lastActivityTime);
   
     return deleteLastPost();
   
    })
   
    .then((deletedPost) => {
   
     console.log("Deleted post:", deletedPost);
   
     console.log("Remaining posts:", user.posts);
   
    })
   
    .catch((error) => {
   
     console.log(error);
   
    });
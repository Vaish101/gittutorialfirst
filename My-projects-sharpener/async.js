// Promise version
function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Butter');
      }, 2000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold Drinks');
      }, 1000);
    });
  }
  
  function createPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Post created');
      }, 1500);
    });
  }
  
  function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Post deleted');
      }, 1000);
    });
  }
  
  getButter()
    .then((butter) => {
      console.log('Got', butter);
      return getColdDrinks();
    })
    .then((drinks) => {
      console.log('Got', drinks);
      return createPost();
    })
    .then((message) => {
      console.log(message);
      return deletePost();
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Async/await version
  async function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Butter');
      }, 2000);
    });
  }
  
  async function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold Drinks');
      }, 1000);
    });
  }
  
  async function createPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Post created');
      }, 1500);
    });
  }
  
  async function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Post deleted');
      }, 1000);
    });
  }
  
  async function main() {
    try {
      const butter = await getButter();
      console.log('Got', butter);
      const drinks = await getColdDrinks();
      console.log('Got', drinks);
      const postMessage = await createPost();
      console.log(postMessage);
      const deleteMessage = await deletePost();
      console.log(deleteMessage);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();
  
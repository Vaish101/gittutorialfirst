function addItem(e) {
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Retrieve existing users from localStorage
    let users;
    if (localStorage.getItem('users') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('users'));
    }
  
    // Add the new user to the existing list
    users.push(newItem);
  
    // Store the updated list of users in localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // ...
  }
  
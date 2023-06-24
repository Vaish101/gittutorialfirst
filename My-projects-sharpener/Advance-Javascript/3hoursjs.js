<div id="dashboard">
  <h1>Seller's Dashboard</h1>
  <div id="item-list">
    <!-- Display the list of items here -->
  </div>
  <div id="add-item-form">
    <h2>Add Item</h2>
    <input type="text" id="item-name" placeholder="Item Name">
    <textarea id="item-description" placeholder="Item Description"></textarea>
    <input type="number" id="item-price" placeholder="Item Price">
    <input type="number" id="item-quantity" placeholder="Item Quantity">
    <button id="add-item-btn">Add Item</button>
  </div>
</div>
const itemList = document.getElementById('item-list');
const addItemForm = document.getElementById('add-item-form');
const addItemButton = document.getElementById('add-item-btn');

// Add an event listener to the "Add Item" button
addItemButton.addEventListener('click', addItem);

function addItem(event) {
  event.preventDefault();

  // Retrieve the input values from the form
  const itemName = document.getElementById('item-name').value;
  const itemDescription = document.getElementById('item-description').value;
  const itemPrice = document.getElementById('item-price').value;
  const itemQuantity = document.getElementById('item-quantity').value;

  // Create a new item object with the input values
  const newItem = {
    name: itemName,
    description: itemDescription,
    price: itemPrice,
    quantity: itemQuantity,
  };

  // Call a function to send the new item data to the server
  saveItemToServer(newItem);
}

function saveItemToServer(item) {
  // Make an AJAX request to save the item data to the server (e.g., using Axios or Fetch API)
  // Replace the URL and HTTP method with your server endpoint
  axios.post('/api/items', item)
    .then((response) => {
      console.log('Item saved successfully:', response.data);
      // Update the item list on the dashboard with the newly added item
      displayItem(response.data);
      clearFormFields();
    })
    .catch((error) => {
      console.error('Error saving item:', error);
    });
}

function displayItem(item) {
  // Create an HTML element to display the item details
  const itemElement = document.createElement('div');
  itemElement.innerHTML = `
    <h3>${item.name}</h3>
    <p>Description: ${item.description}</p>
    <p>Price: ${item.price}</p>
    <p>Quantity: ${item.quantity}</p>
  `;
  // Append the item element to the item list
  itemList.appendChild(itemElement);
}

function clearFormFields() {
  // Clear the form fields after submitting an item
  document.getElementById('item-name').value = '';
  document.getElementById('item-description').value = '';
  document.getElementById('item-price').value = '';
  document.getElementById('item-quantity').value = '';


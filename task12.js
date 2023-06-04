<ul id="contactList"></ul>
// Retrieve existing contacts from localStorage (if any)
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Display existing contacts in the UI
displayContacts();

// Form submit event
form.addEventListener('submit', addContact);

// Delete event
document.addEventListener('click', deleteContact);

// Add contact
function addContact(e) {
  e.preventDefault();

  // Get input values
  var nameInput = document.getElementById('name').value;
  var emailInput = document.getElementById('email').value;

  // Create new contact object
  var newContact = {
    name: nameInput,
    email: emailInput
  };

  // Add new contact to the array
  contacts.push(newContact);

  // Store updated contacts in localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';

  // Display updated contacts in the UI
  displayContacts();
}

// Display contacts in the UI
function displayContacts() {
  var contactList = document.getElementById('contactList');
  contactList.innerHTML = '';

  contacts.forEach(function(contact, index) {
    var li = document.createElement('li');
    li.innerHTML = `${contact.name} - ${contact.email}`;

    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('data-index', index);

    li.appendChild(deleteBtn);
    contactList.appendChild(li);
  });
}

// Delete contact
function deleteContact(e) {
  if (e.target.nodeName === 'BUTTON' && e.target.innerText === 'Delete') {
    var index = e.target.getAttribute('data-index');
    contacts.splice(index, 1);

    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
  }
}

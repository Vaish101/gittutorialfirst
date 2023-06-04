function addItem(e) {
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
  
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
  
    itemList.appendChild(li);
  
    // Store item in local storage
    storeItemInLocalStorage(newItem);
  
    // Clear input field
    document.getElementById('item').value = '';
  }
  
  function storeItemInLocalStorage(item) {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
  
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }
  
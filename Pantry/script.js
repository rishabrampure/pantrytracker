let items = [];

function addItem() {
  const itemInput = document.getElementById('itemInput');
  const quantityInput = document.getElementById('quantityInput');
  const itemName = itemInput.value.trim();
  const itemQuantity = quantityInput.value.trim();

  if (itemName && itemQuantity) {
    items.push({ name: itemName, quantity: itemQuantity });
    itemInput.value = '';
    quantityInput.value = '';
    displayItems();
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}

function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Quantity: ${item.quantity}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => deleteItem(index);
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  });
}

function searchItems() {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = searchInput.value.toLowerCase();
  const searchList = document.getElementById('searchList');
  searchList.innerHTML = '';

  items.forEach(item => {
    if (item.name.toLowerCase().includes(searchQuery)) {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Quantity: ${item.quantity}`;
      searchList.appendChild(li);
    }
  });
}
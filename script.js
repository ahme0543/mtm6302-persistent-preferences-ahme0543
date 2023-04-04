// Get elements from HTML
const myList = document.getElementById('myList');
const themeSelect = document.getElementById('themeSelect');
const listStyleSelect = document.getElementById('listStyleSelect');

// Set default values
let theme = 'light';
let listStyle = 'list-group';

// Load saved preferences, if any
if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme');
  applyTheme(theme);
  themeSelect.value = theme;
}

if (localStorage.getItem('listStyle')) {
  listStyle = localStorage.getItem('listStyle');
  applyListStyle(listStyle);
  listStyleSelect.value = listStyle;
}

// Add event listeners
themeSelect.addEventListener('change', () => {
  theme = themeSelect.value;
  applyTheme(theme);
  localStorage.setItem('theme', theme);
});

listStyleSelect.addEventListener('change', () => {
  listStyle = listStyleSelect.value;
  applyListStyle(listStyle);
  localStorage.setItem('listStyle', listStyle);
});

// Additional content for each item
const additionalContent = [
  ' - grocery shopping',
  ' - making dinner',
  ' - laundry',
  ' - homework',
  ' - cleaning',
];

// Add items to the list
for (let i = 0; i < additionalContent.length; i++) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = additionalContent[i];
  li.classList.add('list-group-item');
  li.textContent = `Item ${i+1}`;
  li.appendChild(span);
  myList.appendChild(li);
}

// Apply the selected theme
function applyTheme(theme) {
  document.body.className = '';
  document.body.classList.add(`theme-${theme}`);
}

// Apply the selected list style
function applyListStyle(listStyle) {
  myList.className = '';
  myList.classList.add(listStyle);
  
  // Modify list item styles
  const listItems = myList.querySelectorAll('.list-group-item');
  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    listItem.classList.remove('list-group-item-action', 'list-group-flush');
    if (listStyle === 'list-group-item-action') {
      listItem.classList.add('list-group-item-action');
    } else if (listStyle === 'list-group-flush') {
      listItem.classList.add('list-group-flush');
    }
  }
}





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

// Add items to the list
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = `Item ${i}`;
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
}





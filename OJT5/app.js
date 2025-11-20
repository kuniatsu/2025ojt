const countEl = document.getElementById('count');
const counterButtons = document.querySelectorAll('.counter button');
let count = 0;

counterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    count += action === 'increment' ? 1 : -1;
    countEl.value = count;
  });
});

const memoForm = document.getElementById('memoForm');
const memoInput = document.getElementById('memoInput');
const memoList = document.getElementById('memoList');
memoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = memoInput.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  memoList.prepend(li);
  memoInput.value = '';
  memoInput.focus();
});

const filterInput = document.getElementById('filterInput');
const items = document.querySelectorAll('.items li');
filterInput.addEventListener('input', () => {
  const keyword = filterInput.value.trim().toLowerCase();
  items.forEach((item) => {
    const match = item.dataset.label.includes(keyword);
    item.hidden = keyword && !match;
  });
});


const toggles = document.querySelectorAll('.toggle');
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    toggle.dataset.active = toggle.classList.contains('active') ? 'on' : 'off';
  });
});

const rangePairs = [
  ['jobRange', 'jobRangeValue'],
  ['familyRange', 'familyRangeValue'],
  ['introRange', 'introRangeValue'],
  ['emotionRange', 'emotionRangeValue'],
  ['lifeRange', 'lifeRangeValue'],
];
rangePairs.forEach(([inputId, outputId]) => {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  if (!input || !output) return;
  input.addEventListener('input', () => {
    output.value = input.value;
  });
});

const locationToggle = document.getElementById('locationToggle');
if (locationToggle) {
  locationToggle.addEventListener('click', () => {
    const enabled = locationToggle.classList.contains('active');
    headerMessage(enabled ? '現在地共有を有効化しました' : '現在地共有を無効化しました');
  });
}

const headerMessage = (text) => {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    Object.assign(toast.style, {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      padding: '0.8rem 1.2rem',
      borderRadius: '0.9rem',
      background: '#111322',
      color: '#fff',
      fontWeight: '600',
      boxShadow: '0 10px 30px rgba(15,23,42,0.25)',
      opacity: '0',
      transform: 'translateY(-10px)',
      transition: 'opacity 0.25s, transform 0.25s',
      zIndex: '50',
    });
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
    }, 2300);
  });
};


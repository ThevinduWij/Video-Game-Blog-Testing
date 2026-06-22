const updatedAt = document.getElementById('updated-at');

if (updatedAt) {
  const now = new Date();
  const locale = 'en-US';
  const date = now.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
  updatedAt.textContent = `Updated: ${date} ${time}`;
} else {
  console.warn('Element with id "updated-at" was not found.');
}

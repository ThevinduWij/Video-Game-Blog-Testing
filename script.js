const updatedAt = document.getElementById('updated-at');

if (updatedAt) {
  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });
  updatedAt.textContent = `Updated: ${date} ${time}`;
}

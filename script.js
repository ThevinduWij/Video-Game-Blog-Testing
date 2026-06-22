const updatedAt = document.getElementById('updated-at');

if (updatedAt) {
  const now = new Date();
  updatedAt.textContent = `Updated: ${now.toLocaleString()}`;
}

// inRay Content Engine Client Search
(function() {
  let searchIndex = [];
  const searchInput = document.getElementById('ice-search-input');
  const searchClear = document.getElementById('ice-search-clear');
  const resultsContainer = document.getElementById('ice-search-results');

  if (!searchInput || !resultsContainer) return;

  // Fetch search-index.json
  const basePath = window.location.pathname.startsWith('/blog') ? '/blog' : '';
  fetch(`${basePath}/assets/search-index.json`)
    .then(res => res.json())
    .then(data => {
      searchIndex = data;
    })
    .catch(err => console.error('Failed to load search index', err));

  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 0) {
      if (searchClear) searchClear.style.display = 'block';
      performSearch(query);
    } else {
      if (searchClear) searchClear.style.display = 'none';
      resultsContainer.style.display = 'none';
    }
  });

  if (searchClear) {
    searchClear.addEventListener('click', function() {
      searchInput.value = '';
      searchClear.style.display = 'none';
      resultsContainer.style.display = 'none';
    });
  }

  function performSearch(query) {
    if (!searchIndex.length) return;

    const matches = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             item.description.toLowerCase().includes(query) ||
             item.category.toLowerCase().includes(query) ||
             (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));
    }).slice(0, 8);

    if (matches.length === 0) {
      resultsContainer.innerHTML = '<div class="ice-search-result-item">No articles found</div>';
    } else {
      resultsContainer.innerHTML = matches.map(item => `
        <a href="${item.url}" class="ice-search-result-item">
          <div class="ice-search-result-title">${escapeHtml(item.title)}</div>
          <div class="ice-search-result-excerpt">${escapeHtml(item.description)}</div>
        </a>
      `).join('');
    }

    resultsContainer.style.display = 'block';
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }
})();

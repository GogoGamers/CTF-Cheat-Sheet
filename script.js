document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('.cheat-section');

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

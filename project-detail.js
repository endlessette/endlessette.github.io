document.addEventListener('DOMContentLoaded', () => {
    const contentSections = document.querySelectorAll('.content-section');

    contentSections.forEach(section => {
        const showMoreBtn = section.querySelector('.show-more');
        const hideBtn = section.querySelector('.hide');
        const expandableContent = section.querySelector('.expandable-content');

        showMoreBtn.addEventListener('click', () => {
            expandableContent.classList.add('active');
            showMoreBtn.style.display = 'none';
        });

        hideBtn.addEventListener('click', () => {
            expandableContent.classList.remove('active');
            showMoreBtn.style.display = 'inline-block';
        });
    });

    // Ensure captions are single line with ellipsis
    const captions = document.querySelectorAll('.caption p');
    captions.forEach(caption => {
        if (caption.scrollWidth > caption.clientWidth) {
            const text = caption.textContent;
            caption.title = text; // Show full text on hover
        }
    });
}); 
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Check URL parameters for active tab
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab');

    // Function to activate a tab
    function activateTab(tabId) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected button and content
        const selectedButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);

        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');

            // Update URL without page reload
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('tab', tabId);
            window.history.pushState({}, '', newUrl);
        }
    }

    // Set initial active tab based on URL parameter or default to 'projects'
    if (activeTab) {
        activateTab(activeTab);
    } else {
        activateTab('projects');
    }

    // Add click handlers for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.tagName !== 'A') { // Only handle clicks on non-anchor buttons
                e.preventDefault();
                const tabId = button.getAttribute('data-tab');
                activateTab(tabId);
            }
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const newParams = new URLSearchParams(window.location.search);
        const newTab = newParams.get('tab') || 'projects';
        activateTab(newTab);
    });
}); 
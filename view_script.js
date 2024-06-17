// view_script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const viewMoreButton = document.getElementById('view-more-button');
    const commentToggleButtons = document.querySelectorAll('.comment-toggle');
    const postCommentButtons = document.querySelectorAll('.post-comment-button');

    // Search Functionality
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();

        if (query) {
            console.log('Searching for:', query);
            // Implement search logic (e.g., filter gallery items by place name)
        }
    });

    // View More Functionality
    viewMoreButton.addEventListener('click', () => {
        console.log('Loading more items...');
        // Implement logic to load more content (e.g., pagination)
    });

    // Comment Toggle Functionality
    commentToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commentsSection = button.parentNode.nextElementSibling;
            const isHidden = commentsSection.style.display === 'none';

            if (isHidden) {
                commentsSection.style.display = 'block';
                button.innerHTML = '<i class="fas fa-comments"></i> Hide Comments';
            } else {
                commentsSection.style.display = 'none';
                button.innerHTML = '<i class="fas fa-comments"></i> Show Comments';
            }
        });
    });

    // Post Comment Functionality
    postCommentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newCommentField = button.previousElementSibling;
            const newCommentText = newCommentField.value.trim();

            if (newCommentText) {
                console.log('Posting comment:', newCommentText);
                // Implement logic for posting the comment (e.g., update the comment list)
                
                // Example of adding a new comment to the comment list
                const commentList = button.closest('.comments').querySelector('.comment-list');
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `<strong>You:</strong> ${newCommentText}`;
                
                commentList.appendChild(newComment);
                
                // Clear the comment field after posting
                newCommentField.value = '';
            }
        });
    });
});

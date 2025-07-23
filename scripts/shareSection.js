const authorSection = document.querySelector('.author-section');
const shareSection = document.querySelector('.share-section');
const shareButton = document.querySelector('.share-button');
const shareButtonClose = document.querySelector('.share-button-close');

function isDesktop(){
    return window.innerWidth > 1440;
}

function toggleSections() {
    if(isDesktop()){
        if(shareSection.style.display === 'flex'){
            shareSection.style.display = 'none';
        } else {
            shareSection.style.display = 'flex';
        }
        authorSection.style.display = 'flex';
    } else{
        const isAuthorVisible = getComputedStyle(authorSection).display !== 'none'; 
    if (isAuthorVisible) {
    // Author section is visible, so hide it and show the share section
        authorSection.style.display = 'none';
        shareSection.style.display = 'flex';
    } else {
    // Author section is hidden, so show it and hide the share section
        authorSection.style.display = 'flex';
        shareSection.style.display = 'none';
    }
    }
    
}

shareButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSections();
});

shareButtonClose.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSections();
});

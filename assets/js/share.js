function shareOnFacebook(event) {
    event.preventDefault();
    var url = encodeURIComponent(window.location.href);
    var shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank');
}

function shareOnTwitter(event) {
    event.preventDefault();
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent(document.title);
    var shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
}

function shareOnLinkedIn(event) {
    event.preventDefault();
    var url = encodeURIComponent(window.location.href);
    var shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(shareUrl, '_blank');
}

function shareOnInstagram(event) {
    event.preventDefault();
    // Instagram does not support direct sharing via URL
    alert('Instagram sharing is not supported directly. Please share manually.');
}

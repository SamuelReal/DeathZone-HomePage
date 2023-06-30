window.addEventListener('load', function() {
    var content = document.getElementById('content');
    
    function showContent() {
        content.classList.remove("invisible");
    }
    
    if (document.readyState === 'complete') {
        showContent();
    } else {
        window.addEventListener('DOMContentLoaded', showContent);
    }
});
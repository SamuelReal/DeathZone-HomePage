window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    
    function showContent() {
        loader.classList.add("invisible");
        content.classList.remove("invisible");
    }
    
    if (document.readyState === 'complete') {
        showContent();
    } else {
        window.addEventListener('DOMContentLoaded', showContent);
    }
});
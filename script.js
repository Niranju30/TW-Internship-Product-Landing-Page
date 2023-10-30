document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    card.style.transform = "translateX(0)"; // Move the card to its final position
});
function showIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    if (iframe) {
        iframe.style.display = "block";
    }
}

function hideIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    if (iframe) {
        iframe.style.display = "none";
    }
}
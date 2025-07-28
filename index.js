// const textArea = document.getElementsByClassName('note-textarea');
// textArea.addEventListener('input',() => {
//     textArea.style.height = 'auto';
//     textArea.style.height = textArea.scrollheight + 'px';
// })

// ## this can be writtennin this format also :-
// for (let textArea of textAreas)
// for (let i = 0; i < textAreas.length; i++) {
//     let textArea = textAreas[i];

const textAreas = document.getElementsByClassName('note-textarea');
for (let textArea of textAreas) {
    textArea.addEventListener('input', () => {
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    });
}
const shareButton = document.getElementById('sharecontent');
shareButton.addEventListener('click', handleShare);
function handleShare() {
    if (navigator.share) {
        navigator.share({
            title: "text",
            url: window.location.href
        })
            .then(() => console.log("shared successfully"))
            .catch((error) => console.error("share failed:", error))
    } else {
        alert("your browser does not support web share API");
    }
}
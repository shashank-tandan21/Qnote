// const textArea = document.getElementsByClassName('note-textarea');
// textArea.addEventListener('input',() => {
//     textArea.style.height = 'auto';
//     textArea.style.height = textArea.scrollheight + 'px';
// })
const textAreas = document.getElementsByClassName('note-textarea');
for (let textArea of textAreas) {
    textArea.addEventListener('input', () => {
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    });
}
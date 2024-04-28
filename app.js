function countSpaces() {
    const text = document.getElementById('textInput').value;
    let spaceCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaceCount++;
        }
    }
    document.getElementById('result').textContent = `Number of spaces: ${spaceCount}`;
}

countSpaces();
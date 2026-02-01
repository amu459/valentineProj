let yesSize = 1;

function growYes() {
    yesSize += 0.5; // Increases size each time No is clicked
    const yesButton = document.getElementById('yesButton');
    yesButton.style.transform = `scale(${yesSize})`;
    
    // Optional: Change the text of the No button to be funny
    const noButton = document.getElementById('noButton');
    const messages = ["Are you sure?", "Really?", "Think again!", "Pshhh", "Last chance!"];
    noButton.innerText = messages[Math.floor(Math.random() * messages.length)];
}

function celebrate() {
    document.getElementById('question').innerText = "YAY! See you on Valentine's! 🥰";
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('mainGif').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/T866tiFvS6X5K/giphy.gif"; // Happy cat GIF
}

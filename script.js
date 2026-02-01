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
    document.getElementById('mainGif').src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGY5NGVjdHBjajNoOTlxdTZtMHZzY2djc3F3N2NzbzR6eW01c203dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vDhDcIEmShbUI/giphy.gif"; // Happy cat GIF
}

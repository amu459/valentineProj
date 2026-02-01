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
    //document.getElementById('mainGif').src = <"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXd0eDZxcGN3OWx5Z21yZDlrY3h0eDhhY2s0bTRzM3gxNXIzeGtwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HJibfnd7xqk5hAMD4v/giphy.gif">;
    //document.getElementById('mainGif').src = "https://giphy.com/embed/HJibfnd7xqk5hAMD4v"; // Happy cat GIF
    <iframe src="https://giphy.com/embed/HJibfnd7xqk5hAMD4v" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/love-kiss-hearts-HJibfnd7xqk5hAMD4v">via GIPHY</a></p>
    document.getElementById('mainGif').src = "https://media.giphy.com/media/HJibfnd7xqk5hAMD4v/giphy.gif"; // Happy cat GIF
}

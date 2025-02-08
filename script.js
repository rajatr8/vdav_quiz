// Name Check Logic
function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Correct name for the game (you can change it)
    const correctName = 'aakriti';
    
    if (nameInput === correctName) {
        // Redirect to the password page if the name is correct
        window.location.href = 'password.html';
    } else {
        errorMessage.textContent = 'Sorry sister. This is only for my wife';
    }
}


// Password Check Logic
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Correct password (you can change it)
    const correctPassword = 'chidiya';

    // Array of random messages to show on incorrect password
    const randomMessages = [
        'The answer can be found on this page!',
        'Try random things on this page, maybe you will find something',
        'Bebe hint: open your eyes and look for your favourite animal',
        'The answer can be found on this page!',
        'Try random things on this page, maybe you will find something',
        'Bebe hint: open your eyes and look for your favourite animal',
        'Click Click Click, on your pet',
        'No you cannot have roses, or chocolate, or the heart',
        'Love is in the air… but not the password!',
        'The password is sweet, but not this one. Keep trying!'
    ];

    if (passwordInput === correctPassword) {
        // Redirect to the next page or success page
        window.location.href = 'vquiz.html';  // You can create this page next
    } else {
        // Show a random error message from the array
        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        errorMessage.textContent = randomMessage;
    }
}

// Show Hint for Password
function showHint() {
    const hintMessage = document.getElementById('hint-message');
    hintMessage.style.display = 'block';
    hintMessage.textContent = 'Hint: Password is your latest nickname little birdie!';
}

// Generate Emojis at the corners
function generateEmojis() {
    const container = document.getElementById('hearts-container');

    // Emoji elements for each corner
    const emojis = [
        { emoji: '❤️', id: 'heartEmoji', position: 'top-left' },
        { emoji: '🍫', id: 'chocolateEmoji', position: 'top-right' },
        { emoji: '🐇', id: 'hintBtnEmoji', position: 'bottom-left' },  // This is the hint button (rabbit)
        { emoji: '🌹', id: 'roseEmoji', position: 'bottom-right' }
    ];

    // Create emoji elements and place them at their respective corners
    emojis.forEach(item => {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = item.emoji;
        emoji.id = item.id;

        // Position based on corner
        switch (item.position) {
            case 'top-left':
                emoji.style.top = '10px';
                emoji.style.left = '10px';
                break;
            case 'top-right':
                emoji.style.top = '10px';
                emoji.style.right = '10px';
                break;
            case 'bottom-left':
                emoji.style.bottom = '10px';
                emoji.style.left = '10px';
                break;
            case 'bottom-right':
                emoji.style.bottom = '10px';
                emoji.style.right = '10px';
                break;
        }

        // If it's the rabbit emoji, make it the hint button
        if (item.id === 'hintBtnEmoji') {
            emoji.onclick = showHint;  // When clicked, redirect to success.html
        }

        container.appendChild(emoji);
    });
}

// Call generateEmojis when the page loads
window.onload = generateEmojis;
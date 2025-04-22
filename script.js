// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Simulate login process
    console.log('Logging in with:', { email, password, rememberMe });
    alert('Login successful!');
}

// Function to handle sign-up form submission
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Simulate sign-up process
    console.log('Signing up with:', { email, password });
    alert('Sign-up successful!');
}

// Function to toggle between login and sign-up forms
function toggleForm(showSignUp) {
    const loginCard = document.getElementById('loginCard');
    const signUpCard = document.getElementById('signUpCard');

    if (showSignUp) {
        loginCard.style.display = 'none';
        signUpCard.style.display = 'block';
    } else {
        loginCard.style.display = 'block';
        signUpCard.style.display = 'none';
    }
}
// Function to upload a live or post a video
function uploadContent(type, title, description, file) {
    if (!title || !description || !file) {
        alert('Please fill in all fields and select a file.');
        return;
    }

    if (type !== 'live' && type !== 'video') {
        alert('Invalid content type. Please select either "live" or "video".');
        return;
    }

    // Simulate upload process
    console.log(`Uploading ${type} with:`, { title, description, file });

    // Simulate a delay for the upload process
    setTimeout(() => {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} uploaded successfully!`);
    }, 2000); // Simulate a 2-second upload delay 
}

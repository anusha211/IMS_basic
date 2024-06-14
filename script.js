document.getElementById('showSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signUpForm').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signUpForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Simple client-side authentication logic (for demonstration purposes only)
    if (username === "user" && password === "password") {
        //alert('Login successful!');
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
});


document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form= document.getElementById('signUpForm')
    const formDataArray=[];
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const name = document.getElementById('signUpUsername').value.trim();
        const email = document.getElementById('email').value.trim();
        const password=document.getElementById('Password').value.trim();
        const repassword=document.getElementById('RePassword').value.trim();
        
        // Validate form fields
        if (name === '') {
            alert('Name is required');
            return;
        }

        if (email === '') {
            alert('Email is required');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if(password!==repassword){
            alert('password does not match');
            return;
        }

        // Create a form data object
        const formData = {
            Name: name,
            Email: email,
            
        };

        // Store the form data in the array
        formDataArray.push(formData);

        // Log the form data array to the console
        console.log(formDataArray);

       alert('register successfull');
    });
});

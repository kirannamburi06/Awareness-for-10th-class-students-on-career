document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const altMobile = document.getElementById('alt-mobile').value;
    const password = document.getElementById('password').value;
  
    const userData = {
      name, email, mobile, dob, address, altMobile, password
    };
  
    // Save user data to localStorage (simulating a backend save)
    localStorage.setItem('user', JSON.stringify(userData));
  
    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html';  // Redirect to login page after successful sign-up
  });
  
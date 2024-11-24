document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate checking user credentials
    const storedUser = JSON.parse(localStorage.getItem('user'));  // Retrieve saved user from localStorage
  
    if (storedUser && storedUser.name === username && storedUser.password === password) {
      alert('Login successful!');
      window.location.href = 'index.html';  // Redirect to home page after successful login
    } else {
      alert('Invalid username or password');
    }
  });
  
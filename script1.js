function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === '12345') {
      // Redirect to main.html if login is successful
      window.location.href = 'main.html';
    } else {
      // Display an alert for unsuccessful login
      alert('Invalid username or password');
    }
  }
  
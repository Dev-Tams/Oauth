document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); 

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const data = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Login failed. Please check your credentials.');
            }

            const result = await response.json();
            alert('Login successful!');
                    
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    });
});

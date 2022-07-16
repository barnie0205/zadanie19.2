function validatePassword() {
    const password_value = (document.getElementById('password').value).trim(),
        check_password = document.querySelector('#check-password');
    const errors = [];
    
    if (password_value.length < 8)
        errors.push('Hasło jest za krótkie! Musi zawierać min. 8 znaków.');
    
    if (!/[a-z]/.test(password_value))
        errors.push('Hasło musi zawierać min. jedną małą literę.');
    
    if (!/[A-Z]/.test(password_value))
        errors.push('Hasło musi zawierać min. jedną wielką literę.');
    
    if (!/[0-9]/.test(password_value))
        errors.push('Hasło musi zawierać min. jedną cyfrę.');
    
    if (!/[!#$%&?_"]/.test(password_value))
        errors.push('Hasło musi zawierać min. jednen znak specjalny.');
    
    if (errors)
        check_password.innerHTML = errors.join('<br>');
}

function checkPasswords() {
    const repeated_password = document.getElementById('password-repeated');
    const repeated_password_error = document.getElementById('check-password-repeated').value;
    const password_value = (document.getElementById('password').value).trim();
    if (repeated_password !== password_value)
        repeated_password_error.textContent('Hasła muszą być takie same!');
}

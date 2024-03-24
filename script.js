

// Input alanlarının olay dinleyicileri
document.getElementById('firstname').addEventListener('input', validateInput);
document.getElementById('lastname').addEventListener('input', validateInput);
document.getElementById('phone').addEventListener('input', validatePhone);

// Form gönderme olay dinleyicisi
document.getElementById('signupForm').addEventListener('submit', handleSubmit);

function isValidName(name) {
    return /^[A-Za-zğüşıöçĞÜŞİÖÇ]+$/.test(name);
}

function isValidPhoneNumber(phoneNumber) {
    return /^\d+$/.test(phoneNumber);
}

function validateInput() {
    if (!isValidName(this.value)) {
        this.value = this.value.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ]+/g, '');
    }
}


function validatePhone() {
    this.value = this.value.replace(/\D/g, '');
}

// Form gönderme işlemi
function handleSubmit(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    if (password.length < 8 || password.length > 15) {
        document.getElementById('error-message').innerText = 'Şifre 8 ile 15 karakter arasında olmalıdır.';
        passwordInput.style.borderColor = 'red';
        return;
    }

    const formData = new FormData(this);

    const data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Hesap başarıyla oluşturuldu:', data);
    })
    .catch(error => {
        console.error('Hesap oluşturma hatası:', error);
    });
}






/* document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
        phone: document.getElementById('phone').value
    };
    
    fetch(' https://reqres.in/api/users ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Hesap başarıyla oluşturuldu:', data);
        // İsteğe bağlı olarak başka işlemler yapılabilir (örneğin, kullanıcıyı yeni oluşturulan hesaba yönlendirme)
    })
    .catch(error => {
        console.error('Hesap oluşturma hatası:', error);
        // Hata durumunda kullanıcıya uygun bir mesaj gösterilebilir
    });
}); */



document.getElementById('firstname').addEventListener('input', function() {
    if (!isValidName(this.value)) {
        this.value = this.value.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ]+/g, '');
    }
});

document.getElementById('lastname').addEventListener('input', function() {
    if (!isValidName(this.value)) {
        this.value = this.value.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ]+/g, '');
    }
});

document.getElementById('phone').addEventListener('input', function() {
    if (!isValidPhoneNumber(this.value)) {
        this.value = this.value.replace(/\D/g, '');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    if (password.length < 8 || password.length > 15) {
        document.getElementById('error-message').innerText = 'Şifre 8 ile 15 karakter arasında olmalıdır.';
        passwordInput.style.borderColor = 'red';
        return;
    }
    
    this.submit();
});


function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}


// FORM SUBMİT
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Formdaki verileri alıyoruz
    const formData = new FormData(this);

    // FormData nesnesini JavaScript nesnesine dönüştürüyoruz
    const data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    // JSON olarak veriyi hazırla ve API'ye POST isteği gönder
    fetch('https://reqres.in/api/users', {
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
});


// doğrulama kısmı
function isValidName(name) {
    return /^[A-Za-zğüşıöçĞÜŞİÖÇ]+$/.test(name);
}

function isValidPhoneNumber(phoneNumber) {
    return /^\d+$/.test(phoneNumber);
}




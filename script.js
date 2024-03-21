

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

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Formdaki verileri al
    const formData = new FormData(this);
    
    // FormData nesnesini JavaScript nesnesine dönüştür
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


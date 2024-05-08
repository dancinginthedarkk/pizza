document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.order__form');

    const submitBtn = document.getElementById('submit-btn');

    const popup = document.getElementById('popup');

    const nameInput = document.getElementById('name');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        if (name === '' || address === '' || phone === '') {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }

        if (name.includes('.')) {
            alert('Поле "Ваше имя" не должно содержать точки.');
            return;
        }

        const data = {
            name: name,
            address: address,
            phone: phone
        };

        setTimeout(function () {
            popup.style.display = 'block';
        }, 1000);

        setTimeout(function () {
            popup.style.display = 'none';
        }, 5000);
    });

    nameInput.addEventListener('input', function (event) {
        const input = event.target;
        const value = input.value;

        if (value.includes('.')) {
            input.value = value.replace('.', '');
        }
    });
});

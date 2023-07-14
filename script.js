const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url == '') {
        alert('Enter Valid URL');
    }
    else {
        qr.innerHTML = "";
        var qrcode = new QRCode(qr, {
            text: url,
            width: size,
            height: size
        });
    }
};

form.addEventListener('submit', onGenerateSubmit);
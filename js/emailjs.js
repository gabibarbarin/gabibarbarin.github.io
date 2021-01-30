const btn = document.getElementById('button');

document.getElementById('form-contact')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_q6xmsde';

emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Enviar';
    alert('¡Correo Enviado!');
  }, (err) => {
    btn.value = 'Enviar';
    alert(JSON.stringify(err));
  });
});
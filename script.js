const $form = document.querySelector('.form');
const $error = $form.querySelector('.error');

$form.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstName = $form["first-name"].value;
  const lastName = $form["last-name"].value;
  const email = $form["email"].value;
  const password = $form["password"].value;
  
  if(firstName === "") {
   addErrorTo('first-name', 'First Name is required');
  }

  if(lastName === "") {
   addErrorTo('last-name', 'Last Name is required');
  }

  if(email === "") {
   addErrorTo('email', 'Email Address is required');
  }

  if(password === "") {
   addErrorTo('password', 'Password is required');
  }
});

function addErrorTo(field, message) {
  const small = $form[field].parentNode.querySelector('small');
   small.innerText = message;
   small.style.opacity = '1';
}
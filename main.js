const fnameEl = document.querySelector('#fname')
const lnameEl = document.querySelector('#lname')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const submitBtnEl = document.querySelector('.submit__btn')

const renderMessage = (el, errorMessage) => {
  const formGroupEl = el.closest(".form__group");

  if (errorMessage) {
    formGroupEl.classList.add('error');
    formGroupEl.setAttribute('error-message', errorMessage)
  } else {
    formGroupEl.classList.remove('error');
    formGroupEl.setAttribute('error-message', '')
  }

}

submitBtnEl.addEventListener('click', (e) => {
  let error = {}
  e.preventDefault();

  // validation
  if(fnameEl.value === null || fnameEl.value === "") {
    error['fname'] = "First name cannot be empty"
  }

  if(lnameEl.value === null || lnameEl.value === "") {
    error['lname'] = "Last name cannot be empty"
  }

  if(emailEl.value === null || emailEl.value === "") {
    error['email'] = "Email cannot be empty"

  }

  if(passwordEl.value === null || passwordEl.value === "") {
    error['password'] = "Password cannot be empty"
  }

  renderMessage(fnameEl, error['fname'])
  renderMessage(lnameEl, error['lname'])
  renderMessage(emailEl, error['email'])
  renderMessage(passwordEl, error['password'])


  if(Object.keys(error).length > 0) {
    console.log("error")
  }
})
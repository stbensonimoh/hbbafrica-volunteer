'use strict'
google.maps.event.addDomListener(window, 'load', initialize)
function initialize () {
  var input = document.getElementById('location')
  var autocomplete = new google.maps.places.Autocomplete(input)
}

document.addEventListener('DOMContentLoaded', () => {
  const date = new Date()
  const year = date.getFullYear()
  const yearContent = document.querySelector('#year')
  yearContent.innerHTML = year

  // Capitalize first letter of First Name and Last Name
  document.querySelector('#firstName').onchange = e => {
    let val = document.querySelector('#firstName').value
    RegExp = /\b[a-z]/g

    val = val.charAt(0).toUpperCase() + val.substr(1)
  }

  document.querySelector('#lastName').onchange = e => {
    let val = document.querySelector('#lastName').value
    RegExp = /\b[a-z]/g

    val = val.charAt(0).toUpperCase() + val.substr(1)
  }

  document.querySelector('#email').onchange = e => {
    let val = document.querySelector('#email').value
    RegExp = /\b[a-z]/g

    val = val.toLowerCase()
  }

  // Add intl-tel-input
  window.intlTelInputGlobals.loadUtils('scripts/utils.js')
  var input = document.querySelector('#phone')
  window.intlTelInput(input, {
    initialCountry: 'ng',
    separateDialCode: true,
    hiddenInput: 'full_phone',
    utilsScript: 'scripts/utils.js'
  })

  const elems = document.querySelectorAll('select')
  const instances = M.FormSelect.init(elems)
  const count = document.querySelector('textarea#textarea2')
  M.CharacterCounter.init(count)

  //   Submit the form
  const form = document.querySelector('form')

  // On Form Submit
  form.addEventListener('submit', e => {
    // Check to see if form has validation errors
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    // If form doesn't have validation errors
    if (form.checkValidity() === true) {
      e.preventDefault()

      // change the button color and add the loading class
      //   document.querySelector('button').classList.remove('btn-danger')
      document.querySelector('button').classList.add('btn-primary')
      document.querySelector('button').innerHTML =
        'Loading <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>'
    }
  })
})

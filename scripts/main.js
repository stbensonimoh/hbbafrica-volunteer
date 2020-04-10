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
  const elem = document.querySelector('select')
  const instances = M.FormSelect.init(elems)
  const instance = M.FormSelect.getInstance(elem)
  const count = document.querySelectorAll('textarea')
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

      // Create Form Variables
      const firstName = document.querySelector("input[name='firstName'").value
      const lastName = document.querySelector("input[name='lastName'").value
      const email = document.querySelector("input[name='email'").value
      const phone = document.querySelector("input[name='full_phone'").value
      const location = document.querySelector("input[name='location'").value
      const gender = document.querySelector("input[name='gender'").value
      const linkedin = document.querySelector("input[name='linkedin'").value
      const twitter = document.querySelector("input[name='twitter'").value
      const instagram = document.querySelector("input[name='instagram'").value
      const facebook = document.querySelector("input[name='facebook'").value
      const skype = document.querySelector("input[name='skype'").value
      const preferredSocialMedia = document.querySelector(
        "input[name='preferredSocialMedia'"
      ).value
      const volunteerUnit = document.querySelector(
        "select[name='volunteerUnit'"
      ).value
      const reasonForVolunteering = document.querySelector(
        "textarea[name='reasonForVolunteering'"
      ).value

      // construct formData
      const formBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        location: location,
        gender: gender,
        socialMediaHandles: {
          linkedin: linkedin,
          twitter: twitter,
          instagram: instagram,
          facebook: facebook,
          skype: skype
        },
        preferredSocialMedia: preferredSocialMedia,
        volunteerUnit: instance.getSelectedValues(),
        reasonForVolunteering: reasonForVolunteering
      }

      // send it for processing
      fetch('http://localhost:3000/volunteer/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formBody)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.message === 'Volunteer created Successfully') {
            swal(
              'Application Successful!',
              'Your volunteer Application was successful!',
              'success'
            )
            setTimeout(
              (window.location = 'https://hopebehindbarsafrica.org'),
              3000
            )
          } else {
            swal(
              'Already Registered!',
              'You have already registered!',
              'warning'
            )
            setTimeout(
              (window.location = 'https://hopebehindbarsafrica.org'),
              3000
            )
          }
        })
        .catch(err => {
          console.log('The request failed', err)
        })
    }
  })
})

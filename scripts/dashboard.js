'use strict'
document.addEventListener('DOMContentLoaded', e => {
  let date = new Date()
  const year = date.getFullYear()
  let yearContent = document.querySelector('#year')
  yearContent.innerHTML = year


  // initiate a fetch call
  axios
    .get('https://hbbafrica-api.herokuapp.com/volunteer/findall')
    .then(response => {
      console.log(response.data.result)
      const results = response.data.result
      for (var i = 0; i < results.length; i++) {
        $('#data').append(
          '<tr><td>' +
            results[i].firstName +
            '</td><td>' +
            results[i].lastName +
            '</td><td>' +
            results[i].email +
            '</td><td>' +
            results[i].phone +
            '</td><td>' +
            results[i].location +
            '</td><td>' +
            results[i].gender +
            '</td><td>' +
            results[i].socialMediaHandles.linkedin +
            '</td><td>' +
            results[i].socialMediaHandles.twitter +
            '</td><td>' +
            results[i].socialMediaHandles.instagram +
            '</td><td>' +
            results[i].socialMediaHandles.facebook +
            '</td><td>' +
            results[i].socialMediaHandles.skype +
            '</td><td>' +
            results[i].preferredSocialMedia +
            '</td><td>' +
            results[i].reasonForVolunteering +
            '</td><td>' +
            results[i].volunteerUnit +
            '</td><td>' +
            results[i].createdAt +
            '</td></tr>'
        )
      }
    })
    .catch(error => {
      console.log('The Request Failed', error)
    })
})

'use strict'
document.addEventListener('DOMContentLoaded', () => {
  let date = new Date()
  const year = date.getFullYear()
  let yearContent = document.querySelector('#year')
  yearContent.innerHTML = year

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
})

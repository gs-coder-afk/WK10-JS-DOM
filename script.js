// A Bootstrap styled table representing your choice 
// of data.
// A Bootstrap styled form that allows a user to add
// a new row to the table when clicking on submit. 



// Button on click to add info to the table 
// Get info from input field & value 
// first & last name + color 
// A place or way to store the info 

// Button with action
const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault()

// variables to hold value 
let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let favoriteColor = document.getElementById('favoriteColor').value


// create nodes for form
let newTableRow = document.createElement('tr') 

let numberNode = document.createElement('td')
 numberNode.innerHTML = number
 newTableRow.append(numberNode)

let firstNameNode = document.createElement('td')
 firstNameNode.innerHTML = firstName 
 newTableRow.append(firstNameNode) 

let lastNameNode = document.createElement('td')
 lastNameNode.innerHTML = lastName 
 newTableRow.append(lastNameNode)

let favoriteColorNode = document.createElement('td')
 favoriteColorNode.innerHTML = favoriteColor
 newTableRow.append(favoriteColorNode) 

 // adding a new row to the table with the submitted 
 // info by the user 
 // clearing the form after info is submitted 
document.getElementById('tBody').appendChild(newTableRow)

document.getElementById('firstName').value = ''
document.getElementById('lastName').value = ''
document.getElementById('favoriteColor').value = ''

// table is numbered for each info entry & counts up 
// from 0
number++

})
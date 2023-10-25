


// USING CONST VARIABLE WITH PROMTS

const firstName = prompt("Please insert your First Name")
const secondName = prompt("Please insert your Second Name")
const favoriteColor = prompt("Please enter your Favorite Color")

// INSRTING DATA IN H2, H3 AND P IN HTML


// One way to insert data

/* document.getElementById("salutation").innerHTML = "Hello" + " " + firstName + " " + secondName ;
document.getElementById("password").innerHTML = "Your Password is:" + " " + firstName + secondName + favoriteColor + "#23" ;
document.getElementById("note").innerHTML = "(Please do not forget to change your password)"; */


// Other way to insert data (backtick)
document.getElementById("salutation").innerHTML = `Hello ${firstName} ${secondName}`
document.getElementById("password").innerHTML = `Your Password is: ${firstName}${secondName}${favoriteColor}#23`;
document.getElementById("note").innerHTML = `(Please do not forget to change your password!!!)`;
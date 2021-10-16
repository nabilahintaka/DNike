
function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var male = document.getElementById('male').checked
    var female = document.getElementById('female').checked
    var code = document.getElementById('code').value
    var address = document.getElementById('address').value
    var product = document.getElementById('product').value
    var card = document.getElementById('card').value
    var agreement = document.getElementById('agreement').checked

if(username == ''){
    alert('Please fill in your name')
} else if(username.length < 5 || username.length > 25){
    alert('Name length must be 5 - 15 characters')
}

else if(email == ''){
    alert('Please fill in your email')
} else if(email.indexOf('@') <= 0 || !email.endsWith('.com') && !email.endsWith('.co.id')){
    alert('Your email is using an invalid format')
} else if(!male && !female){
    alert('Please select your gender')
} else if(code == ''){
    alert("Please fill in your Postal Code ")
} else if(isNaN(code) || code < 9999 || code > 100000){
    alert('Postal Code must be five number')
}

else if(address == ''){
    alert('Please fill in your Address')
}else if(product == ''){
    alert('Please select a product')
} else if(card == ''){
    alert('Please fill in your Credit Card')
} else if(isNaN(code) || card < 999999999999999 || card > 10000000000000000){
    alert('Credit card number must be sixteen digits')
} else if(agreement == ''){
    alert('You must accept the agreement')
} else{
    if(confirm('Are you sure?')){
        return true
    }
    
}

return false

}

function EmailValidation(){
    let email = document.getElementById("email").value
    const emailPattern = /^[a-z0-9]+@+[a-z0-9]+[.a-z]+[^ ]+$/

    let itsValid = email.match(emailPattern)

    if (!itsValid){
        console.log("erro")
        console.log(email)
        console.log(itsValid)
    } else {
        console.log(itsValid)
    }
}

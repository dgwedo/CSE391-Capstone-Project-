function validator(formSelector) {
    var formElement = document.querySelector(formSelector)
    // console.log(formElement)
    if (formElement) {
        var inputs = formElement.querySelectorAll("[name][rule]")
        console.log(inputs)
    }

}

validator("#form-register")
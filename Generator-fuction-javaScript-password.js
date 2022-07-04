let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')
let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')
let checkBox = document.querySelector('#charespecial')
let TextEspecialChar = document.querySelector('#chars')


let charSet = 'abcdefghijklmnopqrstuvwyyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*'
let charSetNoSpecial = 'abcdefghijklmnopqrstuvwyyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
let novaSenha = ''


sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

checkBox.addEventListener('change', () => {if (checkBox.checked) {
    TextEspecialChar.style.color = '#3eb72b'}
    else {TextEspecialChar.style.color = 'red'}
    })

 function generatePassword() {
    let pass = ''
    if (checkBox.checked) {
        for (let i = 0, n = charSet.length; i < sliderElement.value; i++) {
            pass += charSet.charAt(Math.floor(Math.random() * n))
        }
    }
    else {
        for (let i = 0, n = charSetNoSpecial.length; i < sliderElement.value; i++) {
            pass += charSetNoSpecial.charAt(Math.floor(Math.random() * n))
        }
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
 }

 function copyPassword() {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}
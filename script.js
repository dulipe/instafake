const publi = JSON.parse(localStorage.getItem('publi')) || []

function savePubli() {
    const username = document.getElementById('username').value
    const urlimg = document.getElementById('urlimg').value

    publi.unshift({
        username: username,
        urlimg: urlimg
    })

    saveOnStorage()
    clearInputs()
}

function saveOnStorage() {
    localStorage.setItem('publi', JSON.stringify(publi))
}

function clearInputs() {
    document.getElementById('username').value = ''
    document.getElementById('urlimg').value = ''
}

document.querySelector('button').addEventListener('click', savePubli)
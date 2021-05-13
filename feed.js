let feed = document.querySelector('.content')

let publis = JSON.parse(localStorage.getItem('publi'))

for (i of publis) {
    let publi = document.createElement('div')
    publi.setAttribute('class', 'publi')

    let user = document.createElement('h3')
    user.textContent = i.username

    let imgcontent = document.createElement('div')
    
    let img = document.createElement('img')
    img.setAttribute('src', i.urlimg)

    publi.appendChild(user)
    publi.appendChild(imgcontent)
    imgcontent.appendChild(img)

    feed.appendChild(publi)
}
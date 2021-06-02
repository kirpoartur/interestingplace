let butt = document.getElementById('bt')

function create() {
  text = document.getElementById('at').value
  name = document.getElementById('name').value
  if (text != '' && text != ' ' && name != '' && name != ' ') {
    name = encodeURIComponent(name)

    filename = String(Math.random() * 10000000000000000)
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", '/withlovefosssru/' + filename + "/" + encodeURIComponent(text) + '/' + name, false)
    console.log(name)
    xmlHttp.addEventListener("load", function (){
      window.location.href = '/articles/' + filename + '.html'
    })
    xmlHttp.send(null)
  } else {
    alert('Имя и текст поста не могут быть пустыми :|')
  }
}

butt.addEventListener('click', create)

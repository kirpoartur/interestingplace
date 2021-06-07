let butt = document.getElementById('bt')
console.log(window.location.href.split('/'))


function create() {
  text = document.getElementById('at').value
  name = '[' + window.location.href.split('/')[4] + '] '
  name1 = name + document.getElementById('name').value
  name = encodeURIComponent(name1)

  if (text != '' && text != ' ' && document.getElementById('name').value != '' && document.getElementById('name').value != ' ') {
    filename = String(Math.random() * 10000000000000000)
    var xmlHttp = new XMLHttpRequest()
    console.log('/withlovefosssru/' + filename + "/" + encodeURIComponent(text) + '/' + name);
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

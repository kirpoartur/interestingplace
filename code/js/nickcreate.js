let butt = document.getElementById('bt')

function create() {
  text = document.getElementById('at').value
  name = '[' + window.location.href.split('/')[4] + '] '
  name1 = name + document.getElementById('name').value
  name = encodeURIComponent(name1)
  if (text != '' && text != ' ' && name != '' && name != ' ') {
    name = encodeURIComponent(name)

    filename = String(prompt('Введите ссылку на пост (без .html):'))
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", '/withlovefosssru/' + filename + "/" + encodeURIComponent(text) + '/' + name, false)
    xmlHttp.send(null)
    if (xmlHttp.responseText != "<meta charset='utf-8'><h2>Ты тут самый умный?<br>Перезаписать чужую статью нельзя, мой 8-ми летний друг.</h2><p>Спасибо артхацкеру за предоставленную уязвимость.</p>") {
      window.location.href = '/articles/' + filename + '.html'
    } else {
      alert('Статья с такой ссылкой уже существует :|')
    }

  } else {
    alert('Имя и текст поста не могут быть пустыми :|')
  }
}

butt.addEventListener('click', create)

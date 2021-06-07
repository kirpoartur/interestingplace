const http = require("http");
const fs = require("fs");
var path = require('path');

http.createServer(function(request, response){

    response.setHeader("UserId", 12);

    if (request.url == '/') {
      response.statusCode = 200;
      oldpage = fs.readFileSync('html/lenta.html', 'utf8');
      json = fs.readFileSync('other/articles.json', 'utf8');

      data = JSON.parse(json)
      code = ''
      for (var key in data) {
          code = code + "<a class='block' href='" + data[key].data + "'><h2>" + data[key].descrip + "</h2></a> <br>"
      }

      page = oldpage.replace('{{posts}}', code);
      fs.writeFileSync('html/lenta.html', page);
      page = fs.readFileSync('html/lenta.html', 'utf8');
      fs.writeFileSync('html/lenta.html', oldpage);

      response.end(page)
    }
    else if (request.url.includes('/createnewarticle/') == true) {
      list = request.url.split('/')
      console.log(list)

      response.statusCode = 200;

      oldpage = fs.readFileSync('html/nickcreate.html')

      page = fs.readFile('html/nickcreate.html', (err, data) => {
        data = data.toString().replace('{NICK}', list[2])
        fs.writeFileSync('html/nickcreate.html', page);
        response.end(data)

        fs.writeFileSync('html/nickcreate.html', oldpage);
      })

    }
    else if (request.url.indexOf(".css") >= 0) {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css; charset=utf-8;");
      console.log(request.url);
      page = fs.readFileSync('code/css/'+request.url);
      response.end(page)
    }
    else if (request.url == '/create.js') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/js; charset=utf-8;");
     page = fs.readFileSync('code/js/create.js');
     response.end(page)
   }
    else if (request.url == '/favicon.ico') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/ico; charset=utf-8;");
     page = fs.readFileSync('media/favicon.ico');
     response.end(page)
    }
    else if (request.url == '/favicon-16x16.png') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/png; charset=utf-8;");
     page = fs.readFileSync('media/favicon-16x16.png');
     response.end(page)
    }
    else if (request.url == '/favicon-32x32.png') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/png; charset=utf-8;");
     page = fs.readFileSync('media/favicon-32x32.png');
     response.end(page)
    }
    else if (request.url == '/apple-touch-icon.png') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/png; charset=utf-8;");
     page = fs.readFileSync('media/apple-touch-icon.png');
     response.end(page)
    }
    else if (request.url == '/android-chrome-192x192.png') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/png; charset=utf-8;");
     page = fs.readFileSync('media/android-chrome-192x192.png');
     response.end(page)
    }
    else if (request.url == '/android-chrome-512x512.png') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "img/png; charset=utf-8;");
     page = fs.readFileSync('media/android-chrome-512x512.png');
     response.end(page)
    }
    else if (request.url == '/site.webmanifest') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/txt; charset=utf-8;");
     page = fs.readFileSync('other/site.webmanifest');
     response.end(page)
    }
    else if (request.url == '/nickcreate.js') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/js; charset=utf-8;");
     page = fs.readFileSync('code/js/nickcreate.js');
     response.end(page)
    }
    else if (request.url == '/create.html') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     page = fs.readFileSync('html/create.html');
     response.end(page)
    }
    else if (request.url == '/info.html') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     page = fs.readFileSync('html/info.html');
     response.end(page)
    }
    else if (request.url == '/aboutniks.html') {
     response.statusCode = 200;
     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     page = fs.readFileSync('html/aboutniks.html');
     response.end(page)
    }
    else if (request.url == '/PTMono.ttf') {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8;");
      page = fs.readFileSync('other/PTMono.ttf');
      response.end(page)
    }
    else if (request.url == '/pressstart.ttf') {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8;");
      page = fs.readFileSync('other/pressstart.ttf');
      response.end(page)
    }
    else {
      if (request.url.includes('/withlovefosssru/') == true) {
        list = request.url.split('/')

        filename = list[2]

        text = ''
        text = "<!DOCTYPE html>\n<html lang='ru' dir='ltr'>\n<head>\n<meta charset='utf-8'>\n<title>interestingplace.</title>\n<link rel='stylesheet' href='/article.css'>\n</head>\n<body>\n<div class='footer'>\n<h1><a class='llogo' href='/'>interestingplace.</a></h1>\n<div class='create'>\n<a class='button' href='/info.html'>создать</a>\n</div>\n</div>\n" + decodeURIComponent(list[3]) + "\n</body>\n</html>"
        name1 = decodeURIComponent(list[4])
        console.log('------------------')
        console.log(text)
        console.log(name1)
        console.log('------------------')


        fs.open('articles/' + filename + '.html', 'w', (err) => {
        if(err) throw err;
        //file created :)

        fs.appendFile('articles/' + filename + '.html', text.replace('<script>', '&lt;script&gt;').replace('</script>', '&lt;/script&gt;').replace('<iframe', '&lt;iframe').replace('</iframe>', '&lt;/iframe&gt;'), (err) => {
        if(err) throw err;

        });
        });
        //text writed :)

        json = fs.readFileSync('other/articles.json', 'utf8');
        data = JSON.parse(json)

        let name = 'post' + filename
        let data1 = {}
        data1[name] = {"data": '/articles/' + filename + '.html', "descrip": decodeURIComponent(name1).replace('<', '&lt;').replace('>', '&gt;')}
        data_new = Object.assign(data1, data)
        data = JSON.stringify(data_new);


        fs.writeFileSync("other/articles.json", data)
        //file created :)


        response.statusCode = 200;
        response.end();
      }
      else if (request.url.includes('/articles/') == true) {
        list = request.url.split(/articles/)
        file = "articles" + list[1]
        page = fs.readFileSync(file);
        response.end(page)
      }

      else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html; charset=utf-8;");
        response.write("<meta charset='utf-8'><h2>Ошибка 404. Такой страницы не существует.</h2>");
        response.end();
      }
    }
}).listen(3000);

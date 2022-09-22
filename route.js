var express = require('express');
var app = express();
var request = require('request');
var m = require('./extendmodule')
var url = require('url');

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index')
})
//동작. render해서 뭐 html페이지를 렌더링한다던가 하는 메서드가 아니다.
app.get('/translate', function (req, res, next) {
    var query = req.query.text;
    var sourceL = req.query.source;
    var targetL = req.query.target;

    if (!query) {
        res.redirect('http://localhost:3001/')
    } else {
        const obj = {
            api_url: 'https://openapi.naver.com/',
            client_id: '',
            client_secret: '',
        }
        var options = {
            url: obj.api_url,
            form: { 'source': m.exchange(sourceL), 'target': m.exchange(targetL), 'text': query },
            headers: {}
        };
        m.proms(options).then(
            function (value) {
                const obj = JSON.parse(value);
                let translatedText = obj.message.result.translatedText
                res.render('index', {
                    translatedText: translatedText,
                    textareaText: query,
                    source: sourceL,
                    target: targetL,
                });
            }
        )
    }
});

app.listen(3001, () => {
    console.log('server is running at 3001');
})
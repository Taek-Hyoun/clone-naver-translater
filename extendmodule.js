const request = require('request');

function proms(options){
    return new Promise((resolve, reject) => {
        request.post(options, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                translated = body;
                resolve(translated);
            } else {
                res.status(res.statusCode).end();
                console.log('error = ' + res.statusCode);
            }
        });
    })
}
exchange = (target) => {
    switch (target){
        case 'Korea':
            return 'ko';
        case 'English':
            return 'en';
        case 'Japanese':
            return 'ja'
        case 'Chinese':
            return 'zh-CN'
        case 'Russian':
            return 'ru';
        case 'Portuguese':
            return 'pt'; 
        case 'Italian':
            return 'it'; 
        case 'Vietnamese':
            return 'vi'; 
        case 'Thai':
            return 'th'; 
        case 'Indonesian':
            return 'id'; 
        case 'Hindi':
            return 'hd'; 
    }
}
module.exports = {
    proms,
    exchange,
}
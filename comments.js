//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(request, response){
    //parse url
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    //static server
    if(pathname === '/'){
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./index.html', function(err, data){
            response.end(data);
        });
    }else if(pathname === '/addComment'){
        //get data from post method
        var comment = urlObj.query;
        //set comment time
        comment.dateTime = new Date();
        comments.unshift(comment);
        response.end(JSON.stringify(comment));
    }else if(pathname === '/getComments'){
        var str = JSON.stringify(comments);
        response.end(str);
    }else{
        //static server
        staticRoot(pathname, request, response);
    }
});
//static server
function staticRoot(pathname, request, response){
    var staticPath = path.join(__dirname, 'public');
    var filePath = path.join(staticPath, pathname);
    fs.readFile(filePath, function(err, data){
        if(err){
            response.statusCode = 404;
            response.end('404 Not Found');
        }else{
            response.end(data);
        }
    });
}
server.listen(8080);
console.log('visit http://localhost:8080');
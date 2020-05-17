

function requestMethod(s1,s2,s3,callback) {
    var xhr = new XMLHttpRequest();

    xhr.open(s1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + s2);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send(s3);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var res = JSON.parse(xhr.responseText);
            var str = res.data;

            callback(str);
        }
    }
}
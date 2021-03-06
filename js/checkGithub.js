
var neededFiles=['welcome.html',
    'forms.html',
    'css/style.css',
    'css_selectors.html',
    'css/selectors.css',
    'login-form.html',
    'css/login.css',
    'twitter.html',
    'css/twitter.css',
    'media-queries.html',
    'css/media-queries.css',
    'grid-layout.html',
    'css/grid-layout.css',
    'order-pizza.html',
    'inline_js.html',
    'external_js.html',
    'js/external.js',
    'functions_js.html',
    'js/functions.js',
    'conditionals.html',
    'js/conditionals.js',
    'loops.html',
    'js/while.js',
    'js/for_loops.js',
    'js/break_and_continue.js',
    'iterating_arrays_js.html',
    'js/iterating.js',
    'planets-js.html',
    'js/planets-array.js',
    'split-join.html',
    'js/planets-string.js',
    'objects.html',
    'js/objects.js',
    'math-js.html',
    'js/circle.js'
];

var data="";
function iterTree(callback,url,userName,passWord){
    var request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, false);
    request.setRequestHeader("Authorization", "Basic " + btoa(userName + ":" + passWord));
    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data["tree"].forEach(function(item){
                if (item.type ==="blob"){
                    var index = neededFiles.indexOf(item.path);
                    if (index !== -1) neededFiles.splice(index, 1);
                }
            });
        } else {
            console.log('error')
        }
    };
    // Send request
    request.send();
    if(callback !==undefined){
        callback();
    }
}

function checkFiles(){
    var header = document.createElement("h1");
    header.innerText = "Missing Files:";
    document.body.appendChild(header);
    var neededFileList=document.createElement("ul");
    document.body.appendChild(neededFileList);
    console.log(neededFileList);
    if (data !=='') {
        for (var i = 0; i < neededFiles.length; i++) {
            var file = neededFiles[i];
            neededFileList.innerHTML += "<li>" + file + "</li>";
        }
    }else{
        neededFileList.innerHTML="ERROR: Was not able to retrieve data from Github.";
    }
}
function checkGithub() {
    var userName=document.getElementById('userName').value;
    var passWord=document.getElementById('passWord').value;

    var gitUrl = "https://api.github.com/repos/"+userName + "/codeup-web-exercises/git/trees/master?recursive=1";

    iterTree(checkFiles, gitUrl,userName, passWord);
}
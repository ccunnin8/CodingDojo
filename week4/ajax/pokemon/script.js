function ready(fn){
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading" ){
    fn();
  } else {
    document.addEventListener("DOMContentLoaded",fn);
  }
}

function sendAjaxRequest(num,callback){
  var request = new XMLHttpRequest();
  var url = "http://pokeapi.salestock.net/api/v2/pokemon/" + num + "/";
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var { front_default } = data["sprites"];
      callback(front_default);
    } else {
      // We reached our target server, but it returned an error
      console.log("server returned error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("connection error")
  };

  request.send();
  }

function appendImage(img){
  var new_pokemon = document.createElement("img");
  var main = document.getElementsByTagName("main")[0];
  new_pokemon.setAttribute("src",img);
  new_pokemon.setAttribute("class","pokemon");
  main.appendChild(new_pokemon);
}


ready(function(){
  for (var i = 1; i < 151; i++){
    sendAjaxRequest(i,appendImage);
  }
});

$(document).ready(function(){

  //Loops through pokemon number 1 to 151 and displays each pokemon
  //Adds data attribute to the image tag to be used to fetch data from API
  function addPokemons(){
    var url = "http://pokeapi.co/media/img/";
    for (var i = 1; i < 151; i++){
      var img = $("<img>");
      var pokemon = $("div.pokemon");
      img.attr("id",i);
      img.attr("src",url + i + ".png");
      img.data("id",i);
      pokemon.append(img);
    }
  }

  //parses JSON to give array of list items
  function parseStats(array){
    var stats = [];
    for (var i = 0; i < array.length; i++){
      var stat = $("<li></li>");
      stat.text(array[i].stat.name);
      stats.push(stat);
    }
    return stats;
  }

  //when an image is clicked the id is sent to the getPokeData function to retrieve
  //data from poke api
  function clickPokemon(){
    $("img").click(function(){
      var id = $(this).data("id");
      getPokeData(id);
    });
  }

  //gets data, sends stats to get parsed, then sends all data to display method
  function getPokeData(id){
    var url = "http://pokeapi.salestock.net/api/v2/pokemon/" + id;
    $.get(url).done(function(data){
      var { name, height, weight, stats } = data;
      var parsed_stats = parseStats(stats);
      displayPokeData(id, name,height,weight,parsed_stats);
    });
  }

  //displays each item in pokedex
  function displayPokeData(id,name,height,weight,parsed_stats){
    $(".pokedex > * ").show();
    $("#name").text(name);
    $("#sprite").attr("src","http://pokeapi.co/media/img/" + id + ".png");
    for (var i = 0; i < parsed_stats.length; i++){
      $("#types").append(parsed_stats[i]);
    }
    $("#height").text(height);
    $("#weight").text(weight);
  }


  addPokemons();
  clickPokemon();
});

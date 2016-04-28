$(document).ready(function(){

  function math() {
    if(text <= 23) {
      eval = "2";
      $("#evaluation").val(eval);
    }else if (text >= 27 & text <= 43) {
      eval = "3";
      $("#evaluation").val(eval);
    }else if (text >= 48 & text <= 69){
      eval = "4";
      $("#evaluation").val(eval);
    }else if (text > 69 & text <= 100){
      eval = "5";
      $("#evaluation").val(eval);
    }
  };

function ruskiyYazik() {
    if (text <= 23) {
      eval = "2";
      $("#evaluation").val(eval);
    }else if (text >= 36 & text <= 57) {
        eval = "3";
        $("#evaluation").val(eval);
      }else if (text >= 58 & text <= 71) {
        eval = "4";
        $("#evaluation").val(eval);
      }else if (text >= 72 & text <= 100) {
        eval = "5";
        $("#evaluation").val(eval);
      }

    };

    function obschestvoznan() {
      if (text <= 40) {
        eval = "2";
        $("#evaluation").val(eval);
      }else if (text >= 42 & text <= 54){
        eval = "3";
        $("#evaluation").val(eval);
      }else if (text >= 55 & text <= 66){
        eval = "4";
        $("#evaluation").val(eval);
      }else if (text >= 67 & text <= 100){
        eval = "5";
        $("#evaluation").val(eval);
      }

    };

    function physics() {
      if (text <= 32) {
        eval = "2";
        $("#evaluation").val(eval);
      }else if (text >= 36 & text <= 52){
        eval = "3";
        $("#evaluation").val(eval);
      }else if (text >= 53 & text <= 67){
        eval = "4";
        $("#evaluation").val(eval);
      }else if (text >= 69 & text <= 100){
        eval = "5";
        $("#evaluation").val(eval);
      }
    };

    function history() {
      if (text <= 30) {
        eval = "2";
        $("#evaluation").val(eval);
      }else if (text >= 32 & text <= 49){
        eval = "3";
        $("#evaluation").val(eval);
      }else if (text >= 51 & text <= 67){
      eval = "4";
      $("#evaluation").val(eval);
    }else if (text >= 69 & text <= 100){
      eval = "5";
      $("#evaluation").val(eval);
    }
  };

$("#form").submit(function( event ) {
    var predmet = $("#predmet").val(); //берем значение из поля с id #predmet

        // var number = document.getElementById('kolichestvo').value;
    var kolichestvo = parseInt($("#kolichestvo").val()); // берем кол-во первоначальных баллов

var predmeti = {
   "matematica": {1: "4", 2: "8", 3:"12", 4:"15", 5:"19",
                      6:"23",7:"27", 8:"32", 9:"38",
                      10:"43", 11:"48", 12:"53", 13:"59",
                      14:"64", 15:"69", 16:"71", 17:"73", 18:"74",
                      19:"76", 20:"78", 21:"80", 22:"82", 23:"84",
                      24:"85", 25:"87", 26:"89", 27:"91", 28:"93", 29:"95", 30:"96",},

  "ruskiyYazik": {1:"3", 2: "5", 3:"8", 4:"10", 5:"12",
                      6:"15",7:"17", 8:"20", 9:"22",
                      10:"24", 11:"26", 12:"28", 13:"30",
                      14:"32", 15:"34", 16:"36", 17:"38", 18:"39",
                      19:"40", 20:"40", 21:"42", 22:"44", 23:"45",
                      24:"46", 25:"47", 26:"48", 27:"50", 28:"51", 29:"52", 30:"53",
                      31:"54", 32:"56", 33:"57", 34:"58", 35:"59", 36:"60", 37:"62",
                      38:"63", 39:"64", 40:"65", 41:"66", 42:"68", 43:"69", 44:"70",
                      45:"71", 46:"72", 47:"73", 48:"76", 49:"79", 50:"82", 51:"84", 52:"87",
                      53:"90", 54:"92", 55:"95", 56:"98", 57:"100",},

  "obschestvoznan": {1:"3", 2: "5", 3:"7", 4:"9", 5:"11",
                     6:"14", 7:"16", 8:"18", 9:"20", 10:"22",
                     11:"25", 12:"27", 13:"29", 14:"31", 15:"33",
                     16:"36", 17:"38", 18:"40", 19:"42", 20:"44",
                     21:"45", 22:"46", 23:"47", 24:"48", 25:"49",
                     26:"50", 27:"51", 28:"52", 29:"53", 30:"54",
                     31:"55", 32:"56", 33:"57", 34:"58", 35:"59",
                     36:"60", 37:"61", 38:"62", 39:"63", 40:"64",
                     41:"65", 42:"66", 43:"67", 44:"68", 45:"69",
                     46:"70", 47:"71", 48:"72", 49:"74", 50:"76",
                     51:"78", 52:"80", 53:"82", 54:"84", 55:"86",
                     56:"88", 57:"90", 58:"92", 59:"94", 60:"96", 61:"98", 62:"100", },

        "physics": {1:"4", 2: "8", 3:"12", 4:"16", 5:"20",
                    6:"24", 7:"28", 8:"32", 9:"36", 10:"38",
                    11:"39", 12:"40", 13:"41", 14:"42", 15:"43",
                    16:"44", 17:"45", 18:"46", 19:"47", 20:"48",
                    21:"49", 22:"51", 23:"52", 24:"53", 25:"54",
                    26:"55", 27:"56", 28:"57", 29:"58", 30:"59",
                    31:"60", 32:"61", 33:"62", 34:"65", 35:"67",
                    36:"69", 37:"71", 38:"74", 39:"76", 40:"78",
                    41:"80", 42:"83", 43:"85", 44:"87", 45:"89",
                    46:"92", 47:"94", 48:"96", 49:"98", 50:"100"},

          "history": {1:"3", 2: "6", 3:"9", 4:"12", 5:"15",
                      6:"18", 7:"21", 8:"24", 9:"27", 10:"30",
                      11:"32", 12:"34", 13:"35", 14:"36", 15:"38",
                      16:"39", 17:"40", 18:"42", 19:"43", 20:"44",
                      21:"45", 22:"47", 23:"48", 24:"49", 25:"51",
                      26:"52", 27:"53", 28:"54", 29:"56", 30:"57",
                      31:"58", 32:"60", 33:"61", 34:"62", 35:"63",
                      36:"65", 37:"66", 38:"67", 39:"69", 40:"70",
                      41:"71", 42:"72", 43:"75", 44:"78", 45:"80",
                      46:"83", 47:"85", 48:"88", 49:"90", 50:"93",
                      51:"95", 52:"98", 53:"100"}

}
if (isNaN(kolichestvo) || kolichestvo < 1 || kolichestvo > 100) {
    text = "Неверные данные. Введите целое количество правильных ответов от 1 до 100";

}else {
  text = predmeti[predmet][kolichestvo];
}
  $("#summ").val(text);
  event.preventDefault();
  if(predmet === "matematica") {
    math();
    date = "6 июня";
    $("#date").val(date);
  }else if (predmet === "ruskiyYazik") {
    ruskiyYazik();
    date = "30 мая";
    $("#date").val(date);
  }else if (predmet === "obschestvoznan") {
    obschestvoznan();
    date = "8 июня";
    $("#date").val(date);
  }else if (predmet === "physics") {
    physics();
    date = "20 июня";
    $("#date").val(date);
  }else if (predmet === "history") {
    history();
    date = "16 июня";
    $("#date").val(date);
  }

});


});

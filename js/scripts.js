


$(function(){
  $("form#cel").submit(function(){
    event.preventDefault();
    var name = $("input#user").val();
    var age = $("input:radio[name=age]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var candy = $("input:radio[name=candy]:checked").val();
    var ranger = $("input:radio[name=ranger]:checked").val();
    var place = $("#travel").val();

    $("#name").text(name);
    $(".output h1").show();

    if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "red" && place === "North Korea"){
      $("li").hide();
      $("li#9").show();
    }else if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "red" && place === "null"){
      $("li").hide();
      $("li#4").show();
    }else if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "red" && place === "My yard"){
      $("li").hide();
      $("li#6").show();
    }else if ( age === "old" && gender === "female" && candy === "candy2" && ranger === "pink" && place === "North Korea"){
      $("li").hide();
      $("li#3").show();
    }else if ( age === "old" && gender === "male" && candy === "candy3" && ranger === "red" && place === "North Korea"){
      $("li").hide();
      $("li#8").show();
    }else if ( age === "old" && gender === "male" && candy === "candy1" && ranger === "pink" && place === "North Korea"){
      $("li").hide();
      $("li#7").show();
    }else if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "pink" && place === "North Korea"){
      $("li").hide();
      $("li#3").show();
    }else if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "pink" && place === "North Korea"){
      $("li").hide();
      $("li#5").show();
    }else if ( age === "old" && gender === "female" && candy === "candy1" && ranger === "pink" && place === "North Korea"){
      $("li").hide();
      $("li#5").show();
    }
    else{
      $("li").hide();
      $("li#5").show();
    }
  });
});

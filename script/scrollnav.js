var info=[]
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

window.onload = function() {

  var aTop = ($(".people-a").offset().top - $("#about-main-info").offset().top);
  var bTop = ($(".people-b").offset().top - $("#about-main-info").offset().top);
  var cTop = ($(".people-c").offset().top - $("#about-main-info").offset().top);
  var dTop = ($(".people-d").offset().top - $("#about-main-info").offset().top);

  $(".scroll-link-a").click(function(){
    $("#about-main-info").animate({ scrollTop: aTop + "px" });
  });
  $(".scroll-link-b").click(function(){
    $("#about-main-info").animate({ scrollTop: bTop + "px" });
  });
  $(".scroll-link-c").click(function(){
    $("#about-main-info").animate({ scrollTop: cTop + "px" });
  });
  $(".scroll-link-d").click(function(){
    $("#about-main-info").animate({ scrollTop: dTop + "px" });
  });



}


  $(".people-list li").click(function(){
    

    var this_li= $(this)
    var name = this_li[0].innerHTML

    //close name
    if ($(this).hasClass("active")){
      info=[]
      console.log("close")
      $(this).children().remove()
      $(this).removeClass("active");
    }

    //open name
    else {  
      info=[]
      console.log("open")

      $(".people-list li").removeClass("active");
      $(this).addClass("active");
      //bring up text info
      // console.log(this_li, name)
      for (person in execBoard) {

        if (getKeyByValue(execBoard[person], name)) {
          console.log("in exec")
          info.push(execBoard[person].position)
          info.push(execBoard[person].major)
          info.push(execBoard[person].year)
        }
      }
      var node = document.createElement("SPAN");
      var br = document.createElement("BR");
      var textnode = document.createTextNode(info[0]+" "+info[1]);
      var textnode2 = document.createTextNode(info[2]);
      node.appendChild(textnode);
      node.appendChild(br);
      node.appendChild(textnode2);

      $(this).children().remove()
      $(this).append(node)
     
    }
    
  })

  $("#lil-ul li").click(function(){
    $("#lil-ul li").removeClass("switch");
    $(this).addClass("switch");
    });

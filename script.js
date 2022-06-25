function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      var getSeconds = document.querySelector("#seconds");
      var getMinutes = document.querySelector("#minutes");
      var getHour = document.querySelector("#hour");


      getSeconds.style.transform = "rotate("+(6 * new Date().getSeconds()+180) +"deg)";
      getMinutes.style.transform = "rotate("+(0.1 * (time-(new Date().getHours() * 3600))+180) +"deg)";
      getHour.style.transform = "rotate(" + ((1/600) * time +180) + "deg)";

     
      console.log(6 * new Date().getSeconds());
      console.log(0.1 * (time/(new Date().getHours() * 3600)));
      console.log((1/600) *time);
      
      console.log( " ");
  }, 1000);
  
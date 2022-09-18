var currentTimeEl = document.querySelector(".lead");
let eventHour = 0;

setInterval(function() {
currentTimeEl.textContent = moment().format("LLLL");

},
1000);

 var nineAm = moment().hour("9");
 var currentHour = moment().hour();

   

var auditHours = function() {
    
    $("li").each(function(eventHour){
        
        var getEventHour = $(this).attr("id");
        console.log(getEventHour)

        //remove any old classes from element
    $("textarea").removeClass("present");
  
    // apply new class if task is near/over due date
    if (currentHour > getEventHour) {
        $(this).children("textarea").addClass("past");
        console.log("past")

      }
      else if (currentHour < (getEventHour)) {
        $(this).children("textarea").addClass("future");
        console.log("future")
      }  
      else {
        $(this).children("textarea").addClass("present");
        console.log("present")
      }  
      eventHour++     

    })
    
  };

  // event  listener for save button

  $(".saveBtn").on("click",function() {
    //send event and time to local storage
    var eventName = $(this).siblings("textarea").val();
    console.log(eventName);
    var blockTime = $(this).parent().attr("id");
    console.log(blockTime);

   //save in localStorage
   localStorage.setItem(JSON.stringify(eventName), blockTime);
   console.log("saved")
  });
  
  setInterval(function() {
    //$(".time-block").each(function() {
      auditHours($(this));
    //});
  }, 1800000);

  auditHours();
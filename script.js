$("#dashboard,#form").hide();
$("#user").show();

$("#userBtn").on("click", function () {
    $("#dashboard, #form, #tables, #charts, #icons, ").hide();
    $("#user").show();
  });
  
  $("#dashboardBtn").on("click", function () {
    $("#user, #form").hide();
    $("#dashboard").show();
  });
  
  $("#formBtn").on("click", function () {
    $("#dashboard,#user").hide();
    $("#form").show();
  });

// it can be done in this way too

// very long code

// $("#user").show();
// $("#dashboard").hide();
// $("#form").hide();

// $("#userBtn").on("click",function(){
//     $("#user").show();
//     $("#dashboard").hide();
//     
// })

// $("#dashboardBtn").on("click",function(){
//     $("#user").hide();
//     $("#dashboard").show();
//     $("#form").hide();
// })


// $("#formBtn").on("click",function(){
//     $("#user").hide();
//     $("#dashboard").hide();
//     $("#form").show();
// })

// $("#dashboard,#user,#admin").hide();




// long code

// $("#userBtn").on("click", function () 
// {
//     if ($("#user").hasClass("hidden")) 
//     {
//       $("#user").removeClass("hidden");
//     }

//     else {
//         $("#user").addClass("hidden");
//     }
// });



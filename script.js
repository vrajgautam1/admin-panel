let visibles = false;

function sidebarCustom(){
  visibles = !visibles;
    if(visibles == false){
          $("#content").css("width","80%");
          $("#sidebar").css("width","20%");
          $("nav").css("width","80%");
    }else{
      $("#content").css("width","100%");  
      $("nav").css("width","100%");  
    }
}

$("#content>div").hide();
$("#dashboard").show();

$("#sidebar button").on("click", function(){
  $("#content>div").hide();
  $($(this).attr("for")).show();
})


$("#hamburger").on("click", function(){
  $("#sidebar").toggle(10,function(){
      sidebarCustom();
  });
})

$("#form").hide();
$("#form-link").on("click", function(){
  $("#form").toggle();
})


//--------------------------------------- Charts ---------------------------------------//

var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//   _________________________________


var options = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
 
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

////////////////////////-----------charts in charts section-------------/////////////////////////////





$(".counter").counter({
  autoStart: true,           // true/false, default: true
  duration: 5000,             // milliseconds, default: 1500
  countFrom: 10,              // start counting at this number, default: 0
  countTo: 30,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: "?",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
                              // for all available effects, see visual examples:
                              // http://easings.net
                              // default: "easeOutQuad"
  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
});

//---------------------------------- Calendar---------------------------//

var calendarInstance1 = new calendarJs( "calendar", {
  manualEditingEnabled: true
  // All your options can be set here
} );


  calendarInstance1.setOptions( {
      // manualEditingEnabled: false,
      views: {
          fullMonth: {
              maximumEventsPerDayDisplay: 0
          }
      },
      visibleDays: [ 0, 1, 2, 3, 4 ]
  } );


































// $("#dashboard,#form").hide();
// $("#user").show();

// $("#userBtn").on("click", function () {
//     $("#dashboard, #form, #tables, #charts, #icons, #uielements, #authentication, #pages, #").hide();
//     $("#user").show();
//   });
  
//   $("#dashboardBtn").on("click", function () {
//     $("#user, #form").hide();
//     $("#dashboard").show();
//   });
  
//   $("#formBtn").on("click", function () {
//     $("#dashboard,#user").hide();
//     $("#form").show();
//   });

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



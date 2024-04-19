
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


  
function billFor(month, activeSubscription, users) {

  if(activeSubscription == undefined || activeSubscription == null)
    //may be undefined or null
    return 0
  if(users.length == 0)
    //may be empty but not null or undefined
    return 0
  //loop through users to see if they were active during the month given
  let activeUsersCount = 0;
  let totalDaysActive = 0;
  for (let i = 0; i<users.length;i++) {
    if(users[i].deactivatedOn == null) {
      //we will have a number to multiply the rates against
      activeUsersCount++;
      //test if users have deactivated in the middle of the month
    }

  }

}

/*******************
* Helper functions *
*******************/

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
  nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

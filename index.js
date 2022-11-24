// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
   const newDrivers = [drivers[0],drivers[1]]
    return newDrivers
}

const returnLastTwoDrivers = function (drivers){
    const newDrivers = [drivers[2],drivers[3]]
     return newDrivers
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
return function(fare)
{
    return fare*5
}}

const fareDoubler=function(fare){
return fare*2
}

const fareTripler = function(fare){
    return fare*3
}

function selectDifferentDrivers(drivers,fn){
if(fn===returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers) 
}
else if(fn===returnLastTwoDrivers){
  return  returnLastTwoDrivers(drivers)
}
}


function scuberGreetingForFeet(distance){
  // Write your code here!

if(distance <=400){
   return "This one is on me!"
}
else if(distance >2000 && distance <2500){
  return "I will gladly take your thirty bucks."
}else{
  return 'No can do.'
}


}


function ternaryCheckCity(city){
//   // Write your code here!
// //  if(city ==="NYC"){
// //    return 'Ok, sounds good.'
// //  }
// //  else{
// //    return 'No go.'
//  }
  return city ==="NYC"?'Ok, sounds good.':'No go.'

  
}


function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
    case tip ="generous":
      return 'Thank you so much.'
      break
    case tip = "not as generous":
      return 'Thank you.'
    break
    case tip = "thanks for everything":
      return 'Bye.'
  }
}
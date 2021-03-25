function getGrade(marks){


if(marks>=80){
  return"A" ; 
}
else if(marks<=70 >=79){
    return "B";

}

else if(marks<=60<=69){
  return"C" ;
}
 else if(marks<=50>=59){
    return"D"; 

}

else if (marks<=40>=49){
    return"E";


}

else if (marks<=0>=40){
    return"marks is greater than 40";

}
else{
return"F is anything"
}

}


console.log(getGrade(88));

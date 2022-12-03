function countHours(year, holidays) {
  let aux=0;  
  holidays.forEach(element => {    
    let dateObject = new Date(`${year},${element.split("/")[0]},${element.split("/")[1]}`);    
    if ( dateObject.getDay()>0 && dateObject.getDay()<6){
      aux=aux+1;
    }
  });  
  return aux*2;
}
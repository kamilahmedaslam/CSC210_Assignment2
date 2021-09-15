var chmodDecValue=0;
const chmodSymbol = new Array(9);

function chmodResult() {
  
  if (document.getElementById("ownerRead").checked == true) {chmodDecValue+=400; chmodSymbol[0] = 'r';} else{chmodSymbol[0]='-'}
  if (document.getElementById("ownerWrite").checked == true) {chmodDecValue+=200; chmodSymbol[1]='w';} else{chmodSymbol[1]='-'}
  if (document.getElementById("ownerExecute").checked == true) {chmodDecValue+=100; chmodSymbol[2]='x';} else{chmodSymbol[2]='-'}
  
  if (document.getElementById("groupRead").checked == true) {chmodDecValue+=40; chmodSymbol[3]='r';} else{chmodSymbol[3]='-'}
  if (document.getElementById("groupWrite").checked == true) {chmodDecValue+=20; chmodSymbol[4]='w';} else{chmodSymbol[4]='-'}
  if (document.getElementById("groupExecute").checked == true) {chmodDecValue+=10; chmodSymbol[5]='x';} else{chmodSymbol[5]='-'}
  
  if (document.getElementById("publicRead").checked == true) {chmodDecValue+=4; chmodSymbol[6]='r';} else{chmodSymbol[6]='-'}
  if (document.getElementById("publicWrite").checked == true) {chmodDecValue+=2; chmodSymbol[7]='w';} else{chmodSymbol[7]='-'}
  if (document.getElementById("publicExecute").checked == true) {chmodDecValue+=1; chmodSymbol[8]='x';} else{chmodSymbol[8]='-'}

  document.getElementById("chmodDecimal").value = chmodDecValue;
  var symb = chmodSymbol.join('')
  document.getElementById("chmodSymbol").value = symb;
  

  chmodDecimal.style.display = 'block'
  chmodDecValue =0;
  chmodSymbol.style.display = 'block'

  
  
}

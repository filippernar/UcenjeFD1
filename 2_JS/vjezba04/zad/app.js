
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;



  if(zadatak==='2'){
const x =Number(a)
if(!x){
  rezultat.innerHTML='A nije broj'
  return
}
const y = Number(b)
if(!y){
  rezultat.innerHTML='B nije broj'
  return
}
const z = Number(c)
if(!z){
  rezultat.innerHTML='C nije broj'
  return
}

if(x<y&&x<z){
  rezultat.innerHTML=x
}else if(y<x&&y<z){
  rezultat.innerHTML=y
}else if(y<x&&y<z){
  rezultat.innerHTML=z
}








    return;
  }



  //zadatak 3

  if (zadatak === '3') {
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const w = Number(d);

    if (isNaN(x)) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }
    if (isNaN(y)) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }
    if (isNaN(z)) {
      rezultat.innerHTML = 'C nije broj';
      return;
    }
    if (isNaN(w)) {
      rezultat.innerHTML = 'D nije broj';
      return;
    }

    // Ovdje izračunaj npr. sumu ili najveći broj
    let suma = x + y + z + w;
    rezultat.innerHTML = `Suma četiri broja je: ${suma}`;

    return; // Obavezno dodaj return da ne ide na "Nepoznati zadatak"
  } // <--- SAMO OBIČNA ZAGRADA (zatvara IF)
    
   //const rezultat = document.getElementById('rezultat');


if(zadatak === '5') {
  console.log('Rješavam zadatak 5');
//Zbroj većih brojeva (A i B)+(C i D)
const x = Number(a);
const y = Number(b);
const z = Number(c);
const q = Number(d)


if(!x || !y || !z || !q){
    rezultat.innerHTML = 'Jedno od unosnih polja nije broj';
}


if(x>y && z>q){
  rezultat.innerHTML=x+z;
}
else if(x>y && q>z){
  rezultat.innerHTML=x+q;
}
else if (y > x && z > q) {
    rezultat.innerHTML = y + z;
}
else if (y > x && q > z) {
    rezultat.innerHTML = y + q;
}

  return;
}


if(zadatak === '6'){

//Za upisani broj u polju D ispiši deset puta veći broj

const x = Number(d);
    if (!x || x === 0) {
        rezultat.innerHTML = 'Vrijednost u polju D nije broj ili je 0';
        return;
    }
    rezultat.innerHTML = x * 10;
    return;
}

if(zadatak === '7'){
//Za uneseno ime grada u polju B ispiši je li sjedište Edunove ili ne
  if(!b){
    rezultat.innerHTML='Obavezno unos grada pod B'
    return;


  }
if(b.toLowerCase() === 'osijek'){
  rezultat.innerHTML=`${b} je sjedište Edunove`
  
}
else {
  rezultat.innerHTML=`${b} nije sjedište Edunove`
}




  return;
}

if(zadatak === '8'){
//Za upisane pojmove u polju A i B ispiši ih jedno pokraj drugog

rezultat.innerHTML=`${a} ${b}`


    return
}

if(zadatak === '9'){
  const x=Number(a)
  const y=Number(b)
  if(!x || x===0){
    rezultat.innerHTML='greška'
    return
  }
  if(!y || y===0){
    rezultat.innerHTML='greška'
    return
  }
  rezultat.innerHTML=x*y

  //Ispiši umnožak broja A i D



  return

}

  










  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);

    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj';
      return; 
    }

    const y = Number(a);
    if(!y){
      rezultat.innerHTML='B nije broj';
      return; 
    }

    if(x>y){
      rezultat.innerHTML=x;
    }else if(y>x){
      rezultat.innerHTML=y;
    }else{
      rezultat.innerHTML='A i B su isti';
    }
    
    if(a>b){
      rezultat.innerHTML=a;
    }else{
      rezultat.innerHTML=b;
    }
    
    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak

  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
}); 




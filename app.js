 let a = 0
 
 const main = document.getElementById("root")
//let plus = document.createElement("plus")
    
    main.style.color = "white"
    main.style.textAlign = "center"
    main.style.backgroundColor = "black"
    main.style.position = "absolute"
    main.style.top = "30%"
    main.style.left = "45%"
    main.style.width = "100px"
    main.style.height = "30px"
    main.style.height = "100px"
    main.style.display = "flex"
    main.style.alignItems = "center"
    main.style.justifyContent = "center"
    main.style.borderRadius = "50%"

    
const plus = document.createElement("div");
plus.innerHTML = "Плюс";
document.body.append(plus);

    plus.style.textAlign = "center"
    plus.style.backgroundColor = "black"
    plus.style.display = "flex"
    plus.style.color = "white"
    plus.style.position = "absolute"
    plus.style.top = "45%"
    plus.style.left = "30%"
    plus.style.width = "100px"
    plus.style.height = "30px"
    plus.style.height = "100px"
    plus.style.display = "flex"
    plus.style.alignItems = "center"
    plus.style.justifyContent = "center"
    plus.style.borderRadius = "50%"

    const minus = document.createElement("div");
minus.innerHTML = "минус";
document.body.append(minus);

    minus.style.textAlign = "center"
    minus.style.backgroundColor = "black"
    minus.style.display = "flex"
    minus.style.color = "white"
    minus.style.position = "absolute"
    minus.style.top = "45%"
    minus.style.left = "60%"
    minus.style.width = "100px"
    minus.style.height = "30px"
    minus.style.height = "100px"
    minus.style.display = "flex"
    minus.style.alignItems = "center"
    minus.style.justifyContent = "center"
    minus.style.borderRadius = "50%"

    const magic = document.createElement("div");
magic.innerHTML = "магия";
document.body.append(magic);

    magic.style.textAlign = "center"
    magic.style.backgroundColor = "black"
    magic.style.display = "flex"
    magic.style.color = "white"
    magic.style.position = "absolute"
    magic.style.top = "60%"
    magic.style.left = "45%"
    magic.style.width = "100px"
    magic.style.height = "30px"
    magic.style.height = "100px"
    magic.style.display = "flex"
    magic.style.alignItems = "center"
    magic.style.justifyContent = "center"
    magic.style.borderRadius = "50%"
    
   
    

   
    
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

plus.onclick = function() {
    a++;
    main.textContent = a;
     return console.log(a);
  }

  minus.onclick = function() {
    a--;
    main.textContent = a;
     return console.log(a);
  }


  magic.onclick = function() {
  
    let rndCol = createRandomRgb();
    let rndCol1 = createRandomRgb()
    let rndCol2 = createRandomRgb()
    magic.style.backgroundColor = rndCol1;
    document.body.style.backgroundColor = rndCol;
    minus.style.backgroundColor = rndCol1;
    plus.style.backgroundColor = rndCol1;
    main.style.backgroundColor = rndCol1;
    main.style.color = rndCol2;
    plus.style.color = rndCol2
    minus.style.color = rndCol2
    magic.style.color = rndCol2
  }
  function createRandomRgb(){
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    
  }

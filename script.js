function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  
  }
  
  function addNewEQField() {
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");
  
    eqOb.insertBefore(newNode, eqAddButtonOb);
  
  }
  
  function addNewSKField(){
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");
  
    skOb.insertBefore(newNode, skAddButtonOb);
  
  }
  
  function generateCV(){
  
    let nameField = document.getElementById("nameField").value;
  
    let nameT1 = document.getElementById("nameT1");
  
    nameT1.innerHTML = nameField;
  
    // direct
  
    document.getElementById("nameT2").innerHTML = nameField;
  
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
  
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
  
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
  
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;
  
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
  
    // about
  
    document.getElementById("aboutT").innerHTML = document.getElementById("aboutField").value;
  
    // we
  
    let wes = document.getElementsByClassName("weField")
  
    let str = '';
  
    for(let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }
  
    document.getElementById('weT').innerHTML = str;
  
    // eq 
  
    let eqs = document.getElementsByClassName("eqField")
  
    let str1 = '';
  
    for(let e of eqs) {
      str1 = str1 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("eqT").innerHTML = str1;
  
    // sk
  
    let sks = document.getElementsByClassName("skField")
  
    let str2 = '';
  
    for(let e of sks) {
      str2 = str2 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("skT").innerHTML = str2;
  
    // setting image
  
    let file = document.getElementById('imgField').files[0];
  
    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    // setting the image 
  
    reader.onloadend = function () {
      document.getElementById('imgTemplate').src = reader.result;
    }
  
    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'
  
  }
  
  // print cv 
  function printCV() {
    window.print();
  }
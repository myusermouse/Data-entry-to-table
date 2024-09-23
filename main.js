let nameIn = document.getElementById('box1'),
    rollIn = document.getElementById('box2'),
    bTn = document.getElementById('btn');
    
 bTn.onclick = function(){
     let dataTable = document.getElementById('data-table');
     
     dataTable.style.display = "block";
     
     
     let tableD = document.getElementById('show-table');
     let newTr = document.createElement('tr');
     
     tableD.appendChild(newTr);
     let newTd = document.createElement('td');
     newTr.appendChild(newTd);
     newTd.innerHTML = nameIn.value;
     
     let newrollTd = document.createElement('td');
     newTr.appendChild(newrollTd);
     newrollTd.innerHTML = rollIn.value;
     
     
     nameIn.value = "";
     rollIn.value = "";
 } 
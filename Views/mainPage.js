function show(){
   
    let html = '';

    html += `<div class="mainPage ">
               

                <div class="header"> ${headerView()}  <select onchange="selectMode(this.value)">
                    <option>none</option>
                    <option>dark</option>
                    <option>light</option>
                </select>
                </div>
        	    <div class="menu"> ${menuView()}</div>
                <div class="content">${model.view}</div>
              
    
    </div>`

    appDiv.innerHTML = html
}
function selectMode(theme){

model.lightMode = theme;
show()

}
function show(){
    let html = '';

    html += `<div class="mainPage">

                <div class="header"> ${headerView()}</div>
        	    <div class="menu"> ${menuView()}</div>
                <div class="content">${model.view}</div>
              
    
    </div>`

    appDiv.innerHTML = html
}
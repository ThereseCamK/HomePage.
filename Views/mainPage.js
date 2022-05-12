function show(){
   
    let html = '';
    let selectedLightMode = model.lightMode === 'light' ? '': 'lightSelected';
    let selectedDarkMode = model.lightMode ==='dark'? '': 'darkSelected'
    html += `<div class="mainPage ">
               

                <div class="header"> ${headerView()}  
                <div class="mode ${selectedLightMode}" onclick="selectMode(this.innerHTML)">dark</div>
                <div class="mode ${selectedDarkMode}" onclick="selectMode(this.innerHTML)">light</div>
               
                </div>
        	    <div class="menu"> ${menuView()}</div>
                <div class="content">${model.view}</div>
              
    
    </div>`

    appDiv.innerHTML = html
}
function selectMode(theme){

model.lightMode = theme;

updateView();

}
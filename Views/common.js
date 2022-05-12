updateView()
function updateView(){
    if(model.currentpage == 'about') aboutView()
    if(model.currentpage == 'home') mainView()
    if(model.currentpage == 'cv') cvView()
    if(model.currentpage == 'projects') projectsView()

}

function changePage(page){
   
    model.currentpage = page; 
    updateView()
}
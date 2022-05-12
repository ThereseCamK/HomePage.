function projectsView(){
    let aboutHeadLineLightMode = model.lightMode === 'light' ? 'aboutHeadLineLight': '';
    model.view = `<div><h2  class="projectsHeader ${aboutHeadLineLightMode}">Noen av prosjektene jeg har laget eller holdt på med </h2></div>

    ${model.prosjects.map(p => `  <div class="projectsView"><h2>${p.name}</h2> <p>${p.info}</p> <a href="${p.linkToPage}">Link til prosjektet</a> </div>`).join('')}
    `
    
    show();
}
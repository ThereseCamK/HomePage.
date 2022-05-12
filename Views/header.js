function headerView(){
    let lightModeHeader = model.lightMode === 'dark' ? '': 'headerViewLight';
    return `<div class="headerView ${lightModeHeader}">
            <h3>Velkommen Til Therese Camilla Sin Hjemme side</h3>
            <tt>IT- og nøkkelkompetanse lærer</tt>
    </div>`
}
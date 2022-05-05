function cvView(){
    model.view = ` <div class="mainContentCV"> <h4>CV</h4>
    ${mainCv()}
     <h4>Nøkkelkvalifikasjoner</h4>
     ${getKeyQualifications()}
     <hr>
     <h4>Utdanning & Arbeidserfaring</h4>
         ${getEducationTable()}
         ${getWorkExperienceTable()}
         <hr>
     <h4>Annen Kompetanse</h4>
  
     <p>    HMS- Verneombud <br>IK-Matkurs<br>IMO 60 Kurs 2012<br>Salgskurs 2012</p>
      </div>
`;
    show()
}

function mainCv(){
    let cv = model.cvInfo;
let html = ` <table class="mainCV">
                 <tr><td>Navn:</td><td>${cv.name}</td></tr>
                 <tr><td>Adresse:</td><td>${cv.address} </td></tr>
                 <tr><td>Telefon:</td><td>${cv.phone} </td></tr>
                 <tr><td>Epost:</td><td>${cv.email} </td></tr>
                 <tr><td>Født:</td><td>${cv.born} </td></tr>
                 <tr><td>Sivilstand:</td><td>${cv.maritalStatus} </td></tr>
                 <tr><td>Språk:</td><td>${cv.language} </td></tr>
                 <tr><td>Interesser:</td><td>${cv.hobbys} </td></tr>
           </table>`;
return html;
}

function getKeyQualifications(){
let html = '<ul class="qualifications">';
for(let i =0; i< model.keyQualifications.length; i++){
    html += `<li>${model.keyQualifications[i]}</li>`
}
html += '</li>';

    return html;
}

function getEducationTable(){
let html = '<table class="educationCV"> <tr><th>År</th><th>Utdannings sted</th></tr>'
    for (let i = 0; i < model.education.length; i++){
        html += `<tr><td><b>${model.education[i].year}</b></td>
                        <td><b>${model.education[i].place}</b><br><p>${model.education[i].description}</p><br></td>
                    </tr>`
    }
    html += '</table>';
    return html;

}

function getWorkExperienceTable(){
let html = '<table class="workExperienceVC" <tr><th>År</th><th>Arbeidsted</th></tr>'
    for(let i = 0; i <model.workExperience.length; i++){
        html += `<tr><td><b>${model.workExperience[i].year}</b></td>
                        <td><b>${model.workExperience[i].place}</b><br><p>${model.workExperience[i].title}<br>${model.workExperience[i].description}</p></td>
                    </tr>`
    }
    html += '</table>'
    return html;
}
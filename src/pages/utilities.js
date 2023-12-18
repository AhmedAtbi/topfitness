
export const formatDate = (dateString) => {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const date = new Date(dateString);

    const day = ("0" + date.getDate()).slice(-2); // Adds leading zero if needed
    const month = months[date.getMonth()]; // getMonth() returns 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
export const formatFormDataRenew = ({ echeance, listEcheance, cheque, listCheque, codeAdherent, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName }) => {
    let today = new Date();

    let listEch = '';
    if (echeance) {
        listEch = '<strong>Date des echéances :</strong><br/>';
        listEcheance.forEach(item => {
            listEch += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: black;">&#9745;</span>${item.value} DT dû pour le : ${formatDate(item.date)} <br/>`;;
        });
    }
    let chequeDetails = '';
    if (cheque) {
        chequeDetails = '<strong>Détails des chèques transmis:</strong><br/>';
        listCheque.forEach(item => {
            chequeDetails += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: black;">&#9745;</span>N° chèque : ${item.value} dû pour le ${formatDate(item.date)} <br/>`;;
        });
    }

    return `
         <div style="padding: 20px; font-family: Arial, sans-serif; border-radius: 3px;">
    <h2 style="margin: 0; position: absolute; top: 0; right: 45px; white-space: normal; word-break: break-word; text-align: left;">Formulaire </h2>
    <h2 style="margin-botton: 20px; position: absolute; top: 20px; right: 0; white-space: normal; word-break: break-word; text-align: left;">de renouvellement</h2>

           
    <div style="text-align: right;margin-top:50px">
        <strong>Date:</strong> ${today?.toLocaleDateString()}
    </div>
</div>
 <div style="margin-bottom: 10px;">
        <strong>Code de l'adhérent:</strong> ${codeAdherent}
    </div>
 <div style="margin-top: 10px; margin-bottom: 10px;">
                <strong>Nom et prénom de l'adhérent:</strong> ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
            </div>
           
            <div style="margin-bottom: 10px;">
                <strong>Type d'Abonnement:</strong> ${abonnement}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Date Debut:</strong> ${formatDate(dateDebut)}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Date Fin:</strong> ${formatDate(dateFin)}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Tarif:</strong> ${tarif} 
            </div>

            <div style="margin-bottom: 10px;">
                <strong>méthode de payement:</strong> ${espece ? 'Somme payée en espèce : ' + sommeEspece : cheque ? 'Cheque' : 'Autre'}
            </div>

            ${cheque ? chequeDetails : ''}
           
            ${cheque ? `
                <div style="margin-bottom: 10px;">
                    <strong>Banque:</strong> ${banque}
                </div>
            ` : ''}

            <div style="margin-bottom: 10px;">
                <strong>Echéances:</strong> ${echeance ? 'Oui' : 'Non'}
            </div>
            ${echeance ? listEch : ''}

              
            
           <div style= "display: flex; alignItems: center; gap: 220px;margin-top:40px" }}>
            <div >
                <strong>Signature de l'agent ${agentLasttName} ${agentFirstName}
                </label>
            </div>
              <div >
                <strong>Signature de l'adhérent  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
                </strong>
            </div>
            </div>



          
        </div>
    `;
}
export const formatFormDataSubscription = ({ emergencyPhone, fullPhoneNumber, codePostal, adresse, profession, ville, lieuDeNaissance, dateDeNaissance, echeance, listEcheance, cheque, listCheque, hasCIN, identifier, hasPassport, isFirstRegistration, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName }) => {
    let today = new Date();
    let listEch = '';
    if (echeance) {
        listEch = '<strong>Date des echéances:</strong><br/>';
        listEcheance.forEach(item => {
            listEch += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: black;">&#9745;</span>${item.value} DT dû pour le : ${formatDate(item.date)} <br/>`;
        });
    }
    let chequeDetails = '';
    if (cheque) {
        chequeDetails = '<strong>Détails des chèques transmis:</strong><br/>';
        listCheque.forEach(item => {
            chequeDetails += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: black;">&#9745;</span>N° chèque : ${item.value} dû pour le : ${formatDate(item.date)}  <br/>`;
        });

    }
    const identifierInfo = hasCIN ? `<div style="margin-bottom: 10px;"><strong>N° CIN:</strong> ${identifier}</div>`
        : hasPassport ? `<div style="margin-bottom: 10px;"><strong>N° Passeport:</strong> ${identifier}</div>`
            : '';

    return `
       <div style="padding: 20px; font-family: Arial, sans-serif; border-radius: 3px;">
    <h2 style="margin: 0; position: absolute; top: 0; right: 10px; white-space: normal; word-break: break-word; text-align: left;">Formulaire </h2>
    <h2 style="margin-botton: 20px; position: absolute; top: 20px; right: 0; white-space: normal; word-break: break-word; text-align: left;">d'inscription</h2>

            <div style="margin-bottom: 10px;margin-top:100px">
                <strong>Nom et prénom de l'adhérent:</strong> ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
            </div>
            <div style="margin-bottom: 10px;">
           ${identifierInfo}
           </div>
            <div style="margin-bottom: 10px;">
                <strong>1ère inscription:</strong> ${isFirstRegistration ? "<input style='display: none;' type='checkbox' checked><span style='font-size: 18px; color:black;'> &#9745;</span> Oui (30dt frais d'inscription)" : "<input type='checkbox' disabled> Non"}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Type d'Abonnement:</strong> ${abonnement}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Date de debut:</strong> ${formatDate(dateDebut)}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Date de fin:</strong> ${formatDate(dateFin)}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Tarif:</strong> ${tarif} DT
            </div>

            <div style="margin-bottom: 10px;">
                <strong>méthode de payement:</strong> ${espece ? 'Somme payée en espèce : ' + sommeEspece + " DT" : cheque ? 'Cheque' : 'Autre'}
            </div>

            ${cheque ? chequeDetails : ''}

            ${cheque ? `
                <div style="margin-bottom: 10px;">
                    <strong>Banque:</strong> ${banque}
                </div>
            ` : ''}

             <div style="margin-bottom: 10px;">
                <strong>Echéance:</strong> ${echeance ? 'Oui' : 'Non'}
            </div>
            ${echeance ? listEch : ''}
             
            
          
            <div style="margin-bottom: 10px;">
                <strong>Date de Naissance:</strong> ${formatDate(dateDeNaissance)}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Lieu de Naissance:</strong> ${lieuDeNaissance}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Ville:</strong> ${ville}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Profession:</strong> ${profession}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Adresse:</strong> ${adresse}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Code Postal:</strong> ${codePostal}
            </div>

            <div style="margin-bottom: 10px;">
                <strong>Téléphone:</strong> ${fullPhoneNumber}
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Téléphone d'urgence:</strong> ${emergencyPhone}
            </div>

              <div style="margin-bottom: 10px;">
                <strong>Je sous signe,  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}</strong> <br/><br/>
                <stong style="margin-top:10px;">.</strong> <label style="margin-top:10px;">Atteste sur l'honneur que je ne présente aucune contre-indiction à la pratique des activités sportives et de remise en forme et déclare être en excellete santé.
                Par conséquent, je ne pourrais en aucun cas me retourner juridiquement contre le club Top Fit'ness Hammamet en cas de problème.
                </label>
            </div>
            <div style="margin-bottom: 10px;">
                <stong>.</strong><label> Je déclare avoir pris connaissance du règlement intérieur de la salle de sport Top Fit'ness et je m'engage à le respecter
                </label>
            </div>
             <div style="margin-bottom: 20px; margin-left: 430px">
                <strong>. Hammamet le ${today?.toLocaleDateString()}
                </strong>
            </div>
            <div style= "display: flex; alignItems: center; gap: 220px;" }}>
            <div >
                <strong>Signature de l'agent ${agentLasttName} ${agentFirstName}
                </label>
            </div>
              <div >
                <strong>Signature de l'adhérent  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
                </strong>
            </div>
            </div>



          
        </div>
    `;
};

export const clearInput = (/* setState functions */) => {
    // Implementation of clearInput
};


export const checkListEmpty = (list) => {
    return list.some(item => !item.value || !item.date);
};
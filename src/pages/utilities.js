import dayjs from "dayjs";

export const formatDate = (dateString) => {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const date = new Date(dateString);

    const day = ("0" + date.getDate()).slice(-2); // Adds leading zero if needed
    const month = months[date.getMonth()]; // getMonth() returns 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const prepareOutput = ({ echeance, listEcheance, cheque, listCheque, espece, sommeEspece }) => {
    let listEch = '';
    let paymentDetails = '';

    if (espece) {
        paymentDetails = `<span style="font-size: 18px; color: green;">Paiement en espèce ${sommeEspece} DT </span></span><br/>`;
    }

    if (echeance) {
        listEch = '<span style="color: red;">Echéance</span><br/>';
        listEcheance.forEach(item => {
            listEch += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: red;">&#9745; </span><span style="color: red;margin-bottom:5px;">${item.value} DT le ${formatDate(item.date)}</span>`;
        });
    }

    let chequeDetails = '';
    if (cheque) {
        chequeDetails = '<span style="color: blue;">Chèques</span><br/>';
        listCheque.forEach(item => {
            chequeDetails += `<input type="checkbox" checked style="display: none;" />
<span style="font-size: 18px; color: blue;">&#9745;</span> <span style="color: blue;margin-bottom:5px;">N°: ${item.value}  Somme: ${item.somme} DT Le ${formatDate(item.date)}</span> `;
        });
    }
    return { listEch, chequeDetails, paymentDetails }
}
export const formatFormDataRenew = ({ echeance, listEcheance, cheque, listCheque, codeAdherent, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName }) => {
    let today = new Date();

    let { chequeDetails, listEch, paymentDetails } = prepareOutput({ echeance, cheque, listCheque, listEcheance, espece, sommeEspece })
 
    return `
         <div style="padding: 20px; font-family: Arial, sans-serif; border-radius: 3px;">
    <h2 style="margin: 0; position: absolute; top: 0; right: 45px; white-space: normal; word-break: break-word; text-align: left;">Formulaire </h2>
    <h2 style="margin-botton: 20px; position: absolute; top: 20px; right: 0; white-space: normal; word-break: break-word; text-align: left;">de renouvellement</h2>

           
    <div style="text-align: right;margin-top:40px">
        Date:<strong> ${today?.toLocaleDateString()} </strong> 
    </div>
</div>
 <div style="margin-bottom: 10px;">
        Code de l'adhérent:<strong> ${codeAdherent} </strong>
    </div>
 <div style="margin-top: 10px; margin-bottom: 10px;">
               Nom et prénom de l'adhérent:  <strong>${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName} </strong>
            </div>
           
            <div style="margin-bottom: 10px;">
                Type d'Abonnement: <strong> ${abonnement} </strong>
            </div>

            <div style="margin-bottom: 10px;">
                Date Debut: <strong> ${formatDate(dateDebut)} </strong>
            </div>

            <div style="margin-bottom: 10px;">
                Date Fin:<strong> ${formatDate(dateFin)} </strong>
            </div>

            <div style="margin-bottom: 10px;">
                Tarif:<strong> ${tarif} </strong>
            </div>


            <div style="margin-bottom: 7px;">
                Mode de paiement:<br/>  <strong> ${paymentDetails}  </strong>
            </div>

         ${cheque ? `
            <strong>  ${chequeDetails} </strong>
                    <div style="margin-bottom: 5px;"> 
                    Banque:<strong> ${banque} </strong>
                    </div>
            ` : ""}

           <strong>  ${echeance ? listEch : ""} </strong>
   
            <div style= "display: flex; alignItems: center; gap: 250px;margin-top:8px" }}>
                <div >
                <strong>Signature de l'agent <br/> ${agentLasttName} ${agentFirstName} </strong>
               
                </div>
                <div >
                <strong>Signature de l'adhérent <br/>  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
                </strong>
                </div>
            </div>
          
        </div>
    `;
}
export const formatFormDataSubscription = ({ nomUrgence, emergencyPhone, fullPhoneNumber, codePostal, adresse, profession, ville, lieuDeNaissance, dateDeNaissance, echeance, listEcheance, cheque, listCheque, hasCIN, identifier, hasPassport, isFirstRegistration, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName }) => {
    let today = new Date();
    let { chequeDetails, listEch, paymentDetails } = prepareOutput({ echeance, cheque, listCheque, listEcheance, espece, sommeEspece })


    const identifierInfo = hasCIN ? `<div style="margin-bottom: 10px;">N° CIN: <strong> ${identifier} </strong> </div>`
        : hasPassport ? `<div style="margin-bottom: 10px;">N° Passeport: <strong> ${identifier} </strong></div>`
            : '';

    return `
       <div style="padding: 20px; font-family: Arial, sans-serif; border-radius: 3px;">
    <h2 style="margin: 0; position: absolute; top: 0; right: 10px; white-space: normal; word-break: break-word; text-align: left;">Formulaire </h2>
    <h2 style="margin-botton: 20px; position: absolute; top: 20px; right: 0; white-space: normal; word-break: break-word; text-align: left;">d'inscription</h2>

            <div style="margin-bottom: 10px;margin-top:120px">
                Nom et prénom de l'adhérent: <strong> ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName} </strong>
            </div>
            <div style="margin-bottom: 10px;">
           ${identifierInfo}
           </div>
            <div style="margin-bottom: 10px;">
             ${isFirstRegistration ? `  1ère inscription: <strong>  <input style='display: none;' type='checkbox' checked><span style='font-size: 18px; color:black;'> &#9745;</span> Tarif + 30 DT frais d'inscription" ` : ""}</strong>
            </div>

            <div style="margin-bottom: 10px;">
               Type d'abonnement: <strong> ${abonnement} </strong>
            </div>

            <div style="margin-bottom: 10px;">
               Date de début: <strong> ${formatDate(dateDebut)} </strong>
            </div>

            <div style="margin-bottom: 10px;">
                Date de fin:<strong> ${formatDate(dateFin)} </strong>
            </div>

            <div style="margin-bottom: 10px;">
                Tarif:<strong> ${tarif} </strong>
            </div>
 
            <div style="margin-bottom: 7px;">
                Mode de paiement:<br/>  <strong> ${paymentDetails}  </strong>
            </div>

          ${cheque ? `
            <strong>  ${chequeDetails} </strong>
                    <div style="margin-bottom: 5px;">
                    Banque:<strong> ${banque} </strong>
                    </div>
            ` : ""}

           <strong>  ${echeance ? listEch : ""} </strong>
             
              
            
          ${dateDeNaissance ? `
            <div style="margin-bottom: 10px;margin-top: 10px;">
                Date de Naissance: <strong> ${formatDate(dateDeNaissance)} </strong>
            </div>
           ` : ""}
         ${lieuDeNaissance ? `
            <div style="margin-bottom: 10px;">
                Lieu de Naissance:<strong> ${lieuDeNaissance} </strong>
            </div> `: ""}
        ${ville ? `
            <div style="margin-bottom: 10px;">
                Ville:<strong> ${ville} </strong>
            </div>
        `: ""}
        ${profession ? `
            <div style="margin-bottom: 10px;"> 
                Profession:<strong> ${profession} </strong>
            </div>`: ""}
        ${adresse ? `
            <div style="margin-bottom: 10px;">
                Adresse:<strong> ${adresse} </strong>
            </div> `: ""}
        ${codePostal ? `
            <div style="margin-bottom: 10px;">
                Code Postal:<strong> ${codePostal} </strong>
            </div> `: ""}

            <div style="margin-bottom: 10px;">
                Téléphone:<strong> ${fullPhoneNumber} </strong>
            </div>
            <div style="margin-bottom: 10px;">
                Téléphone d'urgence: <strong>${emergencyPhone} </strong> <br/>
                Nom du contact d'urgence : <strong> ${nomUrgence} </strong>
            </div>

              <div style="margin-bottom: 10px;">
                <strong>Je soussigné,  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}</strong> <br/><br/>
                <stong style="margin-top:20px;">.
                Atteste sur l'honneur que je ne présente aucune contre-indiction à la pratique des activités sportives et de remise en forme et déclare être en excellete santé.
                Par conséquent, je ne pourrais en aucun cas me retourner juridiquement contre le club Top Fit'ness Hammamet en cas de problème.
                </strong>
            </div>

            <div style="margin-bottom: 10px;">
                .<stong> Je déclare avoir pris connaissance du règlement intérieur de la salle de sport Top Fit'ness et je m'engage à le respecter</strong>
            </div>

             <div style="margin-bottom: 20px; margin-left: 430px">
                <strong>. Hammamet le ${today?.toLocaleDateString()}
                </strong>
            </div>

            <div style= "display: flex; alignItems: center; gap: 250px; margin-top:40px" }}>
                <div >
                <strong>Signature de l'agent <br/> ${agentLasttName} ${agentFirstName} </strong>
               
                </div>
                <div >
                <strong>Signature de l'adhérent <br/>  ${mr ? "Mr " + lastName + " " + firstName : "Mrs " + lastName + " " + firstName}
                </strong>
                </div>
            </div>



          
        </div>
    `;
};
export const getMonthsFromType = (typeString) => {
    // Check if the string contains '=' and split it
    if (typeString?.includes('=')) {
        const parts = typeString?.split('=');
        if (parts.length === 2) {
            // Extract the number from the second part
            const matches = parts[1].match(/(\d+)/);
            return matches ? parseInt(matches[0], 10) : 0;
        }
    }

    // Default case: extract the first number
    const matches = typeString?.match(/(\d+)/);
    return matches ? parseInt(matches[0], 10) : '';
};

export const updateDateFin = (startDate, type) => {
    if (startDate && type) {
        const monthsToAdd = getMonthsFromType(type);
        // Add the months and then subtract one day
        let result;
        if (monthsToAdd) {
            result = dayjs(startDate).add(monthsToAdd, 'month').subtract(1, 'day');
        }
        return result;
    }
};



export const clearInput = (/* setState functions */) => {
    // Implementation of clearInput
};


export const checkListEmpty = (list) => {
    return list.some(item => !item.value || !item.date);
};
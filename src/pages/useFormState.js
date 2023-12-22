import { useState } from 'react';

export const useFormState = () => {
    const [isFirstRegistration, setIsFirstRegistration] = useState(false);
    const [hasPassport, setHasPassport] = useState(false);
    const [hasCIN, setHasCIN] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [cheque, setCheque] = useState(false);
    const [echeance, setEcheance] = useState(false);
    const [listEcheance, setListEcheance] = useState([]);
    const [listCheque, setListCheque] = useState([]);
    const [espece, setEspece] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [codeAdherent, setCodeAdherent] = useState('');
    const [lastName, setLastName] = useState('');
    const [agentLasttName, setAgentLastName] = useState('');
    const [nomUrgence, setNomUrgence] = useState('');
    const [agentFirstName, setAgentFirstName] = useState('');
    const [banque, setBanque] = useState('');
    const [tarif, setTarif] = useState('');
    const [abonnement, setAbonnement] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState("")
    const [lieuDeNaissance, setLieuDeNaissance] = useState("")
    const [ville, setVille] = useState("")
    const [profession, setProfession] = useState("")
    const [adresse, setAdresse] = useState("")
    const [mr, setMr] = useState(false);
    const [mrs, setMrs] = useState(false);
    const [codePostal, setCodePostal] = useState("")
    const [emergencyPhone, setEmergencyPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [sommeEspece, setSommeEspece] = useState('');
    const [fullPhoneNumber, setFullPhoneNumber] = useState('');
    // ... other state declarations

    return {
        isFirstRegistration, setIsFirstRegistration,
        hasPassport, setHasPassport,
        hasCIN, setHasCIN,
        identifier, setIdentifier,
        cheque, setCheque,
        echeance, setEcheance,
        listEcheance, setListEcheance,
        listCheque, setListCheque,
        espece, setEspece,
        firstName, setFirstName,
        codeAdherent, setCodeAdherent,
        lastName, setLastName,
        agentLasttName, setAgentLastName,
        agentFirstName, setAgentFirstName,
        banque, setBanque,
        tarif, setTarif,
        abonnement, setAbonnement,
        dateDebut, setDateDebut,
        dateFin, setDateFin,
        dateDeNaissance, setDateDeNaissance,
        lieuDeNaissance, setLieuDeNaissance,
        ville, setVille,
        profession, setProfession,
        adresse, setAdresse,
        mr, setMr,
        mrs, setMrs,
        nomUrgence, setNomUrgence,
        codePostal, setCodePostal,
        emergencyPhone, setEmergencyPhone,
        phone, setPhone,
        sommeEspece, setSommeEspece,
        fullPhoneNumber, setFullPhoneNumber
        // ... other states and setters
    };
};

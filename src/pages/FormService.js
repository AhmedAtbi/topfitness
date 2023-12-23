import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhoneInput from '../components/PhoneInput';
import CustomDatePicker from '../components/DatePicker';
import DynamicInputs from '../components/DynamicInput';
import { Style } from '../style';
import TypeAbonnementManager from '../components/TypeAbonnement';
import { useFormState } from './useFormState';
import { checkListEmpty, formatDate, formatFormDataRenew, formatFormDataSubscription, updateDateFin } from './utilities';

const FormService = ({ handleClose, isSubscription, typeAbonnementRender }) => {



    const { t } = useTranslation();
    const {
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
        codePostal, setCodePostal,
        emergencyPhone, setEmergencyPhone,
        phone, setPhone,
        sommeEspece, setSommeEspece,
        fullPhoneNumber, setFullPhoneNumber,
        nomUrgence, setNomUrgence
    } = useFormState();
    const [errors, setErrors] = useState([]);
    let disableButton = (!isSubscription && !codeAdherent) || !firstName || !lastName || !dateDebut || !dateFin ||
        (!espece && !cheque && !echeance) ||
        (cheque && !banque) ||
        (espece && !sommeEspece) ||
        (cheque && (listCheque.length === 0 || checkListEmpty(listCheque))) ||
        (echeance && (listEcheance.length === 0 || checkListEmpty(listEcheance)));
    const [initialTarif, setIntialTarif] = useState(tarif)

    const clearInput = () => {
        setListCheque([{ value: '' }]);
        setListEcheance([]);
        setIsFirstRegistration(false)
        setEcheance(false)
        setEspece(false)
        setHasPassport(false)
        setHasCIN(false)
        setFirstName('');
        setIdentifier('');
        setLieuDeNaissance('');
        setCodeAdherent('');
        setLastName('');
        setAbonnement();
        setProfession('');
        setAdresse()
        setCheque(false)
        setMr(false)
        setMrs(false)
        setBanque()
        setDateDeNaissance("")
        setDateDebut("")
        setDateFin("")
        setEmergencyPhone("")
        setFullPhoneNumber("")
        setCodePostal("")
        setTarif("");
        setPhone('');
        setPhone('');
        setSommeEspece('');
    };
    let today = new Date();


    const printForm = () => {
        const formData = isSubscription ? formatFormDataSubscription({ nomUrgence, emergencyPhone, fullPhoneNumber, codePostal, adresse, profession, ville, lieuDeNaissance, dateDeNaissance, echeance, listEcheance, cheque, listCheque, hasCIN, identifier, hasPassport, isFirstRegistration, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName }) : formatFormDataRenew({ echeance, listEcheance, cheque, listCheque, codeAdherent, lastName, mr, firstName, abonnement, dateDebut, dateFin, tarif, espece, sommeEspece, banque, agentLasttName, agentFirstName });
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(formData);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        clearInput();
    };

    const handleChangeDateDebut = (newDate) => {
        setDateDebut(newDate);
        updateDateFin(newDate, abonnement);
    };

    const handleChangeDateFin = (newDate) => {
        setDateFin(newDate);
    };

    useEffect(() => {
        !abonnement && setTarif('')
    }, [abonnement])



    useEffect(() => {
        // Update dateFin whenever dateDebut or type changes
        setDateFin(updateDateFin(dateDebut, abonnement));
    }, [dateDebut, abonnement]);

    const handlePrint = (e) => {
        e.preventDefault();
        printForm(); // Call print function after form submission
    };
    useEffect(() => {
        const extractNumericTariff = (tariffStr) => {
            return parseInt(tariffStr, 10);
        };

        let numericTariff = extractNumericTariff(tarif);
        if (!isNaN(numericTariff)) {
            if (isFirstRegistration) {
                // Add 30 to the tariff whenever isFirstRegistration is true
                let updatedTariff = numericTariff + 30;
                setTarif(`${updatedTariff} DT`);
            } else {
                setTarif(`${initialTarif}`);
            }
        }
    }, [isFirstRegistration, abonnement]); // React to changes in isFirstRegistration or tarif




    const handleFirstRegistrationChange = (event) => {
        // Assuming setIsFirstRegistration and setTariff are your state update functions
        setIsFirstRegistration(event.target.checked);


    };


    const handleMrChange = (event) => {
        setMr(event.target.checked);
        setMrs(false);
    };

    const handleMrsChange = (event) => {
        setMrs(event.target.checked);
        setMr(false);
    };


    const handlePaimentCheck = (event) => {
        setCheque(event.target.checked);
    };

    const handleEcheance = (event) => {
        setEcheance(event.target.checked);
    };

    const handlePaiementEspece = (event) => {
        setEspece(event.target.checked);
    };

    const handlePassportChange = (event) => {
        setHasPassport(event.target.checked);
        setHasCIN(false)
    };
    const handleCINChange = (event) => {
        setHasCIN(event.target.checked);
        setHasPassport(false);
    };

    // Gérer le changement d'abonnement



    const handleChangeDateDeNaissance = (date) => {
        setDateDeNaissance(date);
    };

    const clearErrors = () => {
        setErrors([]);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        formatDate(dateDeNaissance);
        handlePrint(e);
        handleClose && handleClose()
    };

    return (

        <>
            {typeAbonnementRender ? <TypeAbonnementManager /> :
                <>
                    <Container maxWidth={"xl"}>
                        <Grid container spacing={8}>
                            <form onSubmit={handleSubmit} id="demoProductForm">

                                <div className="bg-white my-4 md:p-12 rounded-2xl" style={{ backgroundColor: "#F7E5D8" }}>
                                    <Grid container spacing={2}>
                                        {isSubscription && <Grid sx={{ marginBottom: "10px" }} item xs={12}>
                                            <label style={{ color: "black", marginRight: "10px", marginLeft: "-20px" }}>
                                                1ère inscription
                                            </label>

                                            <Checkbox onChange={handleFirstRegistrationChange} checked={isFirstRegistration} />
                                            <label style={{ color: "black", marginLeft: "10px" }}>
                                                30dt frais d'inscription
                                            </label>
                                        </Grid>}
                                        {!isSubscription && <Grid sx={{ marginBottom: "10px" }} item xs={12}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "44%", marginBottom: "20px" }}>
                                                <label style={{ color: "black", marginRight: "5px", marginLeft: "10px" }} id="abonnement-label">
                                                    Code de adhérent
                                                </label>
                                                <input
                                                    style={{ maxWidth: "200px", marginLeft: "5px" }}
                                                    name="code-adherent"
                                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    placeholder={"code adhérent"}
                                                    value={codeAdherent}
                                                    onChange={(e) => setCodeAdherent(e.target.value)}
                                                />
                                                <label style={{ color: "black", marginLeft: "50px" }}>
                                                    Date : {today.toLocaleDateString()}
                                                </label>
                                            </div>
                                        </Grid>}
                                        <Grid sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }} item xs={6}>
                                            <Checkbox sx={{ ml: "-30px" }} onChange={handleMrChange} checked={mr} />
                                            <label style={{ color: "black", marginRight: "10px" }}>
                                                Mr
                                            </label>
                                            <Checkbox onChange={handleMrsChange} checked={mrs} />
                                            <label style={{ color: "black", marginRight: "50px" }}>
                                                Mrs
                                            </label>

                                            <label style={{ color: "black", marginRight: "10px", marginLeft: "30px" }}>
                                                Nom
                                            </label>
                                            <input
                                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name="last_name"
                                                type="text"
                                                placeholder={t('lastNamePlaceholder')}
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                onKeyUp={clearErrors}
                                            />
                                        </Grid>

                                        <Grid sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }} item xs={6}>
                                            <label style={{ color: "black", marginRight: "10px" }}>
                                                Prénom
                                            </label>
                                            <input
                                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name="first_name"
                                                type="text"
                                                placeholder={t('firstNamePlaceholder')}
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                onKeyUp={clearErrors}
                                            />
                                        </Grid>

                                        <Grid container sx={{ marginBottom: "10px" }} spacing={2}>
                                            <Grid item xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                                                    <label style={{ color: "black", marginRight: "73px" }} id="abonnement-label">
                                                        Type d'Abonnement
                                                    </label>

                                                    <TypeAbonnementManager setIntialTarif={setIntialTarif} setTarif={setTarif} abonnement={abonnement} setAbonnement={setAbonnement} render />

                                                    <CustomDatePicker
                                                        disablePast
                                                        label="Du"
                                                        required
                                                        sx={{ marginLeft: '10px', marginRight: "10px" }} // Adjust spacing as needed
                                                        onChange={handleChangeDateDebut}
                                                        value={dateDebut}
                                                    />

                                                    <CustomDatePicker
                                                        disablePast
                                                        label="au"
                                                        disabled={!!(dateFin)}
                                                        required
                                                        sx={{ marginLeft: '20px' }} // Adjust spacing as needed
                                                        onChange={handleChangeDateFin}
                                                        value={dateFin}
                                                    />
                                                </div>
                                            </Grid>

                                        </Grid>
                                        <Grid sx={{ marginBottom: "10px" }} container spacing={2}>
                                            <Grid item xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                                                    <label style={{ color: "black", marginRight: "75px" }} id="abonnement-label">
                                                        Tarif
                                                    </label>
                                                    <input
                                                        name="tarif"
                                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        disabled
                                                        placeholder={"Tarif"}
                                                        value={tarif}
                                                        onChange={(e) => setTarif(e.target.value)}
                                                        onKeyUp={clearErrors}
                                                    />
                                                    <Checkbox onChange={handlePaiementEspece} checked={espece} />
                                                    <label style={{ color: "black" }}>
                                                        Espèce
                                                    </label>
                                                    {espece &&
                                                        <>
                                                            <input
                                                                name="somme-espece"
                                                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                                type="text"

                                                                placeholder={"Somme payée"}
                                                                value={sommeEspece}
                                                                onChange={(e) => setSommeEspece(e.target.value)}
                                                                onKeyUp={clearErrors}
                                                            />
                                                            <label style={{ color: "black", marginRight: "10px" }} id="abonnement-label">
                                                                DT
                                                            </label></>
                                                    }
                                                    <Checkbox onChange={handlePaimentCheck} checked={cheque} />
                                                    <label style={{ color: "black" }}>
                                                        Chèque
                                                    </label>

                                                    {cheque &&
                                                        <DynamicInputs cheque setValues={setListCheque} />
                                                    }

                                                    {cheque &&
                                                        <input
                                                            style={{ minWidth: "110px", marginBottom: "15px", marginLeft: "-24px" }}
                                                            name="banque"
                                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                            type="text"
                                                            placeholder={"Banque"}
                                                            value={banque}
                                                            onChange={(e) => setBanque(e.target.value)}
                                                            onKeyUp={clearErrors}
                                                        />
                                                    }

                                                </div>
                                            </Grid>
                                            <Grid sx={{ display: "flex", alignItems: "center" }} item >
                                                <label style={{ color: "black" }}>
                                                    Echéance
                                                </label>
                                                <Checkbox sx={{ mr: "95px" }} onChange={handleEcheance} checked={echeance} />
                                                {echeance && <DynamicInputs echeance setValues={setListEcheance} />}
                                            </Grid>
                                        </Grid>





                                        {isSubscription && <Grid sx={{ marginBottom: "10px" }} item xs={6}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: "10px" }}>
                                                <Checkbox sx={{ ml: "-30px" }} onChange={handleCINChange} checked={hasCIN} />
                                                <label style={{ color: "black", marginRight: "10px" }}>
                                                    N°CIN
                                                </label>
                                                <Checkbox onChange={handlePassportChange} checked={hasPassport} />
                                                <label style={{ color: "black", marginRight: "10px" }}>
                                                    N°Passeport
                                                </label>
                                                <input
                                                    name="identifier"
                                                    className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                    type="text"

                                                    placeholder={"Numero"}
                                                    value={identifier}
                                                    onChange={(e) => setIdentifier(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                    style={{ flex: 1, minWidth: "100%" }}  // Adjust as needed to fit the layout
                                                />
                                            </div>

                                        </Grid>}
                                        {isSubscription && <Grid container sx={{ marginBottom: "10px" }} spacing={2}>
                                            <Grid item xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <label style={{ color: "black", marginRight: "93px" }}>
                                                        Date de naissance
                                                    </label>
                                                    <CustomDatePicker
                                                        label="Date de naissance"
                                                        disableFuture
                                                        required
                                                        sx={{ marginLeft: '10px', marginRight: "10px" }} // Adjust spacing as needed
                                                        onChange={handleChangeDateDeNaissance}
                                                        value={dateDeNaissance}
                                                    />
                                                    <label style={{ color: "black", marginRight: "20px" }}>
                                                        Lieu de naissance
                                                    </label>
                                                    <input
                                                        name="lieu_naissance"
                                                        className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"

                                                        placeholder={"Lieu de naissance"}
                                                        value={lieuDeNaissance}
                                                        onChange={(e) => setLieuDeNaissance(e.target.value)}
                                                        style={{ flex: 1, maxWidth: "30%" }}  // Adjust as needed to fit the layout
                                                    />
                                                    <label style={{ color: "black" }}>
                                                        Profession
                                                    </label>
                                                    <input
                                                        name="profession"
                                                        className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"

                                                        placeholder={"Profession"}
                                                        value={profession}
                                                        onChange={(e) => setProfession(e.target.value)}
                                                        style={{ flex: 1, maxWidth: "30%" }}  // Adjust as needed to fit the layout
                                                    />

                                                </div>
                                            </Grid>


                                        </Grid>}

                                        {isSubscription && <Grid container sx={{ marginBottom: "10px" }} spacing={2}>
                                            <Grid item xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <label style={{ color: "black", marginRight: "120px" }}>
                                                        Adresse
                                                    </label>
                                                    <input
                                                        name="adresse"
                                                        className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"

                                                        placeholder={"Adresse"}
                                                        value={adresse}
                                                        onChange={(e) => setAdresse(e.target.value)}
                                                        style={{ flex: 1, maxWidth: "370px" }}  // Adjust as needed to fit the layout
                                                    />
                                                    <label style={{ color: "black", marginRight: "30px" }}>
                                                        Ville
                                                    </label>
                                                    <input
                                                        name="ville"
                                                        className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        placeholder={"Ville"}
                                                        value={ville}
                                                        onChange={(e) => setVille(e.target.value)}
                                                        style={{ flex: 1, maxWidth: "200px" }}  // Adjust as needed to fit the layout
                                                    />
                                                    <label style={{ color: "black" }}>
                                                        Code postal
                                                    </label>
                                                    <input
                                                        name="codePostal"
                                                        className="bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        placeholder={"Code postal"}
                                                        value={codePostal}
                                                        onChange={(e) => setCodePostal(e.target.value)}
                                                        style={{ flex: 1, maxWidth: "120px" }}  // Adjust as needed to fit the layout
                                                    />
                                                </div>
                                            </Grid>


                                        </Grid>}


                                        {isSubscription && <Grid container justifyContent="center">
                                            <Grid id={"phone-input-div"} item xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                    <label style={{ marginLeft: "70px", color: "black", marginRight: "80px", marginTop: "20px" }}>
                                                        Numéro de téléphone
                                                    </label>
                                                    <PhoneInput
                                                        setFullPhoneNumber={setFullPhoneNumber}
                                                        clearErrors={setErrors}
                                                        errors={errors}
                                                        phone={phone}
                                                        setPhone={setPhone}
                                                    />
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                        <label style={{ color: "black", marginRight: "20px", marginTop: "20px" }}>
                                                            Numéro du contact d'urgence
                                                        </label>
                                                        <PhoneInput
                                                            setFullPhoneNumber={setEmergencyPhone}
                                                            clearErrors={setErrors}
                                                            errors={errors}
                                                            phone={emergencyPhone}
                                                            setPhone={setEmergencyPhone}
                                                        />
                                                        <input
                                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                            name="nom-urgence"
                                                            type="text"
                                                            placeholder={"Nom du contact d'urgence"}
                                                            value={nomUrgence}
                                                            onChange={(e) => setNomUrgence(e.target.value)}
                                                            onKeyUp={clearErrors}
                                                        />
                                                    </div>
                                                </div>

                                            </Grid>

                                        </Grid>}
                                        <Grid sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }} item xs={6}>

                                            <label style={{ color: "black", marginRight: "110px", marginLeft: "0px" }}>
                                                Nom de l'agent
                                            </label>
                                            <input
                                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name="nom-agent"
                                                type="text"
                                                placeholder={"Nom de l'agent"}
                                                value={agentLasttName}
                                                onChange={(e) => setAgentLastName(e.target.value)}
                                                onKeyUp={clearErrors}
                                            />
                                        </Grid>

                                        <Grid sx={{ marginTop: "10px", marginBottom: "10px", display: "flex", alignItems: "center" }} item xs={6}>
                                            <label style={{ color: "black", marginRight: "50px", marginLeft: "10px" }}>
                                                Prénom de l'agent
                                            </label>
                                            <input
                                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                name="prenom-agent"
                                                type="text"
                                                placeholder={"Prénom de l'agent"}
                                                value={agentFirstName}
                                                onChange={(e) => setAgentFirstName(e.target.value)}
                                                onKeyUp={clearErrors}
                                            />
                                        </Grid>
                                    </Grid>
                                    {isSubscription && <Grid sx={{ marginLeft: "40%" }}>
                                        <Button
                                            sx={{ width: "30%", marginTop: isSubscription ? "20px" : "50px" }}
                                            disabled={disableButton}
                                            type="submit"
                                            id="submitBtn"
                                            variant="contained"
                                            color="primary"
                                            style={{ backgroundColor: Style.greenGoCaution }}
                                        >
                                            {"Valider"}
                                        </Button>
                                    </Grid>
                                    }


                                </div>
                                {!isSubscription && <Grid sx={{ marginLeft: "40%" }}>
                                    <Button
                                        sx={{ width: "30%" }}
                                        disabled={disableButton}
                                        type="submit"
                                        id="submitBtn"
                                        variant="contained"
                                        color="primary"
                                        style={{ backgroundColor: Style.greenGoCaution }}
                                    >
                                        {"Valider"}
                                    </Button>
                                </Grid>}

                            </form>
                            {/* Your InfoSection component */}
                        </Grid>
                    </Container>
                </>
            }
        </>
    );
}

export default React.memo(FormService)
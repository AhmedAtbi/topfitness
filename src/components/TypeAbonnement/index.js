import { useState, useEffect } from 'react';
import { Select, MenuItem, Box, List, ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { AddCircleOutline } from '@mui/icons-material';

const TypeAbonnementManager = ({ render, setAbonnement, abonnement, setTarif }) => {
    const defaultTypes = [
        { type: "01 mois", tarif: "100 DT" },
        { type: "03 mois", tarif: "300 DT" },
        { type: "06 mois", tarif: "600 DT" },
        { type: "01 mois étudiant", tarif: "70 DT" },
        { type: "01 mois gratuit", tarif: "0 DT" },
        { type: "01 mois kids", tarif: "50 DT" },
        { type: "12 mois couple", tarif: "600 DT" },
        { type: "12 mois offre", tarif: "500 DT" },
        { type: "12 mois = 14 mois", tarif: "100 DT" },
        { type: "12 mois convention", tarif: "100 DT" },
        { type: "12 mois étudiant", tarif: "100 DT" },
        { type: "02 mois vacanciers", tarif: "100 DT" },
        { type: "03 mois gratuit", tarif: "100 DT" },
        { type: "03 mois étudiant", tarif: "100 DT" },
        { type: "03 mois gratuit", tarif: "100 DT" },
        { type: "03 mois offre", tarif: "100 DT" },
        { type: "03 mois convention = 4 mois", tarif: "100 DT" },
        { type: "06 mois étudiant", tarif: "100 DT" },
        { type: "06 mois offre", tarif: "100 DT" },
        { type: "06 mois convention", tarif: "100 DT" },
        { type: "06 mois = 7 mois", tarif: "100 DT" },
        { type: "Coaching privé", tarif: "100 DT" },
        { type: "03 mois = 4 mois", tarif: "100 DT" },
        // ... add other default types here
    ];

    const [typeAbonnement, setTypeAbonnement] = useState([]);
    const [newType, setNewType] = useState('');
    const [newTarif, setNewTarif] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        const storedTypes = JSON.parse(localStorage.getItem('typeAbonnement')) || defaultTypes;
        setTypeAbonnement(storedTypes);
    }, []);


    useEffect(() => {
        console.log("abonnementabonnementabonnement", abonnement)
    }, [abonnement]);

    const handleChangeAbonnement = (event) => {
        const selectedAbonnement = event.target.value;
        setAbonnement(selectedAbonnement);

        // Find the tariff associated with the selected type
        const selectedType = typeAbonnement.find(item => item.type === selectedAbonnement);
        if (selectedType) {
            setTarif(selectedType.tarif);
        } else {
            setTarif(null); // Or a default value, if needed
        }
    };
    const handleAddType = () => {
        if (newType && newTarif) {
            setNewTarif(newTarif + " DT")
            const updatedTypes = [...typeAbonnement, { type: newType, tarif: newTarif }];
            setTypeAbonnement(updatedTypes);
            localStorage.setItem('typeAbonnement', JSON.stringify(updatedTypes));
            setNewType('');
            setNewTarif('');
        }
    };

    const handleDeleteType = (index) => {
        const updatedTypes = typeAbonnement.filter((_, idx) => idx !== index);
        setTypeAbonnement(updatedTypes);
        localStorage.setItem('typeAbonnement', JSON.stringify(updatedTypes));
    };

    const handleEditType = (index) => {
        setEditIndex(index);
    };

    const handleSaveType = (index) => {
        const updatedTypes = [...typeAbonnement];
        updatedTypes[index] = { type: newType, tarif: newTarif };
        setTypeAbonnement(updatedTypes);
        localStorage.setItem('typeAbonnement', JSON.stringify(updatedTypes));
        setEditIndex(-1);
        setNewType('');
        setNewTarif('');
    };

    return (
        <Box sx={{ p: 3, backgroundColor: 'rgb(247, 229, 216)', borderRadius: '8px' }}>
            {render && <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Select
                    labelId="abonnement-label"
                    id="abonnement-select"
                    value={abonnement}
                    sx={{ minWidth: "200px" }}
                    onChange={handleChangeAbonnement}
                >
                    <MenuItem key={"emptyval"} value={""}>
                        {""}
                    </MenuItem>
                    {typeAbonnement.map((item, index) => (
                        <MenuItem key={index} value={item.type}>
                            {item.type} - {item.tarif}
                        </MenuItem>
                    ))}
                </Select>
            </Box>}
            {!render &&
                <>
                    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            sx={{ maxWidth: "200px" }}
                            label="Nouveau Type"
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                        />
                        <TextField
                            sx={{ maxWidth: "200px" }}
                            label="Tarif"
                            value={newTarif}
                            onChange={(e) => setNewTarif(e.target.value)}
                        />
                        <IconButton
                            onClick={editIndex >= 0 ? () => handleSaveType(editIndex) : handleAddType}
                        >
                            {editIndex >= 0 ? <SaveIcon /> : <AddCircleOutline />}
                        </IconButton>
                    </Box>
                    <List sx={{ width: '100%', borderRadius: '4px' }}>
                        {typeAbonnement.map((item, index) => (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => {
                                            setEditIndex(index);
                                            setNewType(item.type);
                                            setNewTarif(item.tarif);
                                        }}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteType(index)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </>
                                }
                            >
                                <ListItemText primary={`${item.type} - ${item.tarif}`} />
                            </ListItem>
                        ))}
                    </List>
                </>}
        </Box>
    );
};

export default TypeAbonnementManager;
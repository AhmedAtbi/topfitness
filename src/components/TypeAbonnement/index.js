import { useState, useEffect } from 'react';
import { Box, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, TableSortLabel } from '@mui/material';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const TypeAbonnementManager = ({ render, setAbonnement, abonnement, setTarif, setIntialTarif }) => {
    const defaultTypes = [
        { type: "1 mois", tarif: "100 DT" },
        { type: "3 mois", tarif: "300 DT" },
        { type: "6 mois", tarif: "600 DT" },
        { type: "1 mois étudiant", tarif: "70 DT" },
        { type: "1 mois gratuit", tarif: "0 DT" },
        { type: "1 mois kids", tarif: "50 DT" },
        { type: "12 mois couple", tarif: "600 DT" },
        { type: "12 mois offre", tarif: "500 DT" },
        { type: "12 mois = 14 mois", tarif: "100 DT" },
        { type: "12 mois convention", tarif: "100 DT" },
        { type: "12 mois étudiant", tarif: "100 DT" },
        { type: "2 mois vacanciers", tarif: "100 DT" },
        { type: "3 mois gratuit", tarif: "100 DT" },
        { type: "3 mois étudiant", tarif: "100 DT" },
        { type: "3 mois gratuit", tarif: "100 DT" },
        { type: "3 mois offre", tarif: "100 DT" },
        { type: "3 mois convention = 4 mois", tarif: "100 DT" },
        { type: "6 mois étudiant", tarif: "100 DT" },
        { type: "6 mois offre", tarif: "100 DT" },
        { type: "06 mois convention", tarif: "100 DT" },
        { type: "6 mois = 7 mois", tarif: "100 DT" },
        { type: "Coaching privé", tarif: "100 DT" },
        { type: "3 mois = 4 mois", tarif: "100 DT" },
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


    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('type');

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedItems = typeAbonnement.sort((a, b) => {
        if (orderBy === 'type') {
            return (order === 'asc' ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type));
        } else {
            // Assuming tarif is a string, you might need to parse it for numerical comparison
            return (order === 'asc' ? parseFloat(a.tarif) - parseFloat(b.tarif) : parseFloat(b.tarif) - parseFloat(a.tarif));
        }
    });
    const handleChangeAbonnement = (event) => {
        const selectedAbonnement = event.target.value;
        setAbonnement(selectedAbonnement);

        // Find the tariff associated with the selected type
        const selectedType = typeAbonnement.find(item => item.type === selectedAbonnement);
        if (selectedType) {
            setTarif(selectedType.tarif);
            setIntialTarif(selectedType.tarif);
        } else {
            setTarif(null); // Or a default value, if needed
            setIntialTarif(null); // Or a default value, if needed
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

    const handleAddType = () => {
        if (newType && newTarif) {
            const tarifWithSuffix = newTarif.endsWith(" DT") ? newTarif : newTarif + " DT";
            let updatedTypes = [...typeAbonnement, { type: newType, tarif: tarifWithSuffix }];
            updatedTypes = sortAbonnements(updatedTypes); // Sort after adding
            setTypeAbonnement(updatedTypes);
            localStorage.setItem('typeAbonnement', JSON.stringify(updatedTypes));
            setNewType('');
            setNewTarif('');
        }
    };

    const handleSaveType = (index) => {
        const tarifWithSuffix = newTarif.endsWith(" DT") ? newTarif : newTarif + " DT";
        let updatedTypes = [...typeAbonnement];
        updatedTypes[index] = { type: newType, tarif: tarifWithSuffix };
        updatedTypes = sortAbonnements(updatedTypes); // Sort after editing
        setTypeAbonnement(updatedTypes);
        localStorage.setItem('typeAbonnement', JSON.stringify(updatedTypes));
        setEditIndex(-1);
        setNewType('');
        setNewTarif('');
    };

    // Sorting function
    const sortAbonnements = (abonnements) => {
        return abonnements.sort((a, b) => {
            if (orderBy === 'type') {
                return (order === 'asc' ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type));
            } else {
                // Assuming tarif is a string, parse it for numerical comparison
                return (order === 'asc' ? parseFloat(a.tarif) - parseFloat(b.tarif) : parseFloat(b.tarif) - parseFloat(a.tarif));
            }
        });
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
                        <label style={{ color: "black", marginRight: "10px" }} id="abonnement-label">
                            DT
                        </label>
                        <IconButton
                            onClick={editIndex >= 0 ? () => handleSaveType(editIndex) : handleAddType}
                        >
                            {editIndex >= 0 ? <SaveIcon /> : <AddCircleOutline />}
                        </IconButton>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table id="type-abonnement-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <TableSortLabel
                                            active={orderBy === 'type'}
                                            direction={orderBy === 'type' ? order : 'asc'}
                                            onClick={() => handleRequestSort('type')}
                                        >
                                            Type
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell align="right">
                                        <TableSortLabel
                                            active={orderBy === 'tarif'}
                                            direction={orderBy === 'tarif' ? order : 'asc'}
                                            onClick={() => handleRequestSort('tarif')}
                                        >
                                            Tarif
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedItems.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {item.type}
                                        </TableCell>
                                        <TableCell align="right">{item.tarif}</TableCell>
                                        <TableCell align="right">
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
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
        </Box>
    );
};

export default TypeAbonnementManager;

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CustomDatePicker from '../DatePicker';

const DynamicInputs = ({ echeance, setValues }) => {
    const [inputs, setInputs] = useState([{ value: '', date: '' }]);

    const handleAddInput = () => {
        const newInputs = [...inputs, { value: '', date: '' }];
        setInputs(newInputs);
        setValues(newInputs);
    };

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index].value = event.target.value;
        setInputs(newInputs);
        setValues(newInputs);
    };

    const handleDateChange = (index, date) => {
        const newInputs = [...inputs];
        newInputs[index].date = date;
        setInputs(newInputs);
        setValues(newInputs);
    };

    const handleRemoveInput = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index);
        setInputs(newInputs);
        setValues(newInputs);
    };

    return (
        <div>
            {inputs.map((input, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    {echeance && (
                        <CustomDatePicker
                            disablePast
                            label="Date échéance"
                            required
                            sx={{ marginTop: "10px", marginLeft: '60px', marginRight: "10px" }}
                            onChange={(date) => handleDateChange(index, date)}
                            value={input.date}
                        />
                    )}
                    <input
                        name={echeance ? "somme echeance" : "cheque"}
                        className="bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder={echeance ? "Somme échéance " + (index + 1) : "N° chèque " + (index + 1)}
                        value={input.value}
                        onChange={(event) => handleInputChange(index, event)}
                    /><label style={{ color: "black", marginLeft: "10px" }} id="abonnement-label">
                        DT
                    </label>
                    {!echeance && (
                        <CustomDatePicker
                            disablePast
                            label="Date versement"
                            required
                            sx={{ marginTop: "10px", marginLeft: '10px' }}
                            onChange={(date) => handleDateChange(index, date)}
                            value={input.date}
                        />
                    )}
                    {((inputs.length > 1) || (index === inputs.length - 2)) && (
                        <IconButton onClick={() => handleRemoveInput(index)}>
                            <RemoveIcon />
                        </IconButton>
                    )}
                    {index === inputs.length - 1 && (
                        <IconButton onClick={handleAddInput}>
                            <AddIcon />
                        </IconButton>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DynamicInputs;

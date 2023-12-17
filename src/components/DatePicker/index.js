import dayjs from 'dayjs';
import "dayjs/locale/fr"; // Import any additional locales as needed
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { useEffect } from 'react';

export default function CustomDatePicker(props) {
    const { disabled, value, onChange, ...other } = props;

    const handleChange = (newValue) => {
        // Convert Day.js object to local date string before sending it back
        onChange(newValue);

    }
    useEffect(() => {
        console.log("valuevaluevaluevalue", value)
    }, [value])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"fr"}>
            <DatePicker
                disabled={disabled}
                inputFormat="DD/MM/YYYY"
                value={value ? dayjs(value, "DD/MM/YYYY") : null}
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{ minWidth: "50px" }}
                        placeholder="JJ/MM/AAAA"
                        disabled={disabled}
                    />
                )}
                {...other}
            />
        </LocalizationProvider>
    );
}

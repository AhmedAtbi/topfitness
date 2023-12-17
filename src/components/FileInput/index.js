import { Input, InputBase} from '@mui/material';
import React from 'react';

const FileUploadInput = ({ setFilePath }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFilePath && setFilePath(file);
        // Do something with the selected file
    };
    return (
        <Input
            type="file"
            name="file"
            inputComponent={FileInput}
            onChange={handleFileChange}
            disableUnderline // To remove the default underline style of the Input component
        />
    );
};

const FileInput = React.forwardRef((props, ref) => {
    return (
        <InputBase
            sx={{ display: 'none' }} // Hide the default file input
            inputProps={{ accept: '.png, .jpg, .jpeg, .pdf' }} // Set accepted file types
            inputRef={ref}
            {...props}
        />
    );
});
export default FileInput
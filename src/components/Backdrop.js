/** Backdrop Loader component  */
import { useState, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Style } from "../style";



export default function SimpleBackdrop(props) {
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    return (
        <Backdrop sx={{ zIndex: 999999, top: "220px" }} open={open} invisible >
            <CircularProgress
                size={150}
                style={{ color: Style.primary }}
                disableShrink
                sx={{ display: 'table', marginLeft: 'auto', marginRight: 'auto' }} />
        </Backdrop>
    );
}

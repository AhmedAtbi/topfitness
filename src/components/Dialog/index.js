import { forwardRef, useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import { Typography, CardMedia, Box } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Style } from '../../style';
import { useTranslation } from 'react-i18next';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = ({ open, handleClose, item }) => {
    const { t } = useTranslation();
    const [opened, setOpened] = useState(open);

    useEffect(() => {
        setOpened(open);
    }, [open]);

    return (
        <Dialog
            open={opened}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            sx={{ '& .MuiDialog-paper': { borderRadius: Style.borderRadius, maxWidth: 'md', paddingY: 2, paddingX: 1.5 } }}
        >
            <DialogTitle
                id="alert-dialog-slide-title"
                sx={{
                    fontSize: Style.textN0,
                    color: Style.primary,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {t(item.title)}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ color: (theme) => theme.palette.grey[500] }}
                >
                    <CloseOutlinedIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box mb={2}>
                    <CardMedia component="img" image={item.img} alt={t(item.title)} style={{ marginLeft: "21%", padding: "20px", maxHeight: "60%", maxWidth: '60%', height: 'auto' }} />
                </Box>
                <Typography variant="body1" style={{ color: Style.greenGoCaution, padding: '0 20px' }}>
                    {t(item.description)}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default DialogBox;

import { Style } from '../../style';
import { Button } from '@mui/material';

const NavButtons = ({ openTypeAbonnement, openDialogRenewal, openDialogSubscription }) => {
    return (
        <div className="flex items-center">
            <Button
                smooth
                id="subscription-form"
                onClick={() => openDialogSubscription(true)}
                sx={{
                    color: Style.greenGoCaution,
                    background: Style.greenGoCaution,
                    fontWeight: 'bold',
                    marginRight: "10px",
                    borderRadius: "20px",
                    '&:hover': {
                        color: Style.greenGoCaution,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    },
                }}
            >
                {"Inscription"}
            </Button>
            <Button
                smooth
                id="renewal-form"
                onClick={() => openDialogRenewal(true)}
                sx={{
                    background: Style.greenGoCaution,
                    color: Style.greenGoCaution,
                    fontWeight: 'bold',
                    marginRight: "10px",
                    borderRadius: "20px",
                    '&:hover': {
                        color: Style.greenGoCaution,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    },
                }}
            >
                {"Renouvellement"}
            </Button>
            <Button
                smooth
                id="renewal-form"
                onClick={() => openTypeAbonnement(true)}
                sx={{
                    background: Style.greenGoCaution,
                    color: Style.greenGoCaution,
                    borderRadius: "20px",
                    fontWeight: 'bold',
                    marginRight: "10px",
                    '&:hover': {
                        color: Style.greenGoCaution,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    },
                }}
            >
                {"Type Abonnement"}
            </Button>
        </div>
    );
};

export default NavButtons;

import { useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavLinks from '../Navbar/NavLinks';
import FormRenewal from '../FormDialog/FormRenewal';
import FormSubscription from '../FormDialog/FormSubscription';
import TypeAbonnementComponent from '../FormDialog/TypeAbonnement';

const NavBar = () => {
    const [isOpenRenewal, setIsOpenRenewal] = useState(false);
    const [isOpenSubscription, setIsOpenSubscription] = useState(false);
    const [isTypeAbonnement, setIsTypeAbonnement] = useState(false);

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    transition: 'background-color 0.3s ease-in-out',
                    background: `#F7E5D8`,
                    marginBottom: "20%",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px"
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <NavLinks openTypeAbonnement={setIsTypeAbonnement} openDialogSubscription={setIsOpenSubscription} openDialogRenewal={setIsOpenRenewal} />
                    </Box>

                    {/* Optional: Display something for smaller screens */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        {/* Mobile menu or icon can go here */}
                    </Box>
                </Toolbar>
            </AppBar>
            {
                isOpenRenewal && (
                    <FormRenewal open={isOpenRenewal} handleClose={() => setIsOpenRenewal(false)} />
                )
            }
            {
                isTypeAbonnement && (
                    <TypeAbonnementComponent open={isTypeAbonnement} handleClose={() => setIsTypeAbonnement(false)} />
                )
            }
            {
                isOpenSubscription && (
                    <FormSubscription open={isOpenSubscription} handleClose={() => setIsOpenSubscription(false)} />
                )
            }
        </>
    );
};

export default NavBar;


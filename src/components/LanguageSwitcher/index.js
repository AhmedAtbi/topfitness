import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';
import { Style } from '../../style';

function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        handleMenuClose();
    };

    return (
        <div>
            <Button
                onClick={handleMenuOpen}
                variant="contained"
                sx={{
                    borderRadius: '10px',
                    height: '30px',
                    m: '5px',
                    width: { xs: '100%', sm: '80%', md: '64px' },
                    color: Style.greenGoCaution,
                    bgcolor: 'transparent',
                    '&:hover': {
                        backgroundColor: Style.greenGoCaution
                    }
                }}
            >
                {t(i18n.language)}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => changeLanguage('fr')}>
                    {t('french')}
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('en')}>
                    {t('english')}
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('ar')}>
                    {t('arabic')}
                </MenuItem>
                {/* Add other language menu items */}
            </Menu>
        </div>

    );
}

export default LanguageSwitcher;

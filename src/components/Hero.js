import NavBar from '../components/Navbar/NavBar';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="hero flex justify-center items-center" id='hero'>
                <div>
                    <NavBar />
                </div>

                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Typography
                        textAlign="center"
                        variant="h3"
                        component="h1"
                        gutterBottom
                        id="presentation"
                        sx={{
                            marginBottom: 5,
                            fontSize: '70px',
                            fontFamily: 'Raleway',
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        {t('presentation')}
                    </Typography>
                </div>
            </div>

        </>
    )
}

export default Hero;
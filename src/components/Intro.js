import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Style } from '../style';
import img from '../images/collab-bro.png';

const Intro = () => {
    const { t } = useTranslation();

    return (
        <div
            id="about"
            style={{
                backgroundImage: `${Style.blueGray100}`,
                padding: '2rem',
                marginTop: "30%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} data-aos="fade-up">
                    <img alt="card img" className="rounded-t float-right" src={img} style={{ marginRight: "10%", maxWidth: '100%', width: '70%' }} />
                </Grid>
                <Grid item xs={12} lg={6} data-aos="zoom-in" data-aos-delay="500">
                    <div style={{ marginTop: "14%", textAlign: 'center' }}>
                        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '1rem', color: Style.primary }}>
                            {t('presentation2')}
                        </Typography>
                        <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                            {t('presentation3')}
                        </Typography>
                        <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                            {t('presentation4')}
                        </Typography>
                        <Link
                            to="/contact-us"
                            variant="contained"
                            style={{
                                color: Style.secondary,
                                backgroundColor: Style.blue500,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                borderRadius: '2rem',
                                boxShadow: `0 4px 6px ${Style.blueGray400}`,
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease-in-out',
                            }}
                            smooth
                        >
                            {t('contact')}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Intro;

import { useState } from 'react';
import img2 from '../images/law.png';
import img3 from '../images/real-estate.png';
import img4 from '../images/project.png';
import img5 from '../images/currency.png';
import NavBar from './Navbar/NavBar';
import { useTranslation } from 'react-i18next';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Style } from '../style';
import DialogBox from './Dialog';

const Services = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({ title: "", description: "" });

    const images =
        [
            { img: img5, title: "banking", description: 'bankingpres' },
            { img: img2, title: "judicial", description: 'judicialpres' },
            { img: img3, title: "realestate", description: 'realestatepres' },
            { img: img4, title: "project", description: 'projectpres' }
        ]

    const handleClickOpen = (item) => {
        setCurrentItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <NavBar />
            <Grid container id="services" className="bg-gray-100 py-12" sx={{ paddingY: '12px' }}>
                <Grid item xs={12} data-aos="zoom-in-down">
                    <Grid item xs={12} className="my-4 py-4">
                        <Typography sx={{ color: Style.primary }} variant="h2" component="h2" align="center" color="primary" fontWeight="bold" gutterBottom>
                            {t('service')}
                        </Typography>
                        <Typography sx={{ color: Style.blueGray400, fontFamily: "Raleway" }} variant="h2" component="h2" align="center" color="primary" fontWeight="semibold" fontSize="1.5rem" gutterBottom>
                            {t('servicepres')}
                        </Typography>
                    </Grid>

                    <Grid container spacing={5} className="px-12" data-aos="fade-down" data-aos-delay="600">
                        {images?.map((item, i) => (
                            <Grid item xs={12} sm={6} lg={3} key={i}>
                                <Card className="transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:green hover:text-white rounded-lg shadow-2xl group"
                                    onClick={() => handleClickOpen(item)}>
                                    <CardMedia component="img" image={item.img} alt="card img" className="rounded-t group-hover:scale-[1.08] transition duration-1000 ease-in-out" style={{ cursor: "pointer" }} />
                                    <CardContent className="m-2 text-justify text-sm">
                                        <Typography onClick={() => handleClickOpen(item)} sx={{ fontSize: "20px", color: Style.blueGray400, fontFamily: "Raleway" }} variant="h2" className="font-semibold my-4 text-2xl text-center">{t(item.title)}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >

            <DialogBox open={open} handleClose={handleClose} item={currentItem} />
        </>
    )
}

export default Services;

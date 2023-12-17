import { Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Style } from '../style';
import FormDialog from './FormDialog';
const Cta = () => {
    const [isOpen, setisOpen] = useState(false);
    const { t } = useTranslation()
    const handleOpenConsultaitonDialog = () => {
        setisOpen(true)
    }
    return (
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <Typography sx={{ color: Style.primary }} variant="h5" component="p" className="mb-4 text-blue-900 font-bold">
                            {t('cta1')}
                        </Typography>
                        <Typography sx={{ color: Style.white }} variant="h6" component="p" className="text-xl md:text-2xl">
                            {t('cta2')}
                        </Typography>
                    </div>

                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <span style={{ backgroundColor: "transparent" }} onClick={handleOpenConsultaitonDialog} className="bg-transparent border hover:bg-blue-900  text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">{t('contactus')}
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <FormDialog open={isOpen} handleClose={() => setisOpen(false)} />
                )

            }
        </div>
    );
}

export default Cta;
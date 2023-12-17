import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { Box, Typography } from '@mui/material';
import { Style } from '../style';
import Routes from '../routes';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <Box
                sx={{
                    backgroundColor: `linear-gradient(to right, ${Style.primary.main}, ${Style.blueGray200})`,
                    borderTop: `1px solid ${Style.blueGray300}`,
                    py: '30px',
                }}
            >
                <Box
                    className="max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b"
                    sx={{
                        background: `linear-gradient(to right, ${Style.primary.main}, ${Style.blueGray200})`,
                        borderTop: `1px solid ${Style.blueGray300}`,
                        padding: '30px 0',
                    }}
                >
                    <Box className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 lg:ml-11"
                        sx={{ marginLeft: "20%", display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '20px' }}
                    >
                        {/* 1st block */}
                        <Box className="col-span-12 lg:col-span-4">
                            <Box
                                className="box-border border-b-4 border-blue-900 p-8 text-gray-600 text-center rounded-lg xl:w-80 mx-auto"
                                sx={{
                                    border: `4px solid ${Style.primary}`,
                                    backgroundImage: `linear-gradient(to bottom, ${Style.blueGray200}, ${Style.primary})`,
                                    color: Style.gray600,
                                    textAlign: 'center',
                                    borderRadius: '8px',
                                    width: 'fit-content',
                                    mx: 'auto',
                                    px: '2rem',
                                    py: '1rem',
                                }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '2rem', mb: '1rem' }}>
                                    {t('company')}
                                </Typography>
                                <Box className='text-md font-medium text-gray-600' sx={{ flexDirection: 'column' }}>

                                    <Typography variant="p" sx={{ mb: '0.5rem' }}>
                                        {t('country')}
                                    </Typography>
                                    <br />
                                    <Typography variant="p" sx={{ mb: '0.5rem' }}>
                                        {t("email")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>


                        {/* 4th block */}
                        <Box className="col-span-12 text-center mx-auto lg:col-span-3 font-bold text-blue-900">
                            <Typography variant="h6" sx={{ color: Style.blueGray300, fontSize: '1.5rem', mb: '1rem' }}>
                                {t('socialmedia')}
                            </Typography>

                            <Box className="text-md font-medium mb-6">

                                <Box className="mx-auto text-center mt-2">
                                    <ul className="flex justify-center mb-4 md:mb-0">
                                        <li>
                                            <a
                                                href={Routes.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                                aria-label="Twitter"
                                            >
                                                <svg style={{ color: Style.greenColor }} className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="ml-4">
                                            <a
                                                href={Routes.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                                aria-label="Facebook"
                                            >
                                                <svg style={{ color: Style.greenColor }} className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4"
                        sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mx: 'auto', px: '4px' }}
                    >
                        <Box className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <Box className="text-sm text-gray-200 font-semibold py-1">
                                <LanguageSwitcher />

                                <Typography variant="caption" sx={{ color: Style.blueGray200, fontSize: '0.875rem', fontWeight: 'bold', py: '0.25rem' }}>
                                    &copy; {new Date().getFullYear()}{' '}
                                    <HashLink to={Routes.home} className="hover:text-gray-900">
                                        {t('company')}
                                    </HashLink>
                                    . All rights reserved.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;

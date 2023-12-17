/**Currency AutoComplete Component */
import { useEffect, useState } from 'react';
/*
    Material UI Imports
*/
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
/*
    Local config Imports
*/
import i18n from '../../i18n';
import { Style } from '../../style';
import TextField from '../TextField';
import { ISO_COUNTRIES, setFlag } from '../../utils';


export default function Country(props) {
    const { disabled, disableClearable, required, label, error, value, onChange, infoTooltip, small, companyCountry } = props;
    const [defaultValue, setDefaultValue] = useState();

    //sort countries by alphabetic order
    var countries = ISO_COUNTRIES;
    countries.sort((countryA, countryB) => (countryA.countryName.toUpperCase() > countryB.countryName.toUpperCase()) ? 1 : -1);

    useEffect(() => {
        let selectedItem = ISO_COUNTRIES.find((item) => {
            return item.iso === value;
        });
        setDefaultValue(selectedItem);

    }, [value]);
    return (
        <Autocomplete
            id="currency-select"
            value={defaultValue || null}
            options={countries}
            disableClearable={disableClearable}
            sx={{ width: "100%" }}
            autoHighlight
            freeSolo={disabled}
            disabled={disabled}
            onChange={(event, value, raison) => { raison === "clear" && setDefaultValue(null); onChange(value); }}
            getOptionLabel={(option) => option.countryName}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={setFlag(option, true)}
                        alt=""
                    />
                    <span id={"country-item-" + option.countryName} style={{ fontFamily: Style.MontserratRegular }}>{option.countryName}</span>
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    small={small}
                    error={error}
                    infoTooltip={infoTooltip}
                    helperText={error && i18n.t('EN_MANDATORY_FIELD')}
                    {...params}
                    label={label}
                    required={required}
                    size="small"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            defaultValue ? <InputAdornment position="start" sx={{ ml: 1, '& > img': { mr: "-10px", flexShrink: 0 } }}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={setFlag(defaultValue, true)}
                                    alt=""
                                />
                            </InputAdornment> : null
                        ),
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

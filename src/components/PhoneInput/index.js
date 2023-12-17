import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberValidation = ({ phone, setFullPhoneNumber }) => {
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setFullPhoneNumber && setFullPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div>
            <label>
                Phone Number:
                <PhoneInput
                    country={'tn'}
                    value={phone}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                    }}
                />
            </label>
            {!valid && (
                <p>Please enter a valid phone number.</p>
            )}
        </div>
    );
};

export default PhoneNumberValidation;
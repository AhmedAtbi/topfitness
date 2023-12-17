/** TextField Compoenent */
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
/**
 *  Local Imports
 */
import { Style } from "../../style";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: Style.blueGray500,
        paddingRight: "0px",
    },
    "& .MuiInputBase-root": {

        marginLeft: "5px !important",
        borderRadius: "7px !important",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: Style.blueGray500,
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: Style.blueGray500,
        },
        "&.Mui-focused fieldset": {
            borderColor: Style.blueGray500,
        },
    },
});

export default function InputTextField({ label, required, infoTooltip, small, placeholder, ...other }) {

    return (
        <Box sx={{ width: "100%" }}>
            <Stack
                spacing={1}
                direction={"row"}
                alignItems="center"
                sx={{ marginBottom: "8px" }}
            >


            </Stack>
            <Box spacing={0}>
                <CssTextField placeholder={placeholder} hiddenLabel size="small" {...other} fullWidth />
            </Box>
        </Box>
    );
}

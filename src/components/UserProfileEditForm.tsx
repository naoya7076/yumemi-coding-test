import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField, {TextFieldProps} from "@mui/material/TextField";

export type UserProfileEditFormProps = {
  userName: Pick<TextFieldProps, "defaultValue" | "onChange">;
  mailAddress: Pick<TextFieldProps, "defaultValue" | "onChange">;
  language: Pick<TextFieldProps, "defaultValue" | "onChange">;
  photoUrl: Pick<TextFieldProps, "defaultValue" | "onChange">;
};

export const UserProfileEditForm: React.FC<UserProfileEditFormProps> = props => {
    const userNameProps: TextFieldProps = {
        ...props.userName,
        name: "username",
    };
    const mailAddressProps: TextFieldProps = {
        ...props.mailAddress,
        name: "mailAddress",
    };
    const languageProps: TextFieldProps = {
        ...props.language,
        name: "language",
    };
    const photoUrlProps: TextFieldProps = {
        ...props.photoUrl,
        name: "photoUrl",
    };
    return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <TextField {...userNameProps} />
        </Grid>
        <Grid item xs={6}>
          <TextField {...mailAddressProps} />
        </Grid>
        <Grid item xs={6}>
          <TextField {...languageProps} />
        </Grid>
        <Grid item xs={6}>
          <TextField {...photoUrlProps} />
        </Grid>
      </Grid>
    </Box>
  );
};

UserProfileEditForm.displayName = "UserProfileEditForm";

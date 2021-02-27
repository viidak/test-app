import React from "react";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Link,
    Grid,
    Typography,
    makeStyles,
    Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp({ setLoggedInData }) {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                id="name"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                id="last_name"
                                label="Last Name"
                                name="last_name"
                                autoComplete="last_name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                id="user_name"
                                label="Username"
                                name="user_name"
                                autoComplete="user_name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="gender"
                                    row
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="other"
                                        control={<Radio selected />}
                                        label="Other"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                name="phone"
                                label="Phone Number"
                                type="tel"
                                id="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

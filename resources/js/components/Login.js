import React, { useState } from "react";
import axios from "axios";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    makeStyles,
    Container,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn({ setLoggedInData }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        user_name: "",
        password: "",
    });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        axios.post("/auth/login", values).then((response) => {
            setLoggedInData(response.data);
            if (response.data.user.user_role == "admin") {
                window.location = "/admin-view";
            } else if (response.data.user.user_role == "user") {
                window.location = "/user-view";
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        id="user_name"
                        label="Username"
                        name="user_name"
                        autoComplete="user_name"
                        autoFocus
                        value={values.user_name}
                        onChange={set("user_name")}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={set("password")}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

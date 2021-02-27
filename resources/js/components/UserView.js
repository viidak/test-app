import React from "react";
import {
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    makeStyles,
    Container,
} from "@material-ui/core";

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

export default function SignUp({ loggedInData }) {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create a callback request
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="order_number"
                                name="order_number"
                                variant="outlined"
                                fullWidth
                                size="small"
                                id="order_number"
                                label="Order Number"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline={true}
                                size="small"
                                id="description"
                                label="Issue/Description"
                                name="description"
                                autoComplete="description"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                id="date_time"
                                type="datetime-local"
                                label="Date and Time of Callback"
                                name="date_time"
                                required
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
                        Callback Request
                    </Button>
                </form>
            </div>
        </Container>
    );
}

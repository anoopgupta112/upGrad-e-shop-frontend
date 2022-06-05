import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Items", "Select Address", "Confirm Order"];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div className="leftDetails" style={{ display: "grid", justifyItems: "center", justifyContent: "center", margin: '20vh' }}>
                    <Grid container spacing={3}>
                        <div className="cardSpace">
                            <img
                                height="350px"
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg"
                                alt="title"
                            />
                        </div>
                        <div className="middleDetails">
                            <div>
                                <Typography variant="headline" component="h2">
                                    iPhone 12{" "}
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold">Quantity:</span> 1
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold">Category:</span> Electronic
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold"> Rating:</span> critics_rating{" "}
                                </Typography>
                            </div>
                            <br />
                            <div className="marginTop16">
                                <Typography color="secondary">
                                    <span className="bold">Total Price: Rs. 10000</span>
                                </Typography>
                            </div>
                            <br />
                        </div>
                    </Grid>
                </div>
            );
        case 1:
            return (
                <div>
                    <div>
                        <label>Select Address</label>
                        <select class="form-select container" aria-label="Default select example" >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <br />
                    <div className="text-center">-OR-</div>
                    <br />
                    <span className="add-address"><b>Add Address</b></span><br /><br />
                    <div >

                        <form className="container" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        autoComplete="name"
                                        name="Name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="contactNumber"
                                        label="Contact Number"
                                        name="contactNumber"
                                        autoComplete="contactNumber"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="street"
                                        label="Street"
                                        name="street"
                                        autoComplete="street"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        name="city"
                                        autoComplete="city"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="state"
                                        label="State"
                                        name="state"
                                        autoComplete="state"
                                    /><br />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="landmark"
                                        label="Landmark"
                                        name="landmark"
                                        autoComplete="landmark"
                                    />
                                </Grid><br />
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="zipCode"
                                        label="Zip Code"
                                        name="zipCode"
                                        autoComplete="zipCode"
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                    onClick="submitForm"
                                >
                                    Add Address
                                </Button>
                            </Grid>
                        </form>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="row" style={{ display: "grid", justifyItems: "center", justifyContent: "center", margin: '20vh' }}>
                    <Grid container spacing={3}>
                        <div className="middleDetails">
                            <div>
                                <Typography variant="headline" component="h2">
                                    iPhone 12{" "}
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold">Quantity:</span> 1
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold">Category:</span> Electronic
                                </Typography>
                            </div>
                            <br />
                            <div>
                                <Typography>
                                    <span className="bold"> Rating:</span> critics_rating{" "}
                                </Typography>
                            </div>
                            <br />
                            <div className="marginTop16">
                                <Typography color="secondary">
                                    <span className="bold">Total Price: Rs. 10000</span>
                                </Typography>
                            </div>
                            <br />
                        </div>
                        <div>
                            <h1>Address Details</h1>
                        </div>
                    </Grid>
                </div>
            );
        default:
            return "Unknown step";
    }
}

export default function CreateOrder() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center", marginTop: 0 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Skip
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}>
                                {activeStep === steps.length - 1 ? "PLACE ORDER" : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";

import authService from "../Auth/service.auth";
import CardMedia from '@mui/material/CardMedia';

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

import { Button, Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Details() {
    const classes = useStyles();
    const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const [value, setValue] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/products').then((val) => {
            console.log(val.data);
            setValue(val.data);
        })
    }, [])


    return (


        <div style={{ display: "grid", justifyItems: "center", margin: '20vh' }
        }>
            {authService.isLoggedIn() && (

                <Card className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={"https://rukminim1.flixcart.com/image/800/960/knxiavk0/shoe/a/r/b/6-hkz70-7-reebok-smoky-indigo-vector-original-imag2hwk8h5xq6a3.jpeg?q=50"}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <CardActions>
                                <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
                                    EMERGO RUNNER Shoes
                                </Typography>

                            </CardActions>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Unique new design with an amalgamation of PU and textile mesh. PU at the rearfoot for motion and protection.
                                Full EVA outsole responsible for traction and responsiveness.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" style={{ marginLeft: "30%" }}>


                            <Link to='/createOrder'>
                                <span style={{ color: "white" }}>
                                    Place Order
                                </span>
                            </Link>


                        </Button>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >

                        </IconButton>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >

                        </IconButton>
                    </CardActions>
                </Card>
            )}
            {!authService.isLoggedIn() && (
                <div style={{ color: "red" }}>Please login first</div>)}
        </div >
    );
}
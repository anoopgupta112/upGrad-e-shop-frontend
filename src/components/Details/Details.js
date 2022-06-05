import React, { useEffect, useState } from "react";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import CardMedia from '@mui/material/CardMedia';

import { makeStyles } from "@material-ui/core/styles";
import { alpha } from '@material-ui/core/styles';
import axios from "axios";

import { Button, Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";

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
        <div style={{ display: "grid", justifyItems: "center", margin: '20vh' }}>

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
                                {/* {value[1].name} */}
                            </Typography>

                        </CardActions>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* {value[1].description} */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" style={{ marginLeft: "30%" }}>

                        <span style={{ color: "white" }}>
                            Place Order
                        </span>

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
        </div>
    );
}
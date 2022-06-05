import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/ModeEdit';
import '../products/Product.css'
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import Details from '../Details/Details';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    },

});



export default function Products() {
    const classes = useStyles();
    const [value, setValue] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/products').then((val) => {
            console.log(val.data);
            setValue(val.data);
        })
    }, [])


    return (


        <div className='Grid-Class'>
            {value.map((v) => {
                return (

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={v.imageURL}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <CardActions>
                                    <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
                                        {v.name}
                                    </Typography>

                                </CardActions>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {v.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" >
                                <Link to='/details'>
                                    <span style={{ color: "white" }}>
                                        BUY
                                    </span>
                                </Link>
                            </Button>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                )
            })


            }


        </div>




        // <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        //     {value.map((v) => {
        //         return (

        //             <Card className={classes.root} >
        //                 <CardActionArea>
        //                     <CardMedia
        //                         className={classes.media}
        //                         image={v.imageURL}
        //                         title="Contemplative Reptile"
        //                     />
        //                     <CardContent>
        //                         <CardActions>
        //                             <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
        //                                 {v.name}
        //                             </Typography>

        //                         </CardActions>
        //                         <Typography variant="body2" color="textSecondary" component="p">
        //                             {v.description}
        //                         </Typography>
        //                     </CardContent>
        //                 </CardActionArea>
        //                 <CardActions>
        //                     <Button variant="contained" color="primary">
        //                         BUY
        //                     </Button>
        //                     <IconButton
        //                         edge="start"
        //                         className={classes.menuButton}
        //                         color="inherit"
        //                         aria-label="open drawer"
        //                     >
        //                         <EditIcon />
        //                     </IconButton>
        //                     <IconButton
        //                         edge="start"
        //                         className={classes.menuButton}
        //                         color="inherit"
        //                         aria-label="open drawer"
        //                     >
        //                         <DeleteIcon />
        //                     </IconButton>
        //                 </CardActions>
        //             </Card>
        //         )
        //     })}

        // </div>


    );






}



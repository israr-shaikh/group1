import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import '../../../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      maxWidth: 345,
    },
  }));

export default function ProductDetails() {
    const [product,setProduct]=useState({brand:'KOBO'});
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://api.hnrretail.com/products/735')
        .then(function (response) {
          // handle success
          setProduct(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, []);
    return (
        console.log(product),
        <div>
            <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="360"
          image={"https://petapixel.com/assets/uploads/2017/03/product1.jpeg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
          KOBO
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          KOBO BRAND
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          </Paper>
        </Grid>
        </div>
    )
}


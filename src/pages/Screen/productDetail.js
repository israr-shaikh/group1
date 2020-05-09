import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import axios from "axios"
import "../../../App.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    maxWidth: 500,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}))

export default function ProductDetails(props) {
  const [product, setProduct] = useState({ brand: "KOBO" })
  const [isLoading, setLoading] = useState(true)
  const classes = useStyles()
  let { productId } = props.match.params
  useEffect(() => {
    axios
      .get(`https://api.hnrretail.com/products/${productId}`)
      .then(function (response) {
        setProduct(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  let { brand, display_name, pricing, short_desc, images } = product
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className={classes.container}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="360"
                image={"//" + images[0].url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  {brand}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {display_name.en}
                </Typography>
                <Typography gutterBottom variant="h5" component="h1">
                  {pricing.currency} {pricing.list}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {short_desc.en}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </div>
  )
}

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const styles = theme => ({
  block: {},
  card: {
    width: 345,
    height: '500px',
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 140
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    color: theme.palette.text.secondary
  }
});

class News extends Component {
  render() {
    const { classes } = this.props;
    const { news } = this.props;
    return (
      <>
        <div className={classes.block}>
          <Paper className={classes.paper}>
            {news.map(item => (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.urlToImage}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography component="p">{item.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={item.url} size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Paper>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(News));

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    color: theme.palette.text.secondary
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h2" component="h2">
            Данное приложения создано для TZ #1 v.2.0
          </Typography>
          <Typography gutterBottom variant="h3" component="h3">
            Выражая огромную благодарность моему непосредственному наставнику
            Юрию Маркову, а также Максим Пацианскому за его неповторымие учебные
            материалы!
          </Typography>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Home);

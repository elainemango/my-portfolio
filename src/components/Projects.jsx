import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import PageviewSharpIcon from '@material-ui/icons/PageviewSharp';


function Projects(props) {
  const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 140 },
  });
  const classes = useStyles();

  return <div> 
    <Card className={classes.card} style= {{ margin: "5px" }}>
      <CardMedia className={classes.media} image= {props.img}/>
      <CardContent className="project-card">
        <Typography gutterBottom variant="h5" component="h2"> {props.title} </Typography>
        <div className="project-text" style= {{ textAlign: "center" }}>
          <IconButton href= {props.link} target="_blank" rel="noopener noreferrer"><PageviewSharpIcon /></IconButton>
          <IconButton href= {props.code} target="_blank" rel="noopener noreferrer"><CodeIcon /></IconButton>
        </div>
        <Typography className="project-text" variant="body2" component="p"> {props.description} </Typography>
      </CardContent>
    </Card>
  </div>
}

export default Projects;
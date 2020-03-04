import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        //   paddingLeft: theme.spacing.unit *20
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 6,
        padding: `${theme.spacing.unit * 6}px 0`,
        marginLeft: theme.spacing(30),
    },
    title: {
        FlexGrow: 1
    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">
                
                <Typography component="h2">
                    Developed BY:@KP_PANDEY
                   
                </Typography>
                <br></br>
                <Typography>
                @2018 All right reserved
                </Typography>
            </Grid>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
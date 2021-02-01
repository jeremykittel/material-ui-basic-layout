import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from './item';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item>
                    <Item />
                </Grid>
                <Grid item>
                    <Item />
                </Grid>
                <Grid item>
                    <Item />
                </Grid>
                <Grid item>
                    <Item />
                </Grid>
                <Grid item>
                    <Item />
                </Grid>
                <Grid item>
                    <Item />
                </Grid>
            </Grid>
        </div>
    );
}
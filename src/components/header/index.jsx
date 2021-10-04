import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar, IconButton, Typography, Button, Link} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import './style.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
        const classes = useStyles();
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        МаксTracker
                    </Typography>
                    <Link href="https://ru.reactjs.org/">
                        <Typography variant="h6">React Docs</Typography>
                    </Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
}

import React, {useState} from 'react';
import {Card, Typography, CardContent, CardActions, IconButton, Box, Input} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './style.scss';

const handleClick = (e) => {
    // var val = this.state;
    // console.log(val);
    // this.state.taskText
    return(
        <Box className={"card__box"}>
            <Typography variant="h5" component="h2">
                Title task
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="close" size="small">
                <CloseIcon></CloseIcon>
            </IconButton>
        </Box>
    )
};

const temp = ()=>{
    console.log('temp')
}

export default function SimpleCard({props, saveToDo}) {
    const [newTask, setNewTask] = useState('');

    return (
        <form onChange={event => {event.preventDefault();temp();}}>
            <Card className={"card"}>
                <CardContent className={"card__wrapper"}>
                    <Box className={"card__box"}>
                        <Typography variant="h5" component="h2">
                            Title task
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="close" size="small">
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </Box>
                    <Box>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>
                                    Red
                                    {/*{props.newTask}*/}
                                </span>
                            </label>
                        </p>
                    </Box>
                    <CardActions className={"card__actions"}>
                        <Input placeholder="enter text of task" onChange={event => setNewTask(event.target.value)} value={newTask}/>
                        <IconButton size="small" onClick={handleClick}>
                            <AddCircleIcon></AddCircleIcon>
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </form>
    );
}

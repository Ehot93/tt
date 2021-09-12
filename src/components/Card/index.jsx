import React, {useState} from 'react';
import {Card, Typography, CardContent, CardActions, IconButton, Box, Input} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Item from './Item';
import './style.scss';

export default function SimpleCard() {
    const [task, setNewTask] = useState({
        items: [
            {
                text: 'do todo',
                id: 1
            }
        ]
    });
    const [textTask, setTextTask] = useState('12');

    const handleChange = (e) => {
        setTextTask(e.target.value);
        console.log('handleChange', textTask);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = [{
            text: textTask.toString(),
            id: Date.now()
        }];
        console.log('handleSubmit ', task);
        // setNewTask({items: task.items.concat(newItem)});
        const temp = [...task.items, ...newItem];
        setNewTask({task: temp}
            );
        // setNewTask([
        //     ...task.items,
        //     {items: newItem}
        // ]);
        console.log('handleSubmit ', task);
    };
    return (
        <form onSubmit={handleSubmit}>
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
                        {/*<Item props={task.items}/>*/}
                        <ul className="12z">
                            {/*{task.items.map(item => {*/}
                            {/*    <li key={item.id}>{item.text}</li>*/}
                            {/*})}*/}
                        </ul>
                    </Box>
                    <CardActions className={"card__actions"}>
                        <Input placeholder="enter text of task"
                               onChange={handleChange}
                               value={task.text}/>
                        {/*<IconButton size="small">*/}
                        <button>
                            <AddCircleIcon></AddCircleIcon>
                        </button>
                        {/*</IconButton>*/}
                    </CardActions>
                </CardContent>
            </Card>
        </form>
    );
}

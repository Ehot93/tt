import React, {useState, useEffect} from 'react';
import {FormControlLabel, Card, Typography, CardContent, CardActions, IconButton, Box, Input, Checkbox} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import ListItem from './ListItem';
import './style.scss';

export default function SimpleCard() {
    const [tasks, addTask] = useState([
            {
                text: 'text',
                isChecked: false,
                id: Date.now()
            }
        ]
    );
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.length === 0){
            return;
        }
        const newItem = {
            text: text,
            isChecked: false,
            id: Date.now()
        }
        addTask([
            ...tasks,
            ...[{
                text: text,
                isChecked: false,
                id: Date.now()
            }]
        ])
        console.log(tasks);
    }

    const handleCheck = (e)=>{
        console.log(e)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card className={"card"}>
                <CardContent className={"card__wrapper"} id="container">
                    <Box className={"card__box"}>
                        <Typography variant="h5" component="h2">
                            Title task
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="close" size="small">
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </Box>
                    <Box>
                        <FormControlLabel control={
                            <Checkbox/>}
                                          label="check123"
                        />
                    </Box>
                    {tasks.map(item => {
                        return(
                            <Box key={item.id}>
                                <FormControlLabel className="ul22" control={
                                    <Checkbox onChange={item => !item.isChecked} checked={item.isChecked}/>}
                                                  label={item.text}
                                />
                            </Box>
                        )
                    })}
                    {/* <ListItem props={tasks}/> */}
                    <CardActions className={"card__actions"} id="cardActions">
                        <Input id="input" placeholder="enter text of task"
                               onChange={handleChange} value={text}
                        />
                        <button>
                            <AddCircleIcon></AddCircleIcon>
                        </button>
                    </CardActions>

                </CardContent>
            </Card>
        </form>
    )
}

import React, {useState, useEffect} from 'react';
import {FormControlLabel, Card, Typography, CardContent, CardActions, IconButton, Box, Input, Checkbox} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './style.scss';

export default function SimpleCard() {
    const [tasks, setTask] = useState([
            {
                text: 'text',
                isChecked: true,
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
        // const newItem = {
        //     text: text,
        //     isChecked: true,
        //     id: Date.now()
        // };
        setTask([
            ...tasks,
            ...[{
                text: text,
                isChecked: false,
                id: Date.now()
            }]
        ]);
        // console.log(tasks);
    };

    const handleCheck = (e) => {
        e.preventDefault();
        console.log('item',e.target.checked);
        e.target.checked = !e.target.checked;
        const container = document.getElementById('container');
        const items = container.querySelectorAll('.card__item');
        // console.log('items:', items);
        let ara = [];
        ara.push(...items);
        // console.log('ara',ara);
        // return (item.isChecked = !item.isChecked);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Card className={"card"}>
                <CardContent className={"card__wrapper"} id="container">
                    <div className={"card__box"}>
                        <Typography variant="h5" component="h2">
                            Title task
                        </Typography>
                        <IconButton edge="start" aria-label="close" size="small">
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </div>
                    {/*<Box>*/}
                    {/*    <FormControlLabel control={*/}
                    {/*        <Checkbox checked={true}/>}*/}
                    {/*          label="check123"*/}
                    {/*    />*/}
                    {/*</Box>*/}
                    {tasks.map((item, index) => {
                        return(
                            <Box className={'card__item'} key={item.id}>
                                <FormControlLabel control={
                                    <Checkbox checked={item.isChecked} onClick={handleCheck}/>}
                                      label={item.text}
                                />
                            </Box>
                        )
                    })}
                    {/* <ListItem props={tasks}/> */}
                    <CardActions className={"card__actions"} id="cardActions">
                        <Input id="inputText" placeholder="enter text of task"
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

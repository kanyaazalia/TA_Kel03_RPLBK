import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
    } from "@mui/material";
import React from "react";

function NewProductsCard({ title, body, avatar }) {
    return (
        <ListItem sx={{ flexDirection: 'column'}}>
            <ListItemAvatar>
                <Avatar alt="picture" src={avatar} sx={{ width: 150, height: 150 }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h5">{title}</Typography>}
            />
            <ListItemText
                secondary={<Typography variant="p">{body}</Typography>}
            />
        </ListItem>
    );
}

export default NewProductsCard;
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
    } from "@mui/material";
import React from "react";

function NewProductsCard({ title, description, price }) {
    return (
        <ListItem>
            <ListItemText
                primary={<Typography variant="h5">{price}$</Typography>}
            />
            <ListItemAvatar>
                <Avatar alt="picture" src="https://i.pinimg.com/564x/94/50/19/945019969966ccf52def88bb69dace73.jpg" sx={{ width: 100, height: 100, ml: 5, mr: 2 }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h5">{title}</Typography>}
                secondary={<Typography variant="p">{description}</Typography>}
            />
        </ListItem>
    );
}

export default NewProductsCard;
import { Delete } from "@mui/icons-material";
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
    } from "@mui/material";
import React from "react";

function ProductCard({ thumbnail, title, description, price, onDelete }) {
    return (
        <ListItem>
            <ListItemText
                primary={<Typography variant="h5">{price}$</Typography>}
            />
            <ListItemAvatar>
                <Avatar alt="picture" src={thumbnail} sx={{ width: 100, height: 100, ml: 5, mr: 2 }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h5">{title}</Typography>}
                secondary={<Typography variant="p">{description}</Typography>}
            />

            <IconButton onClick={onDelete}>
                <Delete />
            </IconButton>
        </ListItem>
    );
}

export default ProductCard;
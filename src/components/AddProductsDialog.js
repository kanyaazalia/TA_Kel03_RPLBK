import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
  } from "@mui/material";
  import axios from "axios";
  import React, { useState } from "react";
  
  const BASE_API_URL = `https://dummyjson.com/products`;
  
  function AddPostDialog({ open, onClose, products, setProducts }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
  
    const handleSubmit = () => {
      axios
        .post(`${BASE_API_URL}/add`, {
          title: title,
          description: description,
          price: price,
          thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png',
          category: 'automotive'
        })
        .then((res) => {
          setProducts([...products, res.data]);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Data</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            padding: "8px 20px"
          }}
        >
          <TextField
            name="title"
            label="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            name="description"
            label="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            name="price"
            label="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default AddPostDialog;

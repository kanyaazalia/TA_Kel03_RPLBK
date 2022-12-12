import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './Products.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { List, Paper, Typography, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import ProductsCard from "../components/ProductsCard.js";
import NewProductsCard from "../components/NewProductsCard.js";
import AddProductsDialog from "../components/AddProductsDialog.js";

const BASE_API_URL = `https://dummyjson.com/products`;

function Products() {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    const inputRef = useRef()
  
    useEffect(() => {
      async function getProducts() {
        await axios
          .get(`${BASE_API_URL}/category/automotive`)
          .then((res) => {
            const responseData = res.data;
            console.log(responseData.products);
            setProducts(responseData.products);
          })
          .catch((error) => {
            console.log(error);
            window.alert(error);
          })
      }
  
      getProducts();
    }, []);
  
    const openDialog = () => {
      setIsDialogOpen(true);
    };
  
    const closeDialog = () => {
      setIsDialogOpen(false);
    };
  
    const handleDeleteProducts = (id, idx) => {
        async function delProducts() {
          await axios
            .delete(`${BASE_API_URL}/${id}`)
            .then((res) => {
              let arr = products;
              if (idx !== -1) {
                arr.splice(idx, 1)
              }
              setProducts([...arr]);
            })
            .catch((error) => {
              console.log(error);
              window.alert(error);
            })
        }
    
        delProducts();
      };
  
    return (
      <div className="productsList">
        <div className="list-container">
          <div className="list-title-wrapper">
            <Typography variant="h4" className='list-title'>Products</Typography>
              <input
              style={{ width: "30%", height: "25px" }}
              type="text"
              placeholder="Search..." ref={inputRef}
              onChange={(e) => setSearchTitle(e.target.value)}
              />
            <IconButton onClick={openDialog}>
            <AddCircle />
            </IconButton>
          </div>
          
          <Paper elevation={2} style={{ maxHeight: "500px", overflow: "auto" }}>
            <List>
              {products.filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.title.toLowerCase().includes(inputRef.current.value.toLowerCase())
                    ) {
                      return value;
                    }
                  })
              .map((d, idx) => (
                <ProductsCard
                  key={d.id}
                  thumbnail={d.thumbnail}
                  title={d.title}
                  description={d.description}
                  price={d.price}
                  onDelete={() => handleDeleteProducts(d.id, idx)}
                />
              ))}
              {newProducts.map((d, idx) => (
                <NewProductsCard
                key={d.id}
                title={d.title}
                description={d.description}
                price={d.price}
                />
              ))}
            </List>
          </Paper>
        </div>
        {isDialogOpen && (
          <AddProductsDialog
            open={isDialogOpen}
            onClose={closeDialog}
            products={newProducts}
            setProducts={setNewProducts}
          />
        )}
      </div>
    );
  }
  
  export default Products;  
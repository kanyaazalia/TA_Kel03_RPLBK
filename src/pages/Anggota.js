import './Anggota.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { React, useEffect, useState } from 'react';
import { List, Paper, Typography, IconButton } from "@mui/material";

import DataAnggota from '../data/DataAnggota.js'
import AnggotaCard from '../components/Card.js'

function Anggota() {
    return (
        <div className='anggotaList'>
            <div className="list-container-anggota">
            <div className="list-title-wrapper-anggota">
                <Typography variant="h4" className='list-title-anggota'>Anggota Kelompok 3</Typography>
            </div>
            
            <Paper elevation={2} style={{ maxHeight: "500px", overflow: "auto" }}>
                <List>
                {DataAnggota.map((d, idx) => (
                    <AnggotaCard
                    key={d.id}
                    title={d.title}
                    body={d.body}
                    avatar={d.avatar}
                    />
                ))}
                </List>
            </Paper>
            </div>
        </div>
    );
}

export default Anggota;
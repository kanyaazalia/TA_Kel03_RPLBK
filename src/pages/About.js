import './About.css';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RiTeamFill } from "react-icons/ri";

import { Route, NavLink, Routes } from "react-router-dom";
import Clock from '../components/iniJam';
import AboutCard from '../components/Card.js'

function About() {
    return (
        <div className='about-wrapper'>
        <div>
            <Clock/>
        </div>
            <AboutCard
                avatar={"https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-car-icon-png-image_4292542.jpg"}
                title={"Tugas Akhir Kelompok 3"}
                body={"Berikut merupakan aplikasi yang dibuat oleh Kelompok 3 sebagai Tugas Akhir Praktikum RPLBK. Aplikasi ini dapat menampilkan, menambahkan, serta menghapus data katalog produk aksesori automotif melalui API. (dll isi disini ya gaes bisa apa aja)"}
            />

            <NavLink to="/about/anggota" className="icon-wrapper">
                <RiTeamFill className="icon-anggota" />
                Anggota Kelompok
            </NavLink>
        </div>
    );
}

export default About;
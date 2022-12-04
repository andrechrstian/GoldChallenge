import './HasilPencarian.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HasilPencarian = (props) => {
const {carData}= props 

    return (
        
        <div className="card-wrapper">
        {!!carData.length ? carData.map((item) => (
            <div className="car-card" >
                <div className="img-container">
                    <img className='gambMobil' src={item.image} />
                </div>
                <div className='dtl-container'>
                    <p>{item.name}</p>
                    <h2>{item.price}/ hari</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <Link to={`/detailPage/${item.id}` }>
                    <button className='pilihMobil' > Pilih Mobil </button>
                </Link>
                
            </div>
        )) : <h1>data tidak ditemukan</h1>}
        </div>

    )
}

export default HasilPencarian
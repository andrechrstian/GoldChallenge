import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './APIPanggilan.css'


const APIPanggilan = () => {

    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then ( (res) => {
            console.log (res);
            setCar(res.data);
            })
        .catch((err) => console.log (err.message))

    }, [])


    return (
        <div class = "cardetailcon container"> 
            <div class ="cardetailrow row">
                <div class ="carDetail1 col"> 
                    <h1>Tentang Paket</h1>

                    <h2>Include</h2>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li> 
                    <li>Sudah termasuk Tiket Wisata</li> 
                    <li>Sudah termasuk pajak</li> 

                    <h2>Exclude</h2>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari  </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam  </li>
                    <li>Tidak termasuk akomodasi penginapan  </li>

                    <h2>Refund, Reschedule, Overtime </h2>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan </li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>

                </div>
                <div className='carDetail2 col'>
                    <div class='isiDetail'> 
                        {Object.entries(car).length ? (
                            <div className='data-card'>
                                <div className='data-container'>
                                    <img src={car.image} />
                                </div>
                                <div className='datadtl-container'>
                                    <h2>{car.name}</h2>
                                    <p>{car.category}</p>
                                    <p>Total {car.price}</p>
                                </div>
                            </div>    
                        ): (
                            <h1>loading...</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APIPanggilan
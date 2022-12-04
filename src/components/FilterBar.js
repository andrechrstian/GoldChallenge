import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './FilterBar.css'



const FilterBar = (props) => {
    const {handleChangeCarName,handleChangeCarCategory,handleChangeCarPrice,handleClickFilter} = props
    
    const [hideFilter, setHideFilter] = useState (false)
    const location = useLocation() 
    const {id} = useParams()
    useEffect (()=>{
        if (location.pathname ===`/detailPage/${id}`){
            setHideFilter(true)
        }
        console.log (hideFilter)
    },[])

    
    
   
    
    return (
        <div class = "filter-Bar">

            <div class="filCon container">
                <div class="filRow row">
                    <div class="filCol1 col">
                        <div class = "namaMobil">Nama Mobil</div>
                        <input disabled={hideFilter} className='inputMobil' type="text" placeholder='Ketik nama/tipe mobil'
                        onChange={handleChangeCarName}/>
                    </div>
                    <div class="filCol2 col">
                        <div class = "namaMobil">Kategori</div>
                        <select disabled={hideFilter} class = "kapsMobil" onChange={handleChangeCarCategory}>
                            <option disabled selected>Masukan Kapasitas Mobil</option>
                            <option value="small">2-4 Orang</option>
                            <option value="medium">4-6 Orang</option>
                            <option value="large">6-8 Orang</option>
                        </select>
                    </div>
                    <div class="filCol3 col">
                        <div class = "namaMobil">Harga</div>
                        <select disabled={hideFilter} onChange={handleChangeCarPrice} class = "hargaMobil">
                            <option disabled selected>Masukan Harga Sewa per Hari</option>
                            <option value="harga1"> {'< Rp. 400.000'}  </option>
                            <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                            <option value="harga3">{'> Rp. 600.000'}   </option>
                        </select>
                    </div>
                    <div class="filCol4 col">
                        <div class = "namaMobil">Status</div>
                            <select disabled class = "statMobil">
                                <option value="sewa1">Disewa</option>
                                <option value="sewa2">Tidak Disewa</option>
                            </select>
                        </div>
                    <div class="filCol5 col">
                        {hideFilter ? "": <button onClick={handleClickFilter} class ="btnCariMobil">Cari Mobil</button>}
                    </div>
                </div>
            </div>

            

  
         

          
        </div>
    )
}

export default FilterBar
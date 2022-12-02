import './FilterBar.css'


const FilterBar = () => {
    return (
        <div class = "filter-Bar">

            <div class="filCon container">
                <div class="filRow row">
                    <div class="filCol1 col">
                        <div class = "namaMobil">Nama Mobil</div>
                        <input className='inputMobil' type="text" placeholder='Ketik nama/tipe mobil'/>
                    </div>
                    <div class="filCol2 col">
                        <div class = "namaMobil">Kategori</div>
                        <select class = "kapsMobil">
                            <option selected>Masukan Kapasitas Mobil</option>
                            <option value="4orang">2-4 Orang</option>
                            <option value="6orang">4-6 Orang</option>
                            <option value="8orang">6-8 Orang</option>
                        </select>
                    </div>
                    <div class="filCol3 col">
                        <div class = "namaMobil">Harga</div>
                        <select class = "hargaMobil">
                            <option selected>Masukan Harga Sewa per Hari</option>
                            <option value="harga1"> Rp. 400.000  </option>
                            <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                            <option value="harga3">Rp. 600.000 </option>
                        </select>
                    </div>
                    <div class="filCol4 col">
                        <div class = "namaMobil">Status</div>
                            <select class = "statMobil">
                                <option value="sewa1">Disewa</option>
                                <option value="sewa2">Tidak Disewa</option>
                            </select>
                        </div>
                    <div class="filCol5 col">
                        <button class ="btnCariMobil">Cari Mobil</button>
                    </div>
                </div>
            </div>

            

  
         

          
        </div>
    )
}

export default FilterBar
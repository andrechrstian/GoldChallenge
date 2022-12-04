import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import FilterBar from "../components/FilterBar"
import HasilPencarian from "../components/HasilPencarian"
import { useEffect, useState } from "react"
import axios from "axios"
import './SearchPage.css'


const SearchPage = () => {
    const [carData, setCardata] = useState ([]);
    const [carName, setCarName] = useState ("");
    const [carCategory, setCarCategory] = useState ("");
    const [carPrice, setCarPrice] = useState ("");
    const [minPrice, setMinPrice] = useState ("");
    const [maxPrice, setMaxPrice] = useState ("");

    useEffect (() => {
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
            .then ( (res) => {
                setCardata(res.data.cars);
            })
            .catch((err) => console.log (err.message))
            
    }, []);

    const handleChangeCarName = (event) => {
        setCarName (event.target.value)
    }

    const handleChangeCarCategory = (event) => {
        setCarCategory (event.target.value)
    }

    const handleChangeCarPrice = (event) => {
        setCarPrice (event.target.value)
      const carPrice = event.target.value
        if (carPrice === 'harga1') {
            setMinPrice ("")
            setMaxPrice (400000)}
        if (carPrice === 'harga3') {
            setMinPrice (600000)
            setMaxPrice ("")}
        if (carPrice === 'harga2') {
            setMinPrice (400000)
            setMaxPrice (600000) 
        }
    }

    const handleClickFilter = () => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${carName}&category=${carCategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then ( (res) => {
            setCardata(res.data.cars);
        })
        .catch((err) => console.log (err.message))
    }

    return (
        <div className="page2">
            <Header />
            <HeroSection />
            <FilterBar  handleChangeCarName={handleChangeCarName} 
                        handleChangeCarCategory={handleChangeCarCategory}
                        handleChangeCarPrice={handleChangeCarPrice} 
                        handleClickFilter={handleClickFilter}/>
            <HasilPencarian carData={carData}/>
            <div class='footercontainer'> 
                <Footer />
            </div>
        </div>
    )
}

export default SearchPage
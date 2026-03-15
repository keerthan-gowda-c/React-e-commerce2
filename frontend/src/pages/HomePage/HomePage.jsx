import './HomePage.css'
import Carousel from "../../components/Carousel/Carousel";
import carousel_data from "../../data/carousel_data/carousel_data";

export default function HomePage(){
    return(
        <>
        <div className="home_carousel">
        <Carousel images={carousel_data}/>
        </div>
        </>
    )
}
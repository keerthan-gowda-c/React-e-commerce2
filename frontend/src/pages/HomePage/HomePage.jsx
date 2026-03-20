import './HomePage.css'
import Carousel from "../../components/Carousel/Carousel";
import carousel_data from "../../data/carousel_data/carousel_data";
import CategoriesCards from '../../components/Cards/CategoriesCards';
import content_data from '../../data/content_data/content_data';

export default function HomePage() {
    return (
        <>
            <div className="home_carousel">
                <Carousel images={carousel_data} />
            </div>
            <div className='row row-cols-2 row-cols-md-3  w-100'>
                {
                    content_data.map((contents, index) => (
                        <CategoriesCards content={contents} />
                    ))
                }

            </div>
        </>
    )
}
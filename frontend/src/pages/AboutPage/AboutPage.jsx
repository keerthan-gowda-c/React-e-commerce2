import './AboutPage.css'

export default function AboutPage() {
    return (
        <>
        <div>
            <p className='text-center about-head'>
                Welcome To<br /> <span>Gowdru Biryani</span>
            </p>
        </div>
            <div className="about-container row align-items-center mb-5">
                <div className='col-md-6'>
                    <img src="images/icons/favicon.ico" className='img-fluid rounded' alt="" />
                </div>
                <div  className='about-content text-center col-md-6'>
                    <p>
                        Gowdru Biryani is your go-to destination for delicious, 
                        authentic biryani prepared with handpicked spices and high-quality ingredients. 
                        Known for its rich aroma, perfectly cooked rice, and tender meat, every dish reflects true traditional flavors.
                         Whether you're craving a spicy chicken biryani or a hearty meal with friends, Gowdru Biryani promises
                          a satisfying and memorable experience.
                    </p>
                </div>
            </div>
        </>
    )
}
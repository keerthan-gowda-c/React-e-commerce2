import './CategoriesCards.css'

const CategoriesCards = ({ content }) => {

    return (
        <>
            
                <div className="card category-card ">
                    <img src={content.img_src} className="card-img-top category-img" alt="..." />
                    {/* <div className="card-body"> */}
                        <p className="card-text text-center">{content.title}</p>
                    {/* </div> */}
                </div>
            

        </>
    )

}
export default CategoriesCards;
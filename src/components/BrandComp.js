import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BrandComp = ({ brands }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="md:px-24 sm:px-12 px-6">
            <Slider {...settings}>
                {brands.map((brand, i) => {
                    return (
                        <div className="flex brandCard justify-center items-center flex-col ">
                            <img className="w-[250px] h-[200px] object-contain" src={brand.brandImageLink} alt="" />
                            <p>{brand.name}</p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
export default BrandComp
import Slider from "react-slick";
import Page from "./Page";
import ShadowText from "./ShadowText";
import Flex from "./Flex";
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const ProductPage = ({ id, nimi, hinta, tuotekuvaus, kuva }) => (
  <Flex
    key={id}
    style={{
      padding: "0",
      flexDirection: "row",
      width: "90vw",
      height: "90vh",
      margin: "5vh auto"
    }}
  >
    <Flex
      style={{
        alignContent: "flex-start",
        justifyContent: "space-between",
        height: "100%",
        width: "50vw",
        padding: "0",
        marginRight: "2rem"
      }}
    >
      <ShadowText
        style={{
          margin: "0",
          color: "white",
          justifySelf: "left",
          fontSize: "5rem",
          marginTop: "-1rem"
        }}
      >
        {nimi}
      </ShadowText>
      <ShadowText
        style={{ color: "white", justifySelf: "left", fontSize: "2.5rem" }}
      >
        {tuotekuvaus}
      </ShadowText>
      <ShadowText
        style={{
          margin: "0",
          fontSize: "5rem",
          color: "white",
          background: "red",
          padding: "1rem 4rem",
          alignSelf: "end",
          justifySelf: "left",
          width: "50vw",
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
        }}
      >
        {hinta}
      </ShadowText>
    </Flex>
    <div style={{
      padding: "3rem",
      width: "35vw", height: "90vh", background: "white",
      boxShadow:
        "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
      // boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }}>
      <Slider {...settings}>
        {kuva.map(({ thumbnails: { large: { url } } }) =>
          <div >
            <img
              style={{
                margin: "auto",
                objectFit: "contain",
                height: "80vh",
                width: "100%",
                background: "white"
              }}
              src={url}
              alt={nimi}
            />
          </div>)
        }
      </Slider>
    </div>
  </Flex>
);
export default ProductPage;

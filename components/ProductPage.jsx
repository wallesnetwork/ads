import Page from "./Page";
import ShadowText from "./ShadowText";
import Flex from "./Flex";
const ProductPage = ({ id, nimi, hinta, tuotekuvaus, image: { url } }) => (
  <Flex
    key={id}
    style={{
      padding: "0",
      flexDirection: "row",
      width: "80vw",
      height: "60vh",
      margin: "12% auto"
    }}
  >
    <Flex
      style={{
        alignContent: "flex-start",
        justifyContent: "space-between",
        height: "100%",
        width: "40vw",
        height: "100%",
        padding: "0",
        marginRight: "2rem"
      }}
    >
      <ShadowText
        style={{
          margin: "0",
          color: "white",
          justifySelf: "left",
          fontSize: "8rem"
        }}
      >
        {nimi}
      </ShadowText>
      <ShadowText
        style={{ color: "white", justifySelf: "left", fontSize: "4rem" }}
      >
        {tuotekuvaus}
      </ShadowText>
      <ShadowText
        style={{
          margin: "0",
          fontSize: "8rem",
          color: "white",
          background: "red",
          padding: "2rem 4rem",
          alignSelf: "end",
          justifySelf: "left",
          width: "40vw",
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
        }}
      >
        {hinta
          .toFixed(2)
          .toString()
          .replace(".", ",")}
        €
      </ShadowText>
    </Flex>
    <img
      style={{
        height: "60vh",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
      }}
      src={url}
      alt={nimi}
    />
  </Flex>
);
export default ProductPage;

import CustomCarousel from "../components/CustomCarousel";
import Page from "../components/Page";
import ProductPage from "../components/ProductPage";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ShadowText from "../components/ShadowText";
import CustomType from "../components/CustomType";
import Flex from "../components/Flex";
const GET_PRODUCTS = gql`
  query {
    allTuotes {
      nimi
      hinta
      id
      tuotekuvaus
      image {
        url
      }
    }
  }
`;
const Test = () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error</div>;
      return (
        <CustomCarousel autoplayInterval={30000}>
          <Flex>
            <CustomType />
          </Flex>
          <Flex style={{ margin: "15%" }}>
            <ShadowText
              style={{
                textAlign: "center",
                fontSize: "4rem",
                color: "white",
                width: "60vw"
              }}
            >
              Yli 30,000 tuotenimikkeen valikoimasta varaosat ja tarvikkeet
              sinunkin ajoneuvoosi!
            </ShadowText>
            <Flex>
              <div style={{ width: "80vw", height: "90vh" }}>
                <CustomCarousel autoplayInterval={5000}>
                  <img
                    style={{
                      height: "400px",
                      width: "400px",
                      margin: "auto"
                    }}
                    src="/static/brakedisc.png"
                    alt="jarrulevy"
                  />
                  <img
                    style={{
                      height: "400px",
                      width: "300px",
                      margin: "auto"
                    }}
                    src="/static/liquimoly.png"
                    alt="jarrulevy"
                  />
                  <img
                    style={{
                      height: "400px",
                      width: "400px",
                      margin: "auto"
                    }}
                    src="/static/filters.png"
                    alt="jarrulevy"
                  />
                </CustomCarousel>
              </div>
            </Flex>
          </Flex>
          {data.allTuotes.map(e => (
            <ProductPage {...e} />
          ))}
        </CustomCarousel>
      );
    }}
  </Query>
);
export default Test;

import CustomCarousel from "../components/CustomCarousel";
import Page from "../components/Page";
import ProductPage from "../components/ProductPage";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ShadowText from "../components/ShadowText";
import CustomType from "../components/CustomType";
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
          <Page>
            <CustomType />
          </Page>
          <Page>
            <ShadowText
              style={{
                textAlign: "center",
                fontSize: "3rem",
                color: "white",
                width: "60vw"
              }}
            >
              Yli 30,000 tuotenimikkeen valikoimasta varaosat ja tarvikkeet
              sinunkin ajoneuvoosi!
            </ShadowText>
            <div style={{ width: "40vw" }}>
              <CustomCarousel autoplayInterval={5000}>
                <img
                  style={{ height: "400px", width: "400px", margin: "auto" }}
                  src="/static/brakedisc.png"
                  alt="jarrulevy"
                />
                <img
                  style={{ height: "400px", width: "300px", margin: "auto" }}
                  src="/static/liquimoly.png"
                  alt="jarrulevy"
                />
                <img
                  style={{ height: "400px", width: "400px", margin: "auto" }}
                  src="/static/filters.png"
                  alt="jarrulevy"
                />
              </CustomCarousel>
            </div>
          </Page>
          {data.allTuotes.map(e => (
            <ProductPage {...e} />
          ))}
        </CustomCarousel>
      );
    }}
  </Query>
);
export default Test;

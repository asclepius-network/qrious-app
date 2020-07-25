import gql from "graphql-tag";

export const CardsQuery = gql`
  {
    cardsesConnection {
      edges {
        node {
          title
          image {
            size
            url
            fileName
            width
            height
            mimeType
          }
          subtitle
          caption
          logo {
            size
            url
            fileName
            width
            height
            mimeType
          }
        }
      }
    }
  }
`;

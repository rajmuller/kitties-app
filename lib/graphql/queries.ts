import { gql } from "graphql-request";

export const getCats = gql`
  query getCats($first: Int = 100) {
    cats(first: $first) {
      id
      owner {
        id
      }
      approved
      birthTime
      momId
      dadId
      genes
      generation
      dna {
        id
        bodyColor
        mouthTailColor
        eyeColor
        earPawColor
        eyeShape
        pattern
        animation
        secret
      }
    }
  }
`;

export const getCatById = gql`
  query getCatById($id: ID!) {
    cat(id: $id) {
      id
      dna {
        bodyColor
      }
      owner {
        id
      }
      approved
      birthTime
    }
  }
`;

export const getCatsByOwner = gql`
  query getCatsByOwner($id: ID!) {
    users(where: { id: $id }) {
      id
      cats {
        id
        approved
        birthTime
        momId
        dadId
        genes
        generation
        dna {
          bodyColor
          mouthTailColor
          eyeColor
          earPawColor
          eyeShape
          pattern
          patternColor
          animation
          secret
        }
      }
    }
  }
`;

export const getCatsByBodyColor = gql`
  query getCatsByBodyColor($bodyColor: String) {
    dnas(where: { bodyColor: $bodyColor }) {
      cat {
        id
        owner {
          id
        }
        approved
        birthTime
        momId
        dadId
        genes
        generation
        dna {
          bodyColor
          mouthTailColor
          eyeColor
          earPawColor
          eyeShape
          pattern
          patternColor
          animation
          secret
        }
      }
    }
  }
`;

import { gql, GraphQLClient } from 'graphql-request';

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url,{
        headers:{
          "Authorization" : process.env.GRAPH_CMS_TOKEN
        }
      })
    const pageSlug = pageContext.query.slug

console.log("pageSlug",pageSlug)

const query = gql`
query($pageSlug : String!){
    video(where:{
      slug: $pageSlug
    }){
      id,
      title,
      slug,
      description,
      tags
    }
  }
  `

  const variables = {
      pageSlug,
  }

  const data = await graphQLClient.request(query,variables)
  console.log("data",data)
  const video = data.video

  return{
      props : {
          video
        }
  }
}

const Video = ({video}) => {
    console.log("video",video)
    return(
        <div></div>
    )
}

export default Video
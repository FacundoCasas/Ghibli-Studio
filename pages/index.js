import { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async() => {
  const url = process.env.ENDPOINT
  const graphQLClient = new GraphQLClient(url,{
    headers:{
      "Authorization" : process.env.GRAPH_CMS_TOKEN
    }
  })

const videosQuery = gql`
  query {
    videos{
      createdAt,
      id,
      title
    }
  } 
  `

const data = await graphQLClient.request(videosQuery)
const videos = data.videos

return{
  props: {
    videos
  }
}

}
const Home = ({ videos}) => {

  return (
    <>
      <div></div> 
      <div>  
         {videos[1].title}
      </div>
    </>
  )
}

export default Home

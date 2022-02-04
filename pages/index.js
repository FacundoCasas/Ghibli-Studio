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
  
  const ramdomVideo = (videos) =>{
    return videos[Math.floor(Math.random()*videos.length)]
  }

  
  return (
    <>
      
      <div>  
          {ramdomVideo(videos).title}
        

      </div>
    </>
  )
}

export default Home

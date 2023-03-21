
import { Inter } from 'next/font/google'
import axios from 'axios'
import { Video } from '@/types'
import VideoCard from '@/components/VideoCard'
import NoResults from '@/components/NoResults'


interface IProps {
  videos: Video[]
}

const inter = Inter({ subsets: ['latin'] })

const Home = ({ videos }: IProps) => {
  console.log(videos)
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (<NoResults text={'No Videos'} />)
      }
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`)

  return {
    props: { videos: response.data }
  }
}


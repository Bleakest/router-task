import { useEffect } from 'react';
import episodes from '../assets/data/episode.json'
import { useNavigate, useParams } from 'react-router-dom'

export function EpisodeInfo() {
  const params = useParams()
  const navigate = useNavigate()

  const episode = episodes.find((item) => item.id == Number(params.id))

  useEffect(() => {
      if (!episode) {
        navigate('/')
      }
    }, [])


  return (
    <div className='flex flex-col justify-center pt-4'>
      <h1 className='text-3xl'>This is episode named: <span className='text-red-400'>{episode?.name}</span></h1>
      <p className='pt-2 '>Air date of that episode is:<span className='text-red-400'> {episode?.air_date}</span> </p>
      <p className='pt-2 '>Episode number is:<span className='text-red-400'> {episode?.episode}</span> </p>

    </div>
  )
}

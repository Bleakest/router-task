import type { EpisodeData } from '../types/types'
import { Link } from 'react-router-dom'

export function EpisodeCard({ episode, id, airDate, name }: EpisodeData) {
  return (
    <Link to={`/episode/${id}`} className='border space-y-1 rounded-lg p-2 hover:bg-stone-700 w-[170px]'>
      <h1>Id: <span className='text-red-400'>{id}</span></h1>
      <h1>Name: <span className='text-red-400'>{name}</span></h1>
      <h1>Episode: <span className='text-red-400'>{episode}</span></h1>
      <h1>Air date: <span className='text-red-400'>{airDate}</span></h1>
    </Link>
  )
}

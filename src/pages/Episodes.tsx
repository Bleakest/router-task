import episodes from '../assets/data/episode.json'
import { EpisodeCard } from '../ui/EpisodeCard';

export function Episodes() {
  return (
    <div className='flex flex-wrap pt-4 space-x-4 space-y-2 justify-center'>{episodes.map((episode) => (<EpisodeCard id={episode.id} key={episode.id} airDate={episode.air_date} episode={episode.episode} name={episode.name} />))}</div>
  )
}

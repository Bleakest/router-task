import characters from '../assets/data/characters.json'
import { HeroCard } from '../ui/HeroCard';

export function Characters() {

  return (
    <div className='flex flex-wrap pt-4 space-x-4 space-y-2 justify-center'>{characters.map((character) => (<HeroCard id={character.id} key={character.id} gender={character.gender} image={character.image} species={character.species} status={character.status} name={character.name} />))}</div>
  )
}

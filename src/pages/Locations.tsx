import locations from '../assets/data/location.json'
import { LocationCard } from '../ui/LocationCard';

export function Locations() {

    return (
        <div className='flex flex-wrap justify-center space-x-2 space-y-2 mt-5'>{locations.map((location) => (<LocationCard id={location.id} key={location.id} name={location.name} type={location.type} dimension={location.dimension} />))}</div>
    )
}

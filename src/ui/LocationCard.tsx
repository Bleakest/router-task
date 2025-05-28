import { Link } from 'react-router-dom'
import type { LocationData } from '../types/types'

export function LocationCard({ id, name, type, dimension }: LocationData) {
    return (
        <Link to={`/location/${id}`} className='border space-y-1 rounded-lg p-2 hover:bg-stone-700 w-[170px]'>
            <h1>Id: <span className='text-red-400'>{id}</span></h1>
            <h1>Name: <span className='text-red-400'>{name}</span></h1>
            <h1>Dimension: <span className='text-red-400'>{dimension}</span></h1>
            <h1>Type: <span className='text-red-400'>{type}</span></h1>
        </Link>
    )
}

import type { HeroData } from '../types/types'
import { Link } from 'react-router-dom'

export function HeroCard({ name, id, species, status, gender, image }: HeroData) {
    return (
        <Link to={`/character/${id}`} className='border rounded-lg p-2 hover:bg-stone-700'>
            <h1 className='text-red-400'>{name}</h1>
            <img src={image} alt='hero-image' />
            <p className='text-red-400'>{species}</p>
            <p className='text-red-400'>{status}</p>
            <p className='text-red-400'>{gender}</p>
        </Link>
    )
}

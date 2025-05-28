import { useEffect } from 'react'
import locations from '../assets/data/location.json'
import { useNavigate, useParams } from 'react-router-dom'

export function LocationInfo() {
    const params = useParams()
    const navigate = useNavigate()

    const location = locations.find((item) => item.id == Number(params.id))

    useEffect(() => {
        if (!location) {
            navigate('/')
        }
    }, [])


    return (
        <div className='flex flex-col justify-center pt-4'>
            <h1 className='text-3xl'><span className='text-red-400'>{location?.name}</span> Location:</h1>

            <p className='pt-2 '>Information about dimension:<span className='text-red-400'> {location?.dimension}</span> </p>

            <p className='pt-2 '>Type of location is:<span className='text-red-400'> {location?.type}</span> </p>
        </div>
    )
}

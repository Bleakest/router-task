import { useNavigate, useParams } from "react-router-dom"
import characters from '../assets/data/characters.json'
import { useEffect } from "react"

export function HeroInfo() {
  const params = useParams()
  const navigate = useNavigate()

  const user = characters.find((item) => item.id == Number(params.id))

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <section className='flex pt-10 '>
        <img src={user?.image} width={400} alt='hero-img' />
        <div className="pl-6">
          <h1 className="text-3xl text-red-400">{user?.name}</h1>
          <p className="pt-5">{user?.name} gender is {user?.gender}. And his species is {user?.species}. He is currenly {user?.status}.
            {user?.type ? <p>His Type is {user.type}.</p> : <></>} </p>
        </div>

      </section>
    </>
  )
}

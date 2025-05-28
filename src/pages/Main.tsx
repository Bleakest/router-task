import img from '../assets/img/rickandmorty.jpg'

export function Main() {
  return (
    <>
      <section className='flex items-center'>
        <img className='pt-6' src={img} width={500} alt='main-logo' />
        <p className='pl-4 text-gray-500'> <span className='text-white text-2xl'>Welcome!</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos dicta numquam porro ratione consequuntur laborum et, neque ullam perspiciatis. Voluptatibus magni provident eaque! Amet corporis est blanditiis molestiae accusantium veniam laudantium aliquid praesentium beatae, neque harum consectetur hic ad.</p>
      </section>
    </>
  )
}

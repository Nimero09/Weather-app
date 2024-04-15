export const SearchBar = ({setValue, error}) => {

  const getInputValue = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value);
      event.preventDefault();
      event.target.value = '';
    } 
  }
  
  return (
    <section className='max-w-[70%] mx-auto my-10'>
        <form action="" className='w-100'>
            <input type="text" onKeyDown={(e) => getInputValue(e)} placeholder='Search for location' className='w-full h-12 rounded-3xl border-solid border-2 border-gray-400 text-xl px-10'/>
        </form>
        {error === true ? <span className="block mt-5 text-lg text-red-400 font-bold">City not found</span> : null}
    </section>
  )
}

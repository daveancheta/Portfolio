function Footer() {
  const getCurrentYear = new Date().getFullYear()

  return (
    <footer className='backdrop-blur bg-black/90 p-8 sm:px-20 px-10 
      py-5   z-10 flex justify-center border-t-2 mt-10'>
      <div className=''>
        <p className="text-white font-normal sm:text-sm text-xs truncate">
          © {getCurrentYear} Heaven Dave Ancheta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
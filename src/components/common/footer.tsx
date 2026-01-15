function Footer() {
    const getCurrentYear = new Date().getFullYear()

    return (
      <footer className='backdrop-blur shadow-accent p-8 sm:px-20 px-10 
      py-5 z-10 flex justify-center border-t-2 mt-10'>
        <div className=''>
        <h1>© {getCurrentYear} Heaven Dave Ancheta. All rights reserved.</h1>
        </div>
      </footer>
    )
}

export default Footer
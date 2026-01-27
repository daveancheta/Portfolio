import Link from "next/link"

function Footer() {
  const getCurrentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      title: "Email",
      link: "mailto:daveancheta411@gmail.com",
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/daveancheta",
    },
    {
      id: 3,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/heavendaveancheta",
    },
    {
      id: 4,
      title: "Facebook",
      link: "https://www.facebook.com/heavendavequimpoancheta/",
    },
  ];

  return (
    <footer className='mt-10 sm:px-15 px-5
      py-5 z-10 flex justify-between border-t mx-10'>
      <div>
        <p className="dark:text-white text-black font-normal sm:text-sm text-xs truncate">
          © {getCurrentYear} Heaven Dave Ancheta. All rights reserved.
        </p>
      </div>
      <div className="flex flex-row gap-2 text-muted-foreground">
        {socialLinks.map((social) => (
          <Link href={social.link}
            key={social.id}
            target="_blank"
            className="cursor-none">{social.title}</Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
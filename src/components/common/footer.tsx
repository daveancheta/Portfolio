import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      title: "Email",
      link: "mailto:daveancheta411@gmail.com",
    },
    {
      id: 2,
      title: "GitHub",
      link: "https://github.com/daveancheta",
    },
    {
      id: 3,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/heavendaveancheta",
    },
    {
      id: 4,
      title: "Facebook",
      link: "https://www.facebook.com/heavendavequimpoancheta/",
    },
  ];

  return (
    <footer
      className="mt-10 border-t border-border/60 px-6 py-5 sm:px-10 lg:px-16"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:text-sm">
        <p className="text-center sm:text-left">
          © {currentYear} <span className="font-medium">Heaven Dave Ancheta</span>. All rights
          reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-none text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              aria-label={social.title}
            >
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
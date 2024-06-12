interface IMenuItem {
  title: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: "Ielts",
    href: "/topic/ielts",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const siteInfo = {
  title: "CatBlog",
  description: "The Cat Writter",
};

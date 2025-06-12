// src/data/nav.config.ts

export interface NavItem {
  label: string;
  href: string; // store only `#home`, not `/#home`
  icon: string;
  type: "internal" | "section";
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
    type: "section",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`,
  },
  {
    label: "Projects",
    href: "#projects",
    type: "section",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>`,
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    type: "section",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6 18l-3.15 3.15q-.25.25-.55.125T2 20.8V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm6-5.525l1.9 1.15q.275.175.55-.012t.2-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338L13.325 8.4l-.875-2.05q-.125-.3-.45-.3t-.45.3l-.875 2.05l-2.225.175Q8.1 8.6 8 8.913t.15.537l1.7 1.475l-.5 2.175q-.075.325.2.513t.55.012z"/></svg>`,
  },
  {
    label: "Contact",
    href: "#contact",
    type: "section",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>`,
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  //   type: "internal",
  //   icon: `<svg>...</svg>`,
  // },
];

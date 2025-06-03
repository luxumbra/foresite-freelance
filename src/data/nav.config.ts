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
    icon: `<svg>...</svg>`,
  },
  {
    label: "Projects",
    href: "#projects",
    type: "section",
    icon: `<svg>...</svg>`,
  },
  {
    label: "Contact",
    href: "#contact",
    type: "section",
    icon: `<svg>...</svg>`,
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  //   type: "internal",
  //   icon: `<svg>...</svg>`,
  // },
];

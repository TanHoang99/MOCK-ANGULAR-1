export interface navItems {
  _id: string;
  nav_name: string;
  nav_parent_id?: string;
  children?: [];
}

export interface Category {
  id: string;
  img: string;
  desc: string;
  title: string;
  group: string;
}

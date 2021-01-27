export interface navItems {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: navItems[];
}

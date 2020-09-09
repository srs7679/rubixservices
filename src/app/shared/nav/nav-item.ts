export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
  }

export const BottomNavItems: NavItem[] = [
        {
          displayName: 'home',
          iconName: 'home',
          route: '/home'
        },
        {
            displayName: 'search',
            iconName: 'search',
            route: '/home'
          },
          {
            displayName: 'favorite',
            iconName: 'favorite',
            route: '/home'
          },
          {
            displayName: 'cart',
            iconName: 'shopping_cart',
            route: '/home'
          }
    ];

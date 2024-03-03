export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const, // = id
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        image: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrival',
        href: '#',
        image: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '#',
        image: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        image: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrival',
        href: '#',
        image: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '#',
        image: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
];

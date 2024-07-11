const layoutProps1 = {
  background: 'bg-gray40',
};

const layoutProps2 = {
  background: 'bg-gray20',
};

const layoutProps3 = {
  background: 'bg-gray80',
};

const componentHeroProps = {
  title: 'Welcome to the Hero Section',
  subtitle: 'This is a subtitle',
  image: 'https://dummyimage.com/800x400/ccc/000&text=Hero+Image',
};

const componentItemsShowcaseProps = {
  items: [
    {
      id: 'item1',
      title: 'Item 1 Title',
      description: 'Description for Item 1',
      image: 'https://dummyimage.com/400x300/ccc/000&text=Item+1',
    },
    {
      id: 'item2',
      title: 'Item 2 Title',
      description: 'Description for Item 2',
      image: 'https://dummyimage.com/400x300/ccc/000&text=Item+2',
    },
    {
      id: 'item3',
      title: 'Item 3 Title',
      description: 'Description for Item 3',
      image: 'https://dummyimage.com/400x300/ccc/000&text=Item+3',
    },
  ],
};

const componentTrustBarProps = {
  images: [
    'https://dummyimage.com/100x100/ccc/000&text=Image+1',
    'https://dummyimage.com/100x100/ccc/000&text=Image+2',
    'https://dummyimage.com/100x100/ccc/000&text=Image+3',
  ],
};

export const data = [
  {
    type: 'layoutSection',
    props: { ...layoutProps1 },
    components: [
      {
        type: 'componentHero',
        props: { ...componentHeroProps },
      },
    ],
  },
  {
    type: 'layoutSection',
    props: { ...layoutProps2 },
    components: [
      {
        type: 'componentItemsShowcase',
        props: { ...componentItemsShowcaseProps },
      },
      {
        type: 'componentTrustBar',
        props: { ...componentTrustBarProps },
      },
    ],
  },
  {
    type: 'layoutSection',
    props: { ...layoutProps3 },
    components: [
      {
        type: 'componentHero',
        props: { ...componentHeroProps },
      },
    ],
  },
];

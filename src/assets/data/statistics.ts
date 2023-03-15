interface StatisticsType {
  title: string;
  description: string;
  icon: string;
}

const statistics: StatisticsType[] = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: 'images/icons.svg#brand',
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: 'images/icons.svg#records',
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: 'images/icons.svg#customizable',
  },
];

export default statistics;

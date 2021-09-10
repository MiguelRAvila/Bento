// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Greg',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon!',
  greetingEvening: 'Good evening!',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'aa600cf38d4ea1abab0f93b0c2ae87b8',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '37.774929',
  weatherLongitude: '-122.419418',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/gregnrobinson',
    },
    {
      id: '2',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '3',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/1/#inbox',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/u/1/r',
    },
    {
      id: '5',
      name: 'Wakatime',
      icon: 'code',
      link: 'https://wakatime.com/@gregnrobinson',
    },
    {
      id: '6',
      name: 'Linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/gregnrobinson/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'SoundCloud',
        link: 'https://soundcloud.com/user-404286775',
      },
      {
        name: 'Favourite Sets',
        link: 'https://www.youtube.com/watch?v=avs7kmerglc&list=PLFutnYq-TXU6MDNayUFAzbmIpj-fDEZqy&index=48',
      },
    ],
    secondList: [
      {
        name: 'GCP',
        link: 'https://console.cloud.google.com/',
      },
      {
        name: 'AWS',
        link: 'https://signin.aws.amazon.com/',
      },
      {
        name: 'Azure',
        link: 'https://portal.azure.com/#blade/Microsoft_Azure_Expert/AdvisorMenuBlade/overview',
      },
    ],
  },
};

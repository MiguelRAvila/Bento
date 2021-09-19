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
      link: 'https://mail.google.com/mail/#inbox',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar',
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
  firstListIcon: 'vial',
  secondListIcon: 'cloud',

  // Links
  lists: {
    firstList: [
      {
        name: 'Project Tracker',
        link: 'https://www.notion.so/arctiqhome/d73dd827e83449f48b86af4795a851be?v=109b84e212df451da3848e89623d179a',
      },
      {
        name: 'Phronesis Mail',
        link: 'https://privateemail.com/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX&storeLocale=true',
      },
      {
        name: 'Grafana',
        link: 'http://grafana.192.168.0.82.nip.io/d/g5ilYXMnk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s',
      },
    ],
    secondList: [
      {
        name: 'GCP',
        link: 'https://console.cloud.google.com/',
      },
      {
        name: 'AWS',
        link: 'https://console.aws.amazon.com/console/home?region=us-east-1#',
      },
      {
        name: 'Azure',
        link: 'https://portal.azure.com/#blade/Microsoft_Azure_Expert/AdvisorMenuBlade/overview',
      },
    ],
  },
};

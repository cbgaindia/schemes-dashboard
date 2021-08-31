import React from 'react';
import { ReactComponent as OBI } from '../../Images/obi-footer-square-logo.svg';
import { ReactComponent as FacebookIcon } from '../../Images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../Images/twitter-icon.svg';
import { ReactComponent as GithubIcon } from '../../Images/github-icon.svg';
import CC from '../../Images/cc-by-logo.svg';
import OpenData from '../../Images/open_data_logo.png';

export const Dashboards = {
  name: 'Dashboards',
  homepage: {
    link: 'https://openbudgetsindia.org/en/',
    alt: 'Open budgets India',
    child: <OBI fill="white" />,
  },

  links: [
    {
      title: 'Union Budget Explorer 2021-22',
      value: 'https://union.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2020-21',
      value: 'https://union2020.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2019-20',
      value: 'https://union2019.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2019-20 (I)',
      value: 'https://union2019i.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2018-19',
      value: 'https://union2018.openbudgetsindia.org/en/',
    },
    {
      title: 'Himachal Pradesh Fiscal Data Explorer',
      value: 'https://hp.openbudgetsindia.org/',
    },
    {
      title: 'Assam Budget Explorer 2020-21',
      value: 'https://assam2020.openbudgetsindia.org/en/',
    },
    {
      title: 'Assam Budget Explorer 2019-20',
      value: 'https://assam2019.openbudgetsindia.org/en/',
    },
    {
      title: 'Balasore District Treasury',
      value:
        'https://dash.openbudgetsindia.org/superset/dashboard/odisha_balasore_treasury_dashboard/?standalone=true',
    },
    {
      title: 'Krishna District Treasury',
      value:
        'https://dash.openbudgetsindia.org/superset/dashboard/ap_krishna_treasury_dashboard/?standalone=true',
    },
    {
      title: 'Schemes Dashboard',
      value: 'https://schemes.openbudgetsindia.org',
    },
    {
      title: 'Story Generator',
      value: 'https://cbgaindia.github.io/story-generator',
    },
  ],
};

export const Budget_Datasets = {
  name: 'Budget Datasets',
  links: [
    {
      title: 'Government-wise Budget Data',
      value: 'https://openbudgetsindia.org/organization',
    },
    {
      title: 'Sector-wise Budget Data',
      value: 'https://openbudgetsindia.org/group',
    },
    {
      title: 'All Datasets',
      value: 'https://openbudgetsindia.org/dataset',
    },
  ],
};

export const OBI_Platform = {
  name: 'OBI Platform',
  links: [
    {
      title: 'How to use the OBI Platform',
      value: 'https://openbudgetsindia.org/pages/how-to-use-the-portal',
    },
    {
      title: 'FAQs on the Platform',
      value: 'https://openbudgetsindia.org/pages/faqs',
    },
    {
      title: 'About OBI Platform',
      value: 'https://openbudgetsindia.org/about',
    },
    {
      title: 'Video: OBI Platform',
      value: 'https://youtu.be/xKjzH1ZB3c4',
    },
    {
      title: 'Video: Budget Basics',
      value: 'https://youtu.be/fGxNh5Xfn2I',
    },
    {
      title: 'Video: Budget Basics (Hindi)',
      value: 'https://www.youtube.com/watch?v=TovrkaW5HZY',
    },
  ],
};

export const Attr_Links = {
  links: [
    {
      title: 'Disclaimer',
      value: 'https://openbudgetsindia.org/pages/disclaimers',
    },
    {
      title: 'License',
      value: 'https://openbudgetsindia.org/pages/license',
    },
    {
      title: 'Contact Us',
      value: 'https://openbudgetsindia.org/contact',
    },
    {
      title: 'CKAN API',
      value: 'https://docs.ckan.org/en/latest/api/',
    },
  ],
};

export const Attr_Logos = {
  links: [
    {
      alt: 'creative commons licence',
      src: CC,
      value: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      alt: 'open definition licence',
      src: OpenData,
      value: 'https://opendefinition.org/od/2.1/en/',
    },
  ],
};

export const Attr_Social = [
  {
    link: 'https://github.com/cbgaindia',
    alt: 'CBGA India github repo',
    class: 'link',
    child: <GithubIcon fill="white" />,
  },
  {
    link: 'https://twitter.com/OpenBudgetsIn',
    alt: 'Open Budgets India twitter page',
    class: 'link ml-24',
    child: <TwitterIcon fill="white" />,
  },
  {
    link: 'https://www.facebook.com/OpenBudgetsIndia',
    alt: 'Open Budgets India facebook page',
    class: 'link ml-24',
    child: <FacebookIcon fill="white" />,
  },
];

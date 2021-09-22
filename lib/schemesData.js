import pmay from 'public/Images/schemesLogos/pmay.png';
import icds from 'public/Images/schemesLogos/icds.png';
import mdm from 'public/Images/schemesLogos/mdm.png';
import mgnrega from 'public/Images/schemesLogos/mgnrega.png';
import nhm from 'public/Images/schemesLogos/nhm.png';
import pmgsy from 'public/Images/schemesLogos/pmgsy.jpg';
import rmsa from 'public/Images/schemesLogos/rmsa.jpeg';
import ssa from 'public/Images/schemesLogos/ssa.jpg';
import smsa from 'public/Images/schemesLogos/smsa.jpg';
import bbbp from 'public/Images/schemesLogos/bbbp.png';
import br from 'public/Images/schemesLogos/br.jpg';
import icps from 'public/Images/schemesLogos/icps.png';
import jjm from 'public/Images/schemesLogos/jjm.jpg';
import osc from 'public/Images/schemesLogos/osc.jpg';
import pa from 'public/Images/schemesLogos/pa.png';
import rkvy from 'public/Images/schemesLogos/rkvy.png';
import sbmu from 'public/Images/schemesLogos/sbmu.png';
import sg from 'public/Images/schemesLogos/sg.jpeg';
import ms from 'public/Images/schemesLogos/ms.jpg';
import scs from 'public/Images/schemesLogos/scs.jpg';
import sts from 'public/Images/schemesLogos/sts.jpg';

const SchemesData = {
  'jal-jeevan-mission': {
    logo: jjm,
    slug: 'jjm',
    dataId: 'jal-jeevan-mission',
    name: 'National Rural Drinking Water Programme (NRDWP) / Jal Jeevan Mission (JJM)',
  },
  'integrated-child-development-services': {
    logo: icds,
    slug: 'icds',
    dataId: 'integrated-child-development-services',
    name: 'Integrated Child Development Services (ICDS)',
  },
  'swadhar-greh-2016-17-to-2019-20': {
    logo: sg,
    slug: 'sg',
    dataId: 'swadhar-greh-2016-17-to-2019-20',
    name: 'Swadhar Greh (SG)',
  },
  'pradhan-mantri-gram-sadak-yojana-pmgsy': {
    logo: pmgsy,
    slug: 'pmgsy',
    dataId: 'pradhan-mantri-gram-sadak-yojana-pmgsy',
    name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
  },
  'mahatma-gandhi-national-rural-employment-guarantee-scheme': {
    logo: mgnrega,
    slug: 'mgnrega',
    dataId: 'mahatma-gandhi-national-rural-employment-guarantee-scheme',
    name: 'Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)',
  },
  'samagra-shiksha-abhiyan-smsa-2018-19-to-2019-20': {
    logo: smsa,
    slug: 'smsa',
    dataId: 'samagra-shiksha-abhiyan-smsa-2018-19-to-2019-20',
    name: 'Samagra Shiksha Abhiyan (SmSA)',
  },
  'beti-bachao-beti-padao': {
    logo: bbbp,
    slug: 'bbbp',
    dataId: 'beti-bachao-beti-padao',
    name: 'Beti Bachao Beti Padhao (BBBP)',
  },
  'mid-day-meal-programme': {
    logo: mdm,
    slug: 'mdm',
    dataId: 'mid-day-meal-programme',
    name: 'Mid-Day Meal Programme (MDM)',
  },
  'pradhan-mantri-awaas-yojana-grameen': {
    logo: pmay,
    slug: 'pmay',
    dataId: 'pradhan-mantri-awaas-yojana-grameen',
    name: 'Pradhan Mantri Awaas Yojana - Grameen (PMAY)',
  },
  'rashtriya-madhyamik-shiksha-abhiyan-rmsa-2015-16-to-2017-18': {
    logo: rmsa,
    slug: 'rmsa',
    dataId: 'rashtriya-madhyamik-shiksha-abhiyan-rmsa-2015-16-to-2017-18',
    name: 'Rashtriya Madhyamik Shiksha Abhiyan  (RMSA)',
  },
  'swachh-bharat-abhiyan-urban': {
    logo: sbmu,
    slug: 'sbmu',
    dataId: 'swachh-bharat-abhiyan-urban',
    name: 'Swachh Bharat Abhiyan - Urban (SBM-U)',
  },
  'swachh-bharat-mission-gramin-sbm-g-2015-16-to-2019-20': {
    logo: sbmu,
    slug: 'sbmg',
    dataId: 'swachh-bharat-mission-gramin-sbm-g-2015-16-to-2019-20',
    name: 'Swachh Bharat Mission - Gramin (SBM-G)',
  },
  'rashtriya-krishi-vikas-yojana-rkvy': {
    logo: rkvy,
    slug: 'rkvy',
    dataId: 'rashtriya-krishi-vikas-yojana-rkvy',
    name: 'Rashtriya Krishi Vikas Yojana (RKVY)',
  },
  'blue-revolution': {
    logo: br,
    slug: 'br',
    dataId: 'blue-revolution',
    name: 'Blue Revolution',
  },
  'one-stop-centre-2015-16-to-2019-20': {
    logo: osc,
    slug: 'osc',
    dataId: 'one-stop-centre-2015-16-to-2019-20',
    name: 'One Stop Centre (OSC)',
  },
  'national-health-mission': {
    logo: nhm,
    slug: 'nhm',
    dataId: 'national-health-mission',
    name: 'National Health Mission (NHM)',
  },
  'sarva-shiksha-abhiyan-ssa-2015-16-to-2017-18': {
    logo: ssa,
    slug: 'ssa',
    dataId: 'sarva-shiksha-abhiyan-ssa-2015-16-to-2017-18',
    name: 'Sarva Shiksha Abhiyan (SSA)',
  },
  icps: {
    logo: icps,
    slug: 'icps',
    dataId: 'icps',
    name: 'Integrated Child Protection Scheme (ICPS)',
  },
  'poshan-abhiyaan-2018-19-to-2019-20': {
    logo: pa,
    slug: 'pa',
    dataId: 'poshan-abhiyaan-2018-19-to-2019-20',
    name: 'Poshan Abhiyaan (NNM)',
  },
  'scholarship-schemes-for-minorities': {
    logo: ms,
    slug: 'ms',
    dataId: 'scholarship-schemes-for-minorities',
    name: 'Scholarship Schemes for Minorities',
  },
  'scholarship-schemes-for-scs': {
    logo: scs,
    slug: 'scs',
    dataId: 'scholarship-schemes-for-scs',
    name: 'Scholarship Schemes for SCs',
  },
  'scholarship-schemes-for-sts': {
    logo: sts,
    slug: 'sts',
    dataId: 'scholarship-schemes-for-sts',
    name: 'Scholarship Schemes for STs',
  },
};

export default SchemesData;

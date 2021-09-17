import pmay from '../Images/schemesLogos/pmay.png';
import icds from '../Images/schemesLogos/icds.png';
import mdm from '../Images/schemesLogos/mdm.png';
import mgnrega from '../Images/schemesLogos/mgnrega.png';
import nhm from '../Images/schemesLogos/nhm.png';
import pmgsy from '../Images/schemesLogos/pmgsy.jpg';
import rmsa from '../Images/schemesLogos/rmsa.jpeg';
import ssa from '../Images/schemesLogos/ssa.jpg';
import smsa from '../Images/schemesLogos/smsa.jpg';
import bbbp from '../Images/schemesLogos/bbbp.png';
import br from '../Images/schemesLogos/br.jpg';
import icps from '../Images/schemesLogos/icps.png';
import jjm from '../Images/schemesLogos/jjm.jpg';
import osc from '../Images/schemesLogos/osc.jpg';
import pa from '../Images/schemesLogos/pa.png';
import rkvy from '../Images/schemesLogos/rkvy.png';
import sbmu from '../Images/schemesLogos/sbmu.png';
import sg from '../Images/schemesLogos/sg.jpeg';
import ms from '../Images/schemesLogos/ms.jpg';
import scs from '../Images/schemesLogos/scs.jpg';
import sts from '../Images/schemesLogos/sts.jpg';

const SchemesData = {
  scheme_jjm: {
    logo: jjm,
    slug: 'jjm',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=jal-jeevan-mission',
    name: 'National Rural Drinking Water Programme (NRDWP) / Jal Jeevan Mission (JJM)',
  },
  scheme_icds: {
    logo: icds,
    slug: 'icds',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=integrated-child-development-services',
    name: 'Integrated Child Development Services (ICDS)',
  },
  scheme_sg: {
    logo: sg,
    slug: 'sg',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=swadhar-greh-2016-17-to-2019-20',
    name: 'Swadhar Greh (SG)',
  },
  scheme_pmgsy: {
    logo: pmgsy,
    slug: 'pmgsy',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=pradhan-mantri-gram-sadak-yojana-pmgsy',
    name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
  },
  scheme_mgnrega: {
    logo: mgnrega,
    slug: 'mgnrega',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=mahatma-gandhi-national-rural-employment-guarantee-scheme',
    name: 'Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)',
  },
  scheme_smsa: {
    logo: smsa,
    slug: 'smsa',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=samagra-shiksha-abhiyan-smsa-2018-19-to-2019-20',
    name: 'Samagra Shiksha Abhiyan (SmSA)',
  },
  scheme_bbbp: {
    logo: bbbp,
    slug: 'bbbp',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=beti-bachao-beti-padao',
    name: 'Beti Bachao Beti Padhao (BBBP)',
  },
  scheme_mdm: {
    logo: mdm,
    slug: 'mdm',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=mid-day-meal-programme',
    name: 'Mid-Day Meal Programme (MDM)',
  },
  scheme_pmay: {
    logo: pmay,
    slug: 'pmay',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=pradhan-mantri-awaas-yojana-grameen',
    name: 'Pradhan Mantri Awaas Yojana - Grameen (PMAY)',
  },
  scheme_rmsa: {
    logo: rmsa,
    slug: 'rmsa',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=rashtriya-madhyamik-shiksha-abhiyan-rmsa-2015-16-to-2017-18',
    name: 'Rashtriya Madhyamik Shiksha Abhiyan  (RMSA)',
  },
  scheme_sbmu: {
    logo: sbmu,
    slug: 'sbmu',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=swachh-bharat-abhiyan-urban',
    name: 'Swachh Bharat Abhiyan - Urban (SBM-U)',
  },
  scheme_sbmg: {
    logo: sbmu,
    slug: 'sbmg',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=swachh-bharat-mission-gramin-sbm-g-2015-16-to-2019-20',
    name: 'Swachh Bharat Mission - Gramin (SBM-G)',
  },
  scheme_rkvy: {
    logo: rkvy,
    slug: 'rkvy',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=rashtriya-krishi-vikas-yojana-rkvy',
    name: 'Rashtriya Krishi Vikas Yojana (RKVY)',
  },
  scheme_br: {
    logo: br,
    slug: 'br',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=blue-revolution',
    name: 'Blue Revolution',
  },
  scheme_osc: {
    logo: osc,
    slug: 'osc',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=one-stop-centre-2015-16-to-2019-20',
    name: 'One Stop Centre (OSC)',
  },
  scheme_nhm: {
    logo: nhm,
    slug: 'nhm',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=national-health-mission',
    name: 'National Health Mission (NHM)',
  },
  scheme_ssa: {
    logo: ssa,
    slug: 'ssa',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=sarva-shiksha-abhiyan-ssa-2015-16-to-2017-18',
    name: 'Sarva Shiksha Abhiyan (SSA)',
  },
  scheme_icps: {
    logo: icps,
    slug: 'icps',
    dataId: 'https://openbudgetsindia.org/api/3/action/package_show?id=icps',
    name: 'Integrated Child Protection Scheme (ICPS)',
  },
  scheme_pa: {
    logo: pa,
    slug: 'pa',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=poshan-abhiyaan-2018-19-to-2019-20',
    name: 'Poshan Abhiyaan (NNM)',
  },
  scheme_ms: {
    logo: ms,
    slug: 'ms',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=scholarship-schemes-for-minorities',
    name: 'Scholarship Schemes for Minorities',
  },
  scheme_scs: {
    logo: scs,
    slug: 'scs',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=scholarship-schemes-for-scs',
    name: 'Scholarship Schemes for SCs',
  },
  scheme_sts: {
    logo: sts,
    slug: 'sts',
    dataId:
      'https://openbudgetsindia.org/api/3/action/package_show?id=scholarship-schemes-for-sts',
    name: 'Scholarship Schemes for STs',
  },
};

export default SchemesData;

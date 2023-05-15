import { ReactComponent as SalesIcon } from '../../assets/images/icons/sales-icon.svg'
import { ReactComponent as MarketingIcon } from '../../assets/images/icons/marketing-icon.svg'
import { ReactComponent as CustomerSuccessIcon } from '../../assets/images/icons/customer-success-icon.svg'
import { ReactComponent as RecruitingIcon } from '../../assets/images/icons/recruiting-icon.svg'
import { ReactComponent as InformationTechnologyIcon } from '../../assets/images/icons/information-technology-icon.svg'
import { ReactComponent as EducationIcon } from '../../assets/images/icons/education-icon.svg'
import SalesIcon1 from '../../assets/images/icons/sales-1.svg'
import SalesIcon2 from '../../assets/images/icons/sales-2.svg'
import SalesIcon3 from '../../assets/images/icons/sales-3.svg'
import SalesImage from '../../assets/images/png/sales.png'
import MarketingIcon1  from '../../assets/images/icons/marketing-1.svg'
import MarketingIcon2  from '../../assets/images/icons/marketing-2.svg'
import MarketingIcon3  from '../../assets/images/icons/marketing-3.svg'
import MarketingImage from '../../assets/images/png/marketing.png'
import CSIcon1 from '../../assets/images/icons/customer-success-1.svg'
import CSIcon2 from '../../assets/images/icons/customer-success-2.svg'
import CSIcon3 from '../../assets/images/icons/customer-success-3.svg'
import CSImage from '../../assets/images/png/customer-success.png'
import RecruitingIcon1 from '../../assets/images/icons/recruiting-1.svg'
import RecruitingIcon2 from '../../assets/images/icons/recruiting-2.svg'
import RecruitingIcon3 from '../../assets/images/icons/recruiting-3.svg'
import RecruitingImage from '../../assets/images/png/recruiting.png'
import ITIcon1 from '../../assets/images/icons/IT-1.svg'
import ITIcon2 from '../../assets/images/icons/IT-2.svg'
import ITIcon3 from '../../assets/images/icons/IT-3.svg'
import ITImage from '../../assets/images/png/IT.png'
import EducationIcon1 from '../../assets/images/icons/education-1.svg'
import EducationIcon2 from '../../assets/images/icons/education-2.svg'
import EducationIcon3 from '../../assets/images/icons/education-3.svg'
import EducationImage from '../../assets/images/png/education.png'



export const servicesTabList = [
    { title: 'Sales', icon: <SalesIcon/> },
    { title: 'Marketing', icon: <MarketingIcon/> },
    { title: 'Customer Success', icon: <CustomerSuccessIcon/> },
    { title: 'Recruiting', icon: <RecruitingIcon/> },
    { title: 'Information Technology', icon: <InformationTechnologyIcon/> },
    { title: 'Education', icon: <EducationIcon/> },
]

export const servicesSlidesList = [
  {
    title: 'Sales',
    icons: [SalesIcon1, SalesIcon2, SalesIcon3],
    sectionTitles: ['Drive more revenue', 'Speed up your sales cycle', 'Close more deals'],
    sectionDescriptions: [
        'Book high-value meetings in seconds and turn scheduling into a competitive advantage.',
        'Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.',
        'Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.'
    ],
    image: SalesImage
  },
  {
    title: 'Marketing',
    icons: [MarketingIcon1, MarketingIcon2, MarketingIcon3],
    sectionTitles: ['Drive more pipeline', 'Improve lead response times', 'Boost conversion rates'],
    sectionDescriptions: [
        'Turn marketing leads into booked meetings, faster.',
        'Gain a competitive advantage when you qualify, route, and book leads instantly.',
        'Reduce friction in the sales funnel and close more deals.'
    ],
    image: MarketingImage
  },
  {
    title: 'Customer Success',
    icons: [CSIcon1, CSIcon2, CSIcon3],
    sectionTitles: ['Drive more retention', 'Speed up your response times', 'Improve NPS and customer health'],
    sectionDescriptions: [
        'Bring all of your experts together and connect with customers at every stage of their journey to build long-lasting partnerships.',
        'Quickly book time to solve customers’ needs and help them self-serve to support their goals.',
        'Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.'
    ],
    image: CSImage
  },
  {
    title: 'Recruiting',
    icons: [RecruitingIcon1, RecruitingIcon2, RecruitingIcon3],
    sectionTitles: ['Hire more efficiently', 'Speed up your recruiting cycle', 'Improve the candidate experience'],
    sectionDescriptions: [
        'Spend less time wrangling calendars and more time meeting candidates.',
        'Book interviews in seconds and reduce time-to-fill.',
        'Eliminate friction and make your recruiting process a competitive advantage.'
    ],
    image: RecruitingImage
  },
  {
    title: 'Information Technology',
    icons: [ITIcon1, ITIcon2, ITIcon3],
    sectionTitles: [
        'Maintain enterprise-grade security with scheduling automation',
        'Implement and govern at ease',
        'Drive adoption and ROI across teams'
    ],
    sectionDescriptions: [
        'Stay aligned with your security requirements and reduce risk across the org.',
        'Eliminate the manual processes of implementing, managing user access and permissions on the platform. ',
        'Partner with our team to onboard, drive adoption, and identify success metrics to achieve greater value, faster.'
    ],
    image: ITImage
  },
  {
    title: 'Education',
    icons: [EducationIcon1, EducationIcon2, EducationIcon3],
    sectionTitles: [
        'Drive more valuable connections with automated scheduling',
        'Increase communication and foster coordination',
        'Deliver a better educational experience'
    ],
    sectionDescriptions: [
        'Spend more quality time supporting students, whether you’re advising, tutoring, career planning, or counseling. ',
        'Make your schedule more accessible to students and prospects, allowing them to book time when they need it most.',
        'Focus on what matters most: supporting and connecting with your students, so they can succeed. '
    ],
    image: EducationImage
  }
]

export const toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
import { IMAGES } from './business';

export interface LocationDetail {
  slug: string;
  city: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  localContext: string;
  commonConcerns: string[];
  image2: string;
  image2Alt: string;
  faqs: { question: string; answer: string }[];
}

export const locations: LocationDetail[] = [
  {
    slug: 'indianapolis-in',
    city: 'Indianapolis',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Indianapolis, Indiana',
    metaTitle: 'Mold Removal Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Indianapolis, Indiana. Locally based at 1302 N Main St. Call 463-234-9933 for professional mold assessment.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Aerial view of the Indianapolis skyline at sunset, representing the primary service area for mold remediation services.',
    intro:
      'Indy Car Racing Mold Removal Experts is based in Indianapolis, Indiana, serving property owners who are dealing with mold and moisture-related concerns. As a locally based business, we understand the conditions that Indianapolis properties face, from humidity and seasonal weather changes to the specific moisture issues that can affect homes and commercial buildings in the area. Our focus is on providing professional mold assessment and remediation services to the Indianapolis community.',
    localContext:
      'Indianapolis experiences a range of weather conditions throughout the year, from humid summers to wet springs and winters. These conditions can contribute to moisture problems in properties, particularly in basements, attics, and areas with poor ventilation. Older homes in established Indianapolis neighborhoods may also have plumbing and foundation conditions that can lead to moisture intrusion. Our local presence means we are familiar with these patterns and can assess your property with that context in mind.',
    commonConcerns: [
      'Basement moisture and mold in Indianapolis homes, particularly during wet seasons',
      'Mold development after plumbing or roof leaks',
      'Humidity-related mold in bathrooms, kitchens, and laundry areas',
      'Moisture issues in older Indianapolis properties with aging infrastructure',
      'Commercial property mold concerns in office and retail spaces',
      'Post-flooding mold assessment for properties affected by heavy rainfall',
    ],
    image2: IMAGES.indianapolisCanal,
    image2Alt:
      'Scenic view of the Indianapolis canal with the city skyline, representing the local service area.',
    faqs: [
      {
        question: 'Do you serve all of Indianapolis?',
        answer:
          'We are based in Indianapolis and serve the local area. When you call, we can discuss your specific location and confirm whether we can assist you.',
      },
      {
        question: 'What types of Indianapolis properties do you work on?',
        answer:
          'We work on both residential and commercial properties in Indianapolis. This includes single-family homes, townhomes, condos, offices, and retail spaces. We can discuss your specific property type when you call.',
      },
      {
        question: 'How quickly can you respond to an Indianapolis mold concern?',
        answer:
          'Response times depend on our current schedule and the nature of the concern. We encourage you to call as soon as you notice a problem so we can discuss the situation and schedule appropriately.',
      },
    ],
  },
  {
    slug: 'carmel-in',
    city: 'Carmel',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Carmel, Indiana',
    metaTitle: 'Mold Removal Carmel, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Carmel, Indiana. Professional mold assessment for residential and commercial properties. Call 463-234-9933.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'View of the central Indiana area representing Carmel, a community north of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Carmel, Indiana. Located just north of Indianapolis, Carmel is home to many residential and commercial properties that can experience mold and moisture-related concerns. Our team is familiar with the conditions common to the area and can assess your property with that local context in mind.',
    localContext:
      'Carmel features a mix of established and newer construction, with many homes that have basements and finished lower levels. Seasonal humidity and spring storms can contribute to moisture intrusion, and properties near wooded or low-lying areas may be particularly susceptible. We understand the building styles and environmental conditions common in Carmel and tailor our assessment accordingly.',
    commonConcerns: [
      'Basement moisture in finished lower levels of Carmel homes',
      'Mold growth after storm-related water intrusion',
      'Humidity-related mold in bathrooms and utility areas',
      'Crawl space moisture concerns in older Carmel properties',
      'Mold discovered during home renovations or inspections',
    ],
    image2: IMAGES.inspection,
    image2Alt:
      'Professional inspector examining a property interior, representing mold assessment services in Carmel, IN.',
    faqs: [
      {
        question: 'Do you serve Carmel, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Carmel and the surrounding area. Call us to discuss your specific location and concern.',
      },
      {
        question: 'What types of Carmel properties do you work on?',
        answer:
          'We work on residential and commercial properties in Carmel, including single-family homes, townhomes, and business premises. We can discuss your property type when you call.',
      },
      {
        question: 'How quickly can you respond to a Carmel mold concern?',
        answer:
          'Response times depend on our current schedule and the nature of the concern. We encourage you to call as soon as you notice a problem so we can discuss scheduling.',
      },
    ],
  },
  {
    slug: 'fishers-in',
    city: 'Fishers',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Fishers, Indiana',
    metaTitle: 'Mold Removal Fishers, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Fishers, Indiana. Professional mold inspection and assessment for local properties. Call 463-234-9933.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'View of the central Indiana region representing Fishers, a community northeast of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts offers mold assessment and remediation services to property owners in Fishers, Indiana. As one of the fastest-growing communities in the Indianapolis metropolitan area, Fishers has a wide range of residential and commercial properties that can be affected by mold and moisture concerns. We provide professional assessment and remediation tailored to the conditions we observe.',
    localContext:
      'Fishers has experienced significant residential development, with many homes featuring basements and finished lower levels. Newer construction can still experience moisture issues, particularly around foundations, windows, and plumbing connections. Seasonal weather patterns in central Indiana, including humid summers and spring storms, can contribute to conditions that support mold growth.',
    commonConcerns: [
      'Basement and foundation moisture in Fishers homes',
      'Mold after plumbing leaks or appliance failures',
      'Humidity-related mold in newer construction with tight building envelopes',
      'Attic moisture and ventilation-related mold concerns',
      'Mold in finished lower levels after water intrusion',
    ],
    image2: IMAGES.cornerInspection,
    image2Alt:
      'Worker in safety gear inspecting a room corner, representing mold assessment in Fishers, IN.',
    faqs: [
      {
        question: 'Do you serve Fishers, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Fishers. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'Can newer homes in Fishers have mold problems?',
        answer:
          'Yes. Even newer construction can experience mold if moisture is present. Tight building envelopes, plumbing connections, and basement foundations can all be sources of moisture that supports mold growth. We can assess your property regardless of its age.',
      },
      {
        question: 'What should I do if I find mold in my Fishers home?',
        answer:
          'If you find visible mold, avoid disturbing the area and call us to discuss what you have observed. We can schedule an assessment and help you understand the appropriate next steps.',
      },
    ],
  },
  {
    slug: 'noblesville-in',
    city: 'Noblesville',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Noblesville, Indiana',
    metaTitle: 'Mold Removal Noblesville, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Noblesville, Indiana. Professional mold inspection and assessment. Call 463-234-9933 to discuss your concern.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'View of the central Indiana area representing Noblesville, a community served for mold remediation services.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Noblesville, Indiana. Located north of Indianapolis along the White River, Noblesville has a mix of historic and newer properties that can be affected by mold and moisture-related concerns. Our team can assess your property and discuss the appropriate remediation approach.',
    localContext:
      'Noblesville\u2019s proximity to the White River and its mix of older and newer construction means that properties can face a range of moisture-related challenges. Historic homes may have aging foundations and plumbing, while newer developments may experience settling-related moisture issues. The seasonal weather patterns of central Indiana also contribute to conditions that can support mold development.',
    commonConcerns: [
      'Moisture concerns in historic Noblesville properties near the river',
      'Basement mold after heavy rainfall or flooding events',
      'Mold in older homes with aging plumbing and foundation conditions',
      'Humidity and ventilation-related mold in residential properties',
      'Post-leak mold concerns after plumbing or roof issues',
    ],
    image2: IMAGES.wallDamage,
    image2Alt:
      'Wall with visible moisture damage, representing conditions assessed during mold remediation in Noblesville, IN.',
    faqs: [
      {
        question: 'Do you serve Noblesville, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Noblesville. Call us to discuss your specific location and concern.',
      },
      {
        question: 'I live near the White River. Should I be concerned about mold?',
        answer:
          'Properties near water sources can be more susceptible to moisture intrusion, particularly during heavy rainfall. If you have noticed moisture, musty odors, or visible mold, we can assess your property and discuss what we find.',
      },
      {
        question: 'Can you assess older homes in Noblesville?',
        answer:
          'Yes. We assess properties of all ages, including historic homes. Older properties may have conditions such as aging foundations or plumbing that can contribute to moisture and mold concerns. We take these factors into account during the assessment.',
      },
    ],
  },
  {
    slug: 'greenwood-in',
    city: 'Greenwood',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Greenwood, Indiana',
    metaTitle: 'Mold Removal Greenwood, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Greenwood, Indiana. Professional mold inspection and assessment for local properties. Call 463-234-9933.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'View of the central Indiana region representing Greenwood, a community south of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Greenwood, Indiana. Located south of Indianapolis, Greenwood has a variety of residential and commercial properties that can experience mold and moisture concerns. We offer professional assessment and remediation tailored to the conditions we observe in your property.',
    localContext:
      'Greenwood features a mix of established neighborhoods and newer developments. Many homes in the area have basements and crawl spaces that can be susceptible to moisture, particularly during periods of heavy rain or high humidity. Properties with older plumbing or foundation conditions may also be at risk for moisture intrusion and subsequent mold development.',
    commonConcerns: [
      'Basement and crawl space moisture in Greenwood homes',
      'Mold after storm-related water intrusion or plumbing leaks',
      'Bathroom and kitchen humidity-related mold growth',
      'Mold discovered during property inspections or renovations',
      'Persistent musty odors in specific rooms or lower levels',
    ],
    image2: IMAGES.inspectorWindow,
    image2Alt:
      'Inspector examining a window area for signs of moisture, representing mold assessment in Greenwood, IN.',
    faqs: [
      {
        question: 'Do you serve Greenwood, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Greenwood. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'My Greenwood home has a musty smell. Should I call?',
        answer:
          'A persistent musty odor can be a sign of hidden mold or moisture. We recommend calling to discuss what you have noticed so we can determine whether an assessment is appropriate.',
      },
      {
        question: 'Can you assess crawl spaces in Greenwood properties?',
        answer:
          'Yes, we can assess crawl spaces as part of our mold and moisture assessment. Crawl spaces are common areas where moisture and mold can develop. We can include this area in the assessment if it is relevant to your concern.',
      },
    ],
  },
  {
    slug: 'plainfield-in',
    city: 'Plainfield',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Plainfield, Indiana',
    metaTitle: 'Mold Removal Plainfield, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Plainfield, Indiana. Professional mold inspection and assessment. Call 463-234-9933 to discuss your concern.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'View of the central Indiana area representing Plainfield, a community west of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts offers mold assessment and remediation services to property owners in Plainfield, Indiana. Located west of Indianapolis, Plainfield has a growing mix of residential and commercial properties. Our team provides professional mold inspection and remediation services tailored to the conditions present in your property.',
    localContext:
      'Plainfield has seen significant development in recent years, with many newer homes and commercial buildings. While newer construction can be less susceptible to some issues, moisture problems can still arise from plumbing failures, foundation settling, and seasonal humidity. Properties near the White Lick Creek area may also experience moisture intrusion during heavy rainfall events.',
    commonConcerns: [
      'Mold after plumbing leaks or appliance failures in newer Plainfield homes',
      'Foundation-related moisture in basements and lower levels',
      'Commercial property mold concerns in retail and office spaces',
      'Humidity-related mold in bathrooms and poorly ventilated areas',
      'Mold discovered during home inspections or property transactions',
    ],
    image2: IMAGES.ventInspection,
    image2Alt:
      'Inspector examining a vent area, representing mold assessment in Plainfield, IN properties.',
    faqs: [
      {
        question: 'Do you serve Plainfield, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Plainfield. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'Can you assess commercial properties in Plainfield?',
        answer:
          'Yes, we work on both residential and commercial properties. We can assess retail spaces, offices, and other commercial buildings in Plainfield. Call us to discuss your property type and concern.',
      },
      {
        question: 'My Plainfield home is new. Can it still have mold?',
        answer:
          'Yes. Even new construction can experience mold if moisture is present. Plumbing connections, foundation settling, and ventilation issues can all contribute to conditions that support mold growth. We can assess your property regardless of its age.',
      },
    ],
  },
  {
    slug: 'brownsburg-in',
    city: 'Brownsburg',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Brownsburg, Indiana',
    metaTitle: 'Mold Removal Brownsburg, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Brownsburg, Indiana. Professional mold inspection and assessment for local properties. Call 463-234-9933.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'View of the central Indiana region representing Brownsburg, a community northwest of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Brownsburg, Indiana. Located northwest of Indianapolis, Brownsburg has a range of residential properties that can experience mold and moisture-related concerns. Our team offers professional assessment and remediation tailored to the conditions we observe.',
    localContext:
      'Brownsburg features a mix of established and newer residential neighborhoods. Many homes in the area have basements that can be prone to moisture, particularly during wet seasons. Properties near White Lick Creek or in low-lying areas may experience additional moisture challenges. The seasonal weather of central Indiana contributes to conditions that can support mold growth in basements, bathrooms, and poorly ventilated spaces.',
    commonConcerns: [
      'Basement moisture and mold in Brownsburg homes',
      'Mold after storm-related water intrusion or flooding',
      'Crawl space moisture in properties with limited ventilation',
      'Mold in bathrooms, kitchens, and laundry areas due to humidity',
      'Post-leak mold concerns after plumbing or roof issues',
    ],
    image2: IMAGES.peelingWall,
    image2Alt:
      'Wall with peeling paint showing moisture damage, representing conditions assessed in Brownsburg, IN.',
    faqs: [
      {
        question: 'Do you serve Brownsburg, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Brownsburg. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'I noticed mold in my Brownsburg basement. What should I do?',
        answer:
          'If you see mold in your basement, avoid disturbing the area and call us to discuss what you have observed. We can schedule an assessment and help you understand the appropriate next steps.',
      },
      {
        question: 'Can you assess mold in crawl spaces in Brownsburg?',
        answer:
          'Yes, we can assess crawl spaces as part of our mold and moisture evaluation. Crawl spaces are common areas where moisture and mold can develop. We can include this area in the assessment if relevant to your concern.',
      },
    ],
  },
  {
    slug: 'avon-in',
    city: 'Avon',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Avon, Indiana',
    metaTitle: 'Mold Removal Avon, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Avon, Indiana. Professional mold inspection and assessment. Call 463-234-9933 to discuss your concern.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'View of the central Indiana area representing Avon, a community west of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Avon, Indiana. Located west of Indianapolis, Avon has a growing community with a variety of residential and commercial properties. We offer professional mold inspection and remediation services tailored to the specific conditions of your property.',
    localContext:
      'Avon has experienced substantial residential growth, with many homes featuring basements and finished lower levels. The clay-heavy soil common in western Hendricks County can contribute to foundation moisture issues, particularly during wet seasons. Properties in the area may also experience humidity-related mold in bathrooms, kitchens, and areas with limited ventilation.',
    commonConcerns: [
      'Foundation and basement moisture in Avon homes due to clay soil conditions',
      'Mold after plumbing leaks or water intrusion events',
      'Humidity-related mold in finished basements and lower levels',
      'Mold in bathrooms, kitchens, and utility areas',
      'Musty odors indicating potential hidden moisture or mold',
    ],
    image2: IMAGES.crackDamage,
    image2Alt:
      'Cracked wall texture showing potential foundation-related moisture damage, representing conditions assessed in Avon, IN.',
    faqs: [
      {
        question: 'Do you serve Avon, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Avon. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'Can clay soil in Avon contribute to mold problems?',
        answer:
          'Clay-heavy soil can retain moisture near foundations, which may contribute to basement moisture issues. If you have noticed dampness, musty odors, or visible mold in your basement, we can assess the situation and discuss what we find.',
      },
      {
        question: 'What should I do if I smell mold but cannot see it in my Avon home?',
        answer:
          'A musty odor without visible mold can indicate moisture or mold in hidden areas such as behind walls, under flooring, or in crawl spaces. We can assess the areas of concern and help determine whether further evaluation is appropriate.',
      },
    ],
  },
  {
    slug: 'zionsville-in',
    city: 'Zionsville',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Zionsville, Indiana',
    metaTitle: 'Mold Removal Zionsville, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Zionsville, Indiana. Professional mold inspection and assessment. Call 463-234-9933 to discuss your concern.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'View of the central Indiana region representing Zionsville, a community northwest of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Zionsville, Indiana. Located northwest of Indianapolis, Zionsville is known for its distinctive village character and mix of historic and newer homes. Our team can assess your property for mold and moisture concerns and discuss the appropriate remediation approach.',
    localContext:
      'Zionsville features a range of property types, from historic homes in the village area to newer construction in surrounding developments. Older homes may have aging foundations, plumbing, and ventilation systems that can contribute to moisture intrusion. The wooded and natural areas common in Zionsville can also contribute to higher humidity levels around properties, which may support mold development.',
    commonConcerns: [
      'Moisture and mold in historic Zionsville village homes',
      'Basement and foundation moisture after seasonal rainfall',
      'Mold in properties surrounded by wooded areas with higher humidity',
      'Mold discovered during renovations or property inspections',
      'Post-leak mold concerns in older and newer properties',
    ],
    image2: IMAGES.clipboard,
    image2Alt:
      'Professional with a clipboard during a property assessment, representing mold inspection in Zionsville, IN.',
    faqs: [
      {
        question: 'Do you serve Zionsville, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Zionsville. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'Can you assess historic homes in Zionsville?',
        answer:
          'Yes. We assess properties of all ages, including historic homes. Older properties may have conditions such as aging foundations, plumbing, or ventilation that can contribute to moisture and mold. We take these factors into account during the assessment.',
      },
      {
        question: 'Does living near wooded areas increase mold risk?',
        answer:
          'Properties surrounded by trees and natural areas may experience higher humidity and reduced airflow, which can contribute to conditions that support mold. If you have noticed moisture, odors, or visible mold, we can assess your property and discuss what we find.',
      },
    ],
  },
  {
    slug: 'lawrence-in',
    city: 'Lawrence',
    state: 'Indiana',
    h1: 'Mold Removal & Remediation in Lawrence, Indiana',
    metaTitle: 'Mold Removal Lawrence, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Mold removal and remediation services in Lawrence, Indiana. Professional mold inspection and assessment. Call 463-234-9933 to discuss your concern.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'View of the central Indiana area representing Lawrence, a community on the east side of Indianapolis served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts provides mold assessment and remediation services to property owners in Lawrence, Indiana. Located on the east side of the Indianapolis metropolitan area, Lawrence has a variety of residential and commercial properties that can be affected by mold and moisture concerns. Our team offers professional assessment and remediation tailored to the conditions we observe.',
    localContext:
      'Lawrence features a mix of established neighborhoods and commercial areas. Many homes in the community have basements and crawl spaces that can be susceptible to moisture, particularly during heavy rainfall or periods of high humidity. Properties with older plumbing, roof systems, or foundation conditions may also be at risk for moisture intrusion and subsequent mold development.',
    commonConcerns: [
      'Basement and crawl space moisture in Lawrence homes',
      'Mold after storm-related water intrusion or plumbing failures',
      'Roof leak-related mold in ceilings and upper levels',
      'Bathroom and kitchen humidity-related mold growth',
      'Mold in commercial properties and retail spaces',
    ],
    image2: IMAGES.protectiveGear,
    image2Alt:
      'Professional in protective gear performing remediation work, representing mold remediation services in Lawrence, IN.',
    faqs: [
      {
        question: 'Do you serve Lawrence, Indiana?',
        answer:
          'Yes, we provide mold assessment and remediation services to Lawrence. Call us to discuss your specific location and the concern you have noticed.',
      },
      {
        question: 'Can you assess both homes and businesses in Lawrence?',
        answer:
          'Yes, we work on both residential and commercial properties in Lawrence. We can assess homes, retail spaces, offices, and other property types. Call us to discuss your specific property.',
      },
      {
        question: 'What should I do after a roof leak in my Lawrence home?',
        answer:
          'After a roof leak, it is important to address the water intrusion and thoroughly dry the affected areas. If moisture has soaked into ceilings, walls, or insulation and was not dried promptly, mold may develop. We can assess the affected areas for signs of mold and moisture.',
      },
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((l) => l.slug === slug);
}

import { IMAGES } from './business';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  signsHeading: string;
  signs: string[];
  processHeading: string;
  processParagraph: string;
  processSteps: { title: string; description: string }[];
  image2: string;
  image2Alt: string;
  faqs: { question: string; answer: string }[];
  relatedServices: { label: string; slug: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'mold-removal',
    title: 'Mold Removal',
    shortTitle: 'Mold Removal',
    h1: 'Professional Mold Removal Services in Indianapolis',
    metaTitle: 'Mold Removal Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Professional mold removal services in Indianapolis, IN. Our team addresses visible mold and moisture-related problems. Call 463-234-9933.',
    heroImage: IMAGES.protectiveGear,
    heroImageAlt:
      'Professional in protective gear performing mold removal treatment indoors using specialized equipment.',
    intro:
      'Mold removal is the process of addressing visible mold growth on surfaces within a property. At Indy Car Racing Mold Removal Experts, we focus on identifying and removing mold from affected areas using professional techniques and equipment. Mold can develop in areas where moisture is present, and addressing it promptly can help prevent it from spreading to additional areas of your property. Our approach is tailored to the specific conditions we observe during our assessment.',
    signsHeading: 'Common Signs That May Warrant Mold Removal',
    signs: [
      'Visible mold growth on walls, ceilings, floors, or other surfaces',
      'Dark spots or discoloration that appears in moisture-prone areas',
      'Persistent musty or earthy odors in specific rooms or areas',
      'Mold returning in areas that were previously cleaned',
      'Discoloration around windows, pipes, or plumbing fixtures',
      'Past water incidents that were not thoroughly dried',
    ],
    processHeading: 'Our Mold Removal Process',
    processParagraph:
      'The mold removal process typically begins with a discussion of what you have observed, followed by an assessment of the affected areas. The specific approach depends on the extent of the growth, the materials involved, and the underlying moisture conditions.',
    processSteps: [
      {
        title: 'Discuss the Concern',
        description:
          'You call us to describe the visible mold, where it appears, and any known moisture issues. This helps us understand the situation before we arrive.',
      },
      {
        title: 'Assess the Affected Area',
        description:
          'We examine the areas where mold is visible and look for contributing moisture conditions. The scope of removal depends on what we find.',
      },
      {
        title: 'Plan the Removal Approach',
        description:
          'Based on the assessment, we outline the recommended removal steps for the specific surfaces and extent of growth involved.',
      },
      {
        title: 'Perform Mold Removal',
        description:
          'We work on the affected areas using appropriate methods and equipment, focusing on the visible mold and surrounding materials as needed.',
      },
      {
        title: 'Discuss Moisture Concerns',
        description:
          'We explain the importance of addressing the underlying moisture source, as unresolved moisture can contribute to future mold development.',
      },
    ],
    image2: IMAGES.sprayTreatment,
    image2Alt:
      'Professional using power spray equipment for indoor remediation and mold removal work.',
    faqs: [
      {
        question: 'What is the difference between mold removal and mold remediation?',
        answer:
          'Mold removal typically refers to the act of removing visible mold from surfaces, while mold remediation is a broader process that includes assessment, removal, and addressing the conditions that contributed to the mold growth. The two terms are often used together, and the specific approach depends on the situation.',
      },
      {
        question: 'Can I remove mold myself?',
        answer:
          'Small areas of surface mold can sometimes be addressed by property owners. However, larger areas, mold that returns after cleaning, or mold in hidden or difficult-to-access areas may benefit from professional assessment and removal. We can discuss your specific situation by phone.',
      },
      {
        question: 'How long does mold removal take?',
        answer:
          'The time required depends on the extent of the mold growth, the size of the affected area, and the materials involved. We can provide a better sense of the timeline after discussing what you have observed.',
      },
    ],
    relatedServices: [
      { label: 'Mold Remediation', slug: 'mold-remediation' },
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Mold-Affected Drywall Assessment', slug: 'mold-affected-drywall-assessment' },
    ],
  },
  {
    slug: 'mold-remediation',
    title: 'Mold Remediation',
    shortTitle: 'Mold Remediation',
    h1: 'Mold Remediation Services in Indianapolis, Indiana',
    metaTitle: 'Mold Remediation Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Comprehensive mold remediation in Indianapolis. We assess, address, and help manage mold and moisture-related concerns. Call 463-234-9933.',
    heroImage: IMAGES.renovationPrep,
    heroImageAlt:
      'Worker in protective gear prepping a wall during professional mold remediation work.',
    intro:
      'Mold remediation is a broader process than mold removal alone. It encompasses assessing the affected area, addressing the visible mold, and working to manage the conditions that contributed to its development. At Indy Car Racing Mold Removal Experts, our remediation approach is based on what we observe during our assessment of your property. We focus on the affected areas and communicate clearly about the recommended scope of work.',
    signsHeading: 'Circumstances That May Warrant Mold Remediation',
    signs: [
      'Visible mold that has spread across multiple surfaces or rooms',
      'Mold that has returned after previous cleaning attempts',
      'Moisture problems that have been ongoing or unresolved',
      'Areas that have experienced leaks, flooding, or high humidity',
      'Musty odors that persist despite ventilation and cleaning efforts',
      'Discoloration on drywall, ceiling tiles, or other building materials',
    ],
    processHeading: 'Understanding the Remediation Process',
    processParagraph:
      'Mold remediation typically involves several stages, from the initial discussion through to addressing moisture concerns. The specific approach is determined by the property conditions and the extent of the mold growth observed.',
    processSteps: [
      {
        title: 'Discuss the Concern',
        description:
          'The process begins when you call to describe what you have seen, smelled, or experienced. This information helps us prepare for the assessment.',
      },
      {
        title: 'Assess the Situation',
        description:
          'We examine the property to understand the extent of the mold and the moisture conditions that may be contributing to it.',
      },
      {
        title: 'Plan the Work',
        description:
          'Based on the assessment, we describe the recommended remediation scope, focusing on the specific areas and conditions identified.',
      },
      {
        title: 'Perform Appropriate Remediation',
        description:
          'We carry out the remediation work in accordance with the plan and the observed conditions, using appropriate methods and equipment.',
      },
      {
        title: 'Address Moisture Sources',
        description:
          'We explain why addressing the underlying moisture is important and discuss what may need to be resolved to help prevent future development.',
      },
    ],
    image2: IMAGES.workerPPE,
    image2Alt:
      'Professional in full protective equipment performing indoor mold remediation and sanitization work.',
    faqs: [
      {
        question: 'What does mold remediation include?',
        answer:
          'Mold remediation typically includes assessing the affected area, addressing visible mold, and discussing the moisture conditions that contributed to the growth. The specific steps depend on what is found during the assessment and the property conditions.',
      },
      {
        question: 'Will mold remediation prevent mold from coming back?',
        answer:
          'Mold remediation addresses the visible mold and the conditions observed at the time. However, we cannot guarantee that mold will not return if the underlying moisture source is not fully resolved. We discuss this with you as part of the process.',
      },
      {
        question: 'How is the remediation approach determined?',
        answer:
          'The approach is based on the assessment of the affected area, including the extent of the mold, the materials involved, and the moisture conditions present. Each situation is different, and we tailor our recommendations accordingly.',
      },
    ],
    relatedServices: [
      { label: 'Mold Removal', slug: 'mold-removal' },
      { label: 'Moisture Problem Assessment', slug: 'moisture-problem-assessment' },
      { label: 'Mold Remediation Planning', slug: 'mold-remediation-planning' },
    ],
  },
  {
    slug: 'mold-inspection',
    title: 'Mold Inspection',
    shortTitle: 'Mold Inspection',
    h1: 'Professional Mold Inspection in Indianapolis',
    metaTitle: 'Mold Inspection Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Thorough mold inspection services in Indianapolis. We assess visible mold and moisture conditions to help you understand the situation. Call 463-234-9933.',
    heroImage: IMAGES.inspection,
    heroImageAlt:
      'Professional home inspector in safety gear examining a house interior for mold and safety compliance.',
    intro:
      'A mold inspection involves a visual assessment of your property to identify areas where mold is visible or where conditions may support mold development. At Indy Car Racing Mold Removal Experts, our inspections focus on identifying visible mold, assessing moisture-related conditions, and providing you with information about what we observe. This helps you make informed decisions about any next steps.',
    signsHeading: 'When to Consider a Mold Inspection',
    signs: [
      'You see visible mold but are unsure of the full extent',
      'You notice a persistent musty odor but cannot locate the source',
      'Your property has experienced a leak, flood, or plumbing issue',
      'You are preparing to purchase or occupy a previously vacant property',
      'You have had ongoing humidity or ventilation problems',
      'You want to understand the condition of a specific area before proceeding with work',
    ],
    processHeading: 'What to Expect During a Mold Inspection',
    processParagraph:
      'A mold inspection is a visual assessment process. We examine the areas of concern and look for visible signs of mold and moisture-related conditions. The inspection helps us provide you with relevant information about what we observe.',
    processSteps: [
      {
        title: 'Discuss Your Concerns',
        description:
          'You describe what you have noticed, including any visible mold, odors, or past moisture events. This helps us focus the inspection.',
      },
      {
        title: 'Visual Assessment',
        description:
          'We examine the areas of concern and surrounding spaces for visible mold, discoloration, and signs of moisture.',
      },
      {
        title: 'Discuss Findings',
        description:
          'We explain what we observed during the inspection and discuss whether further assessment or remediation may be appropriate.',
      },
    ],
    image2: IMAGES.clipboard,
    image2Alt:
      'Professional holding a checklist on a clipboard during a property mold inspection.',
    faqs: [
      {
        question: 'Does visible mold always reveal the full extent of a problem?',
        answer:
          'No. Visible mold may indicate conditions in adjacent or hidden areas that are not immediately apparent. A inspection can help identify what is visible, but additional assessment may be needed depending on the situation.',
      },
      {
        question: 'Is a mold inspection the same as mold testing?',
        answer:
          'A mold inspection is a visual assessment of the property for signs of mold and moisture. Mold testing typically involves laboratory analysis of samples. We focus on inspection and assessment; we do not provide laboratory testing services.',
      },
      {
        question: 'What information should I provide when calling for an inspection?',
        answer:
          'It helps to describe where you have seen mold, any odors you have noticed, any past water incidents, and how long you have been aware of the issue. The more detail you can provide, the better we can prepare for the inspection.',
      },
    ],
    relatedServices: [
      { label: 'Basement Mold Inspection', slug: 'basement-mold-inspection' },
      { label: 'Mold Remediation', slug: 'mold-remediation' },
      { label: 'Residential Mold Assessment', slug: 'residential-mold-assessment' },
    ],
  },
  {
    slug: 'basement-mold-inspection',
    title: 'Basement Mold Inspection',
    shortTitle: 'Basement Mold Inspection',
    h1: 'Basement Mold Inspection Services in Indianapolis',
    metaTitle: 'Basement Mold Inspection Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Basement mold inspection in Indianapolis. Basements are prone to moisture and mold. Call 463-234-9933 to schedule an assessment.',
    heroImage: IMAGES.cornerInspection,
    heroImageAlt:
      'Worker in safety gear inspecting a basement corner for mold and moisture issues.',
    intro:
      'Basements are one of the most common areas where mold develops, due to their below-ground location and tendency toward higher humidity and moisture. A basement mold inspection focuses on identifying visible mold and moisture-related conditions in this specific area of your property. At Indy Car Racing Mold Removal Experts, we examine basement walls, floors, ceilings, and areas around plumbing, windows, and foundation cracks.',
    signsHeading: 'Signs Your Basement May Need a Mold Inspection',
    signs: [
      'A persistent musty smell when entering the basement',
      'Visible mold on basement walls, floors, or stored items',
      'Water stains or discoloration on basement walls or ceilings',
      'Past basement flooding or water seepage through the foundation',
      'Condensation on basement windows, pipes, or cold surfaces',
      'Damp or humid conditions that persist despite ventilation efforts',
    ],
    processHeading: 'Basement Mold Inspection Process',
    processParagraph:
      'A basement mold inspection involves a visual assessment of the basement area, focusing on common problem areas and the conditions that contribute to mold development in below-ground spaces.',
    processSteps: [
      {
        title: 'Discuss Basement Concerns',
        description:
          'You describe what you have noticed in the basement, including any odors, visible mold, or past water events.',
      },
      {
        title: 'Inspect Basement Areas',
        description:
          'We examine walls, floors, corners, around plumbing, near windows, and other areas where moisture and mold commonly develop in basements.',
      },
      {
        title: 'Discuss Observations',
        description:
          'We explain what we found and discuss whether further assessment or remediation may be appropriate for your situation.',
      },
    ],
    image2: IMAGES.ventInspection,
    image2Alt:
      'Inspector examining a floor vent area, a common location for moisture and mold in basements.',
    faqs: [
      {
        question: 'What should I do if I see mold in my basement?',
        answer:
          'If you see mold in your basement, it can be helpful to avoid disturbing the area and to call a professional to discuss what you have observed. We can assess the situation and provide guidance on next steps.',
      },
      {
        question: 'Why are basements so prone to mold?',
        answer:
          'Basements are below ground level, which means they tend to have higher humidity, less air circulation, and are more susceptible to water seepage through foundations. These conditions can create an environment where mold is more likely to develop.',
      },
      {
        question: 'Should I be concerned about mold in an unfinished basement?',
        answer:
          'Mold can develop in both finished and unfinished basements. Even in unfinished spaces, visible mold may indicate a moisture issue that could be worth addressing. We can assess the situation and discuss what we find.',
      },
    ],
    relatedServices: [
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Moisture Problem Assessment', slug: 'moisture-problem-assessment' },
      { label: 'Mold Removal', slug: 'mold-removal' },
    ],
  },
  {
    slug: 'residential-mold-assessment',
    title: 'Residential Mold Assessment',
    shortTitle: 'Residential Mold Assessment',
    h1: 'Residential Mold Assessment for Indianapolis Homes',
    metaTitle: 'Residential Mold Assessment Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Residential mold assessment for homes in Indianapolis. We evaluate visible mold and moisture conditions in residential properties. Call 463-234-9933.',
    heroImage: IMAGES.inspectorWindow,
    heroImageAlt:
      'Inspector in safety vest examining a window area in a home for signs of moisture or mold.',
    intro:
      'A residential mold assessment focuses on evaluating mold and moisture-related conditions in homes. Whether you live in a single-family house, a townhome, or a condo, our assessment at Indy Car Racing Mold Removal Experts is designed to identify visible mold, understand the conditions that may be contributing to it, and provide you with clear information about what we observe. This allows you to make informed decisions about any remediation work.',
    signsHeading: 'Common Reasons Homeowners Request a Mold Assessment',
    signs: [
      'Visible mold in bathrooms, kitchens, laundry rooms, or basements',
      'A musty odor in one or more rooms of the home',
      'Past roof leaks, plumbing leaks, or appliance leaks',
      'Condensation on windows or walls during certain seasons',
      'Discoloration on ceilings, walls, or around fixtures',
      'Concerns about a specific room or area where moisture is present',
    ],
    processHeading: 'What a Residential Mold Assessment Involves',
    processParagraph:
      'A residential mold assessment is a visual evaluation of your home for signs of mold and moisture. We focus on the areas you are concerned about and also look at adjacent spaces that may be affected.',
    processSteps: [
      {
        title: 'Discuss Your Home Concerns',
        description:
          'You describe the rooms or areas where you have noticed mold, odors, or moisture, and any relevant history of leaks or water events.',
      },
      {
        title: 'Assess the Property',
        description:
          'We visually examine the areas of concern and surrounding spaces for visible mold, moisture signs, and contributing conditions.',
      },
      {
        title: 'Review Findings',
        description:
          'We discuss what we observed and whether remediation or further assessment may be appropriate for your home.',
      },
    ],
    image2: IMAGES.clipboard,
    image2Alt:
      'Professional holding a checklist during a residential property mold assessment.',
    faqs: [
      {
        question: 'How is a residential mold assessment different from a mold inspection?',
        answer:
          'The terms are often used interchangeably. Both involve a visual evaluation of the property for signs of mold and moisture. An assessment may include a broader discussion of conditions and recommendations.',
      },
      {
        question: 'Do I need to leave my home during the assessment?',
        answer:
          'A visual assessment typically does not require you to leave your home. If remediation work is later recommended, we can discuss any considerations at that time.',
      },
      {
        question: 'What areas of my home will be assessed?',
        answer:
          'We focus on the areas you are concerned about and typically examine adjacent spaces as well. Common areas include bathrooms, kitchens, basements, laundry rooms, and areas near plumbing or windows.',
      },
    ],
    relatedServices: [
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Mold Remediation', slug: 'mold-remediation' },
      { label: 'Basement Mold Inspection', slug: 'basement-mold-inspection' },
    ],
  },
  {
    slug: 'commercial-mold-remediation',
    title: 'Commercial Mold Remediation',
    shortTitle: 'Commercial Mold Remediation',
    h1: 'Commercial Mold Remediation in Indianapolis',
    metaTitle: 'Commercial Mold Remediation Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Commercial mold remediation services in Indianapolis for offices, retail, and commercial properties. Call 463-234-9933 to discuss your property.',
    heroImage: IMAGES.commercialSpace,
    heroImageAlt:
      'Empty commercial office interior representing a property that may require mold assessment and remediation.',
    intro:
      'Commercial properties can experience mold and moisture issues just as residential properties can. At Indy Car Racing Mold Removal Experts, we provide mold remediation services for commercial spaces in Indianapolis. Whether you manage an office, a retail space, or another type of commercial property, we can assess the situation and discuss the appropriate approach based on what we observe.',
    signsHeading: 'Signs a Commercial Property May Need Mold Remediation',
    signs: [
      'Visible mold on walls, ceilings, or HVAC components',
      'Persistent musty odors in office, retail, or common areas',
      'Past roof leaks, plumbing failures, or water incidents',
      'Discoloration on ceiling tiles, walls, or carpet',
      'Employee or tenant reports of odors or visible mold',
      'High humidity or condensation issues in the building',
    ],
    processHeading: 'Commercial Mold Remediation Approach',
    processParagraph:
      'Commercial mold remediation follows a similar assessment-based approach to residential work, with consideration for the scale and use of the property. The specific approach depends on the observed conditions.',
    processSteps: [
      {
        title: 'Discuss the Property Concern',
        description:
          'You describe the building, the areas of concern, and any reports from employees or tenants about mold or odors.',
      },
      {
        title: 'Assess the Commercial Space',
        description:
          'We examine the reported areas and surrounding spaces for visible mold and moisture-related conditions.',
      },
      {
        title: 'Plan and Perform Remediation',
        description:
          'Based on the assessment, we discuss the recommended scope and carry out the remediation work appropriate to the property conditions.',
      },
    ],
    image2: IMAGES.modernOffice,
    image2Alt:
      'Modern commercial office lobby, representing a commercial property that may need mold remediation.',
    faqs: [
      {
        question: 'Can you work on commercial properties of any size?',
        answer:
          'We can assess commercial properties and discuss the appropriate approach based on what we observe. The scope of work depends on the extent of the mold and the property conditions. We can discuss your specific property by phone.',
      },
      {
        question: 'Will remediation disrupt our business operations?',
        answer:
          'The level of disruption depends on the scope of the work and the areas involved. We can discuss scheduling and logistics when you call, so you have a clear understanding of what to expect.',
      },
      {
        question: 'Do you work with property managers?',
        answer:
          'Yes. We can discuss the property concerns with property managers or owners and assess the situation to determine the appropriate remediation approach.',
      },
    ],
    relatedServices: [
      { label: 'Mold Remediation', slug: 'mold-remediation' },
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Moisture Problem Assessment', slug: 'moisture-problem-assessment' },
    ],
  },
  {
    slug: 'moisture-problem-assessment',
    title: 'Moisture Problem Assessment',
    shortTitle: 'Moisture Problem Assessment',
    h1: 'Moisture Problem Assessment in Indianapolis',
    metaTitle: 'Moisture Problem Assessment Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Moisture problem assessment in Indianapolis. We evaluate moisture conditions that can contribute to mold. Call 463-234-9933.',
    heroImage: IMAGES.wallDamage,
    heroImageAlt:
      'Wall with peeling paint and exposed plaster showing signs of moisture damage.',
    intro:
      'Moisture is a key factor in mold development. A moisture problem assessment focuses on identifying areas where moisture may be present or contributing to conditions that support mold growth. At Indy Car Racing Mold Removal Experts, we visually assess areas of concern and look for signs of moisture intrusion, condensation, or humidity issues. Understanding the moisture conditions in your property is an important step in addressing mold-related concerns.',
    signsHeading: 'Signs You May Have a Moisture Problem',
    signs: [
      'Peeling paint, warped materials, or stained ceilings and walls',
      'Condensation on windows, pipes, or cold surfaces',
      'A damp or humid feeling in certain rooms',
      'Water stains or discoloration near plumbing, roofs, or foundations',
      'Musty odors that suggest hidden moisture',
      'Past leaks or flooding that may not have been fully dried',
    ],
    processHeading: 'How We Approach Moisture Assessment',
    processParagraph:
      'A moisture problem assessment involves a visual examination of the property for signs of moisture intrusion and conditions that contribute to mold development. We focus on the areas you describe as concerning.',
    processSteps: [
      {
        title: 'Discuss the Concern',
        description:
          'You describe what you have noticed, including any visible water, stains, odors, or past incidents that may be relevant.',
      },
      {
        title: 'Visually Assess for Moisture Signs',
        description:
          'We examine the areas of concern for visible signs of moisture, including stains, discoloration, peeling, and condensation.',
      },
      {
        title: 'Discuss Findings and Mold Concerns',
        description:
          'We explain what we observed and discuss whether mold assessment or remediation may be appropriate based on the moisture conditions found.',
      },
    ],
    image2: IMAGES.peelingWall,
    image2Alt:
      'Wall with peeling paint and exposed material, a visual sign of potential moisture problems.',
    faqs: [
      {
        question: 'Why is it important to address moisture problems?',
        answer:
          'Moisture is a primary condition that allows mold to develop. If moisture issues are not addressed, mold may continue to develop even after remediation. Understanding and managing moisture is an important part of the overall process.',
      },
      {
        question: 'Do you fix the source of the moisture?',
        answer:
          'We assess and identify moisture conditions and explain their relevance to mold concerns. Addressing the source of moisture, such as a plumbing repair or roof fix, may involve other trades. We can discuss what may be needed in your situation.',
      },
      {
        question: 'Can moisture problems exist without visible mold?',
        answer:
          'Yes. Moisture can be present without visible mold, but ongoing moisture creates conditions where mold can develop. Identifying and addressing moisture early can help reduce the likelihood of mold growth.',
      },
    ],
    relatedServices: [
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Basement Mold Inspection', slug: 'basement-mold-inspection' },
      { label: 'Post-Leak Mold Concerns', slug: 'post-leak-mold-concerns' },
    ],
  },
  {
    slug: 'mold-affected-drywall-assessment',
    title: 'Mold-Affected Drywall Assessment',
    shortTitle: 'Drywall Assessment',
    h1: 'Mold-Affected Drywall Assessment in Indianapolis',
    metaTitle: 'Mold-Affected Drywall Assessment Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Assessment of mold-affected drywall in Indianapolis. We evaluate drywall for signs of mold and moisture damage. Call 463-234-9933.',
    heroImage: IMAGES.crackDamage,
    heroImageAlt:
      'Cracked plaster wall texture showing surface damage that can be associated with moisture and mold.',
    intro:
      'Drywall is a material that can be particularly susceptible to mold when exposed to moisture. A mold-affected drywall assessment focuses on evaluating drywall surfaces for signs of mold growth and moisture damage. At Indy Car Racing Mold Removal Experts, we examine drywall in areas of concern to determine the extent of visible mold and discuss the appropriate approach based on what we find.',
    signsHeading: 'Signs Your Drywall May Be Affected by Mold',
    signs: [
      'Discoloration or dark spots on drywall surfaces',
      'Soft, crumbling, or deteriorating sections of drywall',
      'Paint that is peeling, bubbling, or cracking',
      'A musty odor emanating from walls',
      'Water stains on ceilings or walls that have dried but left residue',
      'Visible mold growth on or along the edges of drywall',
    ],
    processHeading: 'Drywall Assessment Process',
    processParagraph:
      'A mold-affected drywall assessment involves visually examining drywall surfaces in the areas of concern for signs of mold and moisture damage. The findings help determine what approach may be appropriate.',
    processSteps: [
      {
        title: 'Discuss the Area of Concern',
        description:
          'You describe which walls or ceilings you are concerned about and what you have observed, such as discoloration or odors.',
      },
      {
        title: 'Assess the Drywall',
        description:
          'We visually examine the drywall for signs of mold, moisture damage, discoloration, and deterioration.',
      },
      {
        title: 'Discuss Findings and Options',
        description:
          'We explain what we observed and discuss whether remediation, removal of affected sections, or further assessment may be appropriate.',
      },
    ],
    image2: IMAGES.peelingWall,
    image2Alt:
      'Wall with peeling paint and exposed material, showing drywall that may be affected by mold and moisture.',
    faqs: [
      {
        question: 'Can moldy drywall be cleaned, or does it need to be removed?',
        answer:
          'The appropriate approach depends on the extent of the mold and the condition of the drywall. Surface mold on paint may sometimes be addressed differently than mold that has penetrated the material. We can assess the situation and discuss what may be appropriate.',
      },
      {
        question: 'How can I tell if mold has gone through the drywall?',
        answer:
          'Visible mold on the surface, discoloration that persists, soft or deteriorating areas, and odors can all be indicators. A professional assessment can help determine the extent of the concern.',
      },
      {
        question: 'Do you replace drywall as part of your services?',
        answer:
          'Our focus is on mold assessment and remediation. We do not provide reconstruction or drywall replacement services. We can discuss what may be needed and help you understand the scope of work involved.',
      },
    ],
    relatedServices: [
      { label: 'Mold Removal', slug: 'mold-removal' },
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Moisture Problem Assessment', slug: 'moisture-problem-assessment' },
    ],
  },
  {
    slug: 'post-leak-mold-concerns',
    title: 'Post-Leak Mold Concerns',
    shortTitle: 'Post-Leak Mold Concerns',
    h1: 'Addressing Post-Leak Mold Concerns in Indianapolis',
    metaTitle: 'Post-Leak Mold Concerns Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Concerned about mold after a leak? We assess post-leak mold concerns in Indianapolis properties. Call 463-234-9933.',
    heroImage: IMAGES.wallDamage,
    heroImageAlt:
      'Wall showing signs of water damage and peeling paint, representing post-leak conditions that may lead to mold.',
    intro:
      'After a leak, water intrusion, or plumbing failure, property owners are often concerned about whether mold may develop. Even after the visible water has been cleaned up, moisture can remain in building materials and create conditions where mold can grow. At Indy Car Racing Mold Removal Experts, we assess properties after leak events to look for signs of mold and moisture that may warrant attention.',
    signsHeading: 'When to Be Concerned After a Leak',
    signs: [
      'The leak was not discovered or addressed promptly',
      'Water soaked into drywall, flooring, insulation, or other porous materials',
      'The area was not thoroughly dried within 24 to 48 hours',
      'You notice discoloration or odors developing after the leak',
      'The leak occurred in a hidden area, such as behind a wall or under flooring',
      'You have had multiple leaks in the same area over time',
    ],
    processHeading: 'Post-Leak Assessment Approach',
    processParagraph:
      'A post-leak mold assessment involves examining the areas affected by the leak for visible signs of mold and residual moisture conditions. This helps determine whether remediation may be appropriate.',
    processSteps: [
      {
        title: 'Discuss the Leak Event',
        description:
          'You describe what happened, how long the leak lasted, what materials were affected, and what drying steps have already been taken.',
      },
      {
        title: 'Assess the Affected Areas',
        description:
          'We visually examine the areas where the leak occurred and adjacent spaces for visible mold, discoloration, and moisture signs.',
      },
      {
        title: 'Discuss Findings and Recommendations',
        description:
          'We explain what we observed and discuss whether mold remediation or further monitoring may be appropriate based on the conditions.',
      },
    ],
    image2: IMAGES.peelingWall,
    image2Alt:
      'Wall with peeling paint after water damage, representing post-leak conditions that may lead to mold concerns.',
    faqs: [
      {
        question: 'How soon after a leak should I be concerned about mold?',
        answer:
          'Mold can begin to develop within 24 to 48 hours if moisture remains in materials. If the area was not thoroughly dried within that timeframe, it can be worthwhile to have an assessment to check for signs of mold.',
      },
      {
        question: 'The leak was fixed. Do I still need to worry about mold?',
        answer:
          'Fixing the leak is an important first step. However, if moisture soaked into building materials and was not fully dried, mold may still develop. An assessment can help determine whether there are signs of mold or ongoing moisture.',
      },
      {
        question: 'What should I do while waiting for an assessment?',
        answer:
          'If it is safe to do so, continue ventilating the area and avoid disturbing any visible mold. If you can, note where you have seen discoloration or odors. Call us to discuss the situation and schedule an assessment.',
      },
    ],
    relatedServices: [
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Moisture Problem Assessment', slug: 'moisture-problem-assessment' },
      { label: 'Mold Remediation', slug: 'mold-remediation' },
    ],
  },
  {
    slug: 'mold-remediation-planning',
    title: 'Mold Remediation Planning',
    shortTitle: 'Remediation Planning',
    h1: 'Mold Remediation Planning in Indianapolis',
    metaTitle: 'Mold Remediation Planning Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Professional mold remediation planning in Indianapolis. We outline the recommended scope based on your property assessment. Call 463-234-9933.',
    heroImage: IMAGES.clipboard,
    heroImageAlt:
      'Professional holding a clipboard and checklist, representing the planning phase of mold remediation.',
    intro:
      'Mold remediation planning is the process of outlining the recommended scope of work based on an assessment of the affected area. At Indy Car Racing Mold Removal Experts, we discuss our findings with you and describe the approach we recommend, the areas involved, and what you can expect. Clear planning helps ensure that the work is appropriate for the conditions observed and that you understand the process.',
    signsHeading: 'When Remediation Planning Is Appropriate',
    signs: [
      'An inspection or assessment has identified mold that requires attention',
      'You want to understand the scope of work before remediation begins',
      'Multiple areas of the property are affected and need to be prioritized',
      'You need to coordinate remediation with other work or schedules',
      'You want a clear description of what the remediation will involve',
      'You are making decisions about a property and need professional input',
    ],
    processHeading: 'How Remediation Planning Works',
    processParagraph:
      'Remediation planning builds on the findings from the assessment. We review what was observed and develop a recommended approach that fits the specific conditions of your property.',
    processSteps: [
      {
        title: 'Review Assessment Findings',
        description:
          'We discuss what was found during the assessment, including the areas affected and the moisture conditions present.',
      },
      {
        title: 'Outline the Recommended Scope',
        description:
          'Based on the findings, we describe the remediation work we recommend, the areas involved, and the methods that may be used.',
      },
      {
        title: 'Discuss the Process and Expectations',
        description:
          'We explain what you can expect during the work, including any considerations related to moisture, timelines, and next steps.',
      },
    ],
    image2: IMAGES.inspection,
    image2Alt:
      'Professional inspector examining a property interior, representing the assessment that informs remediation planning.',
    faqs: [
      {
        question: 'What does a remediation plan include?',
        answer:
          'A remediation plan typically includes a description of the affected areas, the recommended approach for addressing the mold, and a discussion of the moisture conditions that need to be considered. The plan is based on what was observed during the assessment.',
      },
      {
        question: 'Is a remediation plan a guarantee of results?',
        answer:
          'No. A remediation plan outlines the recommended approach based on the conditions observed at the time. We cannot guarantee that mold will not return, particularly if underlying moisture issues are not fully resolved.',
      },
      {
        question: 'Can the plan change during the work?',
        answer:
          'Yes. If additional conditions are discovered during the remediation that were not visible during the initial assessment, the plan may be adjusted. We communicate with you about any changes.',
      },
    ],
    relatedServices: [
      { label: 'Mold Remediation', slug: 'mold-remediation' },
      { label: 'Mold Inspection', slug: 'mold-inspection' },
      { label: 'Residential Mold Assessment', slug: 'residential-mold-assessment' },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

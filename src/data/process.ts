export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const remediationProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss the Concern',
    description:
      'The property owner calls to explain the visible mold or moisture issue they have noticed. This initial conversation helps us understand the situation before we arrive at the property.',
  },
  {
    number: '02',
    title: 'Assess the Situation',
    description:
      'We examine the areas of concern and look for visible mold and moisture conditions. The appropriate assessment depends on the observed conditions and the company\u2019s actual service capabilities.',
  },
  {
    number: '03',
    title: 'Plan the Work',
    description:
      'Based on the assessment, we describe the recommended scope of work, focusing on the specific areas and conditions identified during the evaluation.',
  },
  {
    number: '04',
    title: 'Perform Appropriate Remediation',
    description:
      'We carry out the remediation work in accordance with the plan and the observed conditions, using appropriate methods and equipment for the specific situation.',
  },
  {
    number: '05',
    title: 'Address Moisture Sources',
    description:
      'We explain why resolving the underlying moisture problem is important. Addressing moisture is a key part of managing mold concerns, though we do not guarantee that all moisture causes are included in our service.',
  },
];

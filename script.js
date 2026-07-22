const rawChapters = [
  {
    id: 1,
    title: 'Security Principles',
    total: 100,
    description: 'Core principles that drive confidentiality, integrity, availability, and risk-based security.',
    questions: [
      {
        text: 'Why is the CIA triad commonly used to define security?',
        choices: ['To describe security using relevant and meaningful words', 'To confuse management and users with technical jargon', 'To emphasize the importance of complexity in security measures', 'To prioritize availability over confidentiality and integrity'],
        answer: 0,
      },
      {
        text: 'Which term refers to the property of information being recorded, used, and maintained in a way that ensures its completeness, accuracy, internal consistency, and usefulness for a stated purpose?',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Disclosure'],
        answer: 1,
      },
      {
        text: 'Which term refers to the property of systems and data being accessible at the time users need them?',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Disclosure'],
        answer: 2,
      },
      {
        text: 'What is the term used to describe data about an individual that could be used to identify them?',
        choices: ['Protected health information (PHI)', 'Sensitive information', 'Personally Identifiable Information (PII)', 'Confidential information'],
        answer: 2,
      },
      {
        text: 'What is the main challenge in achieving confidentiality when dealing with system users who may be accessing the system from compromised machines or vulnerable mobile applications?',
        choices: ['Regulating access to protect data', 'Balancing authorized access and data protection', 'Identifying sensitive information', 'Defending against external stakeholders'],
        answer: 1,
      },
      {
        text: 'What does sensitivity measure in terms of information?',
        choices: ['The importance assigned to information by its owner', 'The level of confidentiality needed for the data', 'The degree of authorized access to the information', 'The vulnerability of the information to external stakeholders'],
        answer: 0,
      },
      {
        text: 'Which of the following is NOT a common method of authentication?',
        choices: ['Something you know: Passwords or paraphrases', 'Something you have: Tokens, memory cards, smart cards', 'Something you are: Biometrics, measurable characteristics', 'Something you want: Personal preferences and interests'],
        answer: 3,
      },
      {
        text: 'What is the purpose of authentication?',
        choices: ['To validate the identity of the requestor', 'To store user credentials securely', 'To encrypt sensitive information', 'To authorize access to protected resources'],
        answer: 0,
      },
      {
        text: 'What role does accountability play in a secure information system?',
        choices: ['It ensures all users have the same access rights', 'It allows organizations to track user activity and enforce policies', 'It eliminates the need for security controls', 'It guarantees system availability at all times'],
        answer: 1,
      },
      {
        text: 'What is the term used to describe granting users access only after successfully demonstrating two or more methods of authentication?',
        choices: ['Single-factor authentication (SFA)', 'Multi-factor authentication (MFA)', 'Token-based authentication', 'Characteristic-based authentication'],
        answer: 1,
      },
      {
        text: 'Which of the following authentication methods is vulnerable to a variety of attacks and often requires additional forms of authentication for better security?',
        choices: ['Knowledge-based authentication', 'Token-based authentication', 'Characteristic-based authentication', 'Single-factor authentication (SFA)'],
        answer: 0,
      },
      {
        text: 'What does non-repudiation provide protection against?',
        choices: ['Unauthorized access to information', 'Data breaches and hacking attempts', 'False denial of having performed a particular action', 'Identity theft and fraud'],
        answer: 2,
      },
      {
        text: 'What is the purpose of non-repudiation methodologies in e-commerce and electronic transactions?',
        choices: ['To ensure data integrity and confidentiality', 'To prevent unauthorized access to online transactions', 'To hold individuals responsible for their conducted transactions', 'To detect and mitigate fraudulent activities'],
        answer: 2,
      },
      {
        text: 'What is the main difference between security and privacy?',
        choices: ['Security focuses on protecting personal and sensitive data, while privacy focuses on controlling the distribution of information about oneself.', 'Security focuses on controlling the distribution of information, while privacy focuses on protecting personal and sensitive data.', 'Security and privacy have the same objective and are used interchangeably.', 'Security focuses on physical protection, while privacy focuses on digital protection.'],
        answer: 0,
      },
      {
        text: 'Which legislation has multinational implications and applies to all organizations, foreign or domestic, doing business in the European Union?',
        choices: ['General Data Protection Regulation (GDPR)', 'United States privacy legislation', 'State-level privacy laws', 'Laws regarding data collection and use'],
        answer: 0,
      },
      {
        text: 'What does an asset refer to in the context of risk management?',
        choices: ['Something that aims to exploit a vulnerability', 'Something in need of protection', 'A gap or weakness in protection efforts', 'Actionable information and findings'],
        answer: 1,
      },
      {
        text: 'Which term describes a gap or weakness in protection efforts?',
        choices: ['Asset', 'Vulnerability', 'Threat', 'Operational risk management'],
        answer: 1,
      },
      {
        text: 'What does a threat refer to in risk management terminology?',
        choices: ['Something in need of protection', 'A gap or weakness in protection efforts', 'Actionable information and findings', 'Something or someone that aims to exploit a vulnerability'],
        answer: 3,
      },
      {
        text: 'Which of the following is NOT a typical threat actor in the context of cybersecurity?',
        choices: ['Insiders', 'Outside individuals or informal groups', 'Formal entities that are nonpolitical', 'Formal entities that are political'],
        answer: 3,
      },
    ],
  },
  {
    id: 2,
    title: 'Incident Response, Business Continuity and Disaster Recovery Concepts',
    total: 100,
    description: 'Incident classification, response structures, continuity planning, and recovery fundamentals.',
    questions: [
      {
        text: 'What is the definition of a breach?',
        choices: ['Unauthorized access to a system or system resource', 'Deliberate security incident involving an intruder', 'Loss of control or unauthorized disclosure of personally identifiable information', 'Observable occurrence in a network or system'],
        answer: 2,
      },
      {
        text: 'What is the definition of an event?',
        choices: ['Unauthorized access to a system or system resource', 'Observable occurrence in a network or system', 'Breach of personally identifiable information', 'Deliberate security incident involving an intruder'],
        answer: 1,
      },
      {
        text: 'An unauthorized individual gains access to a company\'s network and attempts to steal sensitive data. What is this considered?',
        choices: ['Event', 'Breach', 'Intrusion', 'Exploit'],
        answer: 2,
      },
      {
        text: 'What is the definition of an incident?',
        choices: ['Observable occurrence in a network or system', 'Deliberate security incident involving an intruder', 'Loss of control or unauthorized disclosure of personally identifiable information', 'Event that jeopardizes the confidentiality, integrity, or availability of an information system'],
        answer: 3,
      },
      {
        text: 'What is the definition of a threat?',
        choices: ['Observable occurrence in a network or system', 'Weakness in an information system that could be exploited', 'Unauthorized access to a system or system resource', 'Circumstance or event that can adversely impact organizational operations'],
        answer: 3,
      },
      {
        text: 'What is the definition of a vulnerability?',
        choices: ['Observable occurrence in a network or system', 'Unauthorized access to a system or system resource', 'Weakness in an information system that could be exploited', 'Loss of control or unauthorized disclosure of personally identifiable information'],
        answer: 2,
      },
      {
        text: 'A previously unknown system vulnerability is discovered, which can be exploited without detection or prevention. What is this vulnerability called?',
        choices: ['Intrusion', 'Event', 'Exploit', 'Zero Day'],
        answer: 3,
      },
      {
        text: 'What is the definition of an exploit?',
        choices: ['Observable occurrence in a network or system', 'Weakness in an information system that could be exploited', 'Loss of control or unauthorized disclosure of personally identifiable information', 'A particular attack that exploits system vulnerabilities'],
        answer: 3,
      },
      {
        text: 'What is the definition of an intrusion?',
        choices: ['Observable occurrence in a network or system', 'Weakness in an information system that could be exploited', 'Unauthorized access to a system or system resource', 'Deliberate security incident involving an intruder'],
        answer: 2,
      },
      {
        text: 'What is the primary goal of incident management?',
        choices: ['Protect life, health, and safety', 'Resume interrupted operations', 'Preserve business viability and survival', 'Reduce the impact of incidents'],
        answer: 1,
      },
      {
        text: 'What is the purpose of an incident response plan?',
        choices: ['Protect life, health, and safety', 'Preserve business viability and survival', 'Reduce the impact of incidents', 'Resume interrupted operations'],
        answer: 2,
      },
      {
        text: 'Which discipline does incident response planning fall under?',
        choices: ['Crisis management', 'Business continuity management (BCM)', 'Event management', 'Safety management'],
        answer: 1,
      },
      {
        text: 'Which component of the incident response plan involves developing a policy approved by management?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 0,
      },
      {
        text: 'Which component of the incident response plan focuses on monitoring all possible attack vectors?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 1,
      },
      {
        text: 'Which component of the incident response plan involves gathering evidence and choosing an appropriate containment strategy?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 2,
      },
      {
        text: 'Which component of the incident response plan involves documenting lessons learned and conducting a retrospective analysis?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 3,
      },
      {
        text: 'During an incident response, the incident response team analyzes the available data and threat intelligence to understand the nature of the incident and prioritize the response. Which component of the incident response plan does this activity belong to?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 1,
      },
      {
        text: 'After identifying an incident, the incident response team determines the roles and responsibilities of team members involved in the response effort. Which component of the incident response plan covers this aspect?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 0,
      },
      {
        text: 'During an incident response, the incident response team isolates the attack to prevent further damage and limit the attacker\'s access. Which component of the incident response plan includes this activity?',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 2,
      },
      {
        text: 'Which of the following is a primary responsibility of an incident response team?',
        choices: ['Conducting routine system maintenance', 'Creating security awareness campaigns', 'Determining the scope of damage caused by an incident', 'Developing software applications'],
        answer: 2,
      },
      {
        text: 'Who are potential members of an incident response team?',
        choices: ['Software developers', 'Human resources representatives', 'Information security professionals', 'Marketing executives'],
        answer: 2,
      },
      {
        text: 'After a security incident, an organization\'s incident response team assesses the damage caused by the incident and identifies any compromised confidential information. Which primary responsibility of the incident response team does this align with?',
        choices: ['Determine the scope of damage caused by the incident', 'Determine whether any confidential information was compromised', 'Implement necessary recovery procedures', 'Supervise the implementation of additional security measures'],
        answer: 1,
      },
      {
        text: 'An incident response team is responsible for implementing necessary recovery procedures to restore security and recover from incident-related damage. Which primary responsibility of the incident response team does this align with?',
        choices: ['Determine the scope of damage caused by the incident', 'Determine whether any confidential information was compromised', 'Implement necessary recovery procedures', 'Supervise the implementation of additional security measures'],
        answer: 2,
      },
      {
        text: 'Which team members typically assist with investigating the incident, collecting evidence, and reporting the incident?',
        choices: ['Legal representatives', 'Public affairs/communications representatives', 'Engineering representatives', 'Information security professionals'],
        answer: 3,
      },
      {
        text: 'What training should incident response team members have?',
        choices: ['System maintenance training', 'Marketing strategy training', 'Incident response training', 'Customer service training'],
        answer: 2,
      },
      {
        text: 'Why is communication an important component of a business continuity plan?',
        choices: ['To establish a phone tree for social gatherings', 'To maintain communication during power or communication disruptions', 'To ensure efficient airline operations', 'To organize employee training sessions'],
        answer: 1,
      },
      {
        text: 'Why is it important to have critical contact numbers for the supply chain and external sites in a business continuity plan?',
        choices: ['To organize employee contact information for team-building activities', 'To establish communication with law enforcement agencies', 'To ensure smooth airline operations', 'To maintain essential activity and coordination during disruptions'],
        answer: 3,
      },
      {
        text: 'Which of the following is a common component of a comprehensive business continuity plan?',
        choices: ['Detailed employee performance evaluation criteria', 'Inventory management procedures for office supplies', 'List of BCP team members and their contact information', 'Guidelines for decorating the office space'],
        answer: 2,
      },
      {
        text: 'What is the purpose of immediate response procedures and checklists in a business continuity plan?',
        choices: ['To determine employee vacation schedules', 'To establish fire suppression procedures', 'To monitor office supply inventory levels', 'To notify appropriate emergency-response agencies and initiate security and safety procedures'],
        answer: 3,
      },
      {
        text: 'What is the primary goal of a disaster recovery plan (DRP)?',
        choices: ['To prevent any disruptions to business activities', 'To ensure the safety and well-being of employees', 'To restore information technology and communications services', 'To maintain critical business functions during a disaster'],
        answer: 2,
      },
      {
        text: 'Which aspect of business operations does disaster recovery planning specifically focus on?',
        choices: ['Maintaining critical business functions', 'Managing financial resources', 'Enhancing customer satisfaction', 'Restoring IT and communications services'],
        answer: 3,
      },
      {
        text: 'Why is it important for an organization to have backups of critical systems that are regularly tested?',
        choices: ['To comply with industry regulations', 'To prevent any incidents from occurring', 'To ensure immediate detection of incidents', 'To enable efficient recovery and restoration of systems'],
        answer: 3,
      },
      {
        text: 'What is the relationship between business continuity planning and disaster recovery planning?',
        choices: ['They are synonymous terms that refer to the same process', 'Business continuity planning focuses on IT recovery, while disaster recovery planning focuses on overall business operations', 'Business continuity planning ensures the safety of employees, while disaster recovery planning restores critical systems', 'Business continuity planning maintains critical business functions, while disaster recovery planning focuses on restoring IT and communications services'],
        answer: 3,
      },
      {
        text: 'Why is it important to promptly detect incidents, even if they may not be immediately recognized or detected?',
        choices: ['To avoid disruptions to business activities', 'To initiate the disaster recovery plan', 'To mitigate potential damages and losses', 'To test the effectiveness of the backup systems'],
        answer: 2,
      },
      {
        text: 'Which document provides a high-level overview of the disaster recovery plan (DRP)?',
        choices: ['Department-specific plans', 'Technical guides for IT personnel', 'Executive summary', 'Checklists for critical team members'],
        answer: 2,
      },
      {
        text: 'Who would typically utilize technical guides in a disaster recovery plan?',
        choices: ['Department-specific personnel', 'Critical team members', 'Public relations personnel', 'IT personnel responsible for backup systems'],
        answer: 3,
      },
      {
        text: 'Why do critical disaster recovery team members require checklists in a disaster situation?',
        choices: ['To ensure effective communication with the public', 'To guide their actions amid the chaotic atmosphere of a disaster', 'To maintain department-specific operations', 'To troubleshoot technical issues during recovery'],
        answer: 1,
      },
      {
        text: 'Why do managers and public relations personnel require simple-to-follow, high-level documents in a disaster recovery plan?',
        choices: ['To troubleshoot technical issues during recovery', 'To maintain department-specific operations', 'To facilitate effective communication about the issue', 'To guide their actions amid the chaotic atmosphere of a disaster'],
        answer: 2,
      },
      {
        text: 'What is the best reason to include alternate suppliers in a business continuity plan?',
        choices: ['To lower the cost of procurement', 'To ensure continuity when primary vendors fail', 'To eliminate the need for audits', 'To increase marketing reach'],
        answer: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'Access Control Concepts',
    total: 100,
    description: 'Access models, authorization, authentication, controls, and governance concepts.',
    questions: [
      {
        text: 'What is the purpose of a security control?',
        choices: ['To preserve Confidentiality, Integrity, and Availability (CIA) of data', 'To limit access to objects, subjects, and rules', 'To prevent unauthorized access from the outside', 'To prevent information from going out into the Web'],
        answer: 0,
      },
      {
        text: 'Which example represents a security control?',
        choices: ['Limiting access to objects, subjects, and rules', 'Installing a firewall to prevent unauthorized access', 'Defining the CIA Triad', 'Encrypting sensitive data'],
        answer: 1,
      },
      {
        text: 'What is a subject in access control?',
        choices: ['A user, process, or program requesting access', 'An object that responds to a request for service', 'An entity that determines access rules', 'An owner of an object'],
        answer: 0,
      },
      {
        text: 'Which term refers to an entity that responds to a request for service?',
        choices: ['Subject', 'Object', 'Rule', 'Access control list'],
        answer: 1,
      },
      {
        text: 'What is the role of an access rule?',
        choices: ['Comparing validated identities of subjects', 'Providing access to an object', 'Determining the appropriate level of access', 'Defining time-based access'],
        answer: 2,
      },
      {
        text: 'Which example demonstrates a time-based access control?',
        choices: ['Allowing access from the inside network to the outside network', 'Comparing multiple attributes to determine appropriate access', 'Denying access from any address to any address by default', 'Granting access to a file based on user\'s role during business hours'],
        answer: 3,
      },
      {
        text: 'A user attempts to access a highly confidential file. The access control rule validates the user\'s identity and determines that only users with specific privileges can access the file. What does this scenario demonstrate?',
        choices: ['Applying attribute-based access control', 'Enforcing role-based access control', 'Implementing discretionary access control', 'Utilizing mandatory access control'],
        answer: 1,
      },
      {
        text: 'A firewall is configured with access control rules that allow traffic from the internal network to the external network but block incoming traffic from the outside. What is the purpose of these rules?',
        choices: ['Prevent unauthorized access from the outside', 'Enable communication between internal and external networks', 'Protect internal resources from external threats', 'Enforce network segmentation'],
        answer: 2,
      },
      {
        text: 'What is the purpose of access control lists (ACLs)?',
        choices: ['To define rules for granting or denying access to objects', 'To identify subjects requesting access to resources', 'To determine the appropriate level of access for a subject', 'To manage user authentication and authorization'],
        answer: 0,
      },
      {
        text: 'Which term refers to the level of permissions granted to a subject?',
        choices: ['Classification', 'Authorization', 'Privilege', 'Clearance'],
        answer: 2,
      },
      {
        text: 'In a healthcare organization, certain medical records are classified as highly sensitive and should only be accessible to authorized medical staff. What access control mechanism would be appropriate for enforcing this restriction?',
        choices: ['Role-based access control', 'Discretionary access control', 'Attribute-based access control', 'Mandatory access control'],
        answer: 3,
      },
      {
        text: 'An organization assigns different levels of access to its employees based on their roles and responsibilities. For example, managers have access to financial data, while regular employees do not. Which access control model is being applied?',
        choices: ['Discretionary access control', 'Attribute-based access control', 'Role-based access control', 'Rule-based access control'],
        answer: 2,
      },
      {
        text: 'In the scenario of repurposing an office building for use as a secure storage facility, why is it important to conduct a site assessment before implementing controls?',
        choices: ['To determine the value of what is being protected', 'To evaluate the effectiveness of the controls', 'To assess the physical security requirements of the area', 'To align the cost of implementing controls with the level of protection needed'],
        answer: 2,
      },
      {
        text: 'What is the purpose of defense in depth as an information security strategy?',
        choices: ['To prevent or deter cyberattacks completely', 'To establish variable barriers across multiple layers of the organization', 'To guarantee the security of sensitive data and information', 'To eliminate the need for multi-factor authentication'],
        answer: 1,
      },
      {
        text: 'Which authentication mechanism demonstrates the principle of defense in depth by utilizing two layers of authentication?',
        choices: ['Password-based authentication', 'Biometric authentication', 'Multi-factor authentication', 'Single sign-on authentication'],
        answer: 2,
      },
      {
        text: 'In a multi-layered defense strategy, how can firewalls be utilized to implement defense in depth?',
        choices: ['By preventing all network traffic from reaching trusted networks', 'By isolating untrusted networks from trusted networks', 'By encrypting all network communications', 'By providing physical barriers to data centers'],
        answer: 1,
      },
      {
        text: 'What is the role of an administrative control in implementing defense in depth?',
        choices: ['To provide physical barriers and access restrictions', 'To establish policies and procedures for security management', 'To encrypt and secure data transmissions', 'To monitor and detect security incidents'],
        answer: 1,
      },
      {
        text: 'What is the purpose of conducting control assessments?',
        choices: ['To evaluate the effectiveness and functionality of implemented controls', 'To identify vulnerabilities and weaknesses in the control environment', 'To measure compliance with regulatory requirements and industry standards', 'All of the above'],
        answer: 3,
      },
      {
        text: 'What is the Principle of Least Privilege?',
        choices: ['Granting users access to all systems and programs.', 'Providing users with minimal access necessary to perform their tasks.', 'Allowing unrestricted access to confidential information.', 'Assigning privileges based on user preferences.'],
        answer: 1,
      },
      {
        text: 'Which of the following scenarios best exemplifies the Principle of Least Privilege?',
        choices: ['All employees have unrestricted access to confidential customer data.', 'Only authorized individuals in the billing department can view and modify consumer financial data.', 'Every user in the organization has administrative access to all systems and applications.', 'Employees can access all files and folders on the network without restrictions.'],
        answer: 1,
      },
      {
        text: 'In a healthcare environment, what is an example of applying the Principle of Least Privilege?',
        choices: ['All employees have access to patient and medical data.', 'Workers have access to patient data but not their medical data.', 'Individual doctors have access to all patient data.', 'Only IT administrators have access to patient records.'],
        answer: 1,
      },
      {
        text: 'What is the purpose of an access certification review?',
        choices: ['To provide training on new access tools', 'To validate that access permissions remain appropriate for current job roles', 'To audit the performance of the security team', 'To document all system configuration changes'],
        answer: 1,
      },
    ],
  },
  {
    id: 4,
    title: 'Network Security',
    total: 300,
    description: 'Networking fundamentals, protocols, device roles, threats, and layered defense concepts.',
    questions: [
      {
        text: 'What is a network?',
        choices: ['A single computer', 'Two or more computers linked together', 'A geographical area with multiple computers', 'A wireless connection between devices'],
        answer: 1,
      },
      {
        text: 'Which type of network typically spans a single floor or building?',
        choices: ['Local area network (LAN)', 'Wide area network (WAN)', 'Metropolitan area network (MAN)', 'Personal area network (PAN)'],
        answer: 0,
      },
      {
        text: 'What is the term for the long-distance connections between geographically remote networks?',
        choices: ['Local area network (LAN)', 'Wide area network (WAN)', 'Metropolitan area network (MAN)', 'Personal area network (PAN)'],
        answer: 1,
      },
      {
        text: 'Which network device is used to connect multiple devices and is less intelligent than switches or routers?',
        choices: ['Hubs', 'Switches', 'Routers', 'Firewalls'],
        answer: 0,
      },
      {
        text: 'What is the advantage of using switches over hubs in a network?',
        choices: ['Switches offer greater efficiency for traffic delivery', 'Switches are wireless devices', 'Switches provide firewall capabilities', 'Switches can create VLANs'],
        answer: 0,
      },
      {
        text: 'In a network setup, you need to control traffic flow between different networks. Which network device should you use?',
        choices: ['Hubs', 'Switches', 'Routers', 'Firewalls'],
        answer: 2,
      },
      {
        text: 'What is the primary function of a firewall in a network?',
        choices: ['Connecting multiple switches', 'Filtering network traffic', 'Providing information to other computers', 'Creating separate broadcast domains'],
        answer: 1,
      },
      {
        text: 'Which type of computer on a network provides information to other computers?',
        choices: ['Hubs', 'Switches', 'Routers', 'Servers'],
        answer: 3,
      },
      {
        text: 'An employee is trying to access a file stored on a server from their desktop workstation. What are the endpoints in this communication?',
        choices: ['Hubs and switches', 'Routers and firewalls', 'Servers and endpoints', 'Workstations and servers'],
        answer: 2,
      },
      {
        text: 'What is the purpose of Ethernet (IEEE 802.3) in networking?',
        choices: ['Defining wired connections between networked devices', 'Filtering network traffic', 'Assigning MAC addresses to devices', 'Providing logical IP addresses'],
        answer: 0,
      },
      {
        text: 'What is a MAC address used for in networking?',
        choices: ['Defining wired connections between networked devices', 'Filtering network traffic', 'Assigning logical IP addresses to devices', 'Identifying the vendor or manufacturer of a network interface'],
        answer: 3,
      },
      {
        text: 'What is the purpose of an IP address in networking?',
        choices: ['Defining wired connections between networked devices', 'Filtering network traffic', 'Assigning MAC addresses to devices', 'Providing logical addresses for network interfaces'],
        answer: 3,
      },
      {
        text: 'What is the primary purpose of a local area network (LAN)?',
        choices: ['Connecting geographically remote networks', 'Enabling long-distance connections', 'Sharing data and resources within a limited geographical area', 'Establishing wireless connections between devices'],
        answer: 2,
      },
      {
        text: 'Which network device is responsible for determining the most efficient route for traffic flow across a network?',
        choices: ['Hubs', 'Switches', 'Routers', 'Firewalls'],
        answer: 2,
      },
      {
        text: 'What is the primary function of a firewall in network security?',
        choices: ['Filtering network traffic', 'Establishing wireless connections', 'Managing data encryption', 'Controlling network access permissions'],
        answer: 0,
      },
      {
        text: 'Why is network segmentation important for security?',
        choices: ['It speeds up network traffic', 'It reduces the scope of an attack by isolating systems', 'It eliminates the need for firewalls', 'It increases the number of available IP addresses'],
        answer: 1,
      },
    ],
  },
  {
    id: 5,
    title: 'Security Operations',
    total: 200,
    description: 'Data lifecycle, monitoring, policies, change management, awareness, and operational security practices.',
    questions: [
      {
        text: 'What are the six major sets of activities in the life cycle of data handling?',
        choices: ['Create, store, use, share, archive, destroy', 'Encrypt, transfer, analyze, protect, update, discard', 'Collect, process, transmit, backup, recover, retain', 'Acquire, manipulate, distribute, assess, discard, update'],
        answer: 0,
      },
      {
        text: 'Under the rules of the Healthcare Insurance Portability and Accountability Act (HIPAA), medical records need to be kept for 10 years. However, OSHA requires the maintenance of medical records of on-the-job injuries for over 30 years. Which regulatory requirement applies in this case?',
        choices: ['HIPAA', 'OSHA', 'PCI DSS', 'GDPR'],
        answer: 1,
      },
      {
        text: 'What is the purpose of data classification and labeling in data handling practices?',
        choices: ['To determine the sensitivity of the data', 'To encrypt the data for secure storage', 'To ensure data integrity during transmission', 'To automate data backups and recovery'],
        answer: 0,
      },
      {
        text: 'An organization needs to securely destroy data stored on physical media such as hard drives and tapes. What is the recommended method for secure destruction?',
        choices: ['Emptying the virtual trash can', 'Using powerful magnets for degaussing', 'Deleting files manually', 'Performing a quick format of the media'],
        answer: 1,
      },
      {
        text: 'What is the importance of defensible destruction in data handling?',
        choices: ['It ensures compliance with regulatory requirements', 'It facilitates data recovery in case of accidental deletion', 'It enhances data sharing capabilities', 'It prevents unauthorized access to sensitive data'],
        answer: 0,
      },
      {
        text: 'An organization operates in multiple jurisdictions with varying regulations. What should the organization be aware of in terms of data handling?',
        choices: ['The need for encryption at all stages of the data life cycle', 'The potential impact of data breaches on customer trust', 'The regulations imposed by each jurisdiction affecting data protection', 'The cost of data storage and retention'],
        answer: 2,
      },
      {
        text: 'What is the purpose of retention in data handling practices?',
        choices: ['To determine the access controls for sensitive data', 'To ensure data availability during system failures', 'To specify the duration and location of data storage', 'To facilitate the secure sharing of data with external parties'],
        answer: 2,
      },
      {
        text: 'What is the potential risk of not following specific protocols and processes for data destruction?',
        choices: ['Loss of data integrity', 'Increased vulnerability to cyberattacks', 'Non-compliance with regulatory requirements', 'Excessive storage costs'],
        answer: 2,
      },
      {
        text: 'What is the purpose of data classification in data handling practices?',
        choices: ['To determine the retention period for data', 'To assign sensitivity levels and handling requirements to data', 'To implement encryption for data protection', 'To automate data backup processes'],
        answer: 1,
      },
      {
        text: 'An organization has classified a set of data as "highly restricted." What impact would compromising this data have?',
        choices: ['Substantial loss of life, injury, or property damage', 'Loss of temporary competitive advantage', 'Minor disruptions, delays, or impacts', 'No harm can come from further dissemination or disclosure'],
        answer: 0,
      },
      {
        text: 'Which security operations activity helps ensure that changes to systems are documented, approved, and tracked?',
        choices: ['Incident response', 'Change management', 'Access control', 'Network segmentation'],
        answer: 1,
      },
    ],
  },
];

function createAutoQuestion(chapterId, index, chapterTitle) {
  const questionNumber = index + 1;
  const templates = {
    1: [
      {
        prompt: 'which concept is best described as protecting sensitive information from unauthorized disclosure',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
        answer: 0,
      },
      {
        prompt: 'which concept ensures that information remains accurate and complete across storage and transmission',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
        answer: 1,
      },
      {
        prompt: 'which concept describes keeping systems and data accessible when users need them',
        choices: ['Authentication', 'Availability', 'Integrity', 'Authorization'],
        answer: 1,
      },
      {
        prompt: 'which term describes verifying a user identity before granting access',
        choices: ['Availability', 'Authentication', 'Authorization', 'Audit'],
        answer: 1,
      },
      {
        prompt: 'which principle restricts user rights to only what is necessary for the task',
        choices: ['Least privilege', 'Defense in depth', 'Separation of duties', 'Risk avoidance'],
        answer: 0,
      },
      {
        prompt: 'which component of security is based on policies, procedures, and personnel actions',
        choices: ['Technical control', 'Administrative control', 'Physical control', 'Operational control'],
        answer: 1,
      },
      {
        prompt: 'which property prevents a sender from denying that they sent a message',
        choices: ['Non-repudiation', 'Integrity', 'Confidentiality', 'Availability'],
        answer: 0,
      },
      {
        prompt: 'which risk term refers to something that can exploit a vulnerability',
        choices: ['Threat', 'Asset', 'Risk', 'Control'],
        answer: 0,
      },
    ],
    2: [
      {
        prompt: 'what is the term for an observable occurrence in a network or system',
        choices: ['Breach', 'Event', 'Incident', 'Exploit'],
        answer: 1,
      },
      {
        prompt: 'what is the term for loss of control or unauthorized disclosure of personally identifiable information',
        choices: ['Event', 'Incident', 'Breach', 'Privacy violation'],
        answer: 2,
      },
      {
        prompt: 'which incident response phase focuses on understanding the nature of the attack',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Recovery'],
        answer: 1,
      },
      {
        prompt: 'which incident response phase isolates the attack to prevent further damage',
        choices: ['Preparation', 'Detection and Analysis', 'Containment', 'Post-Incident Activity'],
        answer: 2,
      },
      {
        prompt: 'what is the primary objective of a disaster recovery plan',
        choices: ['Restore IT services', 'Prevent all incidents', 'Improve employee morale', 'Enhance marketing communications'],
        answer: 0,
      },
      {
        prompt: 'which plan focuses on maintaining critical business operations during disruption',
        choices: ['Disaster recovery plan', 'Business continuity plan', 'Incident response plan', 'Risk management plan'],
        answer: 1,
      },
      {
        prompt: 'what is the purpose of regular backup testing',
        choices: ['To detect incidents in real time', 'To ensure recovery procedures work', 'To increase system performance', 'To satisfy external customers'],
        answer: 1,
      },
      {
        prompt: 'what type of document provides a high-level overview of a disaster recovery effort',
        choices: ['Technical guide', 'Executive summary', 'Playbook', 'Checklists'],
        answer: 1,
      },
    ],
    3: [
      {
        prompt: 'which access control model assigns rights based on a user role',
        choices: ['Discretionary access control', 'Mandatory access control', 'Role-based access control', 'Rule-based access control'],
        answer: 2,
      },
      {
        prompt: 'which access control model enforces labels and formal authorization rules',
        choices: ['Role-based access control', 'Mandatory access control', 'Discretionary access control', 'Attribute-based access control'],
        answer: 1,
      },
      {
        prompt: 'what is the level of permissions granted to a subject called',
        choices: ['Classification', 'Privilege', 'Authorization', 'Clearance'],
        answer: 1,
      },
      {
        prompt: 'which mechanism defines rules for granting or denying access to objects',
        choices: ['Audit trail', 'Access control list', 'Incident response', 'Encryption policy'],
        answer: 1,
      },
      {
        prompt: 'which strategy uses multiple defensive layers to protect assets',
        choices: ['Least privilege', 'Defense in depth', 'Separation of duties', 'Role-based control'],
        answer: 1,
      },
      {
        prompt: 'which control type uses policies and training to influence behavior',
        choices: ['Technical control', 'Physical control', 'Administrative control', 'Detective control'],
        answer: 2,
      },
      {
        prompt: 'which access rule restricts use based on time or location',
        choices: ['Mandatory control', 'Discretionary control', 'Rule-based control', 'Attribute-based control'],
        answer: 2,
      },
      {
        prompt: 'what is the role of a subject in access control',
        choices: ['The resource being accessed', 'The entity requesting access', 'The rule evaluator', 'The administrator'],
        answer: 1,
      },
    ],
    4: [
      {
        prompt: 'what device controls traffic between different networks',
        choices: ['Switch', 'Router', 'Hub', 'Firewall'],
        answer: 1,
      },
      {
        prompt: 'what is a local network within a limited geographic area called',
        choices: ['LAN', 'WAN', 'MAN', 'PAN'],
        answer: 0,
      },
      {
        prompt: 'what is the purpose of an IP address',
        choices: ['Identify physical hardware', 'Provide logical network addressing', 'Encrypt traffic', 'Filter broadcasts'],
        answer: 1,
      },
      {
        prompt: 'which device forwards traffic based on MAC addresses',
        choices: ['Firewall', 'Router', 'Switch', 'Hub'],
        answer: 2,
      },
      {
        prompt: 'which technology defines wired Ethernet connections',
        choices: ['IEEE 802.3', 'IEEE 802.11', 'Bluetooth', 'TCP/IP'],
        answer: 0,
      },
      {
        prompt: 'what is the main function of a firewall',
        choices: ['Encrypt data', 'Filter network traffic', 'Assign IP addresses', 'Manage storage'],
        answer: 1,
      },
      {
        prompt: 'what is a server in network architecture',
        choices: ['A device that requests service', 'A device that provides service', 'A physical network cable', 'A security control'],
        answer: 1,
      },
      {
        prompt: 'what is the name for long-distance network connections',
        choices: ['LAN', 'PAN', 'WAN', 'VLAN'],
        answer: 2,
      },
    ],
    5: [
      {
        prompt: 'which step defines how data is kept until it is no longer needed',
        choices: ['Retention', 'Classification', 'Handling', 'Destruction'],
        answer: 0,
      },
      {
        prompt: 'which practice assigns sensitivity levels and handling requirements to data',
        choices: ['Encryption', 'Classification', 'Monitoring', 'Containment'],
        answer: 1,
      },
      {
        prompt: 'which process focuses on security awareness and training for employees',
        choices: ['Change management', 'Security operations', 'Awareness program', 'Incident response'],
        answer: 2,
      },
      {
        prompt: 'which policy addresses the acceptable use of IT systems and resources',
        choices: ['Change policy', 'Acceptable use policy', 'Password policy', 'Backup policy'],
        answer: 1,
      },
      {
        prompt: 'which process ensures changes are tracked and evaluated before deployment',
        choices: ['Incident management', 'Change management', 'Disaster recovery', 'Asset management'],
        answer: 1,
      },
      {
        prompt: 'which activity helps employees identify phishing and social engineering threats',
        choices: ['Asset inventory', 'Security awareness training', 'Firewall configuration', 'Network segmentation'],
        answer: 1,
      },
      {
        prompt: 'what is the purpose of defensible destruction',
        choices: ['Preserve data for audits', 'Ensure secure disposal and compliance', 'Increase storage performance', 'Provide better access control'],
        answer: 1,
      },
      {
        prompt: 'which practice validates that backup and recovery procedures work correctly',
        choices: ['Penetration testing', 'Backup testing', 'Incident response', 'Access review'],
        answer: 1,
      },
    ],
  };

  const set = templates[chapterId] || templates[1];
  const template = set[index % set.length];
  return {
    text: `${template.prompt}.`,
    choices: template.choices,
    answer: template.answer,
  };
}

function fillChapterQuestions(seedQuestions, targetTotal, chapterTitle, chapterId) {
  const questions = [...seedQuestions];
  for (let i = questions.length; i < targetTotal; i += 1) {
    questions.push(createAutoQuestion(chapterId, i, chapterTitle));
  }
  return questions;
}

const chapters = rawChapters.map((chapter) => ({
  ...chapter,
  questions: fillChapterQuestions(chapter.questions, chapter.total, chapter.title, chapter.id),
}));

const STORAGE_KEY = 'naija-shield-practice-state';
const state = {
  currentChapterId: null,
  currentQuestionIndex: 0,
  answers: {},
  completed: {},
};

const pageType = document.body.dataset.page || 'main';
const chapterList = document.getElementById('chapterList');
const pageContent = document.getElementById('pageContent');
const chapterTemplate = document.getElementById('chapterCardTemplate');
const launchQuizButton = document.getElementById('launchQuizButton');
const homeButton = document.getElementById('homeButton');

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved.completed === 'object') {
      state.completed = saved.completed;
    }
  } catch (error) {
    console.warn('Could not load saved state', error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed: state.completed }));
}

function navigateToExam(chapterId) {
  const url = chapterId ? `exam.html?chapter=${chapterId}` : 'exam.html';
  if (pageType === 'exam') {
    window.location.href = url;
    return;
  }

  const newTab = window.open(url, '_blank');
  if (!newTab) {
    window.location.href = url;
  }
}

function openQuizPage() {
  navigateToExam();
}

function goHome() {
  window.location.href = 'index.html';
}

function getChapterById(id) {
  return chapters.find((chapter) => chapter.id === id);
}

function getUnlockedChapters() {
  const unlocked = [1];
  chapters.forEach((chapter) => {
    if (chapter.id === 1) return;
    const prev = getChapterById(chapter.id - 1);
    const completed = state.completed[prev.id];
    const passed = completed && completed.score >= 80;
    if (passed) unlocked.push(chapter.id);
  });
  return unlocked;
}

function getChapterStatus(chapter) {
  if (state.completed[chapter.id]) {
    return state.completed[chapter.id].score >= 80 ? 'Passed' : 'Failed';
  }
  if (chapter.id === 1) return 'Ready';
  const previous = state.completed[chapter.id - 1];
  return previous && previous.score >= 80 ? 'Ready' : 'Locked';
}

function formatQuestionText(question, index) {
  const text = question.text.trim();
  return /^\d+[:.]\s/.test(text) ? text : `${index + 1}: ${text}`;
}

function renderChapters() {
  if (!chapterList) return;
  chapterList.innerHTML = '';
  const unlocked = getUnlockedChapters();
  chapters.forEach((chapter) => {
    const card = chapterTemplate.content.cloneNode(true);
    const title = card.querySelector('.chapter-title');
    const meta = card.querySelector('.chapter-meta');
    const button = card.querySelector('.chapter-action');

    title.textContent = `Chapter ${chapter.id}: ${chapter.title}`;
    const status = getChapterStatus(chapter);
    meta.textContent = `${chapter.questions.length} questions • ${status}`;
    button.textContent = status === 'Locked'
      ? 'Locked'
      : pageType === 'exam' && state.currentChapterId === chapter.id
        ? 'Close'
        : 'Start';
    button.disabled = status === 'Locked';
    button.addEventListener('click', () => {
      if (pageType === 'exam') {
        if (state.currentChapterId === chapter.id) {
          state.currentChapterId = null;
          renderChapters();
          return;
        }
        startChapter(chapter.id);
      } else {
        navigateToExam(chapter.id);
      }
    });

    if (state.completed[chapter.id]) {
      const badge = document.createElement('span');
      badge.className = 'stat-pill';
      badge.style.background = 'rgba(255,255,255,0.06)';
      badge.innerHTML = `<strong>${state.completed[chapter.id].score}%</strong><span>${state.completed[chapter.id].score >= 80 ? 'Score' : 'Score'}</span>`;
      card.querySelector('.chapter-summary').appendChild(badge);
    }

    const chapterCard = card.querySelector('.chapter-card');
    chapterCard.dataset.chapterId = chapter.id;
    const body = card.querySelector('.chapter-body');
    if (pageType === 'exam' && state.currentChapterId === chapter.id && body) {
      chapterCard.classList.add('expanded');
      renderChapterInCard(chapter, body);
    } else if (body) {
      chapterCard.classList.remove('expanded');
      body.innerHTML = '';
    }

    chapterList.appendChild(card);
  });
}

function renderChapterInCard(chapter, container) {
  const question = chapter.questions[state.currentQuestionIndex];
  container.innerHTML = `
    <div class="page-heading">
      <h2>Chapter ${chapter.id}: ${chapter.title}</h2>
      <p>${chapter.description}</p>
    </div>
    <div class="stats-grid">
      <div class="stat-pill"><strong>${state.currentQuestionIndex + 1}/${chapter.questions.length}</strong><span>Question</span></div>
      <div class="stat-pill"><strong>${chapter.questions.length}</strong><span>Questions in chapter</span></div>
      <div class="stat-pill"><strong>${Object.keys(state.answers).length}</strong><span>Answered</span></div>
    </div>
    <div class="question-card">
      <h3>${formatQuestionText(question, state.currentQuestionIndex)}</h3>
      <div class="options-grid"></div>
    </div>
    <div class="controls-row">
      <button class="control-button" data-action="prev">Previous</button>
      <button class="control-button primary" data-action="next">${state.currentQuestionIndex === chapter.questions.length - 1 ? 'Finish Chapter' : 'Next Question'}</button>
    </div>
  `;

  const optionsGrid = container.querySelector('.options-grid');
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.innerText = `${String.fromCharCode(65 + index)}. ${choice}`;
    button.addEventListener('click', () => selectAnswer(index));
    if (state.answers[state.currentQuestionIndex] === index) {
      button.classList.add('selected');
    }
    optionsGrid.appendChild(button);
  });

  const prevButton = container.querySelector('[data-action="prev"]');
  const nextButton = container.querySelector('[data-action="next"]');
  prevButton.disabled = state.currentQuestionIndex === 0;
  nextButton.disabled = state.answers[state.currentQuestionIndex] == null;
  prevButton.addEventListener('click', goPrevious);
  nextButton.addEventListener('click', goNext);
}

function renderWelcome() {
  const heading = pageType === 'exam' ? 'Exam page ready' : 'Welcome to Naija Shield Academy Practice';
  const message = pageType === 'exam'
    ? 'Use the Home button above to return to the chapter navigator, or open this page with a chapter query like exam.html?chapter=1.'
    : 'Choose a chapter to begin. You must pass each chapter with at least 80% to proceed to the next one.';

  pageContent.innerHTML = `
    <div class="page-heading">
      <h2>${heading}</h2>
      <p>${message}</p>
    </div>
    <div class="panel-card">
      <h3>How this practice works</h3>
      <p>This practice portal contains five chapters covering Security Principles, Incident Response, Access Control, Network Security, and Security Operations. Each chapter has its own question set and score threshold. Your progress is saved per chapter so you can review results and retry sections as needed.</p>
      <div class="stats-grid">
        <div class="stat-pill"><strong>${chapters.length}</strong><span>Chapters</span></div>
        <div class="stat-pill"><strong>${chapters.reduce((sum,chapter) => sum + chapter.questions.length, 0)}</strong><span>Total questions</span></div>
      </div>
    </div>
  `;
}

function startChapter(chapterId) {
  state.currentChapterId = chapterId;
  state.currentQuestionIndex = 0;
  state.answers = {};
  renderChapter();
}

function currentChapter() {
  return getChapterById(state.currentChapterId);
}

function renderChapter() {
  const chapter = currentChapter();
  if (!chapter) {
    renderWelcome();
    return;
  }

  if (pageType === 'exam') {
    renderChapters();
    return;
  }

  const question = chapter.questions[state.currentQuestionIndex];
  pageContent.innerHTML = `
    <div class="page-heading">
      <h2>Chapter ${chapter.id}: ${chapter.title}</h2>
      <p>${chapter.description}</p>
    </div>
    <div class="stats-grid">
      <div class="stat-pill"><strong>${state.currentQuestionIndex + 1}/${chapter.questions.length}</strong><span>Question</span></div>
      <div class="stat-pill"><strong>${chapter.questions.length}</strong><span>Questions in chapter</span></div>
      <div class="stat-pill"><strong>${Object.keys(state.answers).length}</strong><span>Answered</span></div>
    </div>
    <div class="question-card">
      <h3>${formatQuestionText(question, state.currentQuestionIndex)}</h3>
      <div class="options-grid"></div>
    </div>
    <div class="controls-row">
      <button class="control-button" id="prevButton">Previous</button>
      <button class="control-button primary" id="nextButton">${state.currentQuestionIndex === chapter.questions.length - 1 ? 'Finish Chapter' : 'Next Question'}</button>
    </div>
  `;

  const optionsGrid = pageContent.querySelector('.options-grid');
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.innerText = `${String.fromCharCode(65 + index)}. ${choice}`;
    button.addEventListener('click', () => selectAnswer(index));
    if (state.answers[state.currentQuestionIndex] === index) {
      button.classList.add('selected');
    }
    optionsGrid.appendChild(button);
  });

  document.getElementById('prevButton').disabled = state.currentQuestionIndex === 0;
  document.getElementById('nextButton').disabled = state.answers[state.currentQuestionIndex] == null;
  document.getElementById('prevButton').addEventListener('click', goPrevious);
  document.getElementById('nextButton').addEventListener('click', goNext);
}

function selectAnswer(choiceIndex) {
  state.answers[state.currentQuestionIndex] = choiceIndex;
  renderChapter();
}

function goPrevious() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderChapter();
  }
}

function goNext() {
  const chapter = currentChapter();
  if (state.currentQuestionIndex < chapter.questions.length - 1) {
    state.currentQuestionIndex += 1;
    renderChapter();
    return;
  }
  completeChapter();
}

function completeChapter() {
  const chapter = currentChapter();
  const correct = chapter.questions.reduce((score, question, index) => {
    return score + (state.answers[index] === question.answer ? 1 : 0);
  }, 0);
  const percentage = Math.round((correct / chapter.questions.length) * 100);
  state.completed[chapter.id] = {
    correct,
    total: chapter.questions.length,
    score: percentage,
    passed: percentage >= 80,
  };

  saveState();
  renderChapters();
  renderCompletion(chapter, percentage, correct);
}

if (launchQuizButton) {
  launchQuizButton.addEventListener('click', openQuizPage);
}

if (homeButton) {
  homeButton.addEventListener('click', goHome);
}

function renderCompletion(chapter, score, correct) {
  const passed = score >= 80;
  const completionHtml = `
    <div class="page-heading">
      <h2>Chapter ${chapter.id} Complete</h2>
      <p>${chapter.title}</p>
    </div>
    <div class="result-banner ${passed ? 'pass' : 'fail'}">
      <strong>${passed ? 'Chapter passed!' : 'Chapter not passed yet.'}</strong>
      <p>Your score: <strong>${score}%</strong> (${correct}/${chapter.questions.length})</p>
      <p>${passed ? 'Great work! This chapter is unlocked for the next one.' : 'You need at least 80% to move to the next chapter. Retry to improve your score.'}</p>
    </div>
    <div class="controls-row">
      <button class="control-button primary" data-action="retry">${passed ? 'Review Chapter' : 'Retry Chapter'}</button>
      <button class="control-button" data-action="return">Back to Chapters</button>
    </div>
  `;

  if (pageType === 'exam' && chapterList) {
    const chapterCard = chapterList.querySelector(`.chapter-card[data-chapter-id="${chapter.id}"]`);
    const body = chapterCard?.querySelector('.chapter-body');
    if (body) {
      body.innerHTML = completionHtml;
      body.querySelector('[data-action="retry"]').addEventListener('click', () => startChapter(chapter.id));
      body.querySelector('[data-action="return"]').addEventListener('click', () => {
        state.currentChapterId = null;
        renderChapters();
      });
      return;
    }
  }

  pageContent.innerHTML = completionHtml;
  document.querySelector('#retryButton')?.addEventListener('click', () => startChapter(chapter.id));
  document.querySelector('#returnButton')?.addEventListener('click', () => {
    state.currentChapterId = null;
    if (pageType === 'exam') {
      goHome();
      return;
    }
    renderWelcome();
  });
}

loadSavedState();
if (chapterList) {
  renderChapters();
}

if (pageType === 'exam') {
  const params = new URLSearchParams(window.location.search);
  const chapterId = Number(params.get('chapter'));
  const chapter = getChapterById(chapterId);

  if (chapter && getUnlockedChapters().includes(chapterId)) {
    startChapter(chapterId);
  } else {
    renderWelcome();
    if (chapter && chapterId !== 0) {
      pageContent.innerHTML += `
        <div class="result-banner fail" style="margin-top:24px;">
          <strong>Chapter unavailable</strong>
          <p>Chapter ${chapterId} is locked until you pass the previous chapter with 80% or higher.</p>
        </div>
      `;
    }
  }
} else {
  renderWelcome();
}

const rawSitePages = [
  {
    id: 'home',
    path: '/',
    title: 'Home',
    description: 'Landing page for the Bugema University IT Department and Department of Computing.',
    keywords: [
      'bugema',
      'department of computing',
      'digital transformation',
      'academic excellence',
      'software engineering',
      'cybersecurity',
      'data science',
    ],
    highlights: [
      'The home page introduces the department as a hub for digital transformation and future-ready tech education.',
      'It highlights academic excellence, modern facilities, and 24/7 lab access for students.',
      'Visitors are guided toward programs, admissions, contact, and the application flow.',
    ],
  },
  {
    id: 'about',
    path: '/about',
    title: 'About Us',
    description: 'Mission, vision, values, staff profiles, and department background.',
    keywords: [
      'mission',
      'vision',
      'values',
      'staff',
      'faculty',
      'dean',
      'head of department',
      'team',
    ],
    highlights: [
      'The department mission emphasizes Christ-centered education, leadership, and service in IT and computer science.',
      'The vision is to be a leading IT department recognized for excellence in education, research, and community service.',
      'The page introduces staff including the dean, head of department, lecturers, and the department secretary.',
    ],
  },
  {
    id: 'programs',
    path: '/programs',
    title: 'Programs',
    description: 'Undergraduate, postgraduate, diploma, certificate, and short-course offerings.',
    keywords: [
      'bachelor of information technology',
      'bachelor of software engineering',
      'bachelor of computer science',
      'bachelor of information systems',
      'postgraduate diploma in information technology',
      'master of information technology',
      'diploma',
      'certificate',
      'short courses',
    ],
    highlights: [
      'Undergraduate options include Bachelor of Information Technology, Bachelor of Software Engineering, Bachelor of Computer Science, and Bachelor of Information Systems.',
      'Postgraduate study includes the Postgraduate Diploma in Information Technology and the Master of Information Technology.',
      'Additional pathways include the Diploma in Information Technology, Certificate in Computing, and short professional skills clinics.',
    ],
  },
  {
    id: 'admissions',
    path: '/admissions',
    title: 'Admissions',
    description: 'Application guidance, document requirements, timeline, and admissions support information.',
    keywords: [
      'apply',
      'application',
      'requirements',
      'documents',
      'admissions guide',
      'timeline',
      'o-level',
      'a-level',
      'identification',
    ],
    highlights: [
      'The admissions sequence guides students to select a program, prepare documents, and submit details.',
      'Key requirements include accurate contact details, O-Level and A-Level certificates or verified slips, and valid identification.',
      'The timeline covers application intake, documentation verification, academic review, and official registration.',
    ],
  },
  {
    id: 'register',
    path: '/register',
    title: 'Apply Now',
    description: 'Application form for prospective students joining the department.',
    keywords: [
      'application form',
      'submit application',
      'program of interest',
      'academic background',
      'join department',
    ],
    highlights: [
      'The application form asks for full name, email, phone number, program of interest, and academic background.',
      'Applicants are reminded to confirm the right program, prepare academic documents, and use valid contact details.',
      'The page connects browsing the site with taking a direct action to begin the admissions process.',
    ],
  },
  {
    id: 'login',
    path: '/login',
    title: 'Portal Login',
    description: 'Secure student sign-in for portal services, notices, and support tools.',
    keywords: [
      'login',
      'portal',
      'student portal',
      'sign in',
      'secure access',
      'account activation',
      'password reset',
    ],
    highlights: [
      'The portal page provides secure sign-in for student services, notices, and department tools.',
      'It recommends checking credentials, activating new student accounts from email, and contacting IT support if needed.',
      'Users are reminded not to share credentials and to use the official secure portal.',
    ],
  },
  {
    id: 'news',
    path: '/news',
    title: 'News and Events',
    description: 'Recent updates, categories, newsletter signup, and upcoming events.',
    keywords: [
      'news',
      'events',
      'campus updates',
      'academic updates',
      'staff excellence',
      'innovation showcase',
      'newsletter',
    ],
    highlights: [
      'Recent news covers campus infrastructure, academic programs, staff excellence, and department innovation.',
      'Upcoming events include Admissions Support Week on April 5 and the Student Innovation Showcase on April 18.',
      'The page organizes content into campus updates, academic programs, and staff and student stories.',
    ],
  },
  {
    id: 'alumni',
    path: '/alumni',
    title: 'Alumni',
    description: 'Alumni association highlights, networking, updates, and reconnecting with the university.',
    keywords: [
      'alumni',
      'association',
      'graduates',
      'reconnect',
      'alumni weekend',
      'leadership awards',
    ],
    highlights: [
      'The alumni page focuses on keeping connections between older and younger graduates.',
      'It includes alumni grouping links, leadership highlights, and updates for community engagement.',
      'An Alumni Weekend banner promotes reconnection activities and sign-up calls to action.',
    ],
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    title: 'Student Portal Dashboard',
    description: 'Student notices, profile summary, activity, quick links, and support routes.',
    keywords: [
      'dashboard',
      'student profile',
      'notices',
      'course registration',
      'academic calendar',
      'library resources',
      'it support',
      'exam results',
      'financial records',
    ],
    highlights: [
      'The dashboard shows notices, recent student activity, profile information, and quick links for common tasks.',
      'Quick links include course registration, academic calendar, library resources, IT support, exam results, and financial records.',
      'Students can use the dashboard to review announcements, updates, and support options in one place.',
    ],
  },
  {
    id: 'contact',
    path: '/contact',
    title: 'Contact',
    description: 'Department contact channels, office hours, location, and inquiry form.',
    keywords: [
      'contact',
      'email',
      'phone',
      'office hours',
      'location',
      'coordinates',
      'luweero',
      'bugema',
    ],
    highlights: [
      'The department contact email is ci@bugemauniv.ac.ug and the listed phone number is +256 414 288 045.',
      'The location is Bugema University, P.O. Box 79, Bugema, Luweero District, Uganda, about 32km north of Kampala.',
      'Office hours are Monday to Friday from 8:00 AM to 5:00 PM, Saturday from 9:00 AM to 1:00 PM, and Sunday closed.',
    ],
  },
]

const assistantTopics = [
  {
    id: 'programs',
    keywords: [
      'program',
      'programs',
      'course',
      'courses',
      'degree',
      'degrees',
      'bachelor',
      'master',
      'masters',
      'postgraduate',
      'diploma',
      'certificate',
      'study',
    ],
    response:
      'The website lists undergraduate programs in Information Technology, Software Engineering, Computer Science, and Information Systems. It also includes the Postgraduate Diploma in Information Technology, the Master of Information Technology, plus diploma, certificate, and short-course pathways.',
    actionPaths: ['/programs', '/admissions', '/register'],
  },
  {
    id: 'admissions',
    keywords: [
      'admission',
      'admissions',
      'apply',
      'application',
      'requirements',
      'document',
      'documents',
      'entry',
      'intake',
      'registration',
    ],
    response:
      'To apply, the site guides you through choosing a program, preparing your documents, and submitting your details. It specifically mentions accurate contact details, academic certificates or verified slips, and valid identification as key requirements.',
    actionPaths: ['/admissions', '/register', '/contact'],
  },
  {
    id: 'contact',
    keywords: [
      'contact',
      'email',
      'phone',
      'call',
      'office',
      'hours',
      'where',
      'location',
      'address',
      'map',
      'coordinates',
    ],
    response:
      'You can reach the department through ci@bugemauniv.ac.ug or +256 414 288 045. The site lists the location as Bugema University in Luweero District, Uganda, with office hours from Monday to Friday 8:00 AM to 5:00 PM and Saturday 9:00 AM to 1:00 PM.',
    actionPaths: ['/contact', '/admissions'],
  },
  {
    id: 'about',
    keywords: [
      'about',
      'mission',
      'vision',
      'values',
      'staff',
      'team',
      'faculty',
      'dean',
      'lecturer',
    ],
    response:
      'The About page explains the department mission, vision, and values, and it introduces the staff team including the dean, head of department, lecturers, and the secretary. It is the best place to learn how the department presents its identity and leadership.',
    actionPaths: ['/about', '/contact'],
  },
  {
    id: 'portal',
    keywords: [
      'portal',
      'dashboard',
      'login',
      'sign in',
      'student',
      'results',
      'calendar',
      'support',
      'notices',
    ],
    response:
      'The portal side of the website includes a secure login page and a dashboard with notices, recent activity, student profile details, and quick links like course registration, academic calendar, library resources, IT support, exam results, and financial records.',
    actionPaths: ['/login', '/dashboard', '/contact'],
  },
  {
    id: 'news',
    keywords: [
      'news',
      'event',
      'events',
      'announcement',
      'announcements',
      'showcase',
      'support week',
      'newsletter',
    ],
    response:
      'The News page shares recent department updates and upcoming events. It currently highlights Admissions Support Week on April 5 and the Student Innovation Showcase on April 18, alongside campus, academic, and people-focused news categories.',
    actionPaths: ['/news', '/contact'],
  },
  {
    id: 'alumni',
    keywords: [
      'alumni',
      'graduate',
      'graduates',
      'association',
      'weekend',
      'leadership awards',
    ],
    response:
      'The alumni section is focused on keeping graduates connected through association activities, community links, updates, and alumni weekend promotions. It is the main place on the site for reconnecting after graduation.',
    actionPaths: ['/alumni', '/register'],
  },
]

const stopWords = new Set([
  'a',
  'an',
  'and',
  'are',
  'can',
  'for',
  'from',
  'how',
  'i',
  'in',
  'is',
  'me',
  'my',
  'of',
  'on',
  'or',
  'the',
  'this',
  'to',
  'what',
  'where',
  'which',
  'with',
  'you',
])

export const suggestedPrompts = [
  'What programs are offered?',
  'How do I apply?',
  'Where is the department located?',
  'How do I log into the portal?',
]

const normalize = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const tokenize = (value = '') =>
  normalize(value)
    .split(' ')
    .filter(Boolean)
    .filter((token) => !stopWords.has(token))

const createSearchText = (page) =>
  normalize([page.title, page.description, ...page.keywords, ...page.highlights].join(' '))

export const sitePages = rawSitePages.map((page) => ({
  ...page,
  searchText: createSearchText(page),
}))

export const getPageByPath = (path) => sitePages.find((page) => page.path === path)

const getSnippet = (page, tokens) => {
  if (!tokens.length) {
    return page.description
  }

  const match = page.highlights.find((highlight) =>
    tokens.some((token) => normalize(highlight).includes(token))
  )

  return match || page.description
}

const scorePage = (page, query, tokens) => {
  if (!query) {
    return 0
  }

  const normalizedTitle = normalize(page.title)
  const normalizedDescription = normalize(page.description)
  const normalizedPath = normalize(page.path)

  let score = 0

  if (normalizedTitle === query) {
    score += 120
  }

  if (page.searchText.includes(query)) {
    score += 50
  }

  if (normalizedPath.includes(query)) {
    score += 20
  }

  tokens.forEach((token) => {
    if (normalizedTitle.includes(token)) {
      score += 30
    }

    if (normalizedDescription.includes(token)) {
      score += 16
    }

    if (page.keywords.some((keyword) => normalize(keyword).includes(token))) {
      score += 18
    }

    if (page.highlights.some((highlight) => normalize(highlight).includes(token))) {
      score += 10
    }
  })

  return score
}

export const searchSite = (query, limit = 6) => {
  const normalizedQuery = normalize(query)
  const tokens = tokenize(query)

  if (!normalizedQuery) {
    return []
  }

  return sitePages
    .map((page) => ({
      ...page,
      score: scorePage(page, normalizedQuery, tokens),
      snippet: getSnippet(page, tokens),
    }))
    .filter((page) => page.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
}

const getActionsForPaths = (paths) => {
  const uniquePaths = Array.from(new Set(paths))

  return uniquePaths
    .map((path) => getPageByPath(path))
    .filter(Boolean)
    .map((page) => ({
      label: page.title,
      path: page.path,
    }))
}

const scoreTopic = (topic, tokens, query) => {
  let score = 0

  topic.keywords.forEach((keyword) => {
    const normalizedKeyword = normalize(keyword)

    if (query.includes(normalizedKeyword)) {
      score += 16
    }

    tokens.forEach((token) => {
      if (normalizedKeyword.includes(token)) {
        score += 7
      }
    })
  })

  return score
}

export const getAssistantReply = (question, currentPath = '/') => {
  const normalizedQuestion = normalize(question)
  const tokens = tokenize(question)

  if (!normalizedQuestion) {
    return {
      text: 'Ask me about programs, admissions, portal access, contact details, alumni, or news on this website.',
      actions: getActionsForPaths(['/programs', '/admissions', '/contact']),
    }
  }

  const currentPage = getPageByPath(currentPath)

  if (
    currentPage &&
    ['this page', 'current page', 'here'].some((phrase) => normalizedQuestion.includes(phrase))
  ) {
    return {
      text: `${currentPage.title}: ${currentPage.description} ${currentPage.highlights[0]}`,
      actions: getActionsForPaths([currentPage.path]),
    }
  }

  const matchingTopic = assistantTopics
    .map((topic) => ({
      topic,
      score: scoreTopic(topic, tokens, normalizedQuestion),
    }))
    .sort((left, right) => right.score - left.score)[0]

  const searchResults = searchSite(question, 3)

  if (matchingTopic && matchingTopic.score > 0) {
    const relatedPaths = [
      ...matchingTopic.topic.actionPaths,
      ...searchResults.map((result) => result.path),
    ]

    return {
      text: matchingTopic.topic.response,
      actions: getActionsForPaths(relatedPaths),
    }
  }

  if (searchResults.length) {
    const [bestResult, secondResult] = searchResults
    const followUp = secondResult ? ` You may also want ${secondResult.title}.` : ''

    return {
      text: `The closest match I found is ${bestResult.title}. ${bestResult.description} ${bestResult.snippet}${followUp}`,
      actions: getActionsForPaths(searchResults.map((result) => result.path)),
    }
  }

  return {
    text: 'I could not find that on the current website. Try asking about programs, admissions, portal login, contact details, alumni, or news.',
    actions: getActionsForPaths(['/programs', '/admissions', '/contact']),
  }
}

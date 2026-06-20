/**
 * courses.js — All course data for CS Resource Hub
 *
 * This file is the "brain" of the site. Every course card, topic list,
 * and resource link comes from here. If you want to edit content,
 * this is the only file you need to touch.
 *
 * Structure:
 *  courses.cs  → Array of CS Year 1 to Year 4
 *  courses.it  → Array of IT Year 1 to Year 4
 */

export const courses = {
  // ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────
  cs: [
    {
      id: 'cs1',
      code: 'CS 1',
      shortCode: 'CS1',
      name: 'Introduction to Computer Science',
      year: 1,
      // Tailwind gradient for the card header
      gradient: 'from-emerald-500 to-teal-500',
      cardBorder: 'border-emerald-500/30 hover:border-emerald-400/70',
      cardGlow: 'hover:shadow-emerald-500/10',
      accentText: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
      description:
        'CS1 is where your journey begins. You will learn the fundamentals of programming, problem-solving, and computational thinking — no prior experience required. By the end of the year, you will be writing real programs that solve real problems.',

      semester1: {
        title: 'Semester 1 — Foundations of Programming',
        overview:
          'You will be introduced to how computers work and how to give them instructions using a programming language (usually Python or C). Think of this semester as learning the grammar of a new language.',
        topics: [
          'What is Computer Science and why it matters',
          'How computers process information (binary, hardware basics)',
          'Introduction to algorithms and flowcharts',
          'Variables, data types, and operators',
          'Control flow: if / else / elif statements',
          'Loops: for and while',
          'Functions and code reuse',
          'Basic input & output (print, input)',
          'Introduction to Python or C',
        ],
        resources: [
          {
            name: 'CS50x — Harvard University',
            url: 'https://cs50.harvard.edu/x/',
            type: 'Free Course',
            desc: 'The most popular intro-to-CS course in the world. Starts from absolute zero and is completely free.',
          },
          {
            name: 'Python for Beginners — freeCodeCamp',
            url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
            type: 'Free Course',
            desc: 'Step-by-step Python course with projects. 100% free.',
          },
          {
            name: 'Automate the Boring Stuff with Python',
            url: 'https://automatetheboringstuff.com/',
            type: 'Free Book',
            desc: 'Practical Python for beginners — read it free online. Real projects from chapter one.',
          },
          {
            name: 'W3Schools Python Tutorial',
            url: 'https://www.w3schools.com/python/',
            type: 'Reference',
            desc: 'Quick syntax lookups and runnable examples. Great when you forget how something works.',
          },
          {
            name: 'Visualgo — Algorithm Visualizer',
            url: 'https://visualgo.net/',
            type: 'Tool',
            desc: 'Watch algorithms run step-by-step visually. Helps concepts click faster.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Object-Oriented Programming',
        overview:
          'You will learn to organise your code into reusable "objects" — a style called Object-Oriented Programming (OOP). This is how almost all modern software is written.',
        topics: [
          'Object-Oriented Programming (OOP) concepts',
          'Classes, objects, attributes, and methods',
          'Constructors and the __init__ method',
          'Inheritance and polymorphism',
          'Encapsulation and abstraction',
          'Exception handling (try / except / finally)',
          'File reading and writing',
          'Introduction to recursion',
          'Basic sorting: Bubble Sort, Selection Sort',
        ],
        resources: [
          {
            name: 'Python OOP — Corey Schafer (YouTube)',
            url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc',
            type: 'YouTube',
            desc: 'Widely considered the best free OOP series for Python. Clear, slow, beginner-friendly.',
          },
          {
            name: 'GeeksForGeeks — OOP Concepts',
            url: 'https://www.geeksforgeeks.org/python-oops-concepts/',
            type: 'Reference',
            desc: 'Written explanations with code examples. Good for quick review before exams.',
          },
          {
            name: 'Exercism.io',
            url: 'https://exercism.org/',
            type: 'Practice',
            desc: 'Free coding exercises across many languages. Has a mentorship feature where real developers review your code.',
          },
        ],
      },

      benefits:
        'CS1 is the single most important year of your CS degree. Everything from CS2 onward assumes you are comfortable with loops, functions, and OOP. Students who master this year find the entire rest of their degree significantly more manageable.',
      tips: [
        'Code every single day — even 20 minutes beats 4 hours once a week.',
        'Type code yourself instead of copy-pasting. Muscle memory is real.',
        'When you get an error, read the full error message before Googling. It usually tells you exactly what is wrong.',
        'Use CS50x as a free supplement — it explains concepts better than most textbooks.',
        'Form a study group. Teaching someone else is the fastest way to solidify your own understanding.',
        "Don't be discouraged by bugs. Every developer — even seniors with 20+ years of experience — debugs constantly.",
      ],
    },

    {
      id: 'cs2',
      code: 'CS 2',
      shortCode: 'CS2',
      name: 'Data Structures & Algorithms',
      year: 2,
      gradient: 'from-blue-500 to-indigo-500',
      cardBorder: 'border-blue-500/30 hover:border-blue-400/70',
      cardGlow: 'hover:shadow-blue-500/10',
      accentText: 'text-blue-400',
      badgeBg: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
      description:
        'CS2 is widely considered the most challenging and most rewarding year. You will learn how to store, organise, and process data efficiently. These skills determine whether your programs run in 1 second or 10 hours.',

      semester1: {
        title: 'Semester 1 — Linear Data Structures',
        overview:
          'You will explore fundamental ways to organise data — arrays, linked lists, stacks, and queues — and learn why choosing the right structure matters.',
        topics: [
          'Arrays and dynamic arrays',
          'Linked lists (singly and doubly linked)',
          'Stacks and their applications (undo/redo, call stack)',
          'Queues and their applications (task scheduling)',
          'Big-O Notation — measuring algorithm efficiency',
          'Searching: Linear search vs. Binary search',
          'Sorting: Merge Sort, Quick Sort',
          'Introduction to hashing and hash tables',
        ],
        resources: [
          {
            name: 'Introduction to Algorithms (CLRS) — MIT Press',
            url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
            type: 'Textbook',
            desc: 'The definitive DSA textbook used in top universities worldwide. Dense but thorough.',
          },
          {
            name: 'Abdul Bari — Algorithms (YouTube)',
            url: 'https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
            type: 'YouTube',
            desc: 'Exceptional visual explanations of algorithms. Widely praised by CS students globally.',
          },
          {
            name: 'GeeksForGeeks — DSA',
            url: 'https://www.geeksforgeeks.org/data-structures/',
            type: 'Reference',
            desc: 'The best reference site for DSA. Every concept explained with code in multiple languages.',
          },
          {
            name: 'LeetCode — Easy Problems',
            url: 'https://leetcode.com/problemset/?difficulty=EASY',
            type: 'Practice',
            desc: 'Start with easy problems. Aim for 2-3 a week. Great for building problem-solving intuition.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Trees, Graphs & Advanced Algorithms',
        overview:
          'You will go beyond linear structures to learn trees and graphs — the data structures behind file systems, maps, social networks, and the internet.',
        topics: [
          'Binary trees and Binary Search Trees (BST)',
          'Tree traversals: inorder, preorder, postorder',
          'Balanced trees: AVL trees, Red-Black trees',
          'Heaps and Priority Queues',
          'Graphs: representations (adjacency list / matrix)',
          'Graph traversal: BFS (Breadth-First) and DFS (Depth-First)',
          'Shortest path algorithms: Dijkstra, Bellman-Ford',
          'Dynamic Programming fundamentals',
          'Greedy algorithms',
        ],
        resources: [
          {
            name: 'William Fiset — Graph Theory (YouTube)',
            url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P',
            type: 'YouTube',
            desc: 'Possibly the best free graph theory course available. Extremely clear visuals.',
          },
          {
            name: 'Dynamic Programming — Aladdin Persson (YouTube)',
            url: 'https://www.youtube.com/playlist?list=PLhhyoLH6IjfxekbT6WJ0KEqtKy8sU3G6',
            type: 'YouTube',
            desc: 'DP is where most students struggle. This series breaks it down into clear patterns.',
          },
          {
            name: 'NeetCode.io',
            url: 'https://neetcode.io/',
            type: 'Practice',
            desc: 'Structured roadmap for solving LeetCode problems, with video explanations for each.',
          },
        ],
      },

      benefits:
        'DSA is the backbone of software engineering interviews and competitive programming. Companies like Google, Meta, and Amazon base their technical interviews entirely on DSA. Mastering this year opens doors to internships and top-tier jobs.',
      tips: [
        'Draw things out on paper. Visualising pointer manipulation and tree structures saves massive time.',
        'Understand Big-O before memorising algorithms — know why an algorithm is efficient, not just that it is.',
        'Solve at least one LeetCode problem per week, even during exams. Consistency beats cramming.',
        'If you are stuck on a concept, watch Abdul Bari\'s video on it. He explains things visually and clearly.',
        'The first time you see recursion, it will break your brain. That is normal. Keep going.',
        'Use GeeksForGeeks as a reference, not a shortcut — read to understand, not to copy-paste.',
      ],
    },

    {
      id: 'cs3',
      code: 'CS 3',
      shortCode: 'CS3',
      name: 'Software Engineering & Databases',
      year: 3,
      gradient: 'from-violet-500 to-purple-500',
      cardBorder: 'border-violet-500/30 hover:border-violet-400/70',
      cardGlow: 'hover:shadow-violet-500/10',
      accentText: 'text-violet-400',
      badgeBg: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
      description:
        'CS3 shifts focus from writing code to building systems. You will learn how professional software teams plan, design, and maintain large-scale applications — and how to store and query data efficiently using databases.',

      semester1: {
        title: 'Semester 1 — Software Engineering',
        overview:
          'Writing code is only 20% of software development. This semester covers the 80%: requirements, design, testing, version control, and teamwork.',
        topics: [
          'Software Development Life Cycle (SDLC)',
          'Agile methodology and Scrum',
          'Requirements gathering and analysis',
          'UML diagrams: class, sequence, use-case',
          'Design patterns: Singleton, Observer, Factory, MVC',
          'Version control with Git and GitHub',
          'Unit testing and Test-Driven Development (TDD)',
          'Code review and documentation best practices',
        ],
        resources: [
          {
            name: 'Clean Code — Robert C. Martin',
            url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
            type: 'Book',
            desc: 'THE book on writing professional, readable code. Every software engineer should read this.',
          },
          {
            name: 'Git & GitHub — The Odin Project',
            url: 'https://www.theodinproject.com/paths/foundations/courses/foundations#git-basics',
            type: 'Free Course',
            desc: 'The best free Git tutorial. Hands-on and practical.',
          },
          {
            name: 'Refactoring Guru — Design Patterns',
            url: 'https://refactoring.guru/design-patterns',
            type: 'Reference',
            desc: 'Beautiful visual explanations of all major design patterns with real-world examples.',
          },
          {
            name: 'Software Engineering — Ian Sommerville',
            url: 'https://www.pearson.com/en-us/subject-catalog/p/software-engineering/P200000003258',
            type: 'Textbook',
            desc: 'Standard university textbook for software engineering. Comprehensive coverage of all topics.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Database Systems',
        overview:
          'Almost every real application stores data. This semester teaches you how databases work, how to design them well, and how to query them efficiently.',
        topics: [
          'Relational database concepts and RDBMS',
          'Entity-Relationship (ER) Diagrams',
          'SQL: CREATE, INSERT, SELECT, UPDATE, DELETE',
          'Joins: INNER, LEFT, RIGHT, FULL OUTER',
          'Database normalisation: 1NF, 2NF, 3NF',
          'Indexes and query optimisation',
          'Transactions, ACID properties, and concurrency',
          'Introduction to NoSQL databases (MongoDB)',
          'Database security and access control',
        ],
        resources: [
          {
            name: 'SQLZoo — Interactive SQL Tutorial',
            url: 'https://sqlzoo.net/',
            type: 'Free Practice',
            desc: 'Learn SQL by doing, directly in the browser. The fastest way to get comfortable with SQL.',
          },
          {
            name: 'PostgreSQL Tutorial',
            url: 'https://www.postgresqltutorial.com/',
            type: 'Reference',
            desc: 'Comprehensive SQL reference with real examples. Good companion to your lectures.',
          },
          {
            name: 'MongoDB University',
            url: 'https://learn.mongodb.com/',
            type: 'Free Course',
            desc: 'Free official MongoDB courses. Great for understanding NoSQL databases.',
          },
          {
            name: 'CMU Database Systems (YouTube)',
            url: 'https://www.youtube.com/playlist?list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g',
            type: 'YouTube',
            desc: 'University-level database course from Carnegie Mellon. Excellent and free.',
          },
        ],
      },

      benefits:
        'CS3 makes you employable. Employers consistently list software engineering practices (Git, design patterns, Agile) and database skills (SQL) as their top required skills. This year transforms you from a coder into a software engineer.',
      tips: [
        'Build a real project this year — even a simple one with a database and GitHub repo. Employers will ask for it.',
        'Learn Git properly: branching, merging, pull requests. This is non-negotiable in any tech job.',
        'Practice SQL daily on SQLZoo. The syntax feels awkward at first but clicks quickly with repetition.',
        'Read at least two chapters of Clean Code. It will change how you think about writing code forever.',
        'Try to use Agile practices even in group projects — daily standups and sprints change group dynamics positively.',
        'Understand normalisation deeply, not just the rules. The "why" behind 3NF will save you from bad designs.',
      ],
    },

    {
      id: 'cs4',
      code: 'CS 4',
      shortCode: 'CS4',
      name: 'Advanced Topics & Final Year Project',
      year: 4,
      gradient: 'from-rose-500 to-orange-500',
      cardBorder: 'border-rose-500/30 hover:border-rose-400/70',
      cardGlow: 'hover:shadow-rose-500/10',
      accentText: 'text-rose-400',
      badgeBg: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
      description:
        'CS4 is the final stretch. You will explore cutting-edge areas of computing — machine learning, distributed systems, and security — while completing a significant Final Year Project (FYP) that demonstrates everything you have learned.',

      semester1: {
        title: 'Semester 1 — Advanced Electives',
        overview:
          'You will choose specialisation tracks and dive deep into advanced CS topics. Common electives include machine learning, compilers, computer graphics, and distributed systems.',
        topics: [
          'Machine Learning fundamentals (supervised & unsupervised)',
          'Neural networks and deep learning basics',
          'Distributed systems and cloud computing concepts',
          'Computer security: cryptography, authentication, vulnerabilities',
          'Compiler design: lexing, parsing, code generation',
          'Operating systems deep dive: scheduling, memory management',
          'Research methodology and academic writing',
          'Final Year Project planning and proposal writing',
        ],
        resources: [
          {
            name: 'fast.ai — Practical Deep Learning',
            url: 'https://course.fast.ai/',
            type: 'Free Course',
            desc: 'The best practical ML course. Top-down approach that gets you building immediately.',
          },
          {
            name: 'MIT OpenCourseWare — Distributed Systems',
            url: 'https://pdos.csail.mit.edu/6.824/',
            type: 'Free Course',
            desc: 'MIT\'s distributed systems course with lectures and labs. Industry gold standard.',
          },
          {
            name: 'Cryptography I — Stanford (Coursera)',
            url: 'https://www.coursera.org/learn/crypto',
            type: 'Free Course',
            desc: 'Dan Boneh\'s legendary cryptography course. Free to audit.',
          },
          {
            name: 'Papers With Code',
            url: 'https://paperswithcode.com/',
            type: 'Research',
            desc: 'Browse ML research papers paired with their implementations. Great for FYP inspiration.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Final Year Project',
        overview:
          'This semester is dominated by your Final Year Project. You will apply everything from the past three years to build, document, and present a complete software system.',
        topics: [
          'Project management: Gantt charts, milestones, risk management',
          'Literature review and related work',
          'System design and architecture documentation',
          'Implementation and testing',
          'Performance evaluation and benchmarking',
          'Technical writing and thesis submission',
          'Poster / oral presentation and defence',
          'Industry ethics and professional responsibilities',
        ],
        resources: [
          {
            name: 'How to Write a CS Research Paper — MIT',
            url: 'https://www.cs.columbia.edu/~hgs/etc/writing-bugs.html',
            type: 'Guide',
            desc: 'Common mistakes and tips for writing technical CS papers and theses.',
          },
          {
            name: 'Overleaf — LaTeX Editor',
            url: 'https://www.overleaf.com/',
            type: 'Tool',
            desc: 'Free online LaTeX editor. Many universities require theses in LaTeX format.',
          },
          {
            name: 'GitHub — Project Hosting',
            url: 'https://github.com/',
            type: 'Tool',
            desc: 'Host your FYP code here. A well-maintained GitHub repo is one of your best job assets.',
          },
          {
            name: 'IEEE Xplore',
            url: 'https://ieeexplore.ieee.org/',
            type: 'Research',
            desc: 'Database of technical papers for literature reviews. Your university may provide free access.',
          },
        ],
      },

      benefits:
        'Your Final Year Project is the single most impactful thing you will put on your CV as a fresh graduate. Employers will ask about it in interviews. Invest time in it, document it well, and host it on GitHub. The advanced electives you choose also shape your career direction.',
      tips: [
        'Choose your FYP topic early and pick something you genuinely find interesting — you will spend months on it.',
        'Start writing your thesis/report as you build, not after. It is much easier to document while it is fresh.',
        'Use GitHub from day one of your FYP. Regular commits show progress and protect your work.',
        'Ask your supervisor for feedback early and often — do not wait until the last month.',
        'For ML projects, start with a simple baseline model before adding complexity.',
        'Your FYP does not need to be revolutionary — it needs to be well-executed and clearly documented.',
      ],
    },
  ],

  // ─── INFORMATION TECHNOLOGY ───────────────────────────────────────────────
  it: [
    {
      id: 'it1',
      code: 'IT 1',
      shortCode: 'IT1',
      name: 'Introduction to Information Technology',
      year: 1,
      gradient: 'from-cyan-500 to-sky-500',
      cardBorder: 'border-cyan-500/30 hover:border-cyan-400/70',
      cardGlow: 'hover:shadow-cyan-500/10',
      accentText: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30',
      description:
        'IT1 introduces you to the world of information technology — how computers work at the hardware level, how operating systems manage resources, and the basics of networking. This is the foundation for everything in IT.',

      semester1: {
        title: 'Semester 1 — Computer Hardware & Systems',
        overview:
          'You will learn what is physically inside a computer, how components work together, and how to troubleshoot hardware issues. This is the hands-on, mechanical side of IT.',
        topics: [
          'Computer architecture: CPU, RAM, storage, motherboard',
          'Binary and hexadecimal number systems',
          'Input/output devices and peripherals',
          'Storage technologies: HDD, SSD, RAID',
          'Power supply units and cooling systems',
          'Hardware troubleshooting methodology',
          'Introduction to operating systems concepts',
          'BIOS/UEFI and the boot process',
        ],
        resources: [
          {
            name: 'Professor Messer — CompTIA A+ Course',
            url: 'https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/',
            type: 'Free Course',
            desc: 'The best free A+ prep resource. Covers all hardware and OS topics in depth.',
          },
          {
            name: 'CompTIA A+ Study Guide',
            url: 'https://www.comptia.org/certifications/a',
            type: 'Certification',
            desc: 'CompTIA A+ is the industry-standard entry-level IT certification. Pairs perfectly with IT1.',
          },
          {
            name: 'How Computers Work — Khan Academy',
            url: 'https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers',
            type: 'Free Course',
            desc: 'Clear visual explanations of how computers work at a fundamental level.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Operating Systems & Intro to Networking',
        overview:
          'You will learn how operating systems manage hardware resources and get your first taste of how computers communicate over networks.',
        topics: [
          'Windows and Linux operating system fundamentals',
          'File systems: NTFS, ext4, FAT32',
          'Process management and task scheduling',
          'User accounts, permissions, and security',
          'Command line interface: Windows CMD and Linux Bash',
          'Introduction to networking: what is a network?',
          'Network topologies and media types',
          'IP addresses and the OSI model overview',
        ],
        resources: [
          {
            name: 'Linux Journey',
            url: 'https://linuxjourney.com/',
            type: 'Free Course',
            desc: 'Interactive Linux course for complete beginners. Goes from basics to advanced topics.',
          },
          {
            name: 'The Missing Semester — MIT',
            url: 'https://missing.csail.mit.edu/',
            type: 'Free Course',
            desc: 'MIT\'s course on practical tools: shell, scripting, version control. Things they don\'t teach you in class.',
          },
          {
            name: 'Networking Basics — Cisco NetAcad',
            url: 'https://www.netacad.com/courses/networking/networking-basics',
            type: 'Free Course',
            desc: 'Free intro networking course from Cisco — the world\'s leading networking company.',
          },
        ],
      },

      benefits:
        'IT1 gives you the foundation to understand all technology at a deeper level. Whether you go into networking, cybersecurity, cloud computing, or helpdesk support, everything starts here. The CompTIA A+ certification you can earn alongside this course opens doors to entry-level IT jobs.',
      tips: [
        'Get your hands on real hardware if possible — open up an old PC and identify the components.',
        'Learn the Linux command line early. Even on Windows, knowing Linux commands is a superpower.',
        'Consider pursuing the CompTIA A+ certification while studying IT1 — it reinforces everything you learn.',
        'Set up a virtual machine (VirtualBox is free) to safely experiment with different operating systems.',
        'The OSI model feels abstract at first — make flashcards and memorise the 7 layers. You will reference it constantly.',
        'Practise typing Linux commands in a terminal every day. Speed and confidence come with repetition.',
      ],
    },

    {
      id: 'it2',
      code: 'IT 2',
      shortCode: 'IT2',
      name: 'Networking & Operating Systems',
      year: 2,
      gradient: 'from-amber-500 to-yellow-500',
      cardBorder: 'border-amber-500/30 hover:border-amber-400/70',
      cardGlow: 'hover:shadow-amber-500/10',
      accentText: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
      description:
        'IT2 goes deep into networking — how data travels across the internet, how routers and switches work, and how to configure and troubleshoot networks. You will also master Linux and Windows Server administration.',

      semester1: {
        title: 'Semester 1 — Network Fundamentals',
        overview:
          'You will learn how networks are designed and how data actually flows from your device to a server thousands of kilometres away.',
        topics: [
          'TCP/IP model and protocol suite',
          'IP addressing: IPv4, IPv6, subnetting, CIDR',
          'DHCP, DNS, and ARP protocols',
          'Routing fundamentals: static vs. dynamic routing',
          'Switching and VLANs',
          'Wireless networking (Wi-Fi) standards',
          'Network devices: routers, switches, firewalls, access points',
          'Network troubleshooting with ping, traceroute, nslookup',
        ],
        resources: [
          {
            name: 'Professor Messer — CompTIA Network+',
            url: 'https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/',
            type: 'Free Course',
            desc: 'Free, comprehensive Network+ prep. Covers every networking topic you will encounter in IT2.',
          },
          {
            name: 'Cisco Networking Academy — CCNA',
            url: 'https://www.netacad.com/courses/networking',
            type: 'Free Course',
            desc: 'Cisco\'s official networking course. CCNA is the most recognised networking certification worldwide.',
          },
          {
            name: 'Subnet Practice — SubnettingPractice.com',
            url: 'https://www.subnettingpractice.com/',
            type: 'Practice',
            desc: 'Subnetting is where most IT2 students struggle. Drill it here until it becomes second nature.',
          },
          {
            name: 'Packet Tracer — Cisco',
            url: 'https://www.netacad.com/resources/lab-downloads?courseLang=en-US',
            type: 'Tool',
            desc: 'Free network simulation tool by Cisco. Configure virtual routers and switches without real hardware.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Server Administration',
        overview:
          'You will learn to administer both Linux and Windows Server environments — the skills that power corporate IT infrastructure worldwide.',
        topics: [
          'Linux server administration and scripting',
          'Bash scripting for automation',
          'Windows Server: Active Directory, Group Policy',
          'User and group management at scale',
          'DNS and DHCP server configuration',
          'File and print server setup',
          'Backup and disaster recovery strategies',
          'Introduction to virtualisation (VMware / Hyper-V)',
        ],
        resources: [
          {
            name: 'Linux Server Course — freeCodeCamp (YouTube)',
            url: 'https://www.youtube.com/watch?v=WMy3OzvBWc0',
            type: 'YouTube',
            desc: 'Full Linux server administration course. 7 hours, completely free.',
          },
          {
            name: 'Windows Server 2022 Administration — Microsoft Learn',
            url: 'https://learn.microsoft.com/en-us/training/paths/administer-infrastructure-resources-in-azure/',
            type: 'Free Course',
            desc: 'Microsoft\'s own free training for Windows Server and Azure administration.',
          },
          {
            name: 'Bash Scripting Guide',
            url: 'https://tldp.org/LDP/abs/html/',
            type: 'Reference',
            desc: 'Comprehensive Bash scripting reference. Free online. Bookmark it — you will use it often.',
          },
        ],
      },

      benefits:
        'Networking knowledge is valued in virtually every technology role. Whether you are in cybersecurity, cloud computing, DevOps, or helpdesk, understanding TCP/IP, subnetting, and server administration is expected. The CompTIA Network+ and Cisco CCNA certifications that align with IT2 are among the most employer-recognised in IT.',
      tips: [
        'Learn subnetting until it is automatic. Use SubnettingPractice.com daily for one month.',
        'Use Cisco Packet Tracer to build and test network topologies. Simulation beats theory every time.',
        'Set up a home lab with a Raspberry Pi or virtual machines to practise server administration.',
        'Learn Bash scripting seriously — it will save you hours every week as a sysadmin.',
        'Study towards the CompTIA Network+ or Cisco CCNA while in IT2. The content directly aligns.',
        'Understand the "why" behind protocols, not just how to configure them. That understanding helps you troubleshoot.',
      ],
    },

    {
      id: 'it3',
      code: 'IT 3',
      shortCode: 'IT3',
      name: 'Web Development & Systems Administration',
      year: 3,
      gradient: 'from-pink-500 to-rose-500',
      cardBorder: 'border-pink-500/30 hover:border-pink-400/70',
      cardGlow: 'hover:shadow-pink-500/10',
      accentText: 'text-pink-400',
      badgeBg: 'bg-pink-500/15 text-pink-300 border border-pink-500/30',
      description:
        'IT3 broadens your skill set to include web development and cloud computing — two of the highest-demand areas in the industry. You will build websites, work with databases, and get introduced to cloud platforms like AWS.',

      semester1: {
        title: 'Semester 1 — Web Development',
        overview:
          'You will learn the three core technologies of the web: HTML (structure), CSS (style), and JavaScript (behaviour). By the end, you will be building functional websites from scratch.',
        topics: [
          'HTML5: structure, semantic elements, forms',
          'CSS3: selectors, flexbox, grid, responsive design',
          'JavaScript fundamentals: variables, functions, DOM manipulation',
          'Fetch API and working with REST APIs',
          'Introduction to a front-end framework (React or Vue)',
          'Version control with Git for web projects',
          'Accessibility and web performance basics',
          'Introduction to backend: Node.js or PHP',
        ],
        resources: [
          {
            name: 'The Odin Project',
            url: 'https://www.theodinproject.com/',
            type: 'Free Course',
            desc: 'The most comprehensive free full-stack web development course. Project-based, no hand-holding.',
          },
          {
            name: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/',
            type: 'Reference',
            desc: 'THE reference for all things web: HTML, CSS, JavaScript. Bookmark this and use it daily.',
          },
          {
            name: 'JavaScript.info',
            url: 'https://javascript.info/',
            type: 'Free Book',
            desc: 'The best free JavaScript book online. Goes from basics to advanced in clear, modern language.',
          },
          {
            name: 'CSS-Tricks',
            url: 'https://css-tricks.com/',
            type: 'Reference',
            desc: 'Excellent CSS reference with practical examples. The flexbox and grid guides are legendary.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — Cloud & Advanced Systems',
        overview:
          'You will learn cloud computing fundamentals and how modern applications are deployed and scaled using platforms like AWS and Azure.',
        topics: [
          'Cloud computing concepts: IaaS, PaaS, SaaS',
          'Introduction to AWS: EC2, S3, RDS, Lambda',
          'Containerisation with Docker',
          'CI/CD pipelines: GitHub Actions, automated deployment',
          'Introduction to DevOps culture and practices',
          'Monitoring and logging: basics',
          'IT service management (ITIL concepts)',
          'Systems documentation and technical writing',
        ],
        resources: [
          {
            name: 'AWS Cloud Practitioner — AWS Training',
            url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/',
            type: 'Free Course',
            desc: 'AWS\'s own free training for their Cloud Practitioner certification. Great IT3 complement.',
          },
          {
            name: 'Docker Getting Started',
            url: 'https://docs.docker.com/get-started/',
            type: 'Free Course',
            desc: 'Official Docker tutorial. Containers are used everywhere — understand them early.',
          },
          {
            name: 'GitHub Actions Documentation',
            url: 'https://docs.github.com/en/actions',
            type: 'Reference',
            desc: 'Learn to automate deployments with GitHub Actions. Highly valued in DevOps roles.',
          },
        ],
      },

      benefits:
        'IT3 makes you versatile. Web skills + cloud skills is one of the most employable combinations in tech today. The AWS Cloud Practitioner certification you can earn alongside IT3 is one of the fastest-growing certifications in the industry.',
      tips: [
        'Build at least 3 real web projects this year. Put them on GitHub and a live URL. Employers want to see working things.',
        'Learn the browser developer tools deeply — they are your primary debugging weapon in web development.',
        'Get the AWS Cloud Practitioner certification. It is achievable in 2-3 months of part-time study.',
        'Docker might feel abstract at first. Stick with it — it clicks once you deploy your first container.',
        'Use The Odin Project as a structured curriculum outside of class. It fills gaps your lectures may leave.',
        'MDN is your bible for web development. Search MDN first, Stack Overflow second.',
      ],
    },

    {
      id: 'it4',
      code: 'IT 4',
      shortCode: 'IT4',
      name: 'IT Management & Cybersecurity',
      year: 4,
      gradient: 'from-lime-500 to-green-500',
      cardBorder: 'border-lime-500/30 hover:border-lime-400/70',
      cardGlow: 'hover:shadow-lime-500/10',
      accentText: 'text-lime-400',
      badgeBg: 'bg-lime-500/15 text-lime-300 border border-lime-500/30',
      description:
        'IT4 combines strategic IT management with cybersecurity — two areas that define senior IT roles. You will learn how to manage IT departments, govern projects, and protect organisations from cyber threats.',

      semester1: {
        title: 'Semester 1 — Cybersecurity',
        overview:
          'You will learn how attackers think and how to defend against them. Cybersecurity is one of the fastest-growing and highest-paying areas in tech.',
        topics: [
          'Cybersecurity fundamentals: CIA triad (Confidentiality, Integrity, Availability)',
          'Common attack types: phishing, SQL injection, XSS, man-in-the-middle',
          'Network security: firewalls, IDS/IPS, VPNs',
          'Cryptography applied: TLS/SSL, PKI, certificates',
          'Ethical hacking and penetration testing basics',
          'Incident response and forensics',
          'Security Information and Event Management (SIEM)',
          'Compliance frameworks: ISO 27001, GDPR, NIST',
        ],
        resources: [
          {
            name: 'TryHackMe',
            url: 'https://tryhackme.com/',
            type: 'Platform',
            desc: 'The best beginner-friendly cybersecurity learning platform. Gamified, hands-on, and structured.',
          },
          {
            name: 'Professor Messer — CompTIA Security+',
            url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/',
            type: 'Free Course',
            desc: 'Free Security+ prep course. CompTIA Security+ is the baseline certification for cybersecurity roles.',
          },
          {
            name: 'OWASP Top 10',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'Reference',
            desc: 'The 10 most critical web application security risks. Essential reading for anyone in IT or development.',
          },
          {
            name: 'Cybrary',
            url: 'https://www.cybrary.it/',
            type: 'Platform',
            desc: 'Free cybersecurity courses covering ethical hacking, forensics, compliance, and more.',
          },
        ],
      },

      semester2: {
        title: 'Semester 2 — IT Management & Final Project',
        overview:
          'You will study IT governance, project management, and IT service delivery — the skills that lead to management and leadership roles in technology organisations.',
        topics: [
          'ITIL 4 framework: service lifecycle, key concepts',
          'IT project management: scope, schedule, budget, risk',
          'IT governance and compliance',
          'Business continuity and disaster recovery planning',
          'IT leadership and stakeholder management',
          'Vendor management and SLAs',
          'Digital transformation strategy',
          'IT4 Final Year Project: planning, implementation, presentation',
        ],
        resources: [
          {
            name: 'ITIL 4 Foundation — Axelos',
            url: 'https://www.axelos.com/certifications/itil-service-management/itil-4-foundation',
            type: 'Certification',
            desc: 'ITIL 4 Foundation is the standard IT service management certification. Highly valued in enterprise IT roles.',
          },
          {
            name: 'Google Project Management Certificate — Coursera',
            url: 'https://www.coursera.org/professional-certificates/google-project-management',
            type: 'Course',
            desc: 'Google\'s free-to-audit project management course. Practical and well-structured.',
          },
          {
            name: 'CompTIA CySA+ (Cybersecurity Analyst)',
            url: 'https://www.comptia.org/certifications/cybersecurity-analyst',
            type: 'Certification',
            desc: 'Advanced cybersecurity certification for those who want to move into security analysis roles.',
          },
        ],
      },

      benefits:
        'IT4 graduates are positioned for roles that are not just technical — they are strategic. IT managers, cybersecurity analysts, cloud architects, and IT directors all draw on IT4 competencies. The combination of technical depth and management skills makes you valuable at any level of an organisation.',
      tips: [
        'Start a TryHackMe account now. Spend 30 minutes a day on it throughout the year.',
        'The CompTIA Security+ is achievable alongside IT4 — its content maps directly to the cybersecurity semester.',
        'Understand ITIL concepts beyond memorising terms. The framework is logic, not just vocabulary.',
        'For your final project, pick a problem relevant to an actual organisation. Real-world problems make better projects.',
        'Soft skills matter at IT4 level. Communication, documentation, and leadership are as important as technical skills.',
        'Network (people, not TCP/IP) at this stage. Attend tech meetups, LinkedIn, local IT events.',
      ],
    },
  ],
}

// Helper to get a course by its id (e.g. 'cs1', 'it3')
export function getCourseById(id) {
  const all = [...courses.cs, ...courses.it]
  return all.find((c) => c.id === id) || null
}

// All courses as a flat array
export const allCourses = [...courses.cs, ...courses.it]

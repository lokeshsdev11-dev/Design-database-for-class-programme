const collectionsData = [
  {
    name: 'users',
    icon: 'users',
    count: 150,
    description: 'Student information including personal details and enrollment data',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'name', type: 'String' },
      { name: 'email', type: 'String' },
      { name: 'phone', type: 'String' },
      { name: 'enrollment_date', type: 'Date' },
      { name: 'mentor_id', type: 'ObjectId' }
    ]
  },
  {
    name: 'codekata',
    icon: 'code',
    count: 1200,
    description: 'Programming problems solved by students on the codekata platform',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'user_id', type: 'ObjectId' },
      { name: 'problem_id', type: 'String' },
      { name: 'problem_title', type: 'String' },
      { name: 'solved_date', type: 'Date' },
      { name: 'difficulty', type: 'String' }
    ]
  },
  {
    name: 'attendance',
    icon: 'calendar-check',
    count: 3000,
    description: 'Daily attendance records of students',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'user_id', type: 'ObjectId' },
      { name: 'date', type: 'Date' },
      { name: 'status', type: 'String' },
      { name: 'session_id', type: 'ObjectId' }
    ]
  },
  {
    name: 'topics',
    icon: 'book-open',
    count: 45,
    description: 'Course topics covered in the programme',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'topic_name', type: 'String' },
      { name: 'description', type: 'String' },
      { name: 'taught_date', type: 'Date' },
      { name: 'mentor_id', type: 'ObjectId' }
    ]
  },
  {
    name: 'tasks',
    icon: 'clipboard-list',
    count: 120,
    description: 'Assignments and tasks given to students',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'task_name', type: 'String' },
      { name: 'description', type: 'String' },
      { name: 'assigned_date', type: 'Date' },
      { name: 'due_date', type: 'Date' },
      { name: 'topic_id', type: 'ObjectId' },
      { name: 'submissions', type: 'Array' }
    ]
  },
  {
    name: 'company_drives',
    icon: 'briefcase',
    count: 25,
    description: 'Campus placement drives conducted by companies',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'company_name', type: 'String' },
      { name: 'drive_date', type: 'Date' },
      { name: 'positions', type: 'Array' },
      { name: 'students_appeared', type: 'Array' }
    ]
  },
  {
    name: 'mentors',
    icon: 'user-check',
    count: 10,
    description: 'Mentor information and mentee assignments',
    schema: [
      { name: '_id', type: 'ObjectId' },
      { name: 'name', type: 'String' },
      { name: 'email', type: 'String' },
      { name: 'specialization', type: 'String' },
      { name: 'mentee_count', type: 'Number' }
    ]
  }
];

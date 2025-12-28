const queriesData = [
  {
    number: 1,
    title: 'Topics and Tasks in October',
    description: 'Find all topics and tasks taught/assigned in October',
    code: `// Find topics taught in October
db.topics.find({
  taught_date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-11-01")
  }
})

// Find tasks assigned in October
db.tasks.find({
  assigned_date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-11-01")
  }
})`
  },
  {
    number: 2,
    title: 'Company Drives (Oct 15-31, 2020)',
    description: 'Find company drives between October 15 and October 31, 2020',
    code: `db.company_drives.find({
  drive_date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31")
  }
})`
  },
  {
    number: 3,
    title: 'Company Drives with Students',
    description: 'Find all company drives and students who appeared for placement',
    code: `db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "students_appeared",
      foreignField: "_id",
      as: "student_details"
    }
  },
  {
    $project: {
      company_name: 1,
      drive_date: 1,
      "student_details.name": 1,
      "student_details.email": 1
    }
  }
])`
  },
  {
    number: 4,
    title: 'Problems Solved per User',
    description: 'Count the number of problems solved by each user in codekata',
    code: `db.codekata.aggregate([
  {
    $group: {
      _id: "$user_id",
      problems_solved: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user_info"
    }
  },
  {
    $project: {
      user_name: { $arrayElemAt: ["$user_info.name", 0] },
      problems_solved: 1
    }
  },
  {
    $sort: { problems_solved: -1 }
  }
])`
  },
  {
    number: 5,
    title: 'Mentors with 15+ Mentees',
    description: 'Find mentors who have more than 15 mentees',
    code: `db.mentors.find({
  mentee_count: { $gt: 15 }
})`
  },
  {
    number: 6,
    title: 'Absent Users with Unsubmitted Tasks',
    description: 'Find users absent AND with unsubmitted tasks between Oct 15-31, 2020',
    code: `// First, find users who were absent
db.attendance.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-10-15"),
        $lte: ISODate("2020-10-31")
      },
      status: "absent"
    }
  },
  {
    $group: {
      _id: "$user_id"
    }
  },
  {
    $lookup: {
      from: "tasks",
      let: { userId: "$_id" },
      pipeline: [
        {
          $match: {
            due_date: {
              $gte: ISODate("2020-10-15"),
              $lte: ISODate("2020-10-31")
            }
          }
        },
        {
          $match: {
            $expr: {
              $not: {
                $in: ["$$userId", "$submissions.user_id"]
              }
            }
          }
        }
      ],
      as: "unsubmitted_tasks"
    }
  },
  {
    $match: {
      unsubmitted_tasks: { $ne: [] }
    }
  },
  {
    $count: "total_users"
  }
])`
  }
];

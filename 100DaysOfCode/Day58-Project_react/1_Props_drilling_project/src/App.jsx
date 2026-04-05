import React from "react"
import Card from "../Components/Job_cards"

const jobs = [
  {
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    posted: "5 days ago",
    logo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
  },
  {
    company: "Google",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
    posted: "2 days ago",
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
  },
  {
    company: "Meta",
    role: "Backend Developer",
    type: "Full Time",
    level: "Entry Level",
    salary: "$50/hr",
    location: "Hyderabad, India",
    posted: "1 hour ago",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg"
  },
  {
    company: "Microsoft",
    role: ".Net Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$190/hr",
    location: "Pune, India",
    posted: "2 days ago",
    logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1"
  },  {
    company: "Google",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
    posted: "2 days ago",
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
  },  {
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    posted: "5 days ago",
    logo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
  }
]

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </div>
  )
}

export default App
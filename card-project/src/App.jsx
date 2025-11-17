
import Card from './components/Card'


const App = () => {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "45$", // dollars/hr
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "60$",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "50$",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "70$",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "80$",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "55$",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "1 day ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "40$",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "65$",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "QA Automation Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "42$",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "3 weeks ago",
    post: "AR/VR Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "85$",
    location: "Bengaluru, India"
  },
  
]


  return (
    <div className='parent'>
     {jobs.map(function(elem,idx){
      return <div key={idx}>
        <Card company={elem.name} post={elem.post}  date={elem.datePosted} fee={elem.pay} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} add={elem.location}/>
    
     </div>
     
     




    



     })}
    </div>
     )
};
export default App


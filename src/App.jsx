import Usercard from "./Component/Usercard/Usercard"
function App() {

  let userdata = [{
    profile: 'https://femina.wwmindia.com/content/2023/dec/virat-kohli-thumb1702286545.jpg',
    name: 'Virat kohli',
    course: 'full stack development',
    dob: 19 - 10 - 1983,
    zender: 'male',
    email: 'Kohli@gmail.com',
    contact: 6478965342,
    addresh: 'hirabag top-floor of dairy-don , surat'
  }, {
    profile: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/04/26/18/Untitled-5.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp',
    name: 'Hulk Pandey',
    course: 'app development',
    dob: 1 - 8 - 2004,
    zender: 'male',
    email: 'raj@gmail.com',
    contact: 9099647233,
    addresh: 'ravi-var  bajar tapi-bridge surat'
  }, {
    profile: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png',
    name: 'Narendra Modi',
    course: 'game development',
    dob: 11 - 9 - 1950,
    zender: 'male',
    email: 'modi@gmail.com',
    contact: 6351328796,
    addresh: 'Behind a meloni mam houes , bharat'
  }, {
    profile: 'https://assetsio.reedpopcdn.com/Steve-Rogers-Cap.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
    name: 'Captain America',
    course: 'Backend-development',
    dob: 19 - 1 - 1918,
    zender: 'male',
    email: 'captain@gmail.com',
    contact: 6351328796,
    addresh: 'Sanjay nagar , Limbayat , surat'
  }, {
    profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Giorgia_Meloni_Official_2023_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2023_%28cropped%29.jpg',
    name: 'Giorgia Meloni',
    course: 'ui/ux development',
    dob: 15-1-1977,
    zender: 'female',
    email: 'meloni@gmail.com',
    contact: 6351328796,
    addresh: 'kathiyavad , Gujarat , Bharat'
  }];

  return (
    <>
      {userdata.map((ele) => {
        return <Usercard profile={ele.profile} name={ele.name} lname={ele.lname} course={ele.course} dob={ele.dob} zender={ele.zender} email={ele.email} contact={ele.contact} addresh={ele.addresh} />
      })}
    </>
  )
}

export default App

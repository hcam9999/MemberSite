//----------------------------------------TO-DO----------------------------------------
//---------------------------------get location to display properly--------------------
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Profile = ({ members }) => {
    const { id } = useParams(); 
    //convert number to month
    const numToMonth = (num) => {
      const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      return monthNames[parseInt(num)]
    }
    
    //Convert number to month (first attemp)
    // const convertMonth = (num) => {
    //   switch (num) {
    //     case '01':
    //       return 'January'
    //       break;
    //     case '02':
    //       return 'February'
    //       break;
    //     case '03':
    //       return 'March'
    //       break;
    //     case '04':
    //       return 'April'
    //       break;
    //     case '05':
    //       return 'May'
    //       break;
    //     case '06':
    //       return 'June'
    //       break;
    //     case '07':
    //       return 'July'
    //       break;
    //     case '08':
    //       return 'August'
    //       break;
    //     case '09':
    //       return 'September'
    //       break;
    //     case '10':
    //       return 'October'
    //       break;
    //     case '11':
    //       return 'November'
    //       break;
    //     default:
    //       return 'December'
    // }}
  
    
    const getMemberByID = () => {
      return members.filter(member => (member.dob.date).toString() === id).map((member) => 
          <div className="profile--card">
              <img className="profile--image" src={member.picture.large} alt={`"${member.name.first} ${member.name.last} profile picture"`} />
              <p  className="profile--text"><span className="profile--bold">Name: </span> {member.name.first} {member.name.last}</p>
              <p  className="profile--text"><span className="profile--bold">Address: </span> {`${member.location.street}`} {typeof(member)}</p>
              <p  className="profile--text"><span className="profile--bold">Phone: </span>{member.phone}</p>
              <p  className="profile--text"><span className="profile--bold">E-mail: </span>{member.email}</p>
              <p  className="profile--text"><span className="profile--bold">Age: </span>{member.dob.age}</p>
              <p  className="profile--text"><span className="profile--bold">Date of birth: </span>
                  {`${numToMonth((member.dob.date).substring(6,8))} ${(member.dob.date).substring(8,10)}, ${(member.dob.date).substring(0,4)}`}</p>
              
          </div>
        )
      }
       

    return (
        <main className="profile">
          <h1 className="profile--h1">Member Profile</h1>
          <div>{getMemberByID()}</div> 
          <p className="profile--returnToMain">Return to <Link to="/">Member Directory</Link></p>
        </main>
            
    )

     
}

export default Profile
{/* {member.location.map((address) => (
        <>{address.street}</>))}</p> */}
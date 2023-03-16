import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocation, faLocationArrow, faMailBulk, faMailForward, faMapLocation, faMessage, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'
 import pic from './photo.jpg'


export default function Personal() {

    const personalInfo = {
        name: {
            fName: 'Emmanuel',
            lName: 'Hembrom',
        },
        email: 'emuhembrom@gmail.com',
        mobile: '+8801795071792',
        address:{
            house: '80/3',
            area: 'Farmgate',
            district: 'Dhaka',
        },
        designation: 'Junior Software Engineer'
    }

    function Contact(info) {
        console.log(info.info.name);
        const fName = info.info.name.fName;
        const lName = info.info.name.lName;
        const email = info.info.email;
        const mobile = info.info.mobile;
        const house = info.info.address.house;
        const area = info.info.address.area;
        const district = info.info.address.district;
        const designation= info.info.designation;
        return(
            <>
                <h1><span id='fname'>{fName}</span> {lName}</h1>
                <h5>{designation}</h5>
                <div className="email">
                    <FontAwesomeIcon icon={faMailBulk} pull="left" /> 
                    <p>{email}</p>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} pull="left" /> 
                    <p>{mobile}</p>
                </div><div className="location">
                    <FontAwesomeIcon icon={faLocationArrow} pull="left" /> 
                    <p>{house},{area},{district}</p>
                </div>
            </>
        )
    }
    function Picture() {
        return(
            <>
                <img src={pic} alt="" className='me'/>
            </>
        )
    }


    return(
        <div className='personal-main'>
           <div className="info">
                <div>
                    <Contact info = {personalInfo} className='contact'/>
                </div>
           </div>
           <div className="pic">
                <Picture />
           </div>
        </div>
    );
}
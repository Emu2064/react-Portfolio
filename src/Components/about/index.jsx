import './index.css'
import pic from './about .png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faReact, faJs, faBootstrap, faNodeJs} from '@fortawesome/free-brands-svg-icons'



export default function About() {

    const icons = [faHtml5,faCss3,faGithub,faReact,faJs,faBootstrap,faNodeJs];

function IntroPic() {
    return(
        <>
            <img src={pic} alt="" className='introPic'/>
        </>
    )
}
function AboutInfo() {

    function addIcon(i){
        return <FontAwesomeIcon icon={i} className='skillIcons'/>
    }

    return(
        <>
            <h1>About Me</h1>
            <p>Hello I'm Emmanuel. I'm a Web developer on Bangladesh. I've a rich experience in web developing and optimizing. Also I'm good at</p>
            <div className="skills">
                {
                    icons.map((i)=>addIcon(i))
                }

            </div>

        </>
    )
}

    return(
        <>
            <div className="about-main">
                <div className="picture">
                    <IntroPic/>  
                </div>
                <div className="description">
                    <AboutInfo/>     
                </div>
            </div>
        </>
    )
}
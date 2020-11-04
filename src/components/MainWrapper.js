import About from './components/AboutComponent';
import Contact from './components/ContactComponent'
import Project from './components/ProjectComponent';


const MainWrapper = (props) =>{
    console.log("PROPS IN MAINWRAPPER")
    console.log(props)

    return(
        <div className="main-wrapper">
            
            <About mission={props.mission} />
            <About mission={props.hardCodedString}/>

            <Project/>

            <Contact/>

        </div>
    )
}

export default MainWrapper;

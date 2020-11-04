import './App.css';
import { Component } from 'react';
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

class App extends Component {

  state = {
    mainSectionHeading: "Portfolio",
    mainSubSectionHeading: "VALUKA Graeme",
    showAbout: false,
    showProjects: false,
    showContacts: false
  }

  handleClickAbout = () => {
    this.setState((prevState) => {
      const aboutToggle = !prevState.showAbout;
      console.log("Clicked About")
      return {
        showAbout: aboutToggle,
        showProjects: false,
        showContacts: false
      }
    })
    
    this.handleClickProjects = () => {
      this.setState((prevState => {
        const projectsToggle = !prevState.showProjects;
        console.log("Clicked Projects")
        return {
          showProjects: projectsToggle,
          showAbout: false,
          showContacts: false
          }
      }))
    }
    
    this.handleClickContact = () => {
      this.setState((prevState => {
        const contactToggle = !prevState.showContacts;
        console.log("Clicked Contacts")
        return {
          showContacts: contactToggle,
          showAbout: false,
          showProjects: false
        }
      }))
    }
  }

  render() {
    console.log("The page is rendering")
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="portfolio-title">VALUKA Graeme</h2>
        </header>
        <main className="main-section">
          <h3>Portfolio</h3>
          <navbar>
            <ul className="nav-title">
              <li onClick={this.handleClickAbout}>ABOUT</li>
              <li onClick={this.handleClickProjects}>PROJECTS</li>
            <li onClick={this.handleClickContact}>CONTACT</li>
            </ul>
          </navbar>
          
          <div>
            {
              (this.state.showAbout)
              ?
              < About />
              :
              ""
            }
          </div>

          <div>
            {
              (this.state.showContacts)
              ?
              < Contact />
              :
              ""
            }
          </div>

          <div>
            {
              (this.state.showProjects)
              ?
              < Projects />
              :
              ""
            }
          </div>   

        </main>
      </div>
    );

  }
}

export default App;
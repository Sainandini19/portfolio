// import Header from '../Header'

import './index.css'

const Skills = () => (
  <>
    {/* <Header /> */}
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <p className="skills-description">
        Main area of my expertise is front end development(client side of the
        web). <br />
        HTML,CSS,JavaScript, building small and medium web apps with React js
        and coding interactive layouts.
        <br />I have also Back end Skills such as Python,SQL,Node js.
      </p>
      <div className="special-container">
        <div className="developer-skills">
          <h1 className="web-heading">Frontend Skills</h1>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Wmgz6BNgNbQRAF897hWrGwHaEK&pid=Api&P=0&h=180"
            alt="frontend-logo"
            className="skills-img"
          />
          <ul className="list-item-container">
            <li className="list-item">HTML</li>
            <li className="list-item">CSS</li>
            <li className="list-item">JavaScript</li>
            <li className="list-item">React js</li>
            <li className="list-item">Bootstrap</li>
          </ul>
        </div>
        <div className="developer-skills">
          <h1 className="web-heading"> Back end Skills </h1>
          <img
            src="https://image.freepik.com/free-vector/back-end-development-it-concept_126283-67.jpg"
            alt="backend-logo"
            className="skills-img"
          />
          <ul className="list-item-container">
            <li className="list-item">Python</li>
            <li className="list-item">SQL</li>
            <li className="list-item">Node js</li>
            <li className="list-item">REST APIS</li>
            <li className="list-item">express js</li>
          </ul>
        </div>
      </div>
    </div>
  </>
)
export default Skills
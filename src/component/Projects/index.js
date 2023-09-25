import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ProjectShowCase from '../ProjectShowCase'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

// import Header from '../Header'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apStatus = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  fail: 'fail',
}

class Projects extends Component {
    state = {data: [], ap: apStatus.initial, sel: 'ALL'}
  
    componentDidMount() {
      this.getData()
    }
  
    getData = async () => {
      this.setState({ap: apStatus.loading})
      const {sel} = this.state
  
      const url = ` https://apis.ccbp.in/ps/projects?category=${sel}`
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        const updateData = data.projects.map(i => ({
          id: i.id,
          name: i.name,
          imageUrl: i.image_url,
        }))
        this.setState({data: updateData, ap: apStatus.success})
      } else {
        this.setState({ap: apStatus.fail})
      }
    }
  
    one = event => {
      this.setState({sel: event.target.value}, this.getData)
    }
    loadingView = () => (
        <div data-testid="loader" className="load">
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </div>
      )
    
      successView = () => {
        const {data} = this.state
        return (
          <div className="q-con">
            <ul className="app-con">
              {data.map(j => (
                <ProjectShowCase details={j} key={j.id} />
              ))}
            </ul>
          </div>
        )
      }
      failureView = () => (
        <div className="fail-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
            className="ima"
            alt="failure view"
          />
          <h1 className="header">Oops! Something Went Wrong</h1>
          <p className="para">
            We cannot seem to find the page you are looking for
          </p>
          <button className="but" type="button" onClick={this.getData}>
            Retry
          </button>
        </div>
      )
      finalRender = () => {
        const {ap} = this.state
        switch (ap) {
          case apStatus.loading:
            return this.loadingView()
          case apStatus.success:
            return this.successView()
          case apStatus.fail:
            return this.failureView()
          default:
            return null
        }
      }
      render() {
        const {sel} = this.state
        return (
          <>
            {/* <Header /> */}
            <div className="main-con">
              <h1 className="projects-heading">Projects</h1>
              <ul className="sel-con">
                <select className="sel" value={sel} onChange={this.one}>
                  {categoriesList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </ul>
              {this.finalRender()}
            </div>
          </>
        )
      }
    }
    
    export default Projects              
import {MdEmail} from 'react-icons/md'

import {BsTelephone} from 'react-icons/bs'

import {ImLocation} from 'react-icons/im'

 

// import Header from '../Header'

import './index.css'

const Contacts = () => (
  <>
    {/* <Header /> */}
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT</h1>
      <div className="contact-body">
        <div className="contact-content">
          <h1 className="items-heading">
            Have a project in Mind?
            <br />
            Lets Talk
          </h1>
          <div className="contact-items-container">
            <p className="contact-item">
              <MdEmail className="item-icon" /> sainadhini19@gmail.com
            </p>
            <p className="contact-item">
              <BsTelephone className="item-icon" /> +91 70******41
            </p>
            <p className="contact-item">
              <ImLocation className="item-icon" /> Dilsukhnagar,Hyderabad,500060.
            </p>
          </div>
        </div>
        <div className="contact-form">
          <label htmlFor="nameID" className='label'>Your Name</label>
          <input id="nameID" type="text" className='input-field'/>
          <label htmlFor="emailID"  className='label'>Your Email</label>
          <input id="emailID" type="email" className='input-field' />
          <label htmlFor="messageID"  className='label'>Message</label>
          <textarea rows="10" cols="50" id="messageID">
            ...text
          </textarea>
          <button type='button' className='submit-button'>Submit</button>
        </div>
      </div>

       
    </div>
  </>
)
export default Contacts
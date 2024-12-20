import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* <!-- Start Content Page --> */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="google m-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.874630309062!2d104.89455108844797!3d11.5680028567564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1732852646992!5m2!1sen!2skh"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
      </div>
      

      {/* <!-- Start Contact --> */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name"/>
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email"/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Contact --> */}
    </div>
  )
}

export default Contact
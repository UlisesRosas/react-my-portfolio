import React from 'react'

function Contact() {
    return (
        <section style={{ backgroundColor: '#adadeb' }} className="row mr-0">
            <h1 className="text-center mt-3 mb-5">Contact</h1>
            <form className="col-6 position-relative m-auto">
                <div class="form-floating mb-3">
                    <input type="name" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Message:" id="floatingTextarea2" style={{ height: '150px' }}></textarea>
                    <label for="floatingTextarea2">Message:</label>
                </div>
                <button className="btn btn-secondary mt-5">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
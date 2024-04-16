import React from "react";

function Contact() {
    return (
        <div style={{ marginTop: '100px' }}>
            <h1 className="text-center text-decoration-underline m-2">Contact Me!</h1>
            <form>
                <div className="conatiner mx-auto col-8">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type='text' className="form-control m-2" id='inputFirstName' placeholder="First name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type='text' className="form-control m-2" id='inputLastName' placeholder="Last name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <input type='email' className="form-control m-2" id='inputEmail' placeholder="Enter your Email" />
                    </div>
                    <div className="col-md-12">
                        <textarea className="form-control m-2" id='inputMessage' rows='7'></textarea>
                    </div>
                    <button type="submit" className="btn btn-success m-2">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default Contact;
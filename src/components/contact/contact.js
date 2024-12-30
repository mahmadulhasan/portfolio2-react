import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <div class="container d-flex justify-content-center align-items-center">
	
	

	
	
	
	
	<form >			
			<div className="">				
				<input type="text" id="formName" class="form-input" placeholder="Your Name"/>
			</div>

			
			<div className="">
				<input type="email" id="formEmail" class="form-input" placeholder="Enter your email"/>
			</div>

			
			<div className="">
				<textarea id="formMessage" class="form-text" rows="7" placeholder="Write your message"></textarea>
			</div>
		
			
			<div className="text-center">
				<button type="submit" class="btn btn-contact" tabIndex="-1">Send message</button>
			</div>
	</form>
	
</div>
    </section>
    </>
  );
}

export default Contact;
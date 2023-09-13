import React from "react";
const ContactUs = () =>{
    return (
        <div class="container text-center">
				<div className="accordion" id="accordionExample">
					<div className="accordion-item">
					<h2 className="accordion-header">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Contact Us
							</button>
						</h2>
						<div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}

export default ContactUs;
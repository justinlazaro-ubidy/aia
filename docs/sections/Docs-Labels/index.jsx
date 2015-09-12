import React from 'react';

export default class Labels extends React.Component {
  render() {
    return (
      <div>
	      	 <h2 className="title">
	      	 	Labels & Badges
	      	 </h2>
	      	 <p>
	      	 	This is a collection of symbols for quickly mocking up web applications, created by your friends at One Network Ecommerce and released under the ONE license.	
	      	 </p>

	        <div className="col-md-6">

	          	<h4>Example</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	          	<h4>Example Heading</h4>

	        </div>

	        <div className="col-md-6 variations-label">
	        	 <div className="col-md-12">
		        	 <h3>
		        	 	Available variations
		        	 </h3>

			         <span className="label -bordered"> 
			         	Default 
			         </span>

			         <span className="label -primary"> 
			         	Primary 
			         </span>

			         <span className="label -emerald"> 
			         	Success 
			         </span>

			         <span className="label -sky"> 
			         	Info 
			         </span>

			         <span className="label -sun"> 
			         	Warning 
			         </span>

			         <span className="label -crimson"> 
			         	Danger 
			         </span>

				   <div className="add-margin-40x">
					    <h3>Badges</h3>

				       	<div>
				       	  News Feed  <span className="badges -bordered">20</span>
				       	</div>

				        <div>
				          News Feed <span className="badges -primary">40</span>
				        </div>
				      
				        <div>
				          News Feed  <span className="badges -emerald">50</span>
				        </div>

				        <div>
				          News Feed  <span className="badges -sky">60</span>
				        </div>

				       <div>
				       	   News Feed <span className="badges -sun">70</span>
				       </div>

					   <div>
					   	   News Feed <span className="badges -crimson">80</span>
					   </div>
				   </div>
		        </div>

		    	<div className="col-md-12 add-margin-40x">
		    		<span className="status -active"></span> Active

		    		<span className="status -inactive"></span> Inactive
		    	</div>

        </div>
	          
   </div>

    );
  }
}

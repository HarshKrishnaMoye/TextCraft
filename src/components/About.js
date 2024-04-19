import React , {useState} from "react";




export default function About(props) {


    // const [myStyle, setmyStyle] = useState({
    //     background : 'white',
    //     color: 'black'
    // })

    let color, backgroundColor;

if (props.mode === 'dark') {
    color = 'white';
    backgroundColor = 'black';
} else if (props.mode === 'success') {
    color = 'white';
    backgroundColor = '#292929';
} else if (props.mode === 'transparent') {
    color = 'white';
    backgroundColor = '#353c92';
} else if (props.mode === 'light') {
    color = 'black';
    backgroundColor = 'white';
} else {
    color = 'white'; // Default values if mode doesn't match any condition
    backgroundColor = 'black'; // Default values if mode doesn't match any condition
}

let myStyle = {
    color: color,
    backgroundColor: backgroundColor
};



  return (
    <div className="container" style={myStyle}>
        <h2 className="text-center">About Us</h2>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
            style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Welcome to TextCraft: Where Words Come to Life</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At TextCraft, we believe in the power of words to inspire, educate, and connect people across the globe. Our journey began with a simple mission: to provide writers with the tools they need to unleash their creativity and elevate their craft.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Our Mission</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            At TextCraft, our mission is simple: to inspire and enable every writer to reach their full potential. Whether you're a seasoned author, a student, a blogger, or a business professional, we're here to support you on your writing journey.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>What Sets Us Apart</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            What sets TextCraft apart is our relentless focus on quality, innovation, and user experience. From our advanced grammar checker to our AI-powered writing suggestions, every feature is designed to enhance your writing process and help you produce polished, professional content.

            But our commitment to excellence goes beyond just our products. We pride ourselves on providing exceptional customer support, listening to our users' feedback, and continuously improving our platform to meet the evolving needs of writers everywhere.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <b>Join the TextCraft Community</b> 
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Whether you're writing your first novel, crafting a business proposal, or simply expressing yourself through words, TextCraft is here to help you succeed. Join the TextCraft community today and discover the endless possibilities that await you.

            Thank you for choosing TextCraft – where words come to life.
            </div>
          </div>
        </div>
        <h3 style={{position:"fixed", left:"200px", bottom:"0px"}}>This Website Is Created By Harsh Krishna Moye Using Reactjs And Bootstrap</h3>


      </div>
    </div>
  );
}

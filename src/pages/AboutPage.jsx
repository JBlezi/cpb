import Header from "../components/Header";

function About() {     
  return (       
    <div className="pb-20 bg-white"> 
      <Header></Header>        
      <div className="container pt-24 mx-auto px-4">           
        <h1 className="text-4xl text-blue-900 mb-12 text-center font-light">About Dr. Sarah Johnson</h1>           
        <div className="max-w-4xl mx-auto">             
          <p className="text-gray-700 mb-6">               
            Content for About page will be placed here.             
          </p>           
        </div>         
      </div>       
    </div>     
  );   
} 

export default About;
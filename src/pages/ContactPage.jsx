import React, {useState} from 'react';
import Header from '../components/Header';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would normally send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      }, 5000);
    };
    
    return (
      <div className="pb-20 bg-gray-50">
        <Header></Header>
        <div className="container pt-24 mx-auto px-4">
          <h1 className="text-4xl text-blue-900 mb-12 text-center font-light">Contact Me</h1>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl text-blue-900 mb-6">Practice Information</h2>
              
              <div className="mb-8">
                <h3 className="text-lg text-blue-800 mb-2">Office Hours</h3>
                <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700 mb-1">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg text-blue-800 mb-2">Location</h3>
                <p className="text-gray-700 mb-1">123 Healing Street</p>
                <p className="text-gray-700 mb-1">Suite 456</p>
                <p className="text-gray-700">Munich, 80331</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg text-blue-800 mb-2">Contact Details</h3>
                <p className="text-gray-700 mb-1">Phone: +49 123 456 789</p>
                <p className="text-gray-700">Email: contact@drjohnson.com</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg text-blue-800 mb-2">Insurance</h3>
                <p className="text-gray-700 mb-4">
                  I accept most major insurance plans. Please contact your insurance 
                  provider to verify coverage for mental health services.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl text-blue-900 mb-6">Send Me a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">Phone (optional)</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        I agree that my data will be stored and processed to respond to my inquiry. 
                        I can revoke this consent at any time. *
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h2 className="text-2xl text-blue-900 mb-4">Thank You!</h2>
                  <p className="text-gray-700">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Contact;
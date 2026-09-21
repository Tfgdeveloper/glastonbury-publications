import React, { useState } from "react";
import { useNavigate } from "react-router";

const Heroform = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
   
    message: "",
    page_url: window.location.href, 
  });

  // Handle input changes
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Set the loading state to true when the submission starts
  setIsLoading(true);

  try {
    // 1) DB Save API
    const dbRes = await fetch(
      "https://leads.authorpublishers.us/api/lead/e8blTTaHFpmYI1aMh10GkcsL6Y1GlxSC",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Phone Number": formData.phone,
          Message: formData.message,
          // If their API supports extra fields, you can also send:
          // PageUrl: formData.page_url,
        }),
      }
    );

    // Try to parse JSON safely (some APIs return empty body)
    let dbData = null;
    try {
      dbData = await dbRes.json();
    } catch (_) {}

    if (!dbRes.ok) {
      throw new Error(dbData?.message || `DB API Error: ${dbRes.status}`);
    }

    // Success: redirect
    navigate("/thank-you");
  } catch (error) {
    alert("Failed to submit form: " + error.message);
  } finally {
    // Reset the loading state after completion
    setIsLoading(false);
  }
};
  const titleStyle = {
    fontFamily: "Cormorant Garamond, sans-serif",
    
    fontStyle: "normal",
    fontWeight: 700,
    color: "black",
    textTransform: "capitalize",
  };

  return (
    <section className="w-full flex justify-center items-center ">
  <div className="py-10 px-2 md:px-16 bg-[#EAE9E980] md:w-[90%]  w-[100%] flex flex-col justify-center items-center rounded-2xl z-0 shadow-lg box-shadow: 0 4.16px 43.683px 0 rgba(0, 0, 0, 0.25);">
        <h2 className="mb-4 leading-none text-center text-[28px] md:text-[48px]" style={titleStyle}>
              Start Your Publishing Journey   
                </h2>
    <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center space-x-4 space-y-4 px-4">
     
      <input
        type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  placeholder="Enter Your Name"
  
  title="Please enter your full name (first and last name, letters only)"
  className="w-full px-4 py-2 rounded-[20px] border border-[#0A2342] border-opacity-20 bg-[#EAE9E9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3"
    style={{
                        borderRadius: "23.19px 23.19px 0px 23.19px",}}
      />

          <input
       type="tel"
  id="phone"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter Your Phone Number"
  
  title="Please enter a 10-digit phone number (numbers only)"
  className="w-full px-4 py-2 border border-[#0A2342] bg-[#EAE9E9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3"
  style={{
                        borderRadius: "23.19px 23.19px 0px 23.19px",}}
      />
     
      <input
        type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  placeholder="Enter Your Email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email address"
  className="w-full px-4 py-2 rounded-[20px] border border-[#0A2342] border-opacity-20 bg-[#EAE9E9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3"
     style={{
                        borderRadius: "23.19px 23.19px 0px 23.19px",}}
      />

    
    

    
      <textarea
        rows="1"
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  placeholder="Write Your Message "
  pattern=".{10,}"
  title="Please enter at least 10 characters"
  className="w-full px-4 py-2 rounded-[20px] border border-[#0A2342] border-opacity-20 bg-[#EAE9E9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3"
      style={{
                        borderRadius: "23.19px 23.19px 0px 23.19px",}}
      />

      <button
  type="submit"
  className="ml-auto bg-[#0A2342] text-white hover:border-2 hover:border-[#0A2342] hover:bg-transparent hover:text-[#0A2342] font-bold py-3 px-8 rounded-full transition-colors duration-200 whitespace-nowrap md:mt-[-17px]"
  disabled={isLoading} // Disable the button when loading
>
  {isLoading ? "Sending..." : "Send"} {/* Display loading text */}
</button>
    </form>
    </div>
    </section>
  );
};
export default Heroform;

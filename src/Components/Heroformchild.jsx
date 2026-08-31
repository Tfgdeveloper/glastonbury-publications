import React, { useState } from "react";
import { useNavigate } from "react-router";

const Formchild = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const manuscriptOptions = [
    "Yes, I'm ready to publish today",
    "Yes, I'll be ready to publish in 1 to 3 months",
    "Yes, I'll be ready to publish in 3 to 6 months",
    "No, I do not have a book or manuscript ready",
  ];
  const bookTypes = [
    "Business",
    "Biography",
    "Inspirational",
    "Non-Fiction",
    "How-To",
    "Autobiography/Memoir",
    "Self-Help",
    "Children",
    "Spiritual/Religious",
    "Fiction",
    "Art/Photography",
    "Cookbook",
    "Other",
  ];

  const serviceOptions = [
    "Self Publishing",
    "Editing",
    "Cover Design",
    "Printing",
    "Interior Formatting",
    "Illustration",
  ];

  const [formData, setFormData] = useState({
    manuscript_ready: "",
    published_before: "",
    book_type: "",
    services: [],
    name: "",
    phone: "",
    email: "",
    page_url: typeof window !== "undefined" ? window.location.href : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (value) => {
    setFormData((prev) => {
      const exists = prev.services.includes(value);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== value)
          : [...prev.services, value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("manuscript_ready", formData.manuscript_ready);
      fd.append("published_before", formData.published_before);
      fd.append("book_type", formData.book_type);
      formData.services.forEach((s) => fd.append("services[]", s));
      fd.append("name", formData.name);
      fd.append("phone", formData.phone);
      fd.append("email", formData.email);
      fd.append("page_url", formData.page_url);

      const res = await fetch(
        "https://api.glenfallpublications.com/api/send-details-form",
        {
          method: "POST",
          body: fd,
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      navigate("/thank-you");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[325px] space-y-2 flex flex-col justify-center items-center"
    >
      {/* Manuscript ready */}
      <label className="w-full flex flex-col gap-2">
        
        <select
          name="manuscript_ready"
          id="manuscript_ready"
          required
          value={formData.manuscript_ready}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2] p-[5px] text-black text-[14px]"
        >
          <option value="" disabled>
            Do you have a manuscript ready?
          </option>
          {manuscriptOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      {/* Published before */}
      <label className="w-full flex flex-col gap-2">
        
        <select
          name="published_before"
          id="published_before"
          required
          value={formData.published_before}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2] p-[5px] text-black text-[14px]"
        >
          <option value="" disabled>
            Have you published before?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      {/* Book type */}
      <label className="w-full flex flex-col gap-2">
        
        <select
          name="book_type"
          id="book_type"
          required
          value={formData.book_type}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2] p-[5px] text-black text-[14px]"
        >
          <option value="" disabled>
            What type of book do you plan on publishing?
          </option>
          {bookTypes.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      {/* Services */}
      <fieldset className="w-full flex flex-col gap-[0px]">
        <legend className="chewy text-[18px] font-medium mb-2 text-[#FF52C4]">
          What services are you looking for?
        </legend>
        <div className="grid grid-cols-2">
          {serviceOptions.map((svc) => {
            const id = `service_${svc.toLowerCase().replace(/\s+/g, "_")}`;
            return (
              <label key={svc} htmlFor={id} className="inline-flex items-center gap-2 text-[14px]">
                <input
                  id={id}
                  type="checkbox"
                  checked={formData.services.includes(svc)}
                  onChange={() => handleServiceToggle(svc)}
                  className="h-3 w-3"
                />
                <span>{svc}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label className="w-full flex flex-col gap-2">
        
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2] p-[5px] text-black text-[14px]"
        />
      </label>

      {/* Phone */}
      <label className="w-full flex flex-col gap-2">
        
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Enter Your Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2] p-[5px] text-black text-[14px]"
        />
      </label>
</div>
      {/* Email */}
      <label className="w-full flex flex-col gap-2">
        
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white border border-[#B2B2B2]  p-[5px] text-black text-[14px]"
        />
      </label>
          
      {/* Hidden page_url */}
      <input type="hidden" name="page_url" value={formData.page_url} readOnly />

      <button
        type="submit"
        disabled={submitting}
        className="w-30 bg-[#E44A1A] text-white font-bold rounded-[30px] mt-2 p-2 "
      >
        <div className="border-2 border-dashed py-[5px] px-2 rounded-[30px]">
        {submitting ? "Submitting..." : "Submit"}
        </div>
      </button>
    </form>
  );
};

export default Formchild;

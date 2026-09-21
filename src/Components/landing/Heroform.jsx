import React, { useState } from "react";
import { useNavigate } from "react-router";

const ContactFooter = () => {
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
      className="w-full max-w-2xl space-y-5 flex flex-col justify-center items-stretch"
    >
      {/* Manuscript ready */}
      <label className="flex flex-col gap-2">
        
        <select
          name="manuscript_ready"
          id="manuscript_ready"
          required
          value={formData.manuscript_ready}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
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
      <label className="flex flex-col gap-2">
        
        <select
          name="published_before"
          id="published_before"
          required
          value={formData.published_before}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
        >
          <option value="" disabled>
            Have you published before?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      {/* Book type */}
      <label className="flex flex-col gap-2">
        
        <select
          name="book_type"
          id="book_type"
          required
          value={formData.book_type}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
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
      <fieldset className="flex flex-col gap-3">
        <legend className="text-xl font-medium mb-2">
          What services are you looking for?
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceOptions.map((svc) => {
            const id = `service_${svc.toLowerCase().replace(/\s+/g, "_")}`;
            return (
              <label key={svc} htmlFor={id} className="inline-flex items-center gap-2">
                <input
                  id={id}
                  type="checkbox"
                  checked={formData.services.includes(svc)}
                  onChange={() => handleServiceToggle(svc)}
                  className="h-4 w-4"
                />
                <span>{svc}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label className="flex flex-col gap-2">
        
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
        />
      </label>

      {/* Phone */}
      <label className="flex flex-col gap-2">
        
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
        />
      </label>
</div>
      {/* Email */}
      <label className="flex flex-col gap-2">
        
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-black/60 rounded-md p-2 text-black"
        />
      </label>
          
      {/* Hidden page_url */}
      <input type="hidden" name="page_url" value={formData.page_url} readOnly />

      <button
        type="submit"
        disabled={submitting}
        className="bg-white text-black font-bold py-3 px-8 rounded-lg mt-2 border border-black/60 disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactFooter;

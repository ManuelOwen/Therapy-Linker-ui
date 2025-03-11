import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    doctor: "",
    appointmentDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-teal-300">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="doctor"
          placeholder="Doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex justify-between">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="bg-teal-400 text-white p-2 rounded hover:bg-gray-500 cursor-pointer"  
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-teal-300 text-white p-2 rounded hover:bg-teal-600 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

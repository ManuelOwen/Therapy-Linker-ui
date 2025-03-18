import { useState } from "react";
import { useForm } from "react-hook-form";
import { userAPI } from "../features/users/UserApi";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [createUser] = userAPI.useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data:any) => {
    try {
      await createUser(data);
      console.log("User Registered", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up with Therapy Linker</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {errors.fullName && <span style={{ color: "red" }}>Full Name is required</span>}
          
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {errors.email && <span style={{ color: "red" }}>Email is required</span>}
          
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {errors.password && <span style={{ color: "red" }}>Password is required</span>}
          
          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {errors.phone && <span style={{ color: "red" }}>Phone number is required</span>}
          
          <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "aqua", color: "white", border: "none", cursor: "pointer" }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";


export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Make sure formData is a state object
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      const result = await response.json();
      console.log("Submitted:", result);
      toast.success("Form submitted successfully!");

      // Optionally reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-12 bg-transparent rounded-lg shadow-md flex flex-col gap-4 text-black w-full"
    >
      <Input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-white"
        required
      />

      <Input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={formData.email}
        className="bg-white"
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="bg-white"
      />

      <Textarea
        name="message"
        placeholder="Message or Additional Info"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="resize-none bg-white"
      />

      <Button
        size={"lg"}
        type="submit"
        className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
      >
        Submit
      </Button>
    </form>
  );
}

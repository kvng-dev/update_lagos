"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    course: "",
    level: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        school: "",
        course: "",
        level: "",
      });
    } catch (error) {
      toast.error("Submission error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-4 flex flex-col gap-4 text-black bg-transparent"
    >
      <Input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        placeholder="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        name="school"
        placeholder="School Name"
        value={formData.school}
        onChange={handleChange}
        required
      />

      <Input
        name="course"
        placeholder="Course of Study"
        value={formData.course}
        onChange={handleChange}
        required
      />
      <Input
        name="level"
        placeholder="Current Level (e.g. 300L)"
        value={formData.level}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="bg-green-600 text-white font-bold hover:bg-green-700 mt-4"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 />
            Submitting
          </>
        ) : (
          "Submit Form"
        )}
      </Button>
    </form>
  );
}

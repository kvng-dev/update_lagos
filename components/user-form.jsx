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
    matricNumber: "",
    lga: "",
    message: "",
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
        matricNumber: "",
        lga: "",
        message: "",
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
      className="max-w-5xl mx-auto p-4 flex flex-col gap-4 text-black bg-white"
    >
      <div className="flex gap-4">
        <Input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          className="w-1/2"
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          placeholder="Email Address"
          type="email"
          className="w-1/2"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex gap-4">
        <Input
          name="phone"
          className="w-1/2"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          name="school"
          placeholder="School Name"
          value={formData.school}
          className="w-1/2"
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex gap-4">
        <Input
          name="course"
          className="w-1/2"
          placeholder="Course of Study"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <Input
          name="level"
          placeholder="Current Level (e.g. 300L)"
          className="w-1/2"
          value={formData.level}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-4">
        <Input
          name="matricNumber"
          className="w-1/2"
          placeholder="Matric Number"
          value={formData.matricNumber}
          onChange={handleChange}
        />
        <Input
          name="lga"
          placeholder="LGA (Local Govt Area)"
          className="w-1/2"
          value={formData.lga}
          onChange={handleChange}
        />
      </div>

      <Textarea
        name="message"
        placeholder="What kind of support do you need?"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="resize-none"
      />
      <Button
        type="submit"
        className="bg-green-600 text-white font-bold hover:bg-green-700"
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

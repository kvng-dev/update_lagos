"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const login = async () => {
    if (password === "letmein" && username === "admin") {
      setAuthenticated(true);
      const res = await fetch("/api/admin");
      const data = await res.json();
      setSubmissions(data.submissions);
    } else {
      toast.error("Wrong password");
    }
  };

  if (!authenticated) {
    return (
      <div className="p-8 h-screen bg-white flex items-center justify-center text-black flex-col space-y-4">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          className="border px-4 py-2"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border px-4 py-2"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="ml-2 bg-green-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 h-screen bg-white text-black pt-24">
      <h2 className="text-xl font-bold mb-4">Form Submissions</h2>
      {submissions.length === 0 ? (
        <p className="text-2xl my-24 text-center">No submissions found.</p>
      ) : (
        <Table className="py-24 border rounded-md max-w-4xl">
          <TableCaption>A list of form submissions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="text-right">Submitted At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.message || "N/A"}</TableCell>
                <TableCell className="text-right">
                  {new Date(submission.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

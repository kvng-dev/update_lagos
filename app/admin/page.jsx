import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { Download } from "lucide-react";
import { LogoutButton } from "@/components/logout-btn";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin-login");
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="h-screen bg-white text-black pt-24 ">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto flex flex-col h-full items-center">
        <div className="flex justify-between items-center  w-full">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-gray-600 mb-8">
            Welcome! You're logged in as admin.
          </p>
          <a
            href="/api/export"
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex gap-2 items-end"
          >
            <Download />
            Download CSV
          </a>
        </div>

        {users.length === 0 ? (
          <p className="text-2xl my-24 text-center">No submissions found.</p>
        ) : (
          <Table className="py-24 border rounded-md">
            <TableCaption>A list of form submissions.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>School</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Matric Number</TableHead>
                <TableHead>LGA</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.phone}</TableCell>
                  <TableCell>{submission.school}</TableCell>
                  <TableCell>{submission.course}</TableCell>
                  <TableCell>{submission.level}</TableCell>
                  <TableCell>{submission.matricNumber}</TableCell>
                  <TableCell>{submission.lga}</TableCell>
                  <TableCell>{submission.message || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { Download, Trash2 } from "lucide-react";
import { LogoutButton } from "@/components/logout-btn";

import DeleteButton from "@/components/delete-btn";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin-login");
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="h-screen bg-white text-black pt-32 ">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto flex flex-col h-full items-center">
        <div className="flex justify-between items-center  w-full">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome! You're logged in as admin.</p>
          </div>
          <LogoutButton />
        </div>
        <div className="flex justify-between w-full mt-24">
          <a
            href="/api/export"
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex gap-2 items-end"
          >
            <Download className="w-5 h-6" />
            Download CSV
          </a>
        </div>

        {users.length === 0 ? (
          <p className="text-2xl my-24 text-center">No submissions found.</p>
        ) : (
          <Table className="py-24  rounded-md overflow-hidden">
            <TableCaption>A list of form submissions.</TableCaption>
            <TableHeader className="bg-gray-900/10">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>School</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Needs</TableHead>
                <TableHead className="text-right">Actions</TableHead>
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
                  <TableCell>{submission.needs}</TableCell>
                  <TableCell className="text-right px-6">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Trash2 className="text-red-600 cursor-pointer hover:text-red-700" />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="text-black">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete user and remove their data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <DeleteButton id={submission.id} />
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

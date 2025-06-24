import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const truculenta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Update Lagos – Empowering Students, Shaping the Future",
  description:
    "Update Lagos connects students with opportunities, resources, and the Lagos State Government. Explore programs, share feedback, and build your future today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${truculenta.className} h-screen bg-[url('/pictures/arthur.jpg')] bg-cover bg-center text-white bg-no-repeat bg-fixed`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}

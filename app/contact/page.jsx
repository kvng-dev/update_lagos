"use client";

import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/update.lagos",
    icon: <FaInstagram size={32} className="text-pink-500" />,
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/update.lagos",
    icon: <FaSnapchatGhost size={32} className="text-yellow-400" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@update.lagos",
    icon: <FaTiktok size={32} className="text-black" />,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-24 px-6 text-black">
      <h1 className="text-4xl font-bold mb-12 text-green-700">
        Get in Touch with Update Lagos
      </h1>

      <p className="max-w-3xl text-center text-gray-700 mb-10 text-lg">
        We are here to listen and support students and the community of Lagos.
        Whether you have questions about our programs, want to share your story,
        or simply want to connect, we encourage you to reach out. Your feedback
        and engagement help us improve and grow together.
      </p>

      <div className="flex gap-16 mb-12">
        {socials.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex flex-col items-center space-y-2 hover:opacity-80 transition"
          >
            {icon}
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-sm text-gray-500">@update.lagos</span>
          </a>
        ))}
      </div>

      <div className="max-w-xl text-center space-y-6 text-gray-800">
        <p>
          <strong>Visit Us:</strong> <br />
          17 Abdul Quadri Adebiyi Street, Magodo GRA Phase 2, Lagos
          <br />
          We welcome visitors during office hours Monday to Friday, 9am to 5pm.
        </p>

        <p>
          <strong>Email Us:</strong> <br />
          For inquiries, support, or partnership opportunities, send us an email
          at{" "}
          <a
            href="mailto:info@updatelagos.com"
            className="text-green-600 underline"
          >
            info@updatelagos.com
          </a>
          . We aim to respond within 24-48 hours.
        </p>

        <p>
          <strong>Call or Text:</strong> <br />
          Reach us directly by phone or WhatsApp at{" "}
          <a href="tel:+2348099999471" className="text-green-600 underline">
            08099999471
          </a>{" "}
          or{" "}
          <a href="tel:+2348099999482" className="text-green-600 underline">
            08099999482
          </a>
          . We're happy to assist you with any questions or concerns.
        </p>

        <p className="italic text-gray-600">
          Follow us on social media to stay updated on the latest news, events,
          and student opportunities.
        </p>
      </div>
    </div>
  );
}

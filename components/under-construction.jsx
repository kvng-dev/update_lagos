"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UnderConstruction({
  title = "Still Under Construction",
  message = "🚧 We're working hard behind the scenes to build something amazing. Please check back soon!",
  buttonText = "Back to Home",
  redirectUrl = "/",
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mx-auto w-20 h-20 text-blue-500 dark:text-blue-400"
        >
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6l4 2"
            />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
          {title}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">{message}</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={redirectUrl}
            className="inline-block px-6 py-3 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium transition"
          >
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0b11" }}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-50%] flex flex-wrap transform rotate-[-12deg] scale-110">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              style={{
                color: "#1a1b21",
                fontSize: "6rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                userSelect: "none",
                animation: `slide 30s linear infinite`,
              }}
            >
              4545 4545 4545 4545 4545&nbsp;
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <Link
            href="/"
            style={{
              color: "#00ff66",
              fontSize: "2.25rem",
              fontWeight: "bold",
              display: "inline-block",
              transition: "transform 0.2s",
            }}
            className="hover:scale-110"
          >
            KairoSystem
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
            className="md:text-7xl"
          >
            Cool stuff coming soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              color: "#d1d5db",
              fontSize: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            This page is under construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/"
              style={{
                color: "#00ff66",
                fontSize: "1.125rem",
                transition: "color 0.2s",
              }}
              className="hover:text-white"
            >
              Check out our current instagram for now →
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: 0,
            right: 0,
            textAlign: "center",
            color: "#00ff66",
          }}
        >
          © 2025 KairoSystem
        </motion.footer>
      </div>
    </div>
  )
}

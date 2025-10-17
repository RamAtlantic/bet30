"use client"

import { Shield, FileText, Lock, Copyright } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0F1419] border-t border-white/10 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          {/* Age Restriction */}
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-400" />
            <span className="font-medium">+18 años</span>
          </div>

         

          {/* Copyright */}
          <div className="flex items-center gap-1">
            <Copyright className="w-3 h-3" />
            <span>2025 Bet30.blog</span>
          </div>
        </div>

       
      </div>
    </footer>
  )
}

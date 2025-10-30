"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for availability
const availabilityData = {
  "2025-03-01": "available",
  "2025-03-02": "available",
  "2025-03-03": "available",
  "2025-03-04": "available",
  "2025-03-05": "available",
  "2025-03-06": "available",
  "2025-03-07": "available",
  "2025-03-08": "partial",
  "2025-03-09": "partial",
  "2025-03-10": "booked",
  "2025-03-11": "booked",
  "2025-03-12": "booked",
  "2025-03-13": "booked",
  "2025-03-14": "booked",
  "2025-03-15": "partial",
  "2025-03-16": "available",
  "2025-03-17": "available",
  "2025-03-18": "available",
  "2025-03-19": "available",
  "2025-03-20": "available",
  "2025-03-21": "partial",
  "2025-03-22": "booked",
  "2025-03-23": "booked",
  "2025-03-24": "booked",
  "2025-03-25": "available",
  "2025-03-26": "available",
  "2025-03-27": "available",
  "2025-03-28": "available",
  "2025-03-29": "available",
  "2025-03-30": "available",
  "2025-03-31": "available",
  "2025-04-01": "available",
  "2025-04-02": "available",
  "2025-04-03": "available",
  "2025-04-04": "partial",
  "2025-04-05": "booked",
  "2025-04-06": "booked",
  "2025-04-07": "booked",
  "2025-04-08": "booked",
  "2025-04-09": "booked",
  "2025-04-10": "partial",
  "2025-04-11": "available",
  "2025-04-12": "available",
}

type AvailabilityStatus = "available" | "partial" | "booked"

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)) // March 2025

  const getMonthData = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const monthData = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      monthData.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateString = date.toISOString().split("T")[0]
      const availability = availabilityData[dateString as keyof typeof availabilityData] || "available"

      monthData.push({
        day,
        date,
        availability: availability as AvailabilityStatus,
      })
    }

    return monthData
  }

  const monthData = getMonthData(currentDate.getFullYear(), currentDate.getMonth())

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const getAvailabilityClass = (availability: AvailabilityStatus) => {
    switch (availability) {
      case "available":
        return "bg-green-200 hover:bg-green-300"
      case "partial":
        return "bg-yellow-200 hover:bg-yellow-300"
      case "booked":
        return "bg-red-200 cursor-not-allowed"
      default:
        return ""
    }
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <h3 className="font-medium text-lg">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}

        {monthData.map((day, index) => (
          <div key={index} className="aspect-square">
            {day ? (
              <button
                className={cn(
                  "w-full h-full flex items-center justify-center text-sm rounded-md transition-colors",
                  getAvailabilityClass(day.availability),
                )}
                disabled={day.availability === "booked"}
              >
                {day.day}
              </button>
            ) : (
              <div className="w-full h-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

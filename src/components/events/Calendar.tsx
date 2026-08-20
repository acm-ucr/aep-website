"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";

interface EventItem {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  rsvpUrl: string;
}

interface GoogleCalendarEvent {
  id: string;
  summary?: string;
  location?: string;
  htmlLink?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const toKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const Calendar = () => {
  const today = new Date();
  const [events, setEvents] = useState<EventItem[]>([
  {
    id: "1",
    name: "Back to School Bash",
    date: toKey(new Date()), 
    startTime: "5:00 PM",
    endTime: "7:00 PM",
    location: "Student Center",
    rsvpUrl: "https://example.com",
  },
]);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState<EventItem | null>(null);

  const { year, month } = view;

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&singleEvents=true&maxResults=250`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items) return;

        const formatted: EventItem[] = data.items.map(
          (event: GoogleCalendarEvent) => {
            const start = new Date(
              event.start.dateTime || event.start.date || "",
            );
            const end = new Date(event.end.dateTime || event.end.date || "");

            return {
              id: event.id,
              name: event.summary || "Untitled Event",
              date: toKey(start),
              startTime: start.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: end.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              location: event.location || "TBD",
              rsvpUrl: event.htmlLink || "/",
            };
          },
        );

        setEvents(formatted);
      } catch (err) {
        console.error("Error fetching events for main grid layout:", err);
      }
    };

    fetchCalendarEvents();
  }, []);

  const eventsByDate = useMemo(() => {
    return events.reduce<Record<string, EventItem[]>>((acc, event) => {
      (acc[event.date] ||= []).push(event);
      return acc;
    }, {});
  }, [events]);

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const start = new Date(year, month, 1 - firstWeekday);
    return Array.from({ length: 42 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  }, [year, month]);

  const changeMonth = (delta: number) => {
    setSelected(null);
    setView(({ year, month }) => {
      const next = new Date(year, month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  };

  const monthLabel = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <div className="relative mx-auto lg:w-full w-9/10 max-w-5xl rounded-2xl border bg-white">
      <div className="mb-4 flex items-center justify-center text-black font-aep-urbanist">
        <button
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
          className="hover:text-aep-blue-200  p-2 transition-colors cursor-pointer"
        >
          <ChevronLeft className="md:size-16 size-14" />
        </button>
        <div className="md:text-6xl text-4xl font-bold tracking-wide">
          {monthLabel} {year}
        </div>
        <button
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="hover:text-aep-blue-200 p-2 transition-colors cursor-pointer"
        >
          <ChevronRight className="md:size-16 size-14" />
        </button>
      </div>

      <div className="grid grid-cols-7 font-aep-urbanist font-bold text-center text-xs text-black bg-aep-green-100 md:text-3xl">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-7 overflow-hidden rounded-md bg-white ">
        {cells.map((date) => {
          const key = toKey(date);
          const inMonth = date.getMonth() === month;
          const isToday = key === toKey(today);
          const dayEvents = eventsByDate[key] ?? [];

          return (
            <div
              key={key}
              className={` min-h-16 border border-black p-1 md:min-h-30 ${
                inMonth ? "text-black" : " bg-gray-300 text-gray-300 "
              } ${isToday ? "bg-aep-red-300" : ""}`}
            >
              <span className=" font-aep-urbanist font-bold text-xs md:text-xl">{date.getDate()}</span>
              <div className="mt-1 flex flex-col gap-1">
                {dayEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelected(event)}
                    className=" bg-white font-aep-urbanist rounded-xl px-1 py-0.5 text-center text-xs cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span>{event.name}</span>  
                    <span>{event.location}</span>
                    <span>{event.startTime}</span>
                    </div>
                  
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className="bg-white border-2 border-aep-red-300 absolute top-1/2 left-1/2 z-10 w-1/2 max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 shadow-xl h-1/4 text-xl font-aep-urbanist">
          <div className="flex items-start justify-between">
            <h4 className="font-bold">{selected.name}</h4>
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="p-1"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Clock className="size-5" />
            <span>
              {selected.startTime} - {selected.endTime}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <MapPin className="size-5" />
            <span>{selected.location}</span>
          </div>
          <a
            href={selected.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aep-red-300 hover:bg-aep-red-300/50 mt-6 inline-block rounded px-4 py-1 transition-colors"
          >
            RSVP
          </a>
        </div>
      )}
    </div>
  );
};

export default Calendar;

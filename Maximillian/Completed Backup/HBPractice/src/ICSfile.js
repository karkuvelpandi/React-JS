import React from "react";

const ICSfile = () => {
  let eventInfo = {
    startDateTime: "2023-06-06 10:59:00",
    endDateTime: "2023-06-07 10:59:00",
    location: "Mumbai",
    title: "Add to calender event",
    description: "Testing the add to calender events",
  };
  function downloadICSFile() {
    const generateICS = (eventDetails) => {
      const { title, description, location, startDateTime, endDateTime } =
        eventDetails;

      const formatDate = (date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, "");
      };
      const start = new Date(startDateTime);
      const end = new Date(endDateTime);
      const formattedStart = formatDate(start);
      const formattedEnd = formatDate(end);

      const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formattedStart}
DTEND:${formattedEnd}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

      return icsData;
    };

    const icsFileContent = generateICS(eventInfo);
    const icsFileName = "event.ics";
    const icsBlob = new Blob([icsFileContent], {
      type: "text/calendar;charset=utf-8",
    });

    // For other browsers
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(icsBlob);
    downloadLink.setAttribute("download", icsFileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div>
      <button onClick={downloadICSFile}>Download ICS</button>
    </div>
  );
};

export default ICSfile;

import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const timeString = date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const parts = timeString.split(':');
    return (
      <>
        {parts[0]}
        <span className="blink">:</span>
        {parts[1]}
      </>
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="text-center p-4" style={{display:"flex"}}>
      <div className="text-4xl font-mono mb-2">
        {formatTime(time)}
      </div>
    </div>
  );
}
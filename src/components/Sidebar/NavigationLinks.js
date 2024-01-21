// NavigationLinks.js
import React from 'react';

const NavigationLinks = () => {
  const navigationItems = [
    { text: 'Dashboard', icon: 'scoreboard/src/image/dashboard line .png' },
    { text: 'Courses', icon: 'scoreboard/src/image/course-line.png' },
    { text: 'Students', icon: 'scoreboard/src/image/Student.png' },
    { text: 'Exams', icon: 'scoreboard/src/image/Exam (1).png.png' },
    { text: 'Results', icon: 'results-icon.png' },
    { text: 'Notice Board', icon: 'scoreboard/src/image/Notification (1).png' },
    { text: 'Live Classes', icon: 'scoreboard/src/image/live class (1).png' },
    { text: 'Notifications', icon: 'scoreboard/src/image/Notification (1).png' },
  ];

  return (
    <ul className="navigation-links">
      {navigationItems.map((item, index) => (
        <li key={index}>
          <img src={item.icon} alt={`${item.text} Icon`} />
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;

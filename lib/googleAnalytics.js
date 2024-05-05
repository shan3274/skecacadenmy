// lib/googleAnalytics.js

export const GA_TRACKING_ID = "AW-16553141416";

// Function to send page view events to Google Analytics
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: "https://www.googletagmanager.com/gtag/js?id=AW-16553141416",
    });
  }
};

// Function to send custom events to Google Analytics
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

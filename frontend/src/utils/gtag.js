export const GA_TRACKING_ID = "G-KHFN9LJSJK";

// Log page view
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

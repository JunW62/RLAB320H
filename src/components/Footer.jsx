import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <em>Copyright © {currentYear}</em>
    </footer>
  );
}

export default Footer;

import React from "react";

const containerStyles = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px",
  backgroundColor: "#f0f0f0",
  borderRadius: "20px",
  boxShadow:
    "10px 10px 20px rgba(163, 177, 198, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.5)",
};

const headingStyles = {
  fontSize: "36px",
  marginBottom: "20px",
  color: "#333",
  borderBottom: "2px solid #FF7F50",
  paddingBottom: "10px",
};

const paragraphStyles = {
  fontSize: "18px",
  marginBottom: "20px",
  lineHeight: "1.6",
  color: "#666",
};

const linkStyles = {
  color: "#FF7F50",
  textDecoration: "none",
  fontWeight: "bold",
};

const socialLinksStyles = {
  display: "flex",
  alignItems: "center",
};

const socialIconStyles = {
  marginRight: "10px",
  fontSize: "24px",
  color: "#333",
};

function About() {
  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>About Us</h1>
      <p style={paragraphStyles}>
        Welcome to our innovative shopping platform!
      </p>

      <h2 style={headingStyles}>Our Mission</h2>
      <p style={paragraphStyles}>
        At NavAndShop, we are dedicated to revolutionizing the shopping
        experience for our customers. Our mission is to provide a seamless and
        enjoyable shopping journey by integrating cutting-edge technologies with
        the traditional retail experience.
      </p>

      <h2 style={headingStyles}>What We Offer</h2>
      <p style={paragraphStyles}>
        Our platform brings together a range of features designed to enhance
        your shopping experience. From trying out products in Augmented Reality
        before purchase, to easily navigating through the mall, pre-booking fun
        activities, and making secure purchases with QR codes – we have it all
        covered.
      </p>

      <h2 style={headingStyles}>Customer-Centric Approach</h2>
      <p style={paragraphStyles}>
        Our focus is on you, the customer. We understand the frustrations of
        long lines, wrong purchases, and the hassle of navigating a busy mall.
        That's why we've developed features that empower you to shop smarter,
        save time, and have more fun while doing it.
      </p>

      <h2 style={headingStyles}>Security and Convenience</h2>
      <p style={paragraphStyles}>
        Security is a top priority. Our QR code authentication and online
        payment systems ensure that your purchases are safe and authorized. With
        the integration of the mall's POS system, you can also enjoy delicious
        food from the food court without the wait.
      </p>

      <h2 style={headingStyles}>Contact Us</h2>
      <p style={paragraphStyles}>
        Have questions or feedback? We'd love to hear from you! Reach out to our{" "}
        <a href="mailto:shivamverma2908@gmail.com" style={linkStyles}>
          customer support team
        </a>
        .
      </p>
    </div>
  );
}

export default About;

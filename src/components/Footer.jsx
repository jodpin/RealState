import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore.
          </span>
        </div>

        {/* right side */}

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="SecondaryText">145 New York, FL 4571 USA</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

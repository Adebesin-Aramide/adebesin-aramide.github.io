import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Aramide Adebesin. 
        Last updated: January 24, 2026.
      </p>
    </Footer>
  );
};

export default FooterComponent;
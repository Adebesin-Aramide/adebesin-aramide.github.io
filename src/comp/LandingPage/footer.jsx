import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Aramide Adebesin. 
        Last updated: Sept, 2026.
      </p>
    </Footer>
  );
};

export default FooterComponent;
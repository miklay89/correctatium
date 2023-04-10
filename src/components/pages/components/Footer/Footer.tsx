import footerLogo from "../../../../assets/images/footer_logo.png";
import {
  SFooter,
  SLink,
  SImg,
  SFooterSection,
  SInfoParagraph,
  SInfoWrapper,
  SEmail,
  SContactsParagraph,
  SLogoContainer,
  SContactsContainer,
} from "./Footer.styles";

const Footer = () => {
  return (
    <SFooter>
      <SFooterSection>
        <SInfoWrapper>
          <SLink href="#">Договір публічної оферти</SLink>
          <SInfoParagraph>
            &copy;<span> Correctarium</span>
          </SInfoParagraph>
          <SInfoParagraph>2015–2023</SInfoParagraph>
        </SInfoWrapper>
        <SLogoContainer>
          <SImg src={footerLogo} alt="footer_logo"></SImg>
        </SLogoContainer>
        <SContactsContainer>
          <SContactsParagraph>Надіслати текст на переклад:</SContactsParagraph>
          <SEmail href="mailto:manager@correctarium.com">
            manager@correctarium.com
          </SEmail>
        </SContactsContainer>
      </SFooterSection>
    </SFooter>
  );
};

export default Footer;

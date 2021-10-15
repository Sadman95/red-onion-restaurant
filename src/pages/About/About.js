import React from "react";
import { Container, Row } from "react-bootstrap";
import AboutSingle from "./AboutSingle/AboutSingle";
import { faTruck, faBus, faBell } from "@fortawesome/free-solid-svg-icons";

const About = () => {

  const aboutData = [
      {
          title_icon: faBus,
          img_url: 'https://i.ibb.co/7SPxLkT/adult-blur-blurred-background-687824.png',
          card_title: 'Fast Delivery',
          card_desc: 'We provide fastest delivery to your door within shortest possible time. Because a perfect delivery makes you feel better to enjoy our food',
      },
      {
          title_icon: faBell,
          img_url: 'https://i.ibb.co/prhmPds/chef-cook-food-33614.png',
          card_title: 'A Good Auto Responder',
          card_desc: 'We provide time to time update of your food order till delivery to your door step.You can observe each time action of your ordered food.',
      },
      {
          title_icon: faTruck,
          img_url: 'https://i.ibb.co/Sxd7dRT/architecture-building-city-2047397.png',
          card_title: 'Home Delivery',
          card_desc: 'We ensure safety of your food first.Our evry cook & delivery man maintain proper heigen to keep your food safe from any unintentional issues.',
      },
    ];
  return (
    <Container>
        <Row className='mt-5'>
            {
                aboutData.map((about, i) => <AboutSingle key={i} about={about}></AboutSingle>)
            }
        </Row>
    </Container>    
    );
};

export default About;

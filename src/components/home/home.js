import React from "react";
//importar do materialize
import { Row, Col, Card } from "react-materialize";
//importando user profile
import UserProfile from "../user_profile/user_profile";
//importando expirience
import Experience from "../experience/experience";
// Importando a foto da empresa
import company_avatar from "../../images/company.png";
import company_avatar2 from "../../images/company2.png";

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">About Me</h5>
      <Card>
        <div>
          <p>
            <b>Objetivo</b>
          </p>
          <p>
            "Procuro novos desafios profissionais e uma efetivação no mercado,
            tendo o desenvolvimento de minhas habilidades e a geração de
            resultados como objetivos principais, assim viabilizando um
            crescimento quantitativo e qualitativo para a empresa"
          </p>
          <br />
          <p>
            <b>Nome Completo</b>
          </p>
          <p>Matheus Barreira Alves</p>
          <br />
          <p>
            <b>Nascimento</b>
          </p>
          <p>19/10/2001 - 18 anos</p>
          <br />
          <p>
            <b>Endereço</b>
          </p>
          <p>Av.Sylvio Torres 1824 - Apto.14b</p>
          <br />
          <p>
            <b>E-mail</b>
          </p>
          <p>matheusbarreiraalveshotmailcom@gmail.com</p>
        </div>
      </Card>
      <h5 className="subtitle">Experiences</h5>
      <Experience
        title="Os projetos realizados por mim podem ser encontrados em:"
        company="https://github.com/matheusbarreiraalves"
        description="Podem ser encontrador projetos em: HTML, CSS, javaScript, Java, MySQL"
        avatar={company_avatar}
      />
    </Col>
  </Row>
);

export default Home;

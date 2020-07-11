import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoGit from '../../assets/gitrocket.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoGit} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#teste.com.br">
          <img
            src="https://avatars3.githubusercontent.com/u/36418410?s=460&u=c3d0fe1af08b8fac6a695dbc3bb47d956063224a&v=4"
            alt="Ivan Martini"
          />
          <div>
            <strong>ferrarimartini/uniform</strong>
            <p>Easy peasy gihly scalable ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#teste.com.br">
          <img
            src="https://avatars3.githubusercontent.com/u/36418410?s=460&u=c3d0fe1af08b8fac6a695dbc3bb47d956063224a&v=4"
            alt="Ivan Martini"
          />
          <div>
            <strong>ferrarimartini/uniform</strong>
            <p>Easy peasy gihly scalable ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="#teste.com.br">
          <img
            src="https://avatars3.githubusercontent.com/u/36418410?s=460&u=c3d0fe1af08b8fac6a695dbc3bb47d956063224a&v=4"
            alt="Ivan Martini"
          />
          <div>
            <strong>ferrarimartini/uniform</strong>
            <p>Easy peasy gihly scalable ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

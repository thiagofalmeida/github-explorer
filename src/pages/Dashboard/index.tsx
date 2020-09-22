import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do reposítorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/4313709?s=460&u=1c12398168f6595001da29dad15a04b98519aa89&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>teste/teste</strong>
            <p>
              Lorem lorem lorel mrem asopdasoijas iojjio asjiojioad sijoa
              sdiojasd
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/4313709?s=460&u=1c12398168f6595001da29dad15a04b98519aa89&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>teste/teste</strong>
            <p>
              Lorem lorem lorel mrem asopdasoijas iojjio asjiojioad sijoa
              sdiojasd
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/4313709?s=460&u=1c12398168f6595001da29dad15a04b98519aa89&v=4"
            alt="Github Profile"
          />
          <div>
            <strong>teste/teste</strong>
            <p>
              Lorem lorem lorel mrem asopdasoijas iojjio asjiojioad sijoa
              sdiojasd
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

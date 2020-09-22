import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import LogoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>title</strong>
            <p>descri</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/dashboard">
          <div>
            <strong>asdasd</strong>
            <p>asdasdas</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

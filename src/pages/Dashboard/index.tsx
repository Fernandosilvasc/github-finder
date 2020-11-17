import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Finder" />
      <Title>Find repositories on GitHub</Title>

      <Form action="">
        <input placeholder="Type the repository name here" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/58282921?s=460&u=822f87836363351dcfb1f2ab379c009897eef32c&v=4"
            alt="avatar"
          />
          <div>
            <strong>fernandoSilva/nlw3-happy</strong>
            <p>
              Happy is a project that has been built during Next Level Week #03
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/58282921?s=460&u=822f87836363351dcfb1f2ab379c009897eef32c&v=4"
            alt="avatar"
          />
          <div>
            <strong>fernandoSilva/nlw3-happy</strong>
            <p>
              Happy is a project that has been built during Next Level Week #03
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/58282921?s=460&u=822f87836363351dcfb1f2ab379c009897eef32c&v=4"
            alt="avatar"
          />
          <div>
            <strong>fernandoSilva/nlw3-happy</strong>
            <p>
              Happy is a project that has been built during Next Level Week #03
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

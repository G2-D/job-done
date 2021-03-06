import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { getUsers } from '../../utils/users';

import { Container, Title, UsersList } from './styles';

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onInit = async () => {
    setUserList(await getUsers());
  };

  useEffect(() => {
    setIsLoading(true);
    onInit();
    setIsLoading(false);
  }, []);

  console.log(userList);

  return (
    <Container>
      <header>Job Done</header>
      <Title>Gerencie as tarefas de seu time</Title>
      <UsersList>
        {isLoading ? <p>Loading ...</p> : userList.map((user, index) => (
          <Link to={`/todos/${user.id}`} key={index}>
            <img
              src={`https://randomuser.me/api/portraits/lego/${index}.jpg`}
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
			<FiChevronRight size={20} />
          </Link>
        ))}
      </UsersList>
    </Container>
  );
};

export default Users;
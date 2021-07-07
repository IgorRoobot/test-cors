import logo from './logo.svg';
import './App.css';
// import gql from 'graphql-tag';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const GET_HELLO = gql`
  query GetHello {
    getHello
  }
`;

const CREATE_USER = gql`
  mutation CreateUserMutation($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      firstName
      lastName
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function App() {
  // const { data } = useQuery(GET_HELLO);

  const [createUser, { data }] = useMutation(CREATE_USER);
  // const [addTodo, { data }] = useMutation(ADD_TODO);

  // useEffect(() => {
  //   addTodo({ variables: { type: 'input.value' } });
  // }, []);

  useEffect(() => {
    createUser({
      variables: {
        createUserInput: {
          firstName: 'Testaaa',
          lastName: 'Testaaa',
          email: 'test@testweq.com',
          password: 'test123456',
        },
      },
    });
  }, []);

  return <div className="App"></div>;
}

export default App;

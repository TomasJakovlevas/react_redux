import React from 'react';
import Counter from '../components/Counter';
import Post from '../components/Post';
import Todos from '../components/Todos';
import Users from '../components/Users';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Home</h1>
      </section>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>Todos</h2>
        <Todos />
      </section>
      <section>
        <h2>Posts</h2>
        <Post />
      </section>
      <section>
        <h2>Users</h2>
        <Users />
      </section>
    </main>
  );
};

export default HomePage;

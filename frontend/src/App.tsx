import { useEffect, useState } from 'react';
import { User } from './model/user';
import { getUser } from './api/getUser';

const fetchData = async () => {
  const response = await fetch('/api');
  const data = await response.text();
  if (response.ok) {
    return data;
  }
  return [];
};

function App() {
  const [message, setMessage] = useState<string>('Saluton, mondo!');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchData().then(data => {
      setMessage(data.toString());
    });
  }, []);

  useEffect(() => {
    getUser(1)
      .then(user => setUser(user))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      {user && (
        <div>
          <h2>User</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

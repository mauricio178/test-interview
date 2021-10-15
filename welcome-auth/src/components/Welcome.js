import React from 'react'

export default function Welcome() {

  const username = localStorage.getItem('@welcome-app/username');

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    localStorage.setItem('@welcome-app/username', username);
    window.location.reload();
  }

  function handleLogout() {
    localStorage.removeItem('@welcome-app/username');
    window.location.reload();
  }

  if (username !== null) {
    return (
      <div style={styles.container}>
        <p>Bem vindo {username}</p>
        <button onClick={handleLogout} style={styles.submitButton}>Sair</button>
      </div>
    );
  }


  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <input style={styles.username} type="text" name="username" placeholder="Nome de usuário" required />
      <button type="submit" style={styles.submitButton}>Entrar</button>
    </form>
  );

}

const styles = {
  container: {
    display: 'flex',
    margin: '10em',
    textAlign: 'center',
    flexDirection: 'column',
    minWidth: '300px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
    background: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    padding: '30px 20px'
  },
  submitButton: {
    height: '40px',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 0,
    color: '#fff',
    background: '#009587',
    marginTop: '5px',
  },
  username: {
    height: '40px',
    padding: '0 15px',
    border: '1px solid #eee',
    borderRadius: '4px',
    marginBottom: '10px',
    color: '#444'
  }
}


import React from 'react';
import styles from '../components/Home.module.css'
import Input from '../form/Input';

const Home = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return <header className={styles.home}>
          <section className={styles.section + ' container'}>
                <div className=''>
                    <h2> lorem</h2>
                          <p> l Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                      work correctly both with client-side routing and a non-root public URL.
                      Learn how to configure a non-root public URL by running `npm run build`.</p>
                </div>
               
              <div className={styles.form_login }>
              <form method='POST ' className={styles.InputLogin}>
                 <div className={styles.label_float}>
                  <Input  placeholder="email"type='email' name='email'/>
                  <label>email</label>
                 </div>
          
                <div className={styles.label_float}>
                  <Input placeholder="senha" type='password' name='password'/>
                  <label>password</label>
                </div>
                  <button type='submit'> Entrar</button>
                  </form>
              </div>
                

          </section>
  </header>;
};

export default Home;

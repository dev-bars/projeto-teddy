/* function Clientes() {
    return (
    <h1>Clientes</h1>
    )
}

export default Clientes */

import styles from './Clientes.module.css'
import CriarClientes from '../projects/CriarClientes';

function Clientes() {
  return (
    <div className={styles.clientes_container}>
        <h1>Clientes</h1>
        <CriarClientes />
    </div>
  );
}

export default Clientes;

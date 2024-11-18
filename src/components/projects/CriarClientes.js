/* import styles from "./CriarClientes.module.css"

function CriarClientes () {
    return (
        <form>
            <div className={styles.clientes_button}>
                <lable>Nome:</lable><br />
                <input type="text" placeholder="Digitar o nome" />
            </div>
            <lable>Salário:</lable><br />
            <div className={styles.clientes_button}>
                <input type="number" placeholder="Digitar o salário" />
            </div>
            <lable>Valor da empresa:</lable><br />
            <div className={styles.clientes_button}>
                <input type="number" placeholder="Digitar o valor da empresa" />
            </div>
            <div className={styles.clientes_button_color}>
                <input type="submit" value="Criar cliente" />
            </div>
        </form>
    )
}

export default CriarClientes

 */

import { useState } from "react";
import styles from "./CriarClientes.module.css";

function CriarClientes() {
  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState("");
  const [valorEmpresa, setValorEmpresa] = useState("");

  const [clientes, setClientes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCliente = {
      id: Math.floor(Math.random() * 1000),
      nome,
      salario,
      valorEmpresa,
    };

    setClientes([...clientes, novoCliente]);
    setNome("");
    setSalario("");
    setValorEmpresa("");
  };

  const handleDelete = (id) => {
    // Remove o cliente da lista pelo ID
    const updatedClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(updatedClientes);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.clientes_button}>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className={styles.clientes_button}>
          <label>Salário:</label>
          <br />
          <input
            type="number"
            placeholder="Digite o salário"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <div className={styles.clientes_button}>
          <label>Valor da empresa:</label>
          <br />
          <input
            type="number"
            placeholder="Digite o valor da empresa"
            value={valorEmpresa}
            onChange={(e) => setValorEmpresa(e.target.value)}
          />
        </div>
        <div className={styles.clientes_button_color}>
          <input type="submit" value="Criar Cliente" />
        </div>
      </form>

      <div className={styles.clientes_list}>
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id} className={styles.cliente_item}>
              <div><strong>Nome:</strong> {cliente.nome} </div>
              <div><strong>Salário:</strong>{" "}
              {cliente.salario}</div>
              <div><strong>Valor da Empresa:</strong>{" "}
              {cliente.valorEmpresa}</div>
              <button
                onClick={() => handleDelete(cliente.id)}
                className={styles.delete_button}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CriarClientes;

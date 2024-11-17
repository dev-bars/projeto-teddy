import styles from "./CriarClientes.module.css"

function CriarClientes () {
    return (
        <form>
            <div className={styles.clientes_button}>
                <input type="text" placeholder="Nome" />
            </div>
            <div className={styles.clientes_button}>
                <input type="number" placeholder="Salário" />
            </div>
            <div className={styles.clientes_button}>
                <input type="number" placeholder="Valor da empresa" />
            </div>
            <div className={styles.clientes_button_color}>
                <input type="submit" value="Criar cliente" />
            </div>
        </form>
    )
}

export default CriarClientes




import styles from "./header.module.css"

function Header(){
    return(
    <>      
            <header className={styles.header}>
                <div className={styles.container}>
                    <div>
                        <img src="/logo.png" alt="" className={styles.logo} />
                    </div>
                    <div>
                        <input type="search" placeholder="O que seu pet precisa" />
                        <button type="submit">pesquisar</button>
                    </div>
                    <div>
                        <button>Entrar</button>
                        <button>Registrar</button>
                    </div>
                    
                </div>

            </header>

        </>
    )
}
export default Header;
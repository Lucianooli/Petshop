import styles from "./headerNew.module.css"

export default function HeaderNew(){
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
                    <div className={styles.buttomLeft}>
                        <button>Entrar</button>
                        <button>Registrar</button>
                    </div>
                    
                </div>

            </header>

        </>
    )
}
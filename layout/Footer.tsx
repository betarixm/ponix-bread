import React from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    render = () => {
        return (
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>
                            <h1>Ponix Bread</h1>
                        </div>
                        <div className={styles.content}>
                            <p>Powered by Next.js with 💙</p>
                            <p>
                                © 2022 Gwon Minjae, Choi Jeongwon —{" "}
                                <a href={"https://github.com/betarixm/ponix-bread"}>GitHub</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;

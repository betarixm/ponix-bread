import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
    render = () => {
        return (
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>
                            <Link href={"/"}>포닉스빵</Link>
                        </div>
                        <div className={styles.content}>
                            <ul>
                                <li>
                                    <Link href={"/draw"}>뽑기</Link>
                                </li>
                                <li>
                                    <Link href={"/collection"}>도감</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Header;

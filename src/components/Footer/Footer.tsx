import React, { ReactElement } from 'react';

import styles from './Footer.module.scss';

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className="footer__inner">
        <p className="footer__copyright">2022 ©</p>
        <p className="footer__references">
          <a
            href="https://rs.school/"
            className="footer__link footer__rsschool-link"
            target="_blank"
            rel="noreferrer"
          >
            RS School
          </a>
        </p>
        <p className="footer__social">
          <a
            href="https://github.com/NikolayKovzik"
            className="footer__link footer__gh-link"
            target="_blank"
            rel="noreferrer"
          >
            Nikolay Kovzik
          </a>
        </p>
        <p className="footer__social">
          <a
            href="https://github.com/DarkCrew"
            className="footer__link footer__gh-link"
            target="_blank"
            rel="noreferrer"
          >
            Kirill Kovalev
          </a>
        </p>
        <p className="footer__social">
          <a
            href="https://github.com/ishah148"
            className="footer__link footer__gh-link"
            target="_blank"
            rel="noreferrer"
          >
            Igor Shah
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

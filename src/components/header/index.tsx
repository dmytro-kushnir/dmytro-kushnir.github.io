import * as React from 'react';
import Image from '../image/index.tsx';

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}
function Header() {
  // todo to be retrieved from config as well as other props of image
  const logoPath = 'src/apps/web-programming/assets/logo.png';

  return (
    <header className="header">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a className="navbar-logo" href="index.html">
            <Image path={logoPath} alt="Веб-програмування" className="logo" />
          </a>
          <div className="collapse navbar-collapse justify-content-center order-3 order-xl-2" id="primaryNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Головна</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="lecture.html">Лекції</a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={handleClick}
                  id="navbarLabDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Лабораторні
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarLabDropdown">
                  <li><a className="dropdown-item" href="work1.html">Лабораторна 1</a></li>
                  <li><a className="dropdown-item" href="work2.html">Лабораторна 2</a></li>
                  <li><a className="dropdown-item" href="work3.html">Лабораторна 3</a></li>
                  <li><a className="dropdown-item" href="work4.html">Лабораторна 4</a></li>
                  <li><a className="dropdown-item" href="work5.html">Лабораторна 5</a></li>
                  <li><a className="dropdown-item" href="work6.html">Лабораторна 6</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="selfwork.html">Самостійна</a>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={handleClick}
                  id="navbarDiskDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Диски
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDiskDropdown">
                  <li><a target="_blank" className="dropdown-item" href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" rel="noreferrer">КІ-41</a></li>
                  <li><a target="_blank" className="dropdown-item" href="https://drive.google.com/drive/u/0/folders/1hbeZmpsK9EByz67o0zViKmu0s_Mlwn0g" rel="noreferrer">КІ-42</a></li>
                  <li><a target="_blank" className="dropdown-item" href="https://drive.google.com/drive/u/0/folders/1363d0DT4xQNE7BHSXkrSvAlbHkTh7mXj" rel="noreferrer">КІ-43</a></li>
                  <li><a target="_blank" className="dropdown-item" href="https://drive.google.com/drive/u/0/folders/1FAwfJHtS93V2_vp-TETMjtPgjv0s29Qi" rel="noreferrer">КІ-44</a></li>
                  <li><a target="_blank" className="dropdown-item" href="https://drive.google.com/drive/u/0/folders/1puhqbpG7DYhoeKgB33J3rkt-mP-_Wbq4" rel="noreferrer">КІ-45</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="journal.html">Журнали</a>
              </li>
            </ul>
          </div>
          <div className="navbar-out order-2 order-xl-3">
            <div>
              <button aria-label="Open Sidebar" onClick={handleClick} className="d-none d-xl-block open-sidebar" type="button">
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

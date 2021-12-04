$('#header').html(`
<nav class="navbar navbar-expand-sm navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img width="30" height="30" alt="" src="/img/MPK_cara_02.svg" alt="Muy Pro Kids" />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse header__menu" id="navbarNav">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li class="nav-item"><a class="nav-link text-light" href="/index.html">Inicio</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Actividades</a>
                                    <!-- contiene los enlaces a los diferentes artículos dentro de la otra pagina -->
                                    <ul class="dropdown-menu bg_gradient" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="#">Actividades</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="#">Dibujos y animaciones</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="#">Stop Motion</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="#">Aprendiendo a programar jugando</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a class="nav-link text-light" href="/views/web-construccion.html">Contacto</a></li>
                                <li class="nav-item"><a class="nav-link text-light" href="/views/web-construccion.html">Sobre Nosotros</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                    <!-- tendrá la unica opción de agregar entrada, sin seguridad por ahora-->
                                    <ul class="dropdown-menu bg_gradient dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="/views/blog.html">Todos los articulos</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-3 text-light" href="/views/nueva_entrada.html">Agregar nuevo</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
`);

$('#side-menu').html(`
<aside class="aside">
                                <form action="" class="section1__form--blog" id="form-subscribir">
                                    <fieldset>
                                        <div>
                                            <label class="form-label" for="emailSubs">Déjanos tu correo y suscribite a nuestro blog!</label>

                                            <input type="email" class="form-control" id="emailSubs" name="emailSubs" placeholder="nombre@correo" />
                                            <input class="form__button--blog" type="submit" value="Suscribir" name="" id="btnSuscribir" />
                                        </div>
                                    </fieldset>
                                </form>
                            </aside>
                            <aside class="aside">
                                <h3 class="aside-subtitle">Últimas 5 entradas</h3>
                                <ul class="aside-menu" id="lista-ultimas-entradas"></ul>
                            </aside>
                            <aside class="aside">
                                <h3 class="aside-subtitle">Entradas ordenadas por tema</h3>
                                <ul class="aside-menu">
                                    <li><a href="#"> Dibujos y animaciones</a></li>
                                    <li><a href="#"> Stop Motion</a></li>
                                    <li><a href="#">Programación</a></li>
                                </ul>
                            </aside>
                            `);

$('#footer').html(`
<ul class="navbar d-flex justify-content-center">
<li class="nav-item"><a class="nav-link text-light" href="">Contacto</a></li>
<li class="nav-item"><a class="nav-link text-light" href="">Partners</a></li>
<li class="nav-item"><a class="nav-link text-light" href="">Politica de Privacidad</a></li>
</ul>
`);

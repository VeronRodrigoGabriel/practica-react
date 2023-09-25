export const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="filtros">
                            <div className="filtro1 bg-danger">
                                <button
                                    className="button1 text-white btn rounded-5 bg-danger d-inline-flex align-items-center justify-content-center"
                                    type="button">
                                    TODOS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="filtros">
                            <div className="filtro2">
                                <div className="btn-group">
                                    <button
                                        className="button2 btn bg-secondary-subtle rounded-5 dropdown-toggle dropdown-toggle-split d-inline-flex align-items-center justify-content-center"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SELECCIONAR CINE
                                    </button>

                                    <ul className="dropdown-menu bg-secondary-subtle text-center">
                                        <li>
                                            <a href="" className="dropdown-items p-2">Cines Avenida</a>
                                        </li>
                                        <li>
                                            <a href="" className="dropdown-items p-2">Cine Teatro Italia</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                            <div className="card">
                                <img src="/img/Rapidos_y_Furiosos_X.webp" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Titulo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
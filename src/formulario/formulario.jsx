export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-person"></i>
                                </span>
                            <input type="text" 
                            class="form-control"
                             placeholder="Apellido" />
                        </div>

                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                            <i class="bi bi-person"></i>
                            </span>
                            <input type="text"
                                className="form-control"
                                placeholder="Nombres" />
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                                @
                            </span>
                            <input type="number"
                                className="form-control"
                                placeholder="Edad" />
                        </div>

                    </div>


                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                                @
                            </span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Nacimiento" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                                @
                            </span>
                            <input type="number"
                                className="form-control"
                                placeholder="Documento" />
                        </div>

                    </div>




                </div>

                <div className="row">


                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                                @
                            </span>
                            <input type="Email"
                                className="form-control"
                                placeholder="Correo" />
                        </div>

                    </div>


                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Pizza</option>
                                <option value="2">Pavo</option>
                                <option value="3">Papas</option>
                            </select>
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" >
                                @
                            </span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Arroz</option>
                                <option value="2">Carne</option>
                                <option value="3">Lentejas</option>
                            </select>


                        </div>

                    </div>




                </div>




                
                <button className="btn btn-dark w-75 my-3 mx-auto d-block">Enviar</button>
            </form>
        </>
    )
}
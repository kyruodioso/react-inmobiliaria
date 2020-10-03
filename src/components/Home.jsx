import React from 'react'
const Home = () => {
    return (
        <div className="home pt-5">
            <div className="container">
              <h1 className="text-center">NewHome</h1>
              <h2 className="text-center mt-3">Inmuebles</h2>             
            <form className="form-inline justify-content-center mt-5">
                <div className="form-group">
                <input type="text" className="form-control" id="home" placeholder="zona" />
                </div>
                <div class="form-group">
    <select className="form-control" id="exampleFormControlSelect1">
      <option selected>Tipo de Inmueble</option>
      <option>Emprendimientos</option>
      <option>Casa</option>
      <option>Departamento</option>
      <option>Local</option>
      <option>Oficina</option>
      <option>Galpon</option>
      <option>Terreno</option>
    </select>
  </div>
  <div class="form-group">
    <select className="form-control" id="exampleFormControlSelect1">
      <option selected>Operación</option>
      <option>Venta</option>
      <option>Alquiler</option>
    </select>
  </div>
  <div className="form-group">
  <a class="btn btn-outline-success" href="#" role="button">Buscar</a>
  </div>
            </form>
                <div className="row justify-content-center mt-5 p-2">
                <div class="card alert-warning border-top-0">
  <div class="card-header">
  <h5 class="card-title text-center">Seguridad</h5>
  </div>
  <div class="card-body text-center">
  <i className="fas fa-lock fa-7x"></i>
    <p class="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsa magni dignissimos minima atque maiores eaque voluptatem sapiente beatae tempore ullam inventore consequuntur illum vitae dolorem, provident amet itaque id.</p>
  </div>
</div>
<div class="card alert-warning border-top-0">
  <div class="card-header">
  <h5 class="card-title text-center">El mejor precio</h5>
  </div>
  <div class="card-body text-center">
  <i class="fas fa-money-bill-wave fa-7x"></i>
    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rerum labore beatae, mollitia atque nulla commodi cupiditate blanditiis vero officia voluptas vel quia, molestias laudantium. Cumque vitae quasi laborum est!</p>
  </div>
</div>
<div class="card alert-warning border-top-0">
  <div class="card-header">
  <h5 class="card-title text-center">En el acto</h5>
  </div>
  <div class="card-body text-center">
  <i class="fas fa-hands-helping fa-7x"></i>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus sapiente saepe non. Iste ipsum iusto facere dolore sunt delectus exercitationem incidunt esse ullam accusantium, suscipit deleniti ut. At.</p>
  </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Home

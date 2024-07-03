import react from 'react'   
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
             <div className="container">
              <i className='bi bi-shop-window text-warning fs-4 me-2'> </i> 
                    <a className="navbar-brand" href="#">eShop</a>
                    <div className="input-group ">
                          <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                               <div className="input-group-append bg-warning">
                                   <span className="input-group-text bg-warning" id="basic-addon2" ><i className='bi bi-search'> </i> </span>
                                        </div>
                                        </div>  
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page" >
                                <small>Hello</small>  <strong>Guest</strong>
                                </a>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page" >
                            <small>Hello</small>  <strong>Guest</strong>
                                </a>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  <i className='bi bi-basket' fs-4> </i> <span>0</span> </a> 
                        </li>
                       
                    </ul>
                    
                </div>
            </nav>
            
        </div>
    )
}

export default Header
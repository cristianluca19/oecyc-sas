import './login.css'
import Logo from '../../imagen/logo.png'

export default function Login() {

return(
    <div className="main">
    <div className="container">
<center>
<div className="middle">
      <div id="login">
        <form >
          <fieldset className="clearfix">
            <p><span className="fa fa-user"></span><input type="text"  placeholder="Usuario" required/></p> 
            <p><span className="fa fa-lock"></span><input type="password"  placeholder="Contraseña" required/></p>
             <div>
                <span data-style="width:50%; text-align:right;  display: inline-block;"><input type="submit" value="Ingresar"/></span>
                <br/>
            </div>
                <span data-style="width:48%; text-align:left;  display: inline-block;"><a className="small-text" href="/recovery">Olvidaste la contraseña ? </a></span>
        </fieldset>
        </form>
        </div>
        <div className="clearfix"></div>
        <div className="clearfix"></div>

      <div className="logo">
         <img src={Logo} alt="logo" width={300}/>
      </div>
      </div>
</center>
    </div>
</div>
)
   
}
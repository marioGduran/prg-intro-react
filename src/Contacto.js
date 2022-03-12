function Contacto() {
return (
  <form>
   <label for="email" >correo electronico</label>
<br />
<input id="email" type="email" required/>
<br></br>


<label for="mensaje" type="">mensaje</label>
<br/>
<textarea id="mensaje"></textarea>
<br></br>
<button type="button">enviar</button>
<h1>Contacto</h1>


</form>
    
  )
}

export default Contacto

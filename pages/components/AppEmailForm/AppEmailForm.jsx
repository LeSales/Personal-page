import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    height: 70%;
    background-color: #FFF;
    color: #000;
`;

function Mailer(){
    return (
        <Wrapper>
            <div className="formulario">
          <h2>Deixe sua mensagem</h2>
          <form id="myForm" onSubmit={sendEmail}>
            <label>Nome</label>
            <input className="inputField" type="text" name="name" required />

            <label>E-mail</label>
            <input className="inputField" type="email" name="user_email" required />

            <label>Mensagem</label>
            <textarea name="message" rows="5" required/>
            <input className="inputSubmit" type="submit" value="Enviar" />
          </form>
          <div className="separator"></div>
          <div>
            <a
              href="https://www.linkedin.com/in/leandro-sales-87249059/"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <LinkedInIcon style={{fontSize:30}}/>
            </a>
            <a
              href="https://github.com/LeSales"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <GitHubIcon style={{fontSize:30}}/>
            </a>
          </div>
        </div>
        </Wrapper>
    );
}

function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm(
      "service_xed1lv3",
      "template_vqcvu1n",
      e.target,
      "user_n9Joj17xPBlNCaRnoUhzK"
    ).then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  
    let form = document.getElementById("myForm");
    form.reset();
    setTimeout(()=>{
      //alert("Mensagem enviada, obrigado pelo contato!");
  }, 10);
  
  }
  

export default Mailer;
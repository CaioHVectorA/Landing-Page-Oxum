import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import trofeu from './trophy.png'
import money from './money.png'
import lock from './padlock.png'
import coiso from './satisfacao.png'
function App() {
  var [mobile,setMobile] = useState(window.innerWidth < 480)
  // let [data,setData] = useState(new Date)
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  const data = new Date(); // Cria um objeto Date com a data e hora atuais.
  let [dia,setDia] =  useState(diasDaSemana[data.getDay()]) // Obtém o dia da semana como uma string.
  const [num,setNum] = useState(599 - Math.round(Math.random() * 100))
  useEffect(() => {
    const interval = setInterval(() => {
      let RNG = Math.round(-3 + (Math.random() * 5))
      if (RNG === -3 || RNG === 0) {
        RNG = 1
      }
      // console.log(RNG)
      setNum(num + RNG)
    }, 700);
    
    return () => clearInterval(interval)
  },[])
  const [datafull,setDF] = useState('')
  const [Nome,setNome] = useState('')
  const [modal,setModal] = useState(false)
  const Modalzin = () => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        setModal(false)
        console.log('modal:',modal)
      }, 2500);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <p style={ !mobile ? {backgroundColor: 'green',borderRadius: '8px',padding: '14px 9px',position: 'fixed',display: modal ? 'block' : 'hidden',right: '32px',bottom: '32px',color: 'white',fontWeight: 'bold',fontSize: '19px'} : {width: '100vw',position: 'fixed',bottom: '0px',color: 'white',fontWeight: 'bold',fontSize: '19px',background: 'green',margin: '0px'}}>
        {Nome} fez uma consulta grátis
      </p>
    )
  }
  useEffect(() => {
    const date = new Date();
  const diazin = date.getDate();
  const mes = date.getMonth();
  const ano = date.getFullYear();
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  setDF(`Dia ${diazin} de ${meses[mes]} de ${ano}`)
  },[])
  useEffect(() => {
    const nomes = [
      'Maria', 'João', 'Ana', 'Pedro', 'Julia', 'Lucas', 'Mariana', 'Carlos', 'Larissa', 'Rafael',
      'Fernanda', 'Rodrigo', 'Amanda', 'Felipe', 'Laura', 'Gustavo', 'Camila', 'Matheus', 'Isabella', 'Diego',
      'Tatiana', 'Tiago', 'Carolina', 'Renato', 'Thais', 'Renata', 'Guilherme', 'Bianca', 'Ricardo', 'Natália',
      'Leonardo', 'Vanessa', 'Paulo', 'Patrícia', 'Caio', 'Letícia', 'Marcelo', 'Bárbara', 'Henrique', 'Andréa',
      'Vitor', 'Fátima', 'Maurício', 'Lívia', 'Eduardo', 'Gabriela', 'Felícia', 'Victor', 'Mônica', 'Bruno',
      'Júlia', 'Sérgio', 'Carla', 'Giovanni', 'Lorena', 'Arthur', 'Mirella', 'Vinícius', 'Elisa', 'Roberto',
      'Renan', 'Juliana', 'Murilo', 'Laís', 'Alexandre', 'Jéssica', 'Fábio', 'Aline', 'Daniel', 'Tâmara',
      'Raphael', 'Nathalia', 'Davi', 'Brenda', 'Igor', 'Alessandra', 'Ramon', 'Cintia', 'Fabiana', 'Miguel',
      'Cristina', 'Renata', 'Luciana', 'José', 'Mariane', 'Márcio', 'Letícia', 'Nícolas', 'Renata', 'Luana',
      'Thiago', 'Valéria', 'Rita', 'Mauro', 'Caroline', 'Sandra', 'Karine', 'Enzo', 'Andressa', 'Erick'
    ];
    const interval = setInterval(() => {
      setNome(nomes[Math.round(Math.random() * 100)])
    },7000)

    return () => clearInterval(interval)

  },[])
  const intervalRef = useRef(null);
  function Sort() {
    // console.log('aaaaaaaaa')
    setModal(true)
  }
  useEffect(() => {
    const teste = setInterval(Sort, 7000)
    return () => clearInterval(teste);
  }, []);
  return (
    <div className="App">
      <header style={{backgroundColor: 'darkred',display: 'flex',width: '100vw',height: '80px',justifyContent: 'center',alignItems: 'center',color: 'white',fontSize: !mobile ? '26px' : '16px'}}>Últimas Vagas para hoje, {dia}, {datafull}</header>
      <h1 style={{fontSize: !mobile ? '44px' : '32px'}}>TRAGA SEU <span style={{padding: '2px 6px',backgroundColor: '#0aff4b'}}>EX DE VOLTA RÁPIDO!</span></h1>
      <h1>Faça agora uma <span style={{padding: '2px 6px',backgroundColor: 'yellow'}}>consulta grátis!</span></h1>
      <iframe style={{borderRadius: '8px',border: '3.3px solid red',padding: '0px',boxShadow: ' 0px 0px 15px 9px rgba(255,0,0,0.3)'}} width={!mobile ? "830" : "300"} height={!mobile ? "509.5" : "200"} src="https://www.youtube.com/embed/31hoXyZJWgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p style={{marginBottom: '32px'}}>{num} pessoas estão vendo isso agora</p>
      <a style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
      <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',width: '100%'}}>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
          <img src={trofeu} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Satisfação <br /> Garantida</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={money} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Compra <br /> Segura</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={lock} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Privacidade <br /> Protegida</p>
        </li>
      </ul>
      <div style={ !mobile ? {display: 'grid',gridTemplateColumns: '1fr 1fr',width: '45%',margin: '0 auto',marginBottom: '32px'} : {display: "flex",flexDirection: 'column'}}>
        <div><img src={coiso} style={!mobile ? {width: '80%',height: '80%'} : {width: '60%',height: '60%'}}/></div>
        <div><p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tempus ante. Sed nibh ligula, cursus in mi et, vestibulum blandit nulla. Nam euismod arcu eget lacus lacinia, ac gravida nibh pulvinar. dkasljdaksljdslkajdlajsldajldja
        ldjasldjaldjaldjalskjdalkdjasldjaldkajs</p>
        
          <p style={{textAlign: 'center',maxWidth: '100%'}}>In vestibulum, enim eu semper suscipit, leo justo dictum elit, at dictum nunc velit in orci. Donec varius tellus eu erat facilisis egestas. Morbi tincidunt sem sed lorem porttitor ornare.</p></div>
      </div>
      <a style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
      <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',width: '100%'}}>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
          <img src={trofeu} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Satisfação <br /> Garantida</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={money} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Compra <br /> Segura</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={lock} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Privacidade <br /> Protegida</p>
        </li>
      </ul>

      <h1 style={{color: 'darkred',fontSize: '54px',textTransform: 'capitalize',margin: '0'}}>Trabalhos amorosos infalíveis</h1>
      <p style={{fontSize: '20px',maxWidth: '60%',margin: '0 auto'}}>blabalbalabalablab lbalablabl balb alba lbalba balbalabalablab lbalablabl balb alba lbalba balbalabalablab lbalablabl balb alba lbalba blabla labla bal bal balbalalbalablabal labla</p>
      <div style={!mobile ? {display: 'flex',gap: '6px',width: '100vw',justifyContent: 'center',marginTop: '40px'} : {display: 'flex',flexDirection: 'column',gap: '96px',alignItems:'center',width: '100vw'}}>
        <div style={{height: '300px',width: '230px',background: '#080808',border: 'darkred 5px solid',position: 'relative',top: '32px'}}></div>
        <div style={{height: '300px',width: '230px',background: '#080808',border: 'darkred 5px solid'}}></div>
        <div style={{height: '300px',width: '230px',background: '#080808',border: 'darkred 5px solid',marginLeft: !mobile ? '56px' : '0px',position: 'relative',top: '32px'}}></div>
        <div style={{height: '300px',width: '230px',background: '#080808',border: 'darkred 5px solid'}}></div>
      </div>
      <div style={{marginTop: '90px'}}>
      <a style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
      <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',width: '100%'}}>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
          <img src={trofeu} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Satisfação <br /> Garantida</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={money} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Compra <br /> Segura</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={lock} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Privacidade <br /> Protegida</p>
        </li>
      </ul>
      </div>
      <h1 style={{color: 'darkred'}}>Sobre Joanna de Oxum</h1>
      <div style={!mobile ? {display: 'grid',gridTemplateColumns: '1fr 1fr',justifyContent: 'center',width: '50vw',margin: '0 auto'} : {display: 'flex',flexDirection: 'column-reverse'}}>
      <p style={{width: !mobile ? '100%' : '90%',textAlign: 'start',margin: '0 auto'}}>Duis feugiat et magna id pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Fusce tellus massa, eleifend sit amet fringilla et, dapibus a lorem. Aliquam hendrerit, dui eget tincidunt pulvinar, ex magna posuere felis, nec lacinia orci turpis eget massa. Donec eu odio augue. Duis vel lacus sed felis faucibus ullamcorper. Phasellus eni</p>
      <div style={{height: !mobile ? '400px' : '300px',width: mobile ? '330px' : '260px',background: '#080808',border: 'darkred 5px solid',marginLeft: !mobile ? '32px' : '0px',margin: '0 auto'}}></div>
      </div>
      <div style={{marginTop: '60px'}}>
      <a style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
      <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',width: '100%'}}>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
          <img src={trofeu} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Satisfação <br /> Garantida</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={money} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Compra <br /> Segura</p>
        </li>
        <li style={{display: 'flex',alignItems: 'center',position: 'relative',right: '32px'}}>
        <img src={lock} />
          <p style={{color: 'rgba(0,0,0,.6)',fontWeight: 'bold'}}>Privacidade <br /> Protegida</p>
        </li>
      </ul>
      </div>
      {modal && <Modalzin />}
    </div> 
  );
}

export default App;

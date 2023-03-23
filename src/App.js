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
      <iframe style={{borderRadius: '8px',border: '3.3px solid red',padding: '0px',boxShadow: ' 0px 0px 15px 9px rgba(255,0,0,0.3)'}} width={!mobile ? "830" : "300"} height={!mobile ? "509.5" : "200"} src="https://www.youtube.com/embed/NBr2t9IkP8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p style={{marginBottom: '32px'}}>{num} pessoas estão vendo isso agora</p>
      <a href='https://api.whatsapp.com/send/?phone=5521970907254&text&type=phone_number&app_absent=0' style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
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
      {/* <div className='divP' style={{display: 'flex',gap: '24px',color: 'white',width: '80vw',margin: '0 auto',marginBottom: '128px',flexDirection: !mobile ? 'row' : 'column'}}>
        <div style={{padding: '20px',backgroundColor: 'darkred',borderRadius: '8px'}}>
        <h1>"Fiz minha consulta com o márcio e minha vida mudou!"</h1>
        <p>Gabriel dos Santos</p>
        </div>
        <div style={{padding: '20px',backgroundColor: 'darkred',borderRadius: '8px'}}>
        <h1>"Finalmente um que se pode confiar! Nota dez!"</h1>
        <p>José Silva</p>
        </div>
        <div style={{padding: '20px',backgroundColor: 'darkred',borderRadius: '8px'}}>
        <h1>"Fiz minha primeira consulta e foi muito bom! Irei mais vezes!"</h1>
        <p>Rafaela Oliveira</p>
        </div>
      </div> */}
      {/* <h1>Opinião popular</h1> */}
      <img style={{width: '1351px',height: '699px',scale: '0.8'}} src={process.env.PUBLIC_URL + '/imgs/coments.jpg'} />
      <div style={ !mobile ? {display: 'grid',gridTemplateColumns: '1fr 1fr',width: '45%',margin: '0 auto',marginBottom: '32px'} : {display: "flex",flexDirection: 'column'}}>
        <div><img src={coiso} style={!mobile ? {width: '240px',height: '200px'} : {width: '60%',height: '60%'}}/></div>
        <div><p style={{textAlign: !mobile ? 'start' : 'center',width: !mobile ? '130%' : 'auto', fontSize: '24px'}}>Nós gostamos de ser muito <span className='red'>sinceros com nossos clientes.</span> Dessa forma, durante a Consulta Espiritual, as Entidades de Luz irão dar passagem ao seu Trabalho Espiritual. Quando elas confirmarem que o trabalho pode ser realizado, <span className='red'>a Amarração é garantida. </span></p>
        
          <p style={{textAlign: !mobile ? 'start' : 'center',maxWidth: '100%',fontSize: '30px'}}>Muitos de nossos clientes sentiram os primeiros resultados em apenas <span className='red'>24 horas</span> após a Atração Dominadora ser feita.<span className='red'> Você pode ser próximo!</span></p></div>
      </div>
      <a href='https://api.whatsapp.com/send/?phone=5521970907254&text&type=phone_number&app_absent=0' style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
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
      <p style={{fontSize: '20px',maxWidth: !mobile ? '40%' : '80%',margin: '0 auto',fontSize: '26px'}}>Todos os nossos trabalhos são realizados com materiais de qualidade e com muito respeito aos nossos clientes. Clique no botão abaixo e fale comigo no WhatsApp!</p>
      <div style={!mobile ? {display: 'flex',gap: '6px',width: '100vw',justifyContent: 'center',marginTop: '40px'} : {display: 'flex',flexDirection: 'column',gap: '96px',alignItems:'center',width: '100vw'}}>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/1.jpeg)`,backgroundPosition: 'center',backgroundSize: '140%',height: '300px',width: '230px',backgroundColor: '#080808',border: 'darkred 5px solid',position: 'relative',top: '32px'}}></div>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/2.jpeg)`,backgroundPosition: 'center',backgroundSize: '140%',height: '300px',width: '230px',backgroundColor: '#080808',border: 'darkred 5px solid'}}></div>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/3.jpeg)`,backgroundPosition: 'center',backgroundSize: '140%',height: '300px',width: '230px',backgroundColor: '#080808',border: 'darkred 5px solid',marginLeft: !mobile ? '56px' : '0px',position: 'relative',top: '32px'}}></div>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/4.jpeg)`,backgroundPosition: 'center',backgroundSize: '140%',height: '300px',width: '230px',backgroundColor: '#080808',border: 'darkred 5px solid'}}></div>
      </div>
      <div style={{marginTop: '90px'}}>
      <a href='https://api.whatsapp.com/send/?phone=5521970907254&text&type=phone_number&app_absent=0' style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
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
      <h1 style={{color: 'darkred'}}>Sobre Marcio ty Oxossi</h1>
      <div style={!mobile ? {display: 'grid',gridTemplateColumns: '1fr 1fr',justifyContent: 'center',width: '50vw',margin: '0 auto'} : {display: 'flex',flexDirection: 'column-reverse'}}>
      <p style={{width: !mobile ? '70%' : '90%',textAlign: 'start',margin: '0 auto'}}>Eu, Marcio Ty Oxossi, tenho +20 anos de experiência em orientação espiritual. Sou especialista em casos amorosos, por mais difíceis que possam parecer. <br/> <br/> Ao longo da minha vida, já uni mais de 2 mil casais pelo país e no mundo, resultado da minha experência, dom e dedicação. Para mim, não existe problema sem solução. Vou te mostrar o caminho a ser seguido, independente do tipo de problema: amoro, financeiro ou profissional. Se sua vida está nublada, venha buscar a luz. Garanto êxito total e absoluto dos trabalhos espirituais realizados por mim! <br /> <br/> <span className='red'>As consultas são precensiais em nosso templo ou online, para qualquer lugar do Brasil. Sigilo absoluto!</span></p>
      <div style={{height: !mobile ? '400px' : '300px',width: mobile ? '330px' : '260px',backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/4.jpeg)`,backgroundSize: '110%',background: '#080808',border: 'darkred 5px solid',marginLeft: !mobile ? '32px' : '0px',margin: '0 auto'}}></div>
      </div>
      <div style={{marginTop: '60px'}}>
      <a href='' style={{backgroundColor: '#04ba12',color: 'white',cursor: 'pointer',padding: !mobile ? '19px 24px' : '8px',marginBottom: '32px',fontSize: '22px',borderRadius: '8px',}}>Fazer consulta grátis via WhatsApp</a>
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
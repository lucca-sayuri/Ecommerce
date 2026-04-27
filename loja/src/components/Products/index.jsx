import '../Products/Products.css';

import flor1 from '../../../public/flor1.jpg'

export default function Produtos() {
  return (
    <div className="produtos">
        <div className='titulos'>
            <h2>Produtos</h2>
            <p>
                Compre as flores!! Agora!!!
            </p>

            <div className="produtos_grid">
                <div className="card-image">
                    <img src={flor1} alt="Marigold"/>
                    <span className="badge-venda">Mais vendidos</span>
                </div>
                <div className="card-info">
                    <h3>Marigold</h3>
                    <p className='preco'>R$ 13,90</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            
        </div>
    </div> 
    )};
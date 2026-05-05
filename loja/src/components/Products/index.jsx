import '../Products/Products.css';

import flor1 from '../../../public/flor1.jpg'
import flor2 from '../../../public/flor2.jpg'
import flor3 from '../../../public/flor3.jpg'
import flor4 from '../../../public/flor4.jpg'

export default function Produtos() {
    return (
        <div className="produtos">
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Compre as flores!! Agora!!!
                </p>

                <div className="produtos_grid">

                    <div className='card'>
                        <div className="card-image">
                            <img src={flor1} alt="Marigold" />
                            <span className="badge-venda">Mais vendidos</span>
                        </div>
                        <div className="card-info">
                            <h3>Marigold</h3>
                            <p className='preco'>R$ 13,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className="card-image">
                            <img src={flor2} alt="Flor" />
                        </div>
                        <div className="card-info">
                            <h3>Flor</h3>
                            <p className='preco'>R$ 13,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-image">
                            <img src={flor3} alt="Hydrangea" />
                        </div>
                        <div className="card-info">
                            <h3>Hydrangea</h3>
                            <p className='preco'>R$ 13,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-image">
                            <img src={flor4} alt="Lotus" />
                        </div>
                        <div className="card-info">
                            <h3>Lotus</h3>
                            <p className='preco'>R$ 13,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>




                </div>


            </div>
        </div>
    )
};
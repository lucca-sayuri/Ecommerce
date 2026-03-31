import './Banner.css'
import banner from '../../assets/banner.jpg'
import bannerMobile from '../../assets/banner_mobile.jpg'

export default function Banner() {
    return (
        <section className='secao_banner'
            style={{
                backgroundImage: `url(${banner})`
            }}
        >

            <div className='texto'>
                <h2>Preview</h2>
                <h1>Verão 2026</h1>
                <button className='btn'>Comprar</button>
            </div>

        </section>
    )
}
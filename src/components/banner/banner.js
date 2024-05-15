import imgBanner from '../images/imgBanner.png';
import './banner.scss';

function entete({title, image}){
    return <section className='sectionEntete'>
                <img src={image} className='imgBanner'></img>
                <h1 className='titreBanner'>{title}</h1>
            </section>
};

export default entete
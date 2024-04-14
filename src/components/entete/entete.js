import imgBanner from '../images/imgBanner.png';
import './banner.scss';

function entete(){
    return <section className='sectionEntete'>
                <img src={imgBanner} className='imgBanner'></img>
                <h1 className='titreBanner'>Chez vous partout ailleurs</h1>
            </section>
};

export default entete
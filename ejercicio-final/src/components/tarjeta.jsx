import '../styles/tarjeta.css';

const Tarjeta =({name,image,profession,awards, discoveries}) =>{
    return(
        <div className="tarjeta">
            <h2 className="tarjeta-name">{name}</h2>
            <img src={image} alt={name} className="tarjeta-image" />
            <div className="tarjeta-content">
                <ul>
                    <li><strong>Profesión:</strong> {profession}</li>
                    <li><strong>Premios:</strong> {awards}</li>
                    <li><strong>Descubrimientos:</strong> {discoveries}</li>
                </ul>
            </div>
        </div>
    );
};

export default Tarjeta;
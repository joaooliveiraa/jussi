import '../styles/components/Card.css';

export default function Card(props) {
    return (
        <div className="card-solutions">
            <div className="card-solutions-title">{props.title}</div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <ul>
                {props.feacture.map((feacture, i) => (
                    <li key={i}>{feacture.description}</li>
                ))}
            </ul>
            <button>Ver solução</button>
        </div>
    )
}
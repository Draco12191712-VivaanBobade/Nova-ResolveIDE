interface Props {

    title: string;

    subtitle: string;

}

export default function GameCard({
    title,
    subtitle
}: Props) {

    return (

        <div className="gameCard">

            <h2>{title}</h2>

            <p>{subtitle}</p>

        </div>

    );

}
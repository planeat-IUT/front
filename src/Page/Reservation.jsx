
export default function Reservation() {
    const restaurantName = window.location.pathname.split('/')[2].replace(/%20/g, ' ');
    return (
        <div>
            <h1>Réservation</h1>
            <h2>{restaurantName}</h2>
        </div>
    );
}
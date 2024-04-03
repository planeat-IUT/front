export default function Load( {Message} ) {
    return (
        <div className="load">
            <div className="load__container">
                <div className="load__container__title">
                    <h1>Chargement</h1>
                    <h4>{Message}</h4>
                </div>
                <div className="load__container__content">
                    <div className="load__container__content__loader">
                        <div className="load__container__content__loader__bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function Load() {
    return (
        <div className="load">
            <div className="load__container">
                <div className="load__container__title">
                    <h1>Chargement</h1>
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
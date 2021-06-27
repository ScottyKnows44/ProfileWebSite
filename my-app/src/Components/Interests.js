import Family from '../img/family.jpg';

function Interest(){
    return(
        <div className="row mt-5">
            <div className="col text-center" >
                <h4>About me</h4>
                <p>I am just your friendly neighborhood programmer.</p>
            </div>
            <div className="col">
                <img src={Family} alt="Family" />
            </div>
        </div>
    );
}

export default Interest;
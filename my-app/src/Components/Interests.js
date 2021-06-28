import Family from '../img/family.jpg';

function Interest(){
    return(
        <div className="row margin w-50 ml-auto mr-auto">
            <div className="col-sm text-center" >
                <u className="mb-5 fontLightGrey h2">About me</u>
                <p className="fontForAboutMePage">I am just your friendly neighborhood programmer.</p>
                <p className="fontForAboutMePage">Born and raised in Washington. I spend most of my time listening to music while programming.</p>
                <p className="fontForAboutMePage">Graduated Green River College in June 2021.</p>
                <p className="fontForAboutMePage">Eagle Scout, received letters from past presidents.</p>
                <p className="fontForAboutMePage">During Football season you can find me on Sundays glued to the TV watching the game. Go Seahawks!</p>
                <p className="fontForAboutMePage">Skilled cook in the kitchen. I can cook up a mean steak.</p>
            </div>
            <div className="col-sm">
                <img src={Family} alt="Family" />
            </div>
        </div>
    );
}

export default Interest;
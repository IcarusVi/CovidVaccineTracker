
const UnitedStatesCard = ({ stateData }) => {

    return (

        <div className='unitedStatesCard'>
            <div className='content'>
                <h1>{stateData.location}</h1>
                <div className="row">
                    <p>{stateData.people_vaccinated}</p> 
                    <p className='subtitle'>1 dose given</p>
                </div>

                <div className="row">
                    <p>{stateData.people_fully_vaccinated}</p>
                    <p className='subtitle'>fully vaccinated</p>
                </div>


                
            </div>
        </div>

    )
}

export default UnitedStatesCard;
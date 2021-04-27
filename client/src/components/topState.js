const TopState = ({stateData}) => {
    console.log(stateData)
    return (
        <div className='topState'>
            <h2>State/Territory with the highest percent vaccinated</h2>
            <h3>{stateData.location}</h3>
            <p>Fully Vaccinated: {stateData.people_fully_vaccinated}</p>
            <p>Percentage Fully Vaccinated: {stateData.people_fully_vaccinated_per_hundred}%</p>
        </div>
    )
}

export default TopState
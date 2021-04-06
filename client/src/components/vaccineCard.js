import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: '#3f51b5',
        marginBottom: '1rem',
        color: 'white'
    },
});

const VaccineCard = ({stateData}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <h1>{stateData.location}</h1>
                Should add a graph maybe
                <p>First Dose: {stateData.people_vaccinated}</p>
                <p>Fully Vaccinated: {stateData.people_fully_vaccinated} </p>
                <p>Population Fully Vaccinated: {stateData.people_fully_vaccinated_per_hundred}%</p>
            </CardContent>
        </Card>
    )
}

export default VaccineCard;
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: '#7986cb',
    },
});

const VaccineCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <h1>Country/State</h1>
                Should add an image of some sort
                <p>First Dose:</p>
                <p>Fully Vaccinated: </p>
            </CardContent>
        </Card>
    )
}

export default VaccineCard;
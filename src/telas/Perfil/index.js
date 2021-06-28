import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Perfil = () => {
	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item md={4}>
					<Card>
						<CardContent>
							<Typography variant="subtitle2">Email</Typography>
							<Typography variant="subtitle1">
								domnicharris@example.com
							</Typography>
							<Typography variant="subtitle2">
								Web Page
							</Typography>
							<Typography variant="subtitle1">
								https://www.domnic.com/
							</Typography>
						</CardContent>
						<CardActions></CardActions>
					</Card>
				</Grid>
				<Grid item md={8}>
					<Card>
						<CardContent></CardContent>
						<CardActions></CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Perfil;

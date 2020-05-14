import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/dataActions';



class Projects extends Component {
    componentDidMount() {
        this.props.getProjects();
    }
    render() {
        const { Projects, loading } = this.props.data;
        let recentProjectsMarkup = !loading ? (
            Projects.map((Platform) => <ProjectsTable key={Platform.ProjectId} Project={Platform} />)
        ) : (
                <TableContentLoading />
            );
        return (
            <Grid>


                <IconButton aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    placeholder="Look into the crystal ball"
                    inputProps={{ 'aria-label': 'Look into the crystal ball' }}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>



                <Paper className={mergeClasses.root}>

                    <Typography variant="body2" align="left">
                        Search: Modern Wallet
          </Typography>

                    <Table className={mergeClasses.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Platform</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Average</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Top Quartile</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Bottom Quartile</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Profit Margin</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Trend</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Details</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{recentProjectsMarkup}</TableBody>
                    </Table>
                </Paper>

                <Box mt={5} align="center" className={mergeClasses.root}>
                    <Button component={Link} to="/#" variant="contained" color="secondary">
                        Save Data
					</Button>
                </Box>
            </Grid>
        );
    }
}

export default Projects;

import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Grid, Input, Modal, Box, Checkbox, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { fetchClasses } from '../api/classesApi';

const LandingPage: React.FC<{ changeDark: any }> = ({ changeDark }) => {
	const navigate = useNavigate();

	const [classes, setClasses] = useState<ClassType[]>([]);
	const [selected, setSelected] = useState<string[]>([]);
	const [searchValue, setSearchValue] = useState('');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [darkmodeIcon, setDarkmodeIcon] = useState(false);

	useEffect(() => {
		// document.title = "Landing Page";
		const getTasks = async () => {
			const classesFromServer = await fetchClasses();
			setClasses(classesFromServer);
		}
		getTasks();
	}, []);

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	// function isChecked(course) {
	// 	return selected.includes(course);
	// }

	function submitApplications() {
		if (name.length === 0) {
			alert('Please enter your name');
			return
		}
		if (email.length === 0 || email.indexOf('@') === -1) {
			alert('Please enter a valid email');
			return
		}
		// submit the application
		if (selected.length === 0) {
			alert('Please select at least one class to apply for before submitting');
			return
		}

		console.log('submitting');
		console.log('name: ' + name);
		console.log('email: ' + email);

		console.log('selected: ');
		selected.forEach((course) => {
			console.log(course);
		});

		alert('Success! you applied for ' + selected.length + ' classes');
		// close the modal
		closeModal();
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	function openModal() {
		setModalIsOpen(true);
	}

	function select(nameOfCourse: string) {
		setSelected([...selected, nameOfCourse]);
	}

	function deselect(nameOfCourse: string) {
		setSelected(selected.filter((course) => course !== nameOfCourse));
	}
	interface ClassType {
		id: number;
		name: string;
		labCode: string;
		startTime: string;
		endTime: string;
		description: string;
		selected: boolean;
	}

	const CreateListings = ({ element }: { element: ClassType }) => {
		return (<Grid item>
			<Typography> {element.name}, {element.labCode}, {element.startTime} - {element.endTime} </Typography>
			<Typography> {element.description} </Typography>
			<Typography>
				Apply:
				<Checkbox {...label} checked={element.selected} onChange={() => {
					if (element.selected) {
						console.log('deselecting');
						deselect(element.name);
						element.selected = false;
					}
					else {
						console.log('selecting');
						select(element.name);
						element.selected = true;
					}
				}} />

			</Typography>
		</Grid>)
	}
	return <>
		<Modal
			open={modalIsOpen}
			onClose={closeModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Grid
					container
					spacing={4}
					direction="column"
					alignItems="left"
				>
					<Grid item>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Name:
						</Typography>
						<Input onChange={(event) => {
							setName(event.target.value);
						}}></Input>

						<Typography id="modal-modal-title" variant="h6" component="h2">
							Email:
						</Typography>
						<Input onChange={(event) => {
							setEmail(event.target.value);
						}}></Input>
					</Grid>
					<Grid item>
						<Button onClick={closeModal}>Cancel</Button>
						<Button onClick={submitApplications}>Submit</Button>
					</Grid>
				</Grid>
			</Box>

		</Modal>

		{
			// Set the grid to be a centered stack
		}
		<Grid
			container
			spacing={4}
			direction="row"
			alignItems="center"
			justifyContent="center"
		// style={{ minHeight: '100vh' }}
		>

			{
				// Go to admin page
			}
			<Grid item xs={12} md={12} lg={12}>
				<Grid container spacing={0}
					alignItems="center"
					justifyContent="center"
					direction="row">
					<Grid item xs={5}>
						<Button onClick={() => {
							navigate('/admin');
						}} >Go To Admin Page</Button>
					</Grid>
					{/* </Grid> */}



					{
						// Apply button
					}
					{/* <Grid item > */}
					<Grid item xs={6}>
						<Button onClick={() => {// When the user clicks the Apply button
							openModal();
						}}>
							{`Apply to ${selected.length || ""} selected classes`}
						</Button>
					</Grid>

					<Grid item xs={1}>
						<IconButton aria-label="delete" onClick={e => {
							setDarkmodeIcon(!darkmodeIcon);
							changeDark();
						}}>
							{darkmodeIcon ? <Brightness7Icon /> : <DarkModeIcon />}
						</IconButton>
					</Grid>

				</Grid>
			</Grid>



			{
				// Title of the search bar
			}
			<Grid item xs={3}>

			</Grid>

			{
				// The search bar itself
			}
			<Grid container spacing={4}
				direction="column"
				alignItems="center"
				justifyContent="center">
				<Grid item xs={3}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Typography justifyContent={"center"}>Search for Class Code: </Typography>
						<TextField onChange={(event) => {
							setSearchValue(event.target.value);
						}}>
						</TextField>
					</Box>
				</Grid>
			</Grid>

			{
				// Temporary to test the search value
			}
			<Grid item xs={3}>
				<Typography> TEST You are searching for: {searchValue} </Typography>
			</Grid>

			<Grid item>
				<Typography> Classes: </Typography>
			</Grid>
			{

				(classes
					.filter(element => {
						return element.toString().toLowerCase()
							.includes(searchValue.toLowerCase());
					})
					.map((element, index) => {
						return <CreateListings key={index} element={element} />
					})
				)
			}
		</Grid>
	</>
}

export default LandingPage
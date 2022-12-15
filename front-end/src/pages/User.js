import React, { useState } from 'react';
import { request } from '../lib/request';
// import { NavPixer } from '../components/NavPixer';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SucessMessage';
import {
	
	Heading,
	FormLabel,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	CircularProgress,
	Select,
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

const User = () => {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('client');
	const sleep = ms => new Promise(r => setTimeout(r, ms));

	const user = useState({
		"username": '',
		"password": '',
		"role": 'client'
	})[0];

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			user.username = username;
			user.password = password;
			user.role = role;
			console.log(user);
			await request.post('http://localhost:8080/signup', user)
				.then((resp) => resp.data);
			setIsLoading(false);
			setSuccess('Compte '+user.username+' a été créé');
			setError("");
			sleep(1000).then(window.location.href='/login');
		} catch (error) {
			setError('Username already taken');
			setIsLoading(false);
			setUsername('');
			setPassword('');
		}
	};

	return (
		<div className='container'>
				<div className="row">
					<div className="col-6">
						<Heading>Créer un compte</Heading>
					</div>
					<div className="col-12">
						<form onSubmit={handleSubmit}>
							{error && <ErrorMessage message={error} />}
							{success && <SuccessMessage message={success} />}
							<div className='form-group'>
								<FormLabel>Username</FormLabel>
								<Input
									type="text"
									placeholder="username"
									size="lg"
									name="username"
									onChange={event => setUsername(event.currentTarget.value)}
								/>
							</div>
							<div className='form-group'>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? 'text' : 'password'}
										placeholder="*******"
										size="lg"
										name="password"
										onChange={event => setPassword(event.currentTarget.value)}
									/>
									<InputRightElement width="3rem" height="100%">
										<Button size="sm" onClick={handlePasswordVisibility}>
											{showPassword ? <ViewOffIcon /> : <ViewIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</div>
							<div className='form-group'>
								<FormLabel>Rôle</FormLabel>
								<Select onChange={event => setRole(event.currentTarget.value)}>
									<option>user</option>
									<option>admin</option>
								</Select>
							</div>
							<Button
								variantcolor="teal"
								variant="outline"
								type="submit"
								width="full"
								mt={3}
							>
								{isLoading ? (
									<CircularProgress
										isIndeterminate
										size="24px"
										color="teal"
									/>
								) : (
									'Valider'
								)}
							</Button>
						</form>
					</div>
			</div>
        </div>
	);
};
export default User;
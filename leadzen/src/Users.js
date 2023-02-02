import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	Heading,
	Text,
	Button,
	Box,
	Flex,
	Icon,
} from "@chakra-ui/react";
import "./Users.css";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});
	const [showDetails, setShowDetails] = useState(false);

	const fetchData = () => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setUsers(response.data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleViewDetails = (user) => {
		setSelectedUser(user);
		setShowDetails(!showDetails);
	};

	return (
		<div className="body-div">
			{users.length > 0 &&
				users.map((user, index) => (
					<div key={index}>
						<Card
							className="card"
							direction={{ base: "column", sm: "row" }}
							variant="elevated"
						>
							<CardBody>
								<Text>{user.company.name}</Text>
							</CardBody>
							<CardBody>
								<Heading size="sm"> contact </Heading>
								<Text>{user.phone}</Text>
							</CardBody>
							<CardBody>
								<Heading size="sm"> city </Heading>
								<Text>{user.address.city}</Text>
							</CardBody>
							<CardBody>
								<Heading size="sm"> state </Heading>
								<Text>{user.address.street}</Text>
							</CardBody>
							<Button
								variant="solid"
								colorScheme="red"
								alignSelf="center"
								style={{
									backgroundColor: "red",
									borderRadius: "20px",
									marginRight: "7px",
								}}
								className="btn"
								onClick={() => handleViewDetails(user)}
							>
								view details
							</Button>
						</Card>
						{showDetails && selectedUser.id === user.id && (
							<Flex
								direction="column"
								align="center"
								mt={8}
								p={8}
								bg="white"
								borderWidth="1px"
								rounded="lg"
							>
								<Heading size="lg">Additional Details</Heading>
								<Text>Name: {selectedUser.name}</Text>
								<Text>Email: {selectedUser.email}</Text>
								<Text>Website: {selectedUser.website}</Text>
								<Button
									mt={4}
									variantColor="red"
									onClick={() => setShowDetails(false)}
								>
									<Box as={Icon} name="close" /> Close
								</Button>
							</Flex>
						)}
					</div>
				))}
		</div>
	);
};

export default Users;

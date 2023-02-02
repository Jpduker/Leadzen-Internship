import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	Heading,
	Text,
	Button,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
import "./Users.css";

const Users = () => {
	const [users, setUsers] = useState([]);

	const { isOpen, onToggle } = useDisclosure();

	const fetchData = () => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setUsers(response.data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="body-div">
			{users.length > 0 &&
				users.map((user) => (
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
						>
							view details
						</Button>
						<Box
							className="additional-details"
							style={{ display: isOpen ? "block" : "none" }}
						>
							<Heading size="sm">email</Heading>
							<Text>{user.email}</Text>
							<Heading size="sm">website</Heading>
							<Text>{user.website}</Text>
						</Box>
					</Card>
				))}
		</div>
	);
};

export default Users;

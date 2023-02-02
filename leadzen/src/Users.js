import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Button,
	Flex,
	SimpleGrid,
	Stack,
	List,
} from "@chakra-ui/react";
import "./Users.css"

const Users = () => {
	const [users, setUsers] = useState([]);

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

						<Card className="card" direction={{ base: "column", sm: "row" }} variant="elevated" >
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
							<Button variant="solid" colorScheme="blue" alignSelf="center" className="btn-details">
								view details
							</Button>
						</Card>
					
				))}
            
		</div>
	);
};

export default Users;

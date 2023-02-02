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
								align="centre"
								mt={8}
								p={8}
								borderWidth="1px"
								rounded="lg"
                                backgroundColor="#d5dadd"
                                						>
								<Heading size="lg">Additional Details</Heading>
                                <Heading size="sm">Name</Heading>
                                <Text> {selectedUser.name}</Text>
								
								<Heading size="sm">Email
                               </Heading>
                               <Text> {selectedUser.email}</Text>

                               <Heading size="sm">Website
                               </Heading>
                               <Text> {selectedUser.website}</Text>


								<div className="btn-div">
                                <Button className="btn-close"

									mt={4}
									variantColor="red"
                                    style={{alignSelf:"centre"}}
									onClick={() => setShowDetails(false)}
								>
									<Box as={Icon} name="close" /> Close
								</Button>
                                </div>
								
							</Flex>
						)}
					</div>
				))}
		</div>
	);
};

export default Users;

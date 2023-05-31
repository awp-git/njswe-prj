import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Get all users
    res.json(users);
  } else if (req.method === "POST") {
    // Create a new user
    const { name, email } = req.body;
    const id = users.length + 1;
    const newUser: User = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// if we head to /api/users, we get a response with the user data, i dont really feel like going further with this as it would have no effect on the website itself as there is no reason for CRUD

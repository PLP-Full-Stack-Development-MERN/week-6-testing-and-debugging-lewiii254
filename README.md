## Bug Tracker 🐞
A simple bug-tracking application built with React, Tailwind CSS, and Express.js for managing and reporting bugs.

### 🚀 Features
- Report Bugs  – Users can submit bug reports with a title and description.
- View Bug List  – All submitted bugs are displayed in a structured list.
- Responsive UI – Styled with Tailwind CSS for a clean and modern look.
- REST API– Communicates with a backend Express.js server.

### Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Express.js, MongoDB (API Endpoint: http://localhost:5000/api/bugs)
- **HTTP Requests**: Axios
📦 Installation
Clone the repository

```sh
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-6-testing-and-debugging-lewiii254.git
cd mern-bug-tracker
```
**Install dependencies**

```bash
npm install
npm run dev
```
**Run the backend (Make sure Express.js server is running)**

```sh
cd backend
npm install
node run server.js
```
###🌟 Usage
- Open the app in your browser at http://localhost:5000 (default Vite URL).
- Enter a bug title and description in the form and click "Add Bug".
- Bugs will appear in the list dynamically.

### License
This project is open-source and available under the MIT License.
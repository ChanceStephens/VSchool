// Step 1: Set Up Your Project Directory
// mkdir my-fullstack-app
// cd my-fullstack-app

// Step 2: Initialize npm and Set Up the Server
// npm init -y

// Install Server Dependencies
// npm install express bcrypt dotenv express-jwt jsonwebtoken mongoose morgan

// Create server.js
// ---------------------- server.js ----------------------
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const { expressjwt } = require('express-jwt');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
    } else {
        console.log("Connected to MongoDB");
    }
});

// Routes
app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/main/issue', require('./routes/issueRouter'));
app.use('/api/main/comments', require('./routes/commentRouter'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status).send({ errMsg: "Unauthorized access." });
    } else {
        res.status(500).send({ errMsg: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ---------------------- .env ----------------------
// SECRET=your-secret-key
// PORT=9000
// MONGO_URI=your-mongo-uri

// ---------------------- Models ----------------------

// Create models directory and add User, Issue, Comment models

// ---------------------- models/User.js ----------------------
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    memberSince: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        return callback(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', userSchema);

// ---------------------- models/Issue.js ----------------------
const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    username: { type: String },
    createdAt: { type: Date, default: Date.now },
    likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Issue', issueSchema);

// ---------------------- models/Comment.js ----------------------
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    issue: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue', required: true },
    username: { type: String, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);

// ---------------------- Routes ----------------------

// Create routes directory and add authRouter, issueRouter, commentRouter

// ---------------------- routes/authRouter.js ----------------------
const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Signup route
authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (user) {
            res.status(403);
            return next(new Error('That username is already taken'));
        }
        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ token, user: savedUser.withoutPassword() });
        });
    });
});

// Login route
authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (!user) {
            res.status(403);
            return next(new Error('Username or Password is incorrect'));
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err || !isMatch) {
                res.status(403);
                return next(new Error('Username or Password is incorrect'));
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(200).send({ token, user: user.withoutPassword() });
        });
    });
});

module.exports = authRouter;

// ---------------------- routes/issueRouter.js ----------------------
const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

// Get all issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Get issues by user
issueRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Add new issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id;
    req.body.username = req.auth.username;
    const newIssue = new Issue(req.body);
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedIssue);
    });
});

// Delete issue by ID
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id }, (err, deletedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`);
    });
});

// Update issue by ID
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate({ _id: req.params.issueId, user: req.auth._id }, req.body, { new: true }, (err, updatedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(updatedIssue);
    });
});

// Upvote issue
issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { likedUsers: req.auth._id }, $pull: { dislikedUsers: req.auth._id } },
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedIssue);
        }
    );
});

// Downvote issue
issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { dislikedUsers: req.auth._id }, $pull: { likedUsers: req.auth._id } },
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedIssue);
        }
    );
});

module.exports = issueRouter;

// ---------------------- routes/commentRouter.js ----------------------
const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment');

// Get all comments
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(comments);
    });
});

// Post a new comment for a specific issue
commentRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id;
    req.body.issue = req.params.issueId;
    req.body.username = req.auth.username;
    const newComment = new Comment(req.body);
    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedComment);
    });
});

module.exports = commentRouter;

// Step 3: Set Up Client-Side

// Install Vite and Client Dependencies
// npm create vite@latest client -- --template react
// cd client
// npm install
// npm install axios moment react-router-dom

// ---------------------- vite.config.js ----------------------
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
        changeOrigin: true
      }
    }
  }
});

// ---------------------- package.json ----------------------
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.2",
    "moment": "^2.30.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0"
  }
}

// Step 4: Create React Components and Context

// Create context directory and add UserContext

// ---------------------- context/UserContext.jsx ----------------------
import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ''
    };

    const [userState, setUserState] = useState(initState);
    const [allIssues, setAllIssues] = useState([]);
    const [allComments, setAllComments] = useState([]);

    function signup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function login(credentials) {
        axios.post("/api/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
            issues: []
        });
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }));
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    function getUserIssues() {
        userAxios.get("/api/main/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }));
            })
            .catch(err => console.log(err));
    }

    function addIssue(newIssues) {
        userAxios.post("/api/main/issue", newIssues)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }));
            })
            .catch(err => console.log(err));
    }

    function getAllIssues() {
        userAxios.get('/api/main/issue')
            .then(res => setAllIssues(res.data))
            .catch(err => console.log(err));
    }

    function upvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/upvote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevUserState => {
                    return {
                        ...prevUserState,
                        issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                    }
                })
            })
            .catch(err => console.log(err));
    }

    function downvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/downvote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevUserState => {
                    return {
                        ...prevUserState,
                        issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                    }
                })
            })
            .catch(err => console.log(err));
    }

    function getAllComments() {
        userAxios.get('/api/main/comments')
            .then(res => setAllComments(res.data))
            .catch(err => console.log(err));
    }

    function addComment(id, comment) {
        userAxios.post(`/api/main/comments/${id}`, comment)
            .then(res => {
                setAllComments(prevAllComments => [
                    ...prevAllComments,
                    res.data
                ]);
            })
            .catch(err => {
                console.error('Error adding comment:', err);
            });
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                allIssues,
                getAllComments,
                allComments,
                addComment,
                upvoteIssue,
                downvoteIssue,
            }}>
            {props.children}
        </UserContext.Provider>
    );
}

// Step 5: Create React Components

// ---------------------- components/AuthForm.jsx ----------------------
import React from 'react';

export default function AuthForm(props) {
    const { handleChange, handleSubmit, btnText, errMsg, inputs: { username, password } } = props;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{btnText}</button>
            {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
        </form>
    );
}

// ---------------------- components/Auth.jsx ----------------------
import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm.jsx';
import { UserContext } from '../context/UserContext.jsx';
import image21 from '../assets/21.jpg';

const initInputs = { username: "", password: "" };

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs);
    const [toggle, setToggle] = useState(false);

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    }

    function handleSignup(e) {
        e.preventDefault();
        signup(inputs);
    }

    function handleLogin(e) {
        e.preventDefault();
        login(inputs);
    }

    function toggleForm() {
        setToggle(prev => !prev);
        resetAuthErr();
    }

    return (
        <div className="auth-container-page">
            <div className="auth-container">
                <img src={image21} alt="Auth Image" />
                {!toggle ? (
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleSignup}
                            inputs={inputs}
                            btnText="Sign up"
                            errMsg={errMsg}
                        />
                        <p onClick={toggleForm}>Already a member?</p>
                    </>
                ) : (
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg={errMsg}
                        />
                        <p onClick={toggleForm}>Not a member?</p>
                    </>
                )}
            </div>
        </div>
    );
}

// ---------------------- components/Navbar.jsx ----------------------
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { logout } = props;

    return (
        <div className="navbar">
            <Link to="/profile">
                <button className="navbar-buttons">Profile</button>
            </Link>
            <Link to="/public">
                <button className="navbar-buttons">Public</button>
            </Link>
            <button className="navbar-buttons" onClick={logout}>Logout</button>
        </div>
    );
}

// ---------------------- components/Profile.jsx ----------------------
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import IssueForm from './IssueForm.jsx';
import IssueList from './IssueList.jsx';

export default function Profile() {
    const { user: { username }, issues, getUserIssues, getAllComments } = useContext(UserContext);

    useEffect(() => {
        getUserIssues();
        getAllComments();
    }, []);

    return (
        <div className="profile">
            <h1>Welcome {username}!</h1>
            <h3>Add A Political Issue</h3>
            <IssueForm />
            <h3>Your Posted Political Issues</h3>
            <IssueList issues={issues} />
        </div>
    );
}

// ---------------------- components/Public.jsx ----------------------
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import IssueList from './IssueList.jsx';
import crowd from '../assets/crowd.png';

export default function Public() {
    const { getAllIssues, allIssues, getAllComments } = useContext(UserContext);

    useEffect(() => {
        getAllIssues();
        getAllComments();
    }, []);

    return (
        <div className="public">
            <h1>Today's Biggest Political Issues</h1>
            <IssueList issues={allIssues} />
            <img src={crowd} alt="Crowd"/>
        </div>
    );
}

// ---------------------- components/IssueForm.jsx ----------------------
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
};

export default function IssueForm() {
    const [inputs, setInputs] = useState(initInputs);
    const { addIssue } = useContext(UserContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addIssue(inputs);
        setInputs(initInputs);
    }

    const { title, description, imgUrl } = inputs;

    return (
        <div className="issue-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="text"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <button>Add an Issue</button>
            </form>
        </div>
    );
}

// ---------------------- components/IssueList.jsx ----------------------
import React from 'react';
import Issue from './Issue.jsx';

export default function IssueList(props) {
    const { issues } = props;

    const sortedIssues = [...issues].sort((a, b) => b.likedUsers.length - a.likedUsers.length);

    return (
        <div className="issue-list">
            {sortedIssues.map(issue => <Issue {...issue} key={issue._id} />)}
        </div>
    );
}

// ---------------------- components/Issue.jsx ----------------------
import { useContext } from 'react';
import moment from 'moment';
import CommentContainer from './CommentContainer';
import { UserContext } from '../context/UserContext';

export default function Issue(props) {
    const { title, description, imgUrl, _id, username, createdAt, likedUsers, dislikedUsers } = props;
    const timeStamp = moment(createdAt).fromNow();
    const { upvoteIssue, downvoteIssue } = useContext(UserContext);

    return (
        <div className="issue">
            <h1>{title}</h1>
            <img src={imgUrl} alt="Issue image"/>
            <h3>{description}</h3>
            <div className="votes">
                <div>
                    <p>{likedUsers.length} Users agree with this.</p>
                    <button onClick={() => upvoteIssue(_id)}>Agree?</button>
                </div>
                <div>
                    <p>{dislikedUsers.length} Users oppose this.</p>
                    <button onClick={() => downvoteIssue(_id)}>Disagree?</button>
                </div>
            </div>
            <h3>Posted by User:</h3>
            <h3>{username}</h3>
            <h2>{timeStamp}</h2>
            <CommentContainer issueId={_id} />
        </div>
    );
}

// ---------------------- components/CommentContainer.jsx ----------------------
import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentContainer(props) {
    const { issueId } = props;
    const [isHidden, setIsHidden] = useState(true);

    function toggleView() {
        setIsHidden(!isHidden);
    }

    return (
        <div>
            <CommentForm issueId={issueId} />
            <button onClick={toggleView}>
                {isHidden ? 'Show Comments' : 'Hide Comments'}
            </button>
            {!isHidden && <CommentList issueId={issueId} />}
        </div>
    );
}

export default CommentContainer;

// ---------------------- components/CommentForm.jsx ----------------------
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function CommentForm(props) {
    const { addComment } = useContext(UserContext);
    const { issueId } = props;

    const [formData, setFormData] = useState({ text: '' });
    const [comments, setComments] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addComment(issueId, formData);
        setComments(prevComments => [...prevComments, formData.text]);
        setFormData({ text: '' });
    }

    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Comment"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                />
                <button>Leave Comment</button>
            </form>
            {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
            ))}
        </div>
    );
}

// ---------------------- components/CommentList.jsx ----------------------
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

export default function CommentList(props) {
    const { issueId } = props;
    const { allComments } = useContext(UserContext);

    const filteredComments = allComments.filter(comment => comment.issue === issueId);
    const commentElements = filteredComments.map(comment => (
        <div key={comment._id}>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
        </div>
    ));

    return (
        <div>
            {commentElements}
        </div>
    );
}

// Step 6: Set Up Main Application Entry Point

// ---------------------- main.jsx ----------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

// ---------------------- App.jsx ----------------------
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Auth from './components/Auth.jsx';
import Profile from './components/Profile.jsx';
import Public from './components/Public.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { UserContext } from './context/UserContext.jsx';

export default function App() {
    const { token, logout } = useContext(UserContext);

    return (
        <div className="app">
            {token && <Navbar logout={logout} />}
            <Routes>
                <Route path="/" element={token ? <Navigate to="/profile" /> : <Auth />} />
                <Route path="/profile" element={<ProtectedRoute token={token} redirectTo="/"><Profile /></ProtectedRoute>} />
                <Route path="/public" element={<ProtectedRoute token={token} redirectTo="/"><Public /></ProtectedRoute>} />
            </Routes>
        </div>
    );
}

// ---------------------- ProtectedRoute.jsx ----------------------
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const { token, redirectTo, children } = props;
    return token ? children : <Navigate to={redirectTo} />;
}

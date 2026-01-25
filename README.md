# SkillPrep - Multi-Domain Skill Evaluation Platform

## Overview
SkillPrep is a comprehensive skill evaluation platform that supports multiple academic domains including Computer Science, Management, Commerce, and Arts. Unlike traditional coding-only platforms, SkillPrep provides domain-specific problem evaluation using customized assessment engines.

## Features
- 🎓 **Multi-Domain Support**: CS, Management, Commerce, Arts
- 🔐 **Secure Authentication**: JWT-based user authentication
- 📊 **Real-time Leaderboard**: Live ranking and performance tracking
- 🏷️ **Problem Tagging**: Organized problem categorization
- 🎯 **Personalized Recommendations**: AI-driven problem suggestions
- ⚡ **Optimized Performance**: Uses HashMaps, Heaps, Graphs, and Sorting algorithms

## Tech Stack
- **Frontend**: React.js
- **Backend**: Spring Boot (Java)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Domain-Specific Evaluation Engines
- **Computer Science**: Test case execution
- **Management**: Case study scoring
- **Commerce**: Formula-based validation
- **Arts**: Custom rubric evaluation

## Project Structure
```
skillprep/
├── frontend/          # React application
├── backend/           # Spring Boot application
├── docs/              # Documentation
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- Java 17+
- Maven
- MongoDB

### Installation

#### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Architecture Highlights
- **Modular Design**: Easy to add new domains and evaluation engines
- **Scalable**: Designed for horizontal scaling
- **Performance Optimized**: Efficient data structures for search, ranking, and recommendations

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Authors
- SkillPrep Development Team

## Acknowledgments
- Built for educational skill assessment
- Designed to support diverse academic domains

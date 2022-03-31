import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from "./routes/Users";
import SingleUser from "./routes/SingleUser";
import SingleRepository from './routes/SingleRepository';

export default function RoutesController() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<main><span className="fs20">您所在位置：<span className="strong">首頁</span></span></main>} />
                <Route path="users" element={<Users />} />
                <Route path="users/:userName/repos/" element={<SingleUser/>} />
                <Route path="users/:userName/repos/:reposName/" element={<SingleRepository/>} />
            </Routes>
        </Router>
    );
}
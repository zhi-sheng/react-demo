import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';  
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


export default function SingleRepository() {
  const params = useParams();
  const [repoData, setRepoData] = useState();
  useEffect(() => {
    
    fetch("https://api.github.com/repos/" + params.userName + "/" + params.reposName)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const list = 
            <a href={"https://github.com/" + params.userName + "/" + params.reposName} key={result.id} target="_blank" rel="noreferrer">
            <div className="single-repos">
              <p><span className="strong">repository.full_name：</span>{result.full_name}</p>
              <p><span className="strong">repository.description：</span>{result.description ? result.description:"null"}</p>
              <p><span className="strong">repository.stargazers_count：</span>{result.stargazers_count}</p>
            </div>
            </a>;

          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  },[]);

    
  return (
    <main>
      <span className="fs20">您所在位置：<span className="strong">Single-Repository</span></span>
      <p className="fs20 strong">username: {params.userName}</p>
      <p className="fs20 strong">repository name: {params.reposName}</p>
      <Link to={"/users/" + params.userName + "/repos"}>
      <div className="backto"><span>↼</span><br/>回到<br/>repository<br/>列表</div>
      </Link>
      <div className="repos-showArea">{repoData}</div>
    </main>
  );
}
